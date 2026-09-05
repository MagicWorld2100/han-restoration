(function () {
  'use strict';
  const E=window.HanEngine,$=id=>document.getElementById(id),KEY='han-restoration-v1';
  const url=new URL(location.href),requestedSeed=url.searchParams.get('seed');
  let state=E.create(requestedSeed||207),selected=null,filter='内治',pending=false,storageAvailable=true,toastTimer;
  try {
    const saved=JSON.parse(localStorage.getItem(KEY)||'null');
    if(saved&&saved.version===E.VERSION&&(!requestedSeed||Number(requestedSeed)===saved.seed)) {
      const restored=E.replay(saved.seed,saved.history);
      if(restored){state=restored;pending=!!saved.pending&&state.log.length>0;}
    }
  }catch(_){storageAvailable=false;}
  const escape=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  function save(){try{localStorage.setItem(KEY,JSON.stringify({version:E.VERSION,seed:state.seed,history:state.history,pending}));storageAvailable=true;}catch(_){storageAvailable=false;}}
  function toast(message){$('toast').textContent=message;$('toast').classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('toast').classList.remove('show'),2800);}
  function openModal(title,html){$('modal-title').textContent=title;$('modal-body').innerHTML=html;if(!$('modal').open)$('modal').showModal();}
  function valueDelta(delta,cost=0){const values={...delta};if(cost)values.grain=(values.grain||0)-cost;return Object.entries(values).filter(([,v])=>v).map(([k,v])=>E.STATS[k][0]+' '+(v>0?'+':'−')+Math.abs(v)).join(' · ');}
  function statHTML(k){const [name,max]=E.STATS[k],warning=(k==='grain'&&state[k]<30)||(k==='people'&&state[k]<35)||(k==='trust'&&state[k]<30)||(k==='army'&&state[k]<25);return '<div class="stat '+(warning?'warn':'')+'"><span class="stat-heading">'+name+'</span><strong>'+state[k]+'</strong><small>/ '+max+'</small><div class="stat-bar"><i style="width:'+state[k]/max*100+'%"></i></div></div>';}
  function renderMap(){
    const fresh=state.log.length?state.log.at(-1).name:'';
    $('map-nodes').innerHTML=E.REGIONS.map(r=>{const owned=state.land.includes(r.id);return '<g class="map-node '+(owned?'owned':'')+' '+(fresh==='进取'+r.short?'fresh':'')+'" transform="translate('+r.x+' '+r.y+')"><circle class="node-ring" r="11"/><circle class="node-dot" r="4"/><text x="13" y="5">'+r.short+'</text><text class="node-sub" x="13" y="23">'+(owned?'稳定 '+Math.round(state.stability[r.id]):r.id==='wu'?'吴方':r.id==='jing'?'吴方控制':r.id==='yi'?'刘璋治下':'北方势力')+'</text></g>';}).join('');
    document.querySelectorAll('[data-area]').forEach(el=>{const owned=state.land.includes(el.dataset.area);el.style.fill=owned?'#bea27023':'url(#mapshade)';el.style.stroke=owned?'#d3b27a66':'#74908738';});
    $('year').textContent=state.year;
    $('identity').textContent=state.successor?'继任团队 · 志业相承':'诸葛亮 · '+(state.year-181)+' 岁';
    $('map-status').textContent='公元 '+state.year+' 年 · '+(state.over?state.over.title:state.chapter<4?'天下未定':'局号 '+state.seed);
    $('land-count').textContent=state.land.length+' / 7 地';
    $('land-dots').innerHTML=E.REGIONS.map((_,i)=>'<i class="'+(i<state.land.length?'filled':'')+'"></i>').join('');
    $('game-title').innerHTML=state.successor?'人有尽时，<br>志可相承。':state.chapter>=4?'以有限之力，<br>问天下之局。':'没有凭空的<br>百万雄兵。';
  }
  function renderStats(){
    $('stats').innerHTML=['grain','people','army','trust'].map(statHTML).join('');
    const income=E.production({...state,harvest:1}),cost=E.upkeep(state),net=income-cost;
    $('balance-value').textContent=(net>=0?'+':'−')+Math.abs(net);$('balance-value').className=net<0?'negative':'';
    $('balance-detail').textContent='平年收入 '+income+' − 开支 '+cost+'；政策、天候会改变实际结算';
    $('extra-stats').innerHTML=['elite','wu','logistics','institution','fatigue'].map(k=>'<div class="extra-stat"><span>'+E.STATS[k][0]+(k==='fatigue'?' · 越低越好':'')+'</span><strong>'+state[k]+' / 100</strong></div>').join('');
    $('stability-list').innerHTML=state.land.map(id=>'<div class="extra-stat"><span>'+E.REGIONS.find(r=>r.id===id).name+'稳定</span><strong>'+Math.round(state.stability[id])+'</strong></div>').join('');
    $('objectives').innerHTML=E.victoryConditions(state).map(c=>'<li class="'+(c.ok?'done':'')+'">'+c.name+'</li>').join('');
    $('consolidation').textContent=state.consolidated?'稳定检验 '+Math.min(2,state.consolidated)+' / 2 轮':'所有条件需连续维持两轮';
    $('journal-count').textContent=state.log.length;
    $('save-note').textContent=storageAvailable?'局号 '+state.seed+' · 已在此浏览器自动存档':'局号 '+state.seed+' · 浏览器未允许保存，请保留此页面';
  }
  function renderChoices(){
    const options=E.options(state).filter(o=>state.chapter<4||(filter==='战役'?o.kind==='战役':filter==='外交'?o.kind==='外交':o.kind!=='战役'&&o.kind!=='外交'));
    if(!options.length){$('choices').innerHTML='<p class="help-copy">当前没有此类议案。所有疆域已控制后，需要继续治理与维持稳定。</p>';return;}
    $('choices').innerHTML=options.map((o,i)=>'<button class="choice '+(selected===o.id?'selected':'')+'" data-choice="'+o.id+'" aria-pressed="'+(selected===o.id)+'" '+(o.reasons.length?'disabled':'')+'><span>'+String.fromCharCode(65+i)+'</span><span><span class="choice-title">'+o.name+'</span><span class="choice-desc">'+o.desc+'</span>'+(o.reasons.length?'<span class="choice-lock">尚缺：'+o.reasons.join('；')+'</span>':'')+'</span><span class="choice-cost">'+(o.cost?'粮 −'+o.cost:state.chapter<4?'查看代价 →':'查看影响 →')+'</span></button>').join('');
    document.querySelectorAll('[data-choice]').forEach(btn=>btn.addEventListener('click',()=>{
      selected=btn.dataset.choice;renderChoices();renderSelection();
    }));
  }
  function renderSelection(){
    const option=E.options(state).find(o=>o.id===selected);
    $('selection').hidden=!option||pending||!!state.over;
    if(!option)return;
    let text=valueDelta(option.delta,option.cost);
    if(option.campaign){const c=option.campaign;text='粮秣 −'+c.region.cost+' · 本局胜算 '+c.chance+'%（进攻 '+c.power+' / 防御 '+c.defense+'）'+(c.ally?' · 吴盟牵制 +8':'')+'。胜败均有伤亡与役负；成功后还须治理。';}
    else if(option.id==='settle')text='粮秣 −20 · 政务支持 −5 · 互信 −3 · 制度 +3。共需两轮满足条件的谈判，地方权益保障是共同政制的代价。';
    else if(option.id==='govern')text+=' · 各地稳定 +18';
    if(state.chapter>=4)text+='。之后还会结算两年的粮税、开支与局势变化。';
    $('selection-detail').textContent=text;
  }
  function deltaHTML(entry){return '<div class="deltas">'+entry.delta.map(d=>'<span class="'+((d.value>0&&d.key!=='fatigue')||(d.value<0&&d.key==='fatigue')?'positive':'negative')+'">'+d.name+' '+(d.value>0?'+':'−')+Math.abs(d.value)+'</span>').join('')+'</div>';}
  function render(){
    renderMap();renderStats();
    const scene=E.situation(state);$('chapter-label').textContent=pending?'军议已决 · 后果回报':scene.label;
    $('turn-label').textContent='第 '+(state.turn+(pending||state.over?0:1))+' 次军议';
    $('decision-title').textContent=pending?state.log.at(-1).name:scene.title;
    $('decision-text').textContent=pending?state.log.at(-1).year+' → '+state.log.at(-1).toYear+' 年。议案开始影响你的政权。':scene.text;
    $('council-quote').hidden=pending||!scene.quote||!!state.over;
    if(scene.quote)$('council-quote').innerHTML=escape(scene.quote)+'<small>'+escape(scene.speaker)+'</small>';
    $('filters').hidden=pending||state.chapter<4||!!state.over;
    $('choices').hidden=pending||!!state.over;
    $('result').hidden=!pending;
    $('end-actions').hidden=!state.over||pending;
    if(pending){const entry=state.log.at(-1);$('result').innerHTML='<h3>这一步，改变了什么</h3>'+entry.report.map(p=>'<p>'+escape(p)+'</p>').join('')+deltaHTML(entry)+'<button class="primary" id="continue-button">'+(state.over?'查看终局':'进入下一次军议')+' <span aria-hidden="true">→</span></button>';$('continue-button').addEventListener('click',()=>{pending=false;selected=null;save();render();$('decision-title').scrollIntoView({block:'start',behavior:'smooth'});});}
    else renderChoices();
    renderSelection();
  }
  $('confirm-button').addEventListener('click',()=>{
    if(!selected||pending)return;
    const r=E.step(state,selected);
    if(!r.ok){toast(r.error);return;}
    state=r.state;pending=true;selected=null;save();render();
    $('decision-title').scrollIntoView({block:'start',behavior:'smooth'});
  });
  document.querySelectorAll('[data-filter]').forEach(btn=>btn.addEventListener('click',()=>{
    filter=btn.dataset.filter;selected=null;document.querySelectorAll('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b===btn)));renderChoices();renderSelection();
  }));
  $('details-button').addEventListener('click',()=>{$('details').hidden=!$('details').hidden;$('details-button').innerHTML=$('details').hidden?'展开详情 ＋':'收起详情 −';$('details-button').setAttribute('aria-expanded',String(!$('details').hidden));});
  function rules(){openModal('先读懂这张粮册','<p>你从 207 年进入刘备集团。四次开局军议后，每采纳一项主要议案，推进两年。每局约 5–10 分钟；相同局号、相同选择会得到相同结果。</p><h3>你能决定什么</h3><p>你选择的是需要军政合作才能实施的方案。民望代表基层配合，政务支持代表官吏与地方网络的执行能力；它们过低会拖累征收或使战役无法发动。</p><ul><li>粮税取决于民力、地盘、地方稳定、运输与天候。常备军越大，长期粮食支出越高。</li><li>进军要有相邻路线、足够粮秣、军备与运输。胜算是游戏公式，既非历史概率，也不保证胜利。</li><li>孙刘互信低于 23 时，吴地尚未纳入控制的情况下，荆州据点可能失守。向北扩张越多，吴方越担忧。</li><li>役负超过 65 会持续损耗民力与民望。清查税源可筹粮，但政务支持低于 25 会使粮税按七成征收。</li><li>234 年检查制度传承。达到 55，继任团队接手；否则事业因交接失败而中断。这是设定的时间边界，不是穿越后的寿命预测。</li></ul><h3>怎样才算统一</h3><p>控制七个战略区；各地稳定至少 60、平均至少 75、民力至少 45、民望至少 60、制度至少 65、政务支持至少 45、存粮至少 25、役负至多 60；连续维持两轮。北方控制后，可与吴谈判两轮建立共同军政与税制，也可继续战争。</p><p>268 年结束沙盘。民力低于 15、民望低于 10、军备低于 5，会使政权提前崩解。</p><button class="secondary" id="rules-journal">查看我的军议记录</button>');$('rules-journal').addEventListener('click',journal);}
  function sources(){openModal('史料与模型边界','<p>开局参考<a href="https://zh.wikisource.org/wiki/三國志/卷35" target="_blank" rel="noopener noreferrer">《三国志·诸葛亮传》</a>与<a href="https://zh.wikisource.org/wiki/隆中對" target="_blank" rel="noopener noreferrer">《隆中对》</a>。联盟、荆益战略、内政治理与补给约束来自相关史事；军议对话、选项、数值及政策效果均为游戏创作。</p><p>玩家干预之后进入架空推演。没有认定赤壁、荆州易手或某人的身故一定按原历史发生。234 年作为统一的交接考验节点，268 年作为本局时限。</p><p>地图是战略关系示意。荆州代表己方据点；中原概括北方主要地区；吴地合并江东、江淮及东吴控制的南方区域。它不是完整地理或历史疆界。</p><p>民力是有效生产与动员能力，非人口数。指标和战役胜算没有经过史学定量校准。通关只证明你满足了这一模型，不能证明真实历史中必能完成统一，也不能证明存在唯一的社会发展规律。</p><p>所有判断由离线规则计算，无在线 AI 裁判。你可以通过同一局号重玩比较策略。</p>');}
  function journal(){openModal('军议记录 · '+state.log.length+' 次',state.log.length?state.log.slice().reverse().map(e=>'<article class="journal-entry"><h3>'+e.year+' 年 · '+escape(e.name)+'</h3>'+e.report.map(p=>'<p>'+escape(p)+'</p>').join('')+deltaHTML(e)+'</article>').join(''):'<p>尚未采纳议案。第一笔记录，从你的选择开始。</p>');}
  function share(){
    const text=E.reportText(state);
    openModal('把这局交给朋友','<p>复制战报发到朋友圈，让朋友用同一局号挑战。也可以先截图保留地图与国力。</p><textarea id="share-text" aria-label="可复制的战报" readonly></textarea><button id="copy-report" class="primary">复制战报</button><button id="download-report" class="secondary">下载战报图片</button><p class="help-copy">局号 '+state.seed+'。分享战报不包含你的存档；朋友从相同局号的 207 年开始。</p>');
    $('share-text').value=text;
    $('copy-report').addEventListener('click',async()=>{
      try{await navigator.clipboard.writeText(text);toast('战报已复制');}
      catch(_){$('share-text').focus();$('share-text').select();toast('已选中战报，请长按或按 Ctrl+C 复制');}
    });
    $('download-report').addEventListener('click',downloadReport);
  }
  function downloadReport(){
    const canvas=document.createElement('canvas');canvas.width=1080;canvas.height=1440;const ctx=canvas.getContext('2d');
    ctx.fillStyle='#163134';ctx.fillRect(0,0,1080,1440);ctx.strokeStyle='#567064';ctx.lineWidth=1;for(let i=60;i<1080;i+=60){ctx.beginPath();ctx.moveTo(i,0);ctx.lineTo(i,1440);ctx.stroke();}ctx.fillStyle='#163134dd';ctx.fillRect(0,0,1080,1440);
    ctx.fillStyle='#d3b27a';ctx.font='32px serif';ctx.fillText('朋友圈共创沙盘 · 局号 '+state.seed,85,110);ctx.font='94px serif';ctx.fillText('再出隆中',80,270);
    ctx.fillStyle='#e6eadd';ctx.font='45px serif';ctx.fillText(state.year+' 年 · '+(state.over?state.over.title:'天下仍未定'),85,395);
    ctx.fillStyle='#a8b9af';ctx.font='28px sans-serif';ctx.fillText(state.successor?'个人会离场，事业已交给后来人。':'穿越成诸葛亮，你会怎样经略天下？',85,467);
    [['疆域',state.land.length+' / 7'],['民望',state.trust],['民力',state.people],['役负',state.fatigue],['粮秣',state.grain],['制度传承',state.institution]].forEach(([name,value],i)=>{const x=85+(i%2)*470,y=600+Math.floor(i/2)*178;ctx.fillStyle='#a8b9af';ctx.font='28px sans-serif';ctx.fillText(name,x,y);ctx.fillStyle='#d3b27a';ctx.font='67px serif';ctx.fillText(String(value),x,y+83);});
    ctx.strokeStyle='#d3b27a77';ctx.beginPath();ctx.moveTo(85,1120);ctx.lineTo(995,1120);ctx.stroke();ctx.fillStyle='#e6eadd';ctx.font='32px serif';ctx.fillText('同一个开局，你能走到哪一年？',85,1210);ctx.fillStyle='#a8b9af';ctx.font='23px sans-serif';ctx.fillText('历史策略游戏 · 结果仅代表沙盘推演',85,1300);
    canvas.toBlob(blob=>{if(!blob){toast('图片生成失败，请直接截图');return;}const link=document.createElement('a'),href=URL.createObjectURL(blob);link.href=href;link.download='再出隆中-'+state.seed+'-'+state.year+'.png';link.click();setTimeout(()=>URL.revokeObjectURL(href),10000);toast('战报图片已生成');},'image/png');
  }
  function restart(){openModal('重回隆中','<p>重新开始局号 '+state.seed+'。这会替换本浏览器中的当前进度；其他文件不会受到影响。</p><button id="restart-confirm" class="primary">确认重新开始</button>');$('restart-confirm').addEventListener('click',()=>{state=E.create(state.seed);pending=false;selected=null;filter='内治';document.querySelectorAll('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.filter===filter)));save();$('modal').close();render();window.scrollTo({top:0,behavior:'smooth'});});}
  $('rules-button').addEventListener('click',rules);$('sources-button').addEventListener('click',sources);$('journal-button').addEventListener('click',journal);
  $('share-button').addEventListener('click',share);$('end-share').addEventListener('click',share);$('restart-button').addEventListener('click',restart);$('restart-small').addEventListener('click',restart);
  $('modal-close').addEventListener('click',()=>$('modal').close());$('modal').addEventListener('click',e=>{if(e.target===$('modal')){const b=$('modal').getBoundingClientRect();if(e.clientX<b.left||e.clientX>b.right||e.clientY<b.top||e.clientY>b.bottom)$('modal').close();}});
  save();render();
})();
