import { World } from './world.js';
import { E,createScenario,replayScenario,campaignSource,factionAt,serialize,restore } from './game.mjs';
import { Soundscape } from './audio.mjs';

const $=id=>document.getElementById(id),KEY='han-restoration-3d-v2';
// Bind before WebGL initialization so the fallback remains usable if World throws.
$('reload-game').addEventListener('click',()=>location.reload());
const BUILD_VERSION=typeof __HAN_VERSION__==='string'?__HAN_VERSION__:'development';
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const names={jing:'荆州',yi:'成都',han:'汉中',long:'陇右',guan:'长安',north:'中原',wu:'建业'};
const descriptions={jing:'南北之交，东西之枢。它连接荆襄与巴蜀，也处在孙刘两家的利益交界。',yi:'成都平原提供稳定后方；把户籍、田土与地方合作接起来，才有持续向北的力量。',han:'秦岭与巴山之间的门户。山路并不会因为你知道历史，就多运一车粮食。',long:'陇右连接关中与西北。跨越山地的补给，决定一次胜仗能否变成长期控制。',guan:'关中盆地是进入中原的重要基地。军队可以过关，行政与粮税也需要跟进。',north:'此区概括中原与河北等北方主要地区。夺取政治与人口中心，会改变其他势力的判断。',wu:'此区概括江东及吴方主要控制区。共同敌人消失后，联盟需要新的利益安排。'};
let world,state=createScenario('tutorial'),mode='tutorial',started=false,busy=false,selectedCity=null,planned=null,selectedPolicy=null,saved=null,storageAvailable=true,toastTimer,preferredQuality=null,invalidSave=null,recoveryBackup=null,cinematicsEnabled=true;
const sound=new Soundscape(toast,updateAudioUI);
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
try{const raw=localStorage.getItem(KEY);saved=restore(raw);if(raw&&!saved)invalidSave=raw;recoveryBackup=invalidSave||localStorage.getItem(KEY+'-recovery');preferredQuality=localStorage.getItem(KEY+'-quality');}catch(_){storageAvailable=false;}
try{cinematicsEnabled=localStorage.getItem(KEY+'-cinematics')!=='off';}catch(_){}
function toast(text){$('toast').textContent=text;$('toast').classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('toast').classList.remove('visible'),3200);}
function save(){saved={mode,state};try{if(invalidSave){localStorage.setItem(KEY+'-recovery',invalidSave);recoveryBackup=invalidSave;invalidSave=null;}localStorage.setItem(KEY,serialize(mode,state));storageAvailable=true;}catch(_){storageAvailable=false;}updateSave();}
function updateSave(){$('save-state').textContent=storageAvailable?'局号 '+state.seed+' · 进度已保存':'本地存档未成功，请从菜单导出进度';}
function dialog(title,body,kicker='丞相府 · 军议'){$('dialog-title').textContent=title;$('dialog-kicker').textContent=kicker;$('dialog-content').innerHTML=body;if(!$('dialog').open)$('dialog').showModal();if(world)world.pausedScene=true;}
function closeDialog(){$('dialog').close();selectedPolicy=null;if(world)world.pausedScene=!$('report-panel').hidden;}
function gate(){if(busy){toast('军队正在行进，待本次军情结算后再下令。');return false;}return true;}
function currentOptions(){return E.options(state);}
function resourceBar(){
  $('resource-bar').innerHTML=['grain','army','people','logistics','wu','institution'].map((k,i)=>'<div class="resource-item '+(i===5?'optional ':'')+((k==='grain'&&state[k]<30)||(k==='people'&&state[k]<30)||(k==='wu'&&state[k]<30)?'warn':'')+'"><span>'+({grain:'粮秣',army:'军备',people:'民力',logistics:'运输',wu:'吴盟',institution:'传承'}[k])+'</span><strong data-stat="'+k+'">'+state[k]+'</strong><span class="resource-unit">'+(k==='grain'?'/ 240':'/ 100')+'</span></div>').join('');
}
function refresh(){
  resourceBar();$('game-year').textContent=state.year;$('mode-label').textContent=mode==='tutorial'?'北伐教学 · 预设开局':state.successor?'正式远略 · 继任团队':'正式远略 · 诸葛亮';$('territory-count').textContent=state.land.length+' / 7';$('journal-count').textContent=state.history.length+' 次决策';$('weather-label').textContent='天候：'+state.weather;updateSave();
  let title='山河未定',goal='点选城池查看军情，或从下方军议推进国策。';
  if(state.chapter<4){title=['初出隆中','江东结盟','荆州生计','入蜀治政'][state.chapter];goal='你需要先争取授权与合作。打开「军议」，决定这一程如何起步。';}
  else if(mode==='tutorial'&&state.turn===0){title='兵出汉中';goal=selectedCity==='han'?'点击「选择陇右为目标」，查看路线与军需。':'先点选汉中，再规划一条通往陇右的进军路线。';}
  else if(mode==='tutorial'&&state.land.includes('long')&&state.stability.long<60){title='得地之后';goal='陇右尚未稳定。进入「内治」，安抚地方，让驻军与行政站稳脚跟。';}
  else if(mode==='tutorial'&&state.land.includes('long')&&state.stability.long>=60){title='一役已成，远略方始';goal='你已完成出征与治理教学。可以继续此局，或从菜单开启正式 207 年远略。';}
  else if(state.land.length===7){title='疆域已合，政令待行';goal='维持粮秣、民力和地方稳定，连续两轮达到统一条件。';}
  else if(state.successor){title='薪火相承';goal='政务已交到继任者手中。你经营的制度，继续决定这片山河。';}
  if(state.over){title=state.over.title;goal=state.over.text;}
  $('chapter-title').textContent=title;$('chapter-goal').textContent=goal;
  const alerts=[];if(state.grain<30)alerts.push('存粮偏低，先检查军队开支');if(state.wu<32&&!state.land.includes('wu'))alerts.push('吴盟偏弱，荆州面临风险');if(state.year>=228&&state.year<234&&state.institution<55)alerts.push('234 年交接前，传承须达到 55');
  if(!storageAvailable)alerts.unshift('无法自动存档：请从菜单导出进度，再关闭页面');
  $('condition-alert').hidden=!alerts.length;$('condition-alert').textContent=alerts.join(' · ');
  world.updateState(state);document.querySelectorAll('[data-command]').forEach(b=>b.disabled=busy||!!state.over);
}
function start(nextMode,resumeState=null,seed=new URL(location.href).searchParams.get('seed')||207){
  if(!gate())return;mode=nextMode;state=resumeState||createScenario(mode,mode==='tutorial'?207:seed);started=true;selectedCity=null;planned=null;$('cover').hidden=true;document.body.classList.remove('is-landing');$('game-hud').hidden=false;$('resource-bar').hidden=false;$('inspector').hidden=true;$('report-panel').hidden=true;closeDialog();world.clearRoute();world.select(null);world.home();save();refresh();
  if(mode==='tutorial'&&state.turn===0){selectCity('han',true);toast('教学：选择陇右为目标，先看行军计划。');}
  else if(state.chapter<4)openPolicies('council');
}
function cover(){if(!gate())return;started=false;$('cover').hidden=false;document.body.classList.add('is-landing');$('game-hud').hidden=true;$('resource-bar').hidden=true;$('inspector').hidden=true;$('report-panel').hidden=true;closeDialog();world.clearRoute();world.showcase();$('resume-button').hidden=!saved;}
function statsHTML(items){return '<div class="city-stats">'+items.map(([n,v])=>'<div><span>'+n+'</span><strong>'+v+'</strong></div>').join('')+'</div>';}
function selectCity(id,focus=true){
  if(!started||!gate())return;selectedCity=id;planned=null;world.clearRoute();world.select(id,focus);$('report-panel').hidden=true;world.pausedScene=false;$('inspector').hidden=false;$('inspector-title').textContent=names[id];
  const owned=state.land.includes(id),region=E.REGIONS.find(r=>r.id===id),option=currentOptions().find(o=>o.id==='campaign:'+id);
  $('inspector-faction').textContent=owned?'汉境 · 可用据点':id==='wu'?'吴方 · 独立利益':'未控制 · 战略目标';$('inspector-subtitle').textContent=region.name+' · '+(owned?'粮道与政务节点':'尚未纳入共同军政');
  let html=owned?statsHTML([['地方稳定',Math.round(state.stability[id])],['可用军备',state.army],['运输能力',state.logistics],['民望',state.trust]]):statsHTML([['守备基数',region.base],['运输要求',region.road],['军需粮秣',region.cost],['本局胜算',option?option.campaign.chance+'%':'—']]);
  html+='<p class="inspector-description">'+descriptions[id]+'</p>';
  if(state.over)html+='<p class="hint-line">本局已经结束，可从菜单查看战报或开始新远略。</p>';
  else if(state.chapter<4)html+='<button class="primary" id="city-council">先议定当前大计 →</button>';
  else if(owned){const targets=currentOptions().filter(o=>o.kind==='战役'&&campaignSource(state,o.id.split(':')[1])===id);if(targets.length)html+=targets.map(o=>'<button class="primary" data-target="'+o.id.split(':')[1]+'">选择'+names[o.id.split(':')[1]]+'为目标 <span>规划路线 →</span></button>').join('');else html+='<button class="primary" id="city-govern">安抚与整合 <span>查看国策 →</span></button>';
    html+='<button class="secondary" id="city-close-view">近看城郭</button>';
  }else if(option){html+='<button class="primary" id="plan-campaign">规划进军 <span>检查粮道 →</span></button>';if(option.reasons.length)html+='<p class="hint-line">当前尚缺：'+option.reasons.join('；')+'</p>';}
  else html+='<p class="hint-line">尚无可用进军路线。先经营相邻区域，再推进战线。</p>';
  $('inspector-body').innerHTML=html;
  document.querySelectorAll('[data-target]').forEach(b=>b.addEventListener('click',()=>planCampaign(b.dataset.target)));
  $('plan-campaign')?.addEventListener('click',()=>planCampaign(id));$('city-close-view')?.addEventListener('click',()=>{world.focus(id,true);if(innerWidth<700)$('inspector').hidden=true;});$('city-govern')?.addEventListener('click',()=>openPolicies('domestic'));$('city-council')?.addEventListener('click',()=>openPolicies('council'));refresh();
}
function planCampaign(target){
  if(!gate())return;const option=currentOptions().find(o=>o.id==='campaign:'+target),source=campaignSource(state,target);if(!option||!source){toast('当前没有可用的进军路线。');return;}
  selectedCity=target;planned={target,source,id:option.id};world.select(target);world.previewRoute(source,target);$('inspector').hidden=false;$('inspector-faction').textContent='行军筹划 · 尚未出征';$('inspector-title').textContent='进取'+names[target];$('inspector-subtitle').textContent='确认后才结算兵粮。本回合按两年战役与筹备期计算。';
  const c=option.campaign;$('inspector-body').innerHTML='<div class="route-name">'+names[source]+' → '+names[target]+'</div>'+statsHTML([['军需粮秣','−'+c.region.cost],['模型胜算',c.chance+'%'],['我方强度',c.power],['对方守备',c.defense]])+'<p class="forecast">'+(c.ally?'吴盟形成侧翼牵制，进攻强度 +8。':'补给、军备与役负共同影响此战。')+'<br>无论胜败都消耗粮秣。成功占领后，地方稳定仍需恢复。</p>'+(c.reasons.length?'<ul class="needs-list">'+c.reasons.map(r=>'<li>'+r+'</li>').join('')+'</ul>':'')+'<button class="primary" id="launch-campaign" '+(c.reasons.length?'disabled':'')+'>确认出征 <span>粮秣 −'+c.region.cost+' →</span></button><button class="secondary" id="cancel-plan">暂缓出兵</button>';
  $('launch-campaign').addEventListener('click',()=>execute(option.id,planned));$('cancel-plan').addEventListener('click',()=>selectCity(source,false));
}
function deltaHTML(entry){return '<div class="delta-strip">'+entry.delta.map(d=>'<span class="'+((d.value>0&&d.key!=='fatigue')||(d.value<0&&d.key==='fatigue')?'positive':'negative')+'">'+d.name+' '+(d.value>0?'+':'−')+Math.abs(d.value)+'</span>').join('')+'</div>';}
async function execute(id,route=null){
  if(!gate())return;const result=E.step(state,id);if(!result.ok){toast(result.error);return;}
  const before=state;busy=true;state=result.state;save();closeDialog();$('inspector').hidden=true;$('report-panel').hidden=true;
  document.querySelectorAll('[data-command]').forEach(b=>b.disabled=true);
  if(route){
    // Persist the committed decision before the visual journey, so reload cannot charge it twice.
    const won=state.land.includes(route.target);
    $('march-label').textContent=names[route.source]+' → '+names[route.target];
    const grain=document.querySelector('[data-stat="grain"]');if(grain)grain.textContent=Math.max(0,before.grain-E.campaign(before,route.target).region.cost);
    $('help-button').disabled=true;$('menu-button').disabled=true;
    if(cinematicsEnabled){
      $('cinematic').hidden=false;document.body.classList.add('is-cinematic');$('cinematic-route').textContent=names[route.source]+' → '+names[route.target];
      try{await world.march(route.source,route.target,f=>{
        $('cinematic').dataset.phase=f.id;$('cinematic-title').textContent=f.id==='aftermath'?(won?'敌阵渐退':'鸣金收兵'):f.title;
        $('cinematic-description').textContent=f.id==='aftermath'?(won?'前阵推进，收拢队伍与辎重':'有序撤回，保存力量再议'):f.detail;
        $('cinematic-progress').style.width=f.progress*100+'%';$('cinematic-percent').textContent=Math.round(f.progress*100)+'%';
      },reduced,{won,defender:factionAt(before,route.target),onPhase:phase=>sound.setPhase(phase)});}catch(error){console.error(error);toast('战役演出暂未完成，已保留决策并转入军报。');}
      finally{world.finishCampaign(true);$('cinematic').hidden=true;document.body.classList.remove('is-cinematic');sound.setPhase('idle');}
    }else{world.clearRoute();sound.cue(won?'victory':'retreat',.4);}
    $('help-button').disabled=false;$('menu-button').disabled=false;$('march-hud').hidden=true;world.clearRoute();
  }
  const tutorialCompleted=mode==='tutorial'&&state.land.includes('long')&&state.stability.long>=60&&(!before.land.includes('long')||before.stability.long<60);
  busy=false;planned=null;refresh();world.renderer.render(world.scene,world.camera);showReport(result.entry,route,tutorialCompleted);
}
function showReport(entry,route,tutorialCompleted=false){
  world.pausedScene=true;
  $('report-panel').hidden=false;$('report-kicker').textContent=state.over?'终局 · '+(mode==='tutorial'?'教学局':'正式远略'):route?'前线军报 · '+state.year+' 年':'军议回报 · '+state.year+' 年';
  const won=route&&state.land.includes(route.target);$('report-title').textContent=state.over?state.over.title:route?won?names[route.target]+'已入版图':'师还，另图后举':entry.name;
  $('report-summary').textContent=state.over?state.over.text:route?won?'城门已开。新占地区尚未安定，驻军、粮税与地方承诺需要你继续经营。':'部队退回原防线，粮秣与军备已有损耗。恢复民力和军队，再评估下一次出征。':entry.report[0];
  $('report-deltas').innerHTML=deltaHTML(entry);$('report-details').innerHTML=entry.report.map(p=>'<p>'+esc(p)+'</p>').join('');$('report-next').textContent=state.over?'查看终局战报 →':mode==='tutorial'&&route&&won?'下一步：治理新地 →':'继续经略 →';
  $('report-next').onclick=()=>{$('report-panel').hidden=true;world.pausedScene=false;if(state.over)share();else if(mode==='tutorial'&&route&&won)openPolicies('domestic');else if(state.chapter<4)openPolicies('council');};
  $('tutorial-share')?.remove();
  if(tutorialCompleted){$('report-kicker').textContent='教学完成 · 出征与治理';$('report-title').textContent='一役已成，远略方始';$('report-summary').textContent='你已打通粮道、取得新地，并把陇右稳定提升到 '+state.stability.long+'。现在可以从 207 年开启真正的远略，或分享这一场教学战报。';$('report-next').textContent='开始正式远略 →';$('report-next').onclick=()=>{dialog('从 207 年，真正起步','<p>正式局不继承教学的预设兵粮。开始会替换三维版自动存档；若要保留教学进度，可先从菜单导出。</p><button class="primary" id="tutorial-to-campaign">开启正式远略 →</button>');$('tutorial-to-campaign').onclick=()=>start('campaign');};const b=document.createElement('button');b.id='tutorial-share';b.className='secondary';b.style.cssText='width:100%;margin-top:10px';b.textContent='分享这场北伐';b.onclick=share;$('report-panel').append(b);}
}

function policyEffects(option){const delta={...option.delta};if(option.cost)delta.grain=(delta.grain||0)-option.cost;return Object.entries(delta).filter(([,v])=>v).map(([k,v])=>E.STATS[k][0]+' '+(v>0?'+':'−')+Math.abs(v)).join(' · ')+(option.id==='govern'?' · 各地稳定 +18':'');}
function openPolicies(category){
  if(!gate()||!started||state.over)return;
  const intro=state.chapter<4,chapter=E.INTRO[state.chapter],groups={council:['institution','rest','roads','diplomacy'],domestic:['govern','rest','reform'],military:['roads','train','levy'],diplomacy:['diplomacy','settle']};
  const options=currentOptions().filter(o=>intro||groups[category].includes(o.id));selectedPolicy=null;
  const note=intro?chapter.text:category==='council'?'一项国策推进两年。先看即时投入，再看岁入、养军与天候的回合结算。':category==='domestic'?'占领只是开始。新地的行政整合、农时与税源，决定下一场仗有没有粮。':category==='military'?'兵力与运输各有成本。出征请关闭军议，在沙盘上点选城池规划路线。':'联盟不是永久的加成。互市、边界承诺与双方实力变化，会不断改变合作意愿。';
  dialog(intro?chapter.title:({council:'每一策，都有代价',domestic:'先让乡里恢复',military:'兵马未动，粮道先行',diplomacy:'以共同利益结盟'}[category]),'<p>'+esc(note)+'</p><ul class="policy-list">'+options.map(o=>'<li class="policy '+(o.reasons.length?'locked':'')+'" data-policy-row="'+o.id+'"><button data-policy="'+o.id+'" aria-pressed="false"><div class="policy-heading"><span>'+esc(o.name)+'</span><span>'+(!intro&&o.cost?'粮 −'+o.cost:'')+'</span></div><p class="policy-desc">'+esc(o.desc)+'</p><p class="policy-effect">'+esc(policyEffects(o))+'</p>'+(o.reasons.length?'<p class="needs-list">尚缺：'+esc(o.reasons.join('；'))+'</p>':'')+'</button></li>').join('')+'</ul><div id="policy-confirm" class="policy-confirm"><p>选择一项议案，核对后再确认。本次选择尚未消耗资源。</p></div>',intro?chapter.label:'丞相府 · '+state.year+' 年');
  document.querySelectorAll('[data-policy]').forEach(button=>button.addEventListener('click',()=>{
    const option=options.find(o=>o.id===button.dataset.policy);selectedPolicy=option.id;
    document.querySelectorAll('[data-policy-row]').forEach(el=>el.classList.toggle('selected',el.dataset.policyRow===selectedPolicy));document.querySelectorAll('[data-policy]').forEach(b=>b.setAttribute('aria-pressed',b===button?'true':'false'));
    const forecast=E.step(state,option.id);
    $('policy-confirm').innerHTML='<p>'+(forecast.ok?'执行后进入 '+forecast.state.year+' 年。以上是即时投入；收成、军费和事件还会改变最终数值。':'当前无法执行：'+esc(option.reasons.join('；')))+'</p><button id="confirm-policy" class="primary" '+(option.reasons.length?'disabled':'')+'>采纳此议 <span>确认执行 →</span></button>';
    $('confirm-policy').onclick=()=>execute(option.id);
    $('policy-confirm').scrollIntoView({block:'nearest',behavior:reduced?'instant':'smooth'});
  }));
}
function mission(){dialog('不是插满旗，就算统一','<p>同一局号、同一开局、同一组决策，结果可复现。所有以下条件须连续维持两轮；当前已维持 '+state.consolidated+' 轮。</p><ul>'+E.victoryConditions(state).map(c=>'<li style="color:'+(c.ok?'#c2d8b2':'#d6dfce')+'">'+(c.ok?'✓ ':'○ ')+c.name+'</li>').join('')+'</ul><h3>当下的底盘</h3>'+statsHTML([['平均稳定',Math.round(E.stability(state))],['民望',state.trust],['政务支持',state.elite],['役负',state.fatigue]])+'<p>各地稳定：'+state.land.map(id=>names[id]+' '+Math.round(state.stability[id])).join(' · ')+'</p><p>当前天候下预计两年粮税 '+E.production(state)+'、常备军开支 '+E.upkeep(state)+'。执行国策后，产出条件和天候可能改变。</p><h3>个人有尽时</h3><p>234 年检查制度传承：达到 55，继任团队继续经营；否则事业中断。268 年为沙盘终点。</p><p>'+(mode==='tutorial'?'当前是预设兵粮的北伐教学，不参与正式开局比较。':'当前为正式 207 年起步；开局时只有一个荆州据点，没有预设北伐大军。')+'</p>','远略目标 · '+(mode==='tutorial'?'教学局':'正式远略'));}
function help(){dialog('先看山河，再落一子','<h3>三维沙盘怎么操作</h3><p>鼠标拖动旋转，右键拖动平移，滚轮缩放。手机单指转动、双指缩放与平移。点城名或城郭即可查看军情；左侧 ⌖ 回到全图。</p><h3>第一场北伐</h3><p>封面选择「先试一场北伐」 → 点汉中 → 选择陇右 → 查看兵粮和胜算 → 确认出征。你会看到队列与辎重沿山路行进，军报到达后进入内治，安抚新占地区。</p><h3>真正影响成败的东西</h3><p>粮食来自民力、地盘、地方稳定和运输，常备军则持续吃粮。新地不会马上提供满额税收；连续征发会伤害民力与民望。吴盟低于 23 时，荆州可能失守。</p><p>每项国策或战役概括两年的筹备与执行。胜算来自公开游戏公式，不是历史概率；行军是战役的三维表现，不是可以微操每个士兵的即时战斗。</p><h3>适合怎么和朋友玩</h3><p>大家用局号 207 开启正式远略，比统一年份，也比是否建立了可持续的秩序。菜单可导出带教学／正式标记的战报与实景图片。</p><details><summary>历史边界与设计说明</summary><p>这是以生产、财政、联盟、行政整合和继任为约束的反事实游戏，并非历史必胜方案。七城代表战略区域，山河是示意地形，不是地理测绘；战役与年份做了压缩。</p><p>问题意识参考《三国志·诸葛亮传》的治政与北伐、《三国志·吴主传》的联盟利益，以及《出师表》的用人与继任。台词和事件表述为创作，数值为游戏设计。</p></details>','操作手册 · 约一分钟读完');}
function journal(){dialog('每一笔，都有来处',state.log.length?state.log.slice().reverse().map(e=>'<article class="journal-entry"><h3>'+e.year+' → '+e.toYear+' 年 · '+esc(e.name)+'</h3>'+e.report.map(p=>'<p>'+esc(p)+'</p>').join('')+deltaHTML(e)+'</article>').join(''):'<p>尚未作出决策。你的第一项议案，会成为这里的第一笔记录。</p>','军议簿 · '+state.log.length+' 次决策');}
function menu(){
  dialog('留住这一卷山河',
    '<div class="settings-row"><span>画面质量'+(world.software?'<small> · 软件图形渲染</small>':'')+'</span><button id="quality-toggle">'+(world.quality==='fine'?'精细 · 点击切流畅':'流畅 · 点击切精细')+'</button></div>'+
    (world.software?'<p class="hint-line">当前未使用硬件图形加速。若转动仍卡顿，请开启浏览器硬件加速，或使用经典版。</p>':'')+
    '<div class="settings-row"><span>音乐与音效<small> · 独立音量</small></span><button id="menu-audio">声音设置 →</button></div>'+
    '<div class="settings-row"><span>出征与交战演出</span><button id="cinematics-toggle" aria-pressed="'+cinematicsEnabled+'">'+(cinematicsEnabled?'已开启 · 点击关闭':'已关闭 · 点击开启')+'</button></div>'+
    '<div class="settings-row"><span>分享本局战报</span><button id="menu-share" '+(!state.history.length?'disabled':'')+'>复制 / 下载 →</button></div>'+
    '<div class="settings-row"><span>带走游戏进度</span><div><button id="export-save" '+(!started&&!saved?'disabled':'')+'>导出存档</button> <button id="import-save">导入存档</button></div></div>'+
    (recoveryBackup?'<div class="settings-row"><span>保留的原始存档</span><button id="export-recovery">下载原始备份</button></div>':'')+
    '<div class="settings-row"><span>开始一场新的远略</span><button id="new-campaign">重新起步 →</button></div>'+
    '<div class="settings-row"><span>返回封面<small> · 保留当前进度</small></span><button id="menu-cover">封面 →</button></div>'+
    '<p style="margin-top:18px;font-size:10px">进度保存在当前浏览器。换设备或地址前请导出存档；导入只在本机重放决策，不上传文件。<a href="classic.html">进入经典版 ↗</a></p>','山河三维 · v'+BUILD_VERSION);
  const classicLink=$('dialog-content').querySelector('a');if(classicLink&&location.protocol==='file:')classicLink.href='再出隆中.html';
  $('quality-toggle').onclick=()=>{world.setQuality(world.quality==='fine'?'smooth':'fine');try{localStorage.setItem(KEY+'-quality',world.quality);}catch(_){}menu();};$('menu-audio').onclick=audioSettings;$('cinematics-toggle').onclick=()=>{cinematicsEnabled=!cinematicsEnabled;try{localStorage.setItem(KEY+'-cinematics',cinematicsEnabled?'on':'off');}catch(_){}menu();};$('menu-share').onclick=share;$('menu-cover').onclick=cover;$('new-campaign').onclick=()=>{if(!gate())return;dialog('从 207 年，重新开始','<p>这会替换三维版的自动存档。经典版存档不受影响；如需保留这局，请先导出存档。</p><label for="new-seed">挑战局号</label><input id="new-seed" type="number" min="1" max="2147483646" value="207" style="display:block;width:100%;padding:12px;margin:8px 0 20px;background:#10291f;color:#eee8d5;border:1px solid #c9b68260"><button class="primary" id="confirm-new">确认开始新远略 <span>207 年 →</span></button>');$('confirm-new').onclick=()=>{const input=$('new-seed');if(!input.reportValidity())return;start('campaign',null,input.value||207);};};
  $('export-save').onclick=()=>{if(gate()){const progress=started?{mode,state}:saved;downloadText(serialize(progress.mode,progress.state),'再出隆中-'+(progress.mode==='tutorial'?'教学':'正式')+'-'+progress.state.year+'-存档.json');toast('存档已导出。可在其他浏览器或离线版中导入。');}};
  $('import-save').onclick=importSave;$('export-recovery')?.addEventListener('click',()=>downloadText(recoveryBackup,'再出隆中-原始存档备份.json'));
}
function downloadText(text,name){const url=URL.createObjectURL(new Blob([text],{type:'application/json;charset=utf-8'}));download(url,name);setTimeout(()=>URL.revokeObjectURL(url),30000);}
function importSave(){
  if(!gate())return;const input=document.createElement('input');input.type='file';input.accept='.json,application/json';input.hidden=true;document.body.append(input);
  input.addEventListener('cancel',()=>input.remove(),{once:true});
  input.addEventListener('change',async()=>{const file=input.files?.[0];input.remove();if(!file)return;if(file.size>65536){toast('存档文件过大。请选择本游戏导出的 JSON 存档。');return;}
    try{const imported=restore(await file.text());if(!imported){toast('无法重放这份存档，当前进度没有改变。');return;}
      const s=imported.state;dialog('接续这一场远略','<p>'+(imported.mode==='tutorial'?'北伐教学 · 预设开局':'正式远略 · 207 年起步')+'<br>局号 '+s.seed+' · '+s.year+' 年 · '+s.history.length+' 次决策 · 控制 '+s.land.length+'/7 地</p><p>确认后替换三维版当前存档；经典版不变。若要保留当前局，请先取消并导出。</p><button class="primary" id="confirm-save-import">确认导入并继续 →</button>');$('confirm-save-import').onclick=()=>{start(imported.mode,s);toast('存档已重放，继续你的远略。');};
    }catch(_){toast('文件无法读取，当前进度没有改变。');}
  },{once:true});input.click();
}
function reportText(){return '《再出隆中 · 山河三维》\n'+(mode==='tutorial'?'【北伐教学 · 预设开局，不计入正式挑战】':'【正式远略 · 207 年起步】')+'\n'+E.reportText(state)+'\n军议路线：'+state.history.join(' → ');}
function download(url,name){const a=document.createElement('a');a.href=url;a.download=name;a.click();}
async function makeReportImage(){
  const image=new Image();image.src=world.screenshot();await image.decode();const canvas=document.createElement('canvas'),w=1440,h=1000;canvas.width=w;canvas.height=h;const ctx=canvas.getContext('2d');
  ctx.fillStyle='#18382b';ctx.fillRect(0,0,w,h);const ratio=Math.min(w/image.width,740/image.height);ctx.drawImage(image,(w-image.width*ratio)/2,0,image.width*ratio,image.height*ratio);
  const gradient=ctx.createLinearGradient(0,570,0,775);gradient.addColorStop(0,'#18382b00');gradient.addColorStop(1,'#18382b');ctx.fillStyle=gradient;ctx.fillRect(0,570,w,210);
  ctx.fillStyle='#e3c993';ctx.font='50px "Noto Serif CJK SC",serif';ctx.fillText('再出隆中 · 山河三维',64,805);ctx.font='23px sans-serif';ctx.fillStyle='#d2ddc6';ctx.fillText((mode==='tutorial'?'北伐教学 · 预设开局':'正式远略 · 207 年起步')+'   /   局号 '+state.seed+'   /   公元 '+state.year+' 年',66,856);
  ctx.font='29px "Noto Serif CJK SC",serif';ctx.fillStyle='#eee8d5';ctx.fillText(state.over?state.over.title:'山河未定，远略仍在继续',66,910);ctx.font='20px sans-serif';ctx.fillStyle='#b4c5ac';ctx.fillText('疆域 '+state.land.length+'/7   ·   粮秣 '+state.grain+'   ·   民力 '+state.people+'   ·   传承 '+state.institution+'   ·   平均稳定 '+Math.round(E.stability(state)),66,956);
  return canvas.toDataURL('image/png');
}
function share(){
  if(!gate())return;
  dialog('把这局，交给朋友','<p>邀请朋友从相同局号的正式开局挑战。战报是本地生成的记录；教学会单独标记，不设未经验证的排行榜。</p><textarea class="share-text" id="share-text" aria-label="可复制的战报" readonly></textarea><button id="copy-report" class="primary">复制战报 <span>发到朋友圈 →</span></button><button id="download-report" class="secondary" style="margin-top:12px;width:100%">下载山河战报图片</button><p class="hint-line">手机若未出现下载提示，可长按生成的图片保存。局域网地址只能由同一网络内的朋友访问。</p><div id="share-preview"></div>','本局实录 · '+(mode==='tutorial'?'教学':'正式'));
  $('share-text').value=reportText();$('copy-report').onclick=async()=>{try{await navigator.clipboard.writeText(reportText());toast('战报已复制。');}catch(_){$('share-text').focus();$('share-text').select();toast('战报已选中，请长按或按 Ctrl+C 复制。');}};
  $('download-report').onclick=async()=>{const b=$('download-report');b.disabled=true;try{const url=await makeReportImage();if($('share-preview'))$('share-preview').innerHTML='<img class="share-image" alt="本局三维实景战报" src="'+url+'">';download(url,'再出隆中-'+(mode==='tutorial'?'教学':'正式')+'-'+state.year+'.png');toast('实景战报已生成。');}catch(error){toast('图片生成未成功，可以直接截取当前画面。');console.error(error);}finally{b.disabled=false;}};
}
function updateAudioUI(){
  const button=$('audio-button');if(button){button.textContent=sound.enabled?'音开':'音关';button.setAttribute('aria-label',sound.enabled?'关闭全部声音':'开启音乐与音效');button.setAttribute('aria-pressed',String(sound.enabled));button.title=sound.enabled?'关闭全部声音':'开启音乐与音效';}
  if(!$('sound-master'))return;const s=sound.snapshot();
  $('sound-master').textContent=s.enabled?'关闭全部声音':'开启声音';$('sound-master').setAttribute('aria-pressed',String(s.enabled));
  $('music-status').textContent=s.title+' · '+s.musicStatus;$('music-detail').textContent=s.musicError||'背景音乐循环播放；交战时自动降低音量。';
  for(const channel of ['music','effects']){const control=$(channel+'-enabled');control.textContent=s[channel]?'已开启':'已关闭';control.setAttribute('aria-pressed',String(s[channel]));$(channel+'-value').textContent=Math.round(s[channel+'Volume']*100)+'%';}
}
function audioSettings(){
  const p=sound.preferences;
  dialog('听见山河与军阵','<p id="music-status" role="status"></p><p id="music-detail" class="hint-line"></p><button id="sound-master" class="primary sound-master">开启声音</button>'+
    ['music','effects'].map(channel=>'<section class="audio-channel"><div class="settings-row"><span>'+(channel==='music'?'背景音乐':'场景音效')+'</span><button id="'+channel+'-enabled" aria-label="切换'+(channel==='music'?'背景音乐':'场景音效')+'"></button></div><label class="audio-volume" for="'+channel+'-volume">'+(channel==='music'?'音乐音量':'音效音量')+'<output id="'+channel+'-value"></output></label><input id="'+channel+'-volume" type="range" min="0" max="100" step="1" value="'+Math.round(p[channel+'Volume']*100)+'"></section>').join('')+
    '<div class="sound-previews"><button id="preview-march">试听马蹄与战鼓</button><button id="preview-battle">试听金铁交锋</button></div><p class="hint-line">默认音效由本机合成；可在 audio/sfx/ 放入实录素材替换。试听约 3 秒。</p>'+
    '<details class="audio-files"><summary>音乐文件与本机试听</summary><p>主题曲位置：<code>public/'+esc(sound.config.music.src)+'</code>。更换后刷新页面；离线单文件需重新构建。</p><label for="music-file">选择本机音乐（仅本次页面，不上传）</label><input id="music-file" type="file" accept="audio/*,.mp3,.m4a,.ogg,.wav,.aac,.flac"></details><p class="hint-line">声音须点击开启；切到后台会暂停。音量与分轨偏好会保留。</p>','声景 · 音乐与现场');
  $('sound-master').onclick=()=>sound.toggle();
  for(const channel of ['music','effects']){$(channel+'-enabled').onclick=()=>sound.setChannel(channel,!sound.preferences[channel]);$(channel+'-volume').oninput=e=>sound.setVolume(channel,Number(e.target.value)/100);}
  $('preview-march').onclick=()=>sound.preview('march');$('preview-battle').onclick=()=>sound.preview('battle');$('music-file').onchange=e=>sound.chooseMusic(e.target.files?.[0]);updateAudioUI();void sound.configure();
}
function fail(message){$('loading').hidden=true;$('error-screen').hidden=false;$('error-message').textContent=message;}
function bind(){
  $('start-campaign').onclick=()=>{if(saved){dialog('开启正式远略','<p>正式开局从 207 年、一个荆州据点起步。开始会替换三维版自动存档，经典版不受影响。</p><button class="primary" id="confirm-start">开始新的正式远略 →</button>');$('confirm-start').onclick=()=>start('campaign');}else start('campaign');};
  $('start-tutorial').onclick=()=>{if(saved){dialog('先试一场北伐','<p>教学从 228 年的预设兵粮起步，会替换三维版自动存档，不影响经典版。教学成绩会单独标记。</p><button class="primary" id="confirm-start">进入北伐教学 →</button>');$('confirm-start').onclick=()=>start('tutorial');}else start('tutorial');};
  $('resume-button').hidden=!saved;$('resume-button').onclick=()=>{if(saved)start(saved.mode,saved.state);};
  try{const raw=JSON.parse(localStorage.getItem('han-restoration-v1'));if(raw?.version===E.VERSION){const old=replayScenario('campaign',raw.seed,raw.history);if(old){$('import-classic').hidden=false;$('import-classic').onclick=()=>{dialog('接续经典版进度','<p>从 '+old.year+' 年、'+old.land.length+' 个战略区继续。原经典版存档保留；本操作会替换三维版自动存档。</p><button class="primary" id="confirm-import">确认接续 →</button>');$('confirm-import').onclick=()=>start('campaign',old);};}}}catch(_){}
  $('cover-button').onclick=cover;$('help-button').onclick=help;$('menu-button').onclick=menu;$('audio-button').onclick=()=>sound.toggle();$('dialog-close').onclick=closeDialog;$('skip-cinematic').onclick=()=>world.finishCampaign(true);updateAudioUI();
  $('dialog').addEventListener('click',e=>{if(e.target===$('dialog')){const r=$('dialog').getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)closeDialog();}});
  $('dialog').addEventListener('close',()=>{world.pausedScene=$('dialog').open||!$('report-panel').hidden;});
  $('home-view').onclick=()=>world.home();$('zoom-in').onclick=()=>world.zoom(.78);$('zoom-out').onclick=()=>world.zoom(1.28);$('map-mode').onclick=()=>{const active=world.mapMode!=='politics';world.setMode(active?'politics':'terrain');$('map-mode').setAttribute('aria-pressed',String(active));};
  $('photo-button').onclick=()=>{download(world.screenshot(),'再出隆中-山河实景.png');toast('已拍摄当前三维画面。');};$('close-inspector').onclick=()=>{$('inspector').hidden=true;world.clearRoute();world.select(null);planned=null;};$('report-close').onclick=()=>{$('report-panel').hidden=true;world.pausedScene=false;};$('mission-button').onclick=mission;$('journal-button').onclick=journal;
  document.querySelectorAll('[data-command]').forEach(b=>b.onclick=()=>openPolicies(b.dataset.command));
  document.addEventListener('keydown',e=>{if($('dialog').open||e.target.matches('input,textarea'))return;if(busy){if(e.key==='Escape')world.finishCampaign(true);return;}if(e.key.toLowerCase()==='r')world.home();if(e.key==='+'||e.key==='=')world.zoom(.85);if(e.key==='-')world.zoom(1.18);if(e.key==='Escape'){$('inspector').hidden=true;$('report-panel').hidden=true;world.pausedScene=false;world.clearRoute();}});
  window.addEventListener('world-context-lost',()=>fail('图形上下文已中断。已经确认的决策保存在本机，重新加载后可以继续；也可以进入经典版。'));
  window.addEventListener('world-cinematic-error',()=>toast('战役演出已中止，已保留决策并转入军报。'));
}
setTimeout(()=>{
  try{world=new World($('world-canvas'),$('city-labels'),selectCity,{quality:preferredQuality});world.updateState(state);world.showcase();bind();
    Object.defineProperty(window,'__HAN3D',{value:{buildVersion:BUILD_VERSION,getSnapshot:()=>JSON.parse(JSON.stringify({mode,state,started,busy,selectedCity,planned,cinematicsEnabled})),getAudioSnapshot:()=>sound.snapshot(),world},writable:false});
    requestAnimationFrame(()=>{$('loading').hidden=true;document.body.dataset.ready='true';if(invalidSave){dialog('这份存档暂未读回','<p>存档损坏或版本不兼容，未能重放。原始记录没有被删除；可先下载备份，再从封面开始新局或从菜单导入另一份存档。</p><button id="backup-invalid" class="primary">下载原始存档备份</button><button id="dismiss-invalid" class="secondary" style="margin-top:12px">返回封面</button>','存档恢复提示');$('backup-invalid').onclick=()=>downloadText(invalidSave,'再出隆中-原始存档备份.json');$('dismiss-invalid').onclick=closeDialog;}else if(world.software&&!preferredQuality)toast('检测到软件图形渲染，已启用流畅模式；可在菜单调整。');});
  }catch(error){console.error(error);fail('浏览器未能建立三维画面。请使用支持 WebGL 2 的现代浏览器并开启硬件加速，或先进入保留的经典版。');}
},50);
