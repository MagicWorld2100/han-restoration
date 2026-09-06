(function (root) {
  'use strict';
  const VERSION = 1;
  const STATS = {
    grain: ['粮秣', 240], people: ['民力', 100], army: ['军备', 100],
    trust: ['民望', 100], elite: ['政务支持', 100], wu: ['孙刘互信', 100],
    logistics: ['运输', 100], institution: ['制度传承', 100], fatigue: ['役负', 100]
  };
  const REGIONS = [
    { id:'jing', name:'荆州据点', short:'荆州', x:485, y:305, base:52, cost:35, road:30 },
    { id:'yi', name:'益州', short:'益州', x:235, y:365, base:46, cost:35, road:22 },
    { id:'han', name:'汉中', short:'汉中', x:290, y:252, base:53, cost:37, road:38 },
    { id:'long', name:'陇右', short:'陇右', x:240, y:143, base:64, cost:44, road:48 },
    { id:'guan', name:'关中', short:'关中', x:392, y:188, base:77, cost:52, road:58 },
    { id:'north', name:'中原与河北', short:'中原', x:572, y:151, base:96, cost:66, road:65 },
    { id:'wu', name:'吴地', short:'江东', x:699, y:339, base:105, cost:85, road:75 }
  ];
  const clone = s => JSON.parse(JSON.stringify(s));
  const clamp = (n,a,b) => Math.min(b,Math.max(a,n));
  const normalizeSeed = seed => Number.isFinite(Number(seed)) ? Math.abs(Math.floor(Number(seed))) % 2147483647 || 207 : 207;
  function create(seed=207) {
    return { version:VERSION, seed:normalizeSeed(seed), rng:normalizeSeed(seed), year:207, turn:0, chapter:0,
      grain:66, people:56, army:35, trust:59, elite:45, wu:37, logistics:23, institution:15, fatigue:12,
      wei:100, land:['jing'], stability:{jing:65}, successor:false, settlement:0, consolidated:0,
      over:null, lastAction:null, history:[], log:[], weather:'平年', harvest:1 };
  }
  function random(s) { s.rng = (Math.imul(1664525,s.rng)+1013904223)>>>0; return s.rng / 4294967296; }
  function cap(s) { for(const [k,[,max]] of Object.entries(STATS)) s[k]=Math.round(clamp(s[k],0,max)); s.wei=clamp(s.wei,45,140); }
  function add(s, delta) { for(const [k,v] of Object.entries(delta)) s[k]+=v; cap(s); }
  function stability(s) { return s.land.reduce((n,id)=>n+(s.stability[id]||0),0)/s.land.length; }
  function change(s,before) { return Object.keys(STATS).filter(k=>s[k]!==before[k]).map(k=>({key:k,name:STATS[k][0],value:s[k]-before[k]})); }
  function gain(s,id,value=32) { if(!s.land.includes(id)) s.land.push(id); s.stability[id]=value; }
  const INTRO = [
    { year:207, label:'隆中 · 初见', title:'你知道后来的历史。\n刘备凭什么听你的？', text:'你二十六岁，刚走出草庐。眼前的刘备寄居荆州，钱粮与人马都有限。你记得赤壁、荆州与夷陵，却还没有把任何计划变成现实的权力。',
      quote:'“先生之计，如何落到明年的粮册上？”', speaker:'军议中的质疑 · 情境虚构',
      choices:[
        ['i0a','拿出可执行的三年筹粮与结盟方案','先解决眼前生计，用执行换取授权。',{institution:12,logistics:8,elite:10,grain:-8},'你以粮册、驿路和人选取得试行机会。知道未来本身没有产生政令；一份能执行的方案产生了。'],
        ['i0b','先募集部曲，打一次胜仗立威','军备增长，但新增军队也要吃饭。',{army:18,grain:-17,people:-6,fatigue:9},'将领愿意听你，但地方首先收到的是征募名额。军功可以换话语权，维持军队则是长期支出。'],
        ['i0c','把未来大事写成预言，要求独掌军政','豪赌个人威望；反对者不会因此消失。',{elite:-15,institution:-4,trust:-5,grain:4},'刘备听了预言，仍将兵权分给旧部。一个陌生人的断言不足以改变利益与信任结构。'] ] },
    { year:208, label:'江东 · 联盟', title:'孙权愿意抗曹。\n但不愿意替你复兴汉室。', text:'北方大军南下。江东有独立的将领、税源和安全诉求。共同的敌人让谈判成为可能，却不会让盟友放弃战后的地盘。',
      quote:'你能承诺什么，让合作比各自逃生更划算？', speaker:'本回合的政治约束',
      choices:[
        ['i1a','约定共同防线与战后争议的协商办法','拿出保障与军需，保留双方决策权。',{wu:28,grain:-12,elite:7,army:5},'双方获得可兑现的共同利益，联合防线成立。本局把赤壁相关的复杂战争简化为联盟与生存节点，不把一把火当作必胜按钮。'],
        ['i1b','只强调汉室大义，不谈战后安排','节省眼前让步，积累日后的边界争端。',{wu:8,army:-6,grain:-9,trust:3},'江东因眼前威胁选择有限合作，但没有答应长期为你作战。共同口号没有替代利益安排。'],
        ['i1c','绕过江东，独立迎击北方主力','争取自主，承受兵力与补给差距。',{army:-20,grain:-23,people:-8,fatigue:15,wu:-5},'部队在消耗后撤回据点。你掌握了敌军的历史行程，却没有因此获得足以抗衡的运力与兵员。'] ] },
    { year:211, label:'荆州 · 生计', title:'多征一千人，\n谁来种他们的田？', text:'营伍要求扩军，地方要求减役。士族掌握乡里网络，流民需要土地与口粮。你每多动员一分兵力，后方就少一分生产余地。',
      quote:'战报上是一个数字，村里却是一季农时。', speaker:'本回合的生产约束',
      choices:[
        ['i2a','安置流民，试行轮役与水利修复','先支出粮秣，让生产逐步恢复。',{people:13,trust:10,logistics:7,grain:-15,fatigue:-9},'新增民力代表安置与生产恢复，并不是人口凭空增长。轮役减少误农，后续回合才能回收投入。'],
        ['i2b','清查豪强隐户，集中扩充财政','扩大实际税基，也损害地方既得利益。',{grain:23,people:5,institution:8,elite:-21,trust:5},'官府掌握更多户籍与收入；部分地方协作转为消极。改革的收益与阻力同时到来。'],
        ['i2c','提高征发，尽快编成新军','眼前更能打，农时与服役负担恶化。',{army:21,grain:13,people:-16,trust:-13,fatigue:22},'军营壮大了，税源却在收缩。新增军备还会持续消耗粮秣，不能靠一次征发永久维持。'] ] },
    { year:214, label:'入蜀 · 治理', title:'成都可以打下来。\n益州未必能接过来。', text:'刘备集团已在入蜀战争中取得优势。你负责提出接管方案：外来的军功集团、原有官吏和本地乡里，都在等待新政权如何分配权利与负担。',
      quote:'占领一座城，与让一个地方照常生活，是两件事。', speaker:'本回合的统治约束',
      choices:[
        ['i3a','留任可用官吏，约束军队，分期核田','让地方运转，再逐步建立统一规则。',{institution:11,elite:13,trust:8,grain:-14},'益州纳入控制，旧有行政网络得以延续。接管仍有成本，但你为后续治理争取了合作。'],
        ['i3b','奖赏部曲，优先兑现军功承诺','凝聚军队，但乡里承担征用。',{army:13,grain:14,elite:-13,trust:-16,fatigue:10},'将士获得回报，地方则开始隐匿资源。地盘变大，不等于可用税源同步变大。'],
        ['i3c','全面更换旧吏，所有决策集中到你','短期统一指挥，增加行政与接班风险。',{elite:-23,institution:-7,logistics:9,grain:-5},'旧网络被打断，事情纷纷等你裁决。个人越不可替代，离开你之后的政务越脆弱。'] ] }
  ];
  function production(s) {
    const stable = .55+stability(s)/220;
    const support = s.elite<25 ? .70 : 1;
    return Math.round((s.people*.22+s.land.length*7+s.logistics*.06)*stable*support*s.harvest);
  }
  function upkeep(s) { return Math.round(s.army*.25+s.land.length*3+s.fatigue*.11); }
  function candidates(s) {
    if(!s.land.includes('yi')) return ['yi'];
    if(!s.land.includes('han')) return ['han',...(!s.land.includes('jing')?['jing']:[])];
    if(!s.land.includes('long')) return ['long',...(!s.land.includes('jing')?['jing']:[])];
    if(!s.land.includes('guan')) return ['guan',...(!s.land.includes('jing')?['jing']:[])];
    if(!s.land.includes('north')) return ['north',...(!s.land.includes('jing')?['jing']:[])];
    return [...(!s.land.includes('jing')?['jing']:[]),...(!s.land.includes('wu')?['wu']:[])];
  }
  function campaign(s,id) {
    const r=REGIONS.find(x=>x.id===id);
    if(!r) return null;
    const ally = s.wu>=65 && s.land.includes('jing') && id!=='wu' && id!=='jing' ? 8 : 0;
    const power = s.army*.82+s.logistics*.29+s.institution*.18-s.fatigue*.22+ally;
    const defense = r.base*(id==='wu'||id==='jing'?1:s.wei/100);
    const chance = Math.round(clamp(50+(power-defense)*1.5,8,88));
    const reasons=[];
    if(!candidates(s).includes(id)) reasons.push('没有可用的相邻进军路线');
    if(s.grain<r.cost) reasons.push('粮秣至少 '+r.cost);
    if(s.logistics<r.road) reasons.push('运输至少 '+r.road);
    if(s.army<42) reasons.push('军备至少 42');
    if(s.trust<30) reasons.push('民望至少 30');
    if(s.elite<20) reasons.push('政务支持至少 20');
    if(s.fatigue>75) reasons.push('役负须降至 75 以下');
    return {region:r,power:Math.round(power),defense:Math.round(defense),chance,ally,reasons};
  }
  const ACTIONS = [
    {id:'rest',name:'休养生息',kind:'内政',desc:'减轻徭役，修复生产，让负担过重的乡里恢复。',cost:7,delta:{people:10,trust:7,fatigue:-18,army:-3},report:'你减免轮役、安排士卒归农。军备略减，生产与民望恢复；减役的收益来自后续收成。'},
    {id:'roads',name:'整修转运',kind:'后勤',desc:'修路、疏浚与设置粮站。运输能力无法用预言代替。',cost:19,delta:{logistics:16,people:-2,fatigue:7,institution:2},report:'工役修复转运节点。运力上升，但粮食、工期与农时都是真实成本。'},
    {id:'reform',name:'核田整税',kind:'财政',desc:'扩大实际税基，限制隐匿。地方合作可能因此下降。',cost:0,delta:{grain:30,people:4,institution:6,elite:-17,trust:4,fatigue:3},report:'隐匿税源进入公账，粮秣增加。地方既得利益受损；政务支持低于 25 会使粮税征收打折。'},
    {id:'train',name:'轮训整军',kind:'军备',desc:'训练与补充兵员。新增军备也提高长期军粮开支。',cost:16,delta:{army:17,people:-5,fatigue:9},report:'部队轮训完成。军备提高，民力投入与常备军开支同时增加。'},
    {id:'diplomacy',name:'续订吴盟',kind:'外交',desc:'用边界保障、互市和军需投入维持合作。',cost:15,delta:{wu:18,elite:4},report:'使者拿出可兑现的互市与边界保障。互信回升，但它仍会受双方实力变化影响。'},
    {id:'institution',name:'分权育才',kind:'传承',desc:'培养属吏、建立复核与交接，让政令不必件件等你。',cost:16,delta:{institution:17,elite:10,logistics:3},report:'属吏开始独立核账与调度。培养人才会花钱、放权，却让国家更能承受个人离场。'},
    {id:'govern',name:'安抚与整合',kind:'治理',desc:'整顿驻军，兑现地方承诺，修复新占地区秩序。',cost:15,delta:{trust:7,elite:10,fatigue:-6},report:'各地开始按共同规则核税、约束驻军并受理申诉。行政整合推进，不能把驻军旗帜当作长治久安。'},
    {id:'levy',name:'紧急征发',kind:'动员',desc:'用生产与民望换取眼前的钱粮、兵员。',cost:0,delta:{grain:40,army:11,people:-16,trust:-17,fatigue:22},report:'粮秣与兵员迅速集结。你把未来的收成、百姓的承受力换成了眼前的力量。'}
  ];
  function options(s) {
    if(s.over) return [];
    if(s.chapter<4) return INTRO[s.chapter].choices.map(c=>({id:c[0],name:c[1],desc:c[2],delta:c[3],kind:'军议',cost:0,reasons:[]}));
    const out=ACTIONS.map(a=>({...a,reasons:s.grain<a.cost?['粮秣至少 '+a.cost]:[]}));
    for(const id of candidates(s)) {
      const c=campaign(s,id);
      out.push({id:'campaign:'+id,name:'进取'+c.region.short,kind:'战役',desc:'胜算 '+c.chance+'% · 占领后仍需驻军与治理。',cost:c.region.cost,delta:{},reasons:c.reasons,campaign:c});
    }
    if(s.land.includes('north')&&!s.land.includes('wu')) {
      const reasons=[];
      if(s.wu<70)reasons.push('孙刘互信至少 70');
      if(s.institution<65)reasons.push('制度传承至少 65');
      if(s.trust<60)reasons.push('民望至少 60');
      if(s.elite<45)reasons.push('政务支持至少 45');
      if(s.grain<20)reasons.push('粮秣至少 20');
      if(stability(s)<65)reasons.push('各地平均稳定至少 65');
      out.push({id:'settle',name:s.settlement?'推进共同政制':'与吴议定共同政制',kind:'外交',cost:20,delta:{},reasons,desc:'共需两次军议：先保障地方权益，再交割军政与税权。'});
    }
    return out;
  }
  function annual(s,report) {
    const weatherRoll=random(s);
    s.weather=weatherRoll<.16?'歉收':weatherRoll>.86?'丰年':'平年';
    s.harvest=s.weather==='歉收'?.72:s.weather==='丰年'?1.16:1;
    const income=production(s), cost=upkeep(s);
    s.grain+=income-cost;
    report.push('两年结算：'+s.weather+'，粮税 +'+income+'，军政消耗 −'+cost+'。');
    if(s.grain<0) {
      s.grain=0;add(s,{people:-10,army:-9,trust:-12,fatigue:8});
      report.push('存粮耗尽。断供造成逃亡、减产与军心动摇。');
    }
    s.wu-=s.land.includes('north')?5:s.land.includes('guan')?4:2;
    s.wei+=s.land.includes('north')?-5:1.2;
    s.fatigue=Math.max(0,s.fatigue-2);
    if(s.fatigue>65) {s.people-=5;s.trust-=4;report.push('连续服役挤占农时，民力与民望继续下降。');}
    if(s.elite<25) report.push('地方协作不足：本期粮税按七成征收。');
    for(const id of s.land) {
      const recovery=(s.institution>=55?5:2)+(s.trust>=60?3:0)-(s.trust<30?9:0)-(s.elite<20?6:0);
      s.stability[id]=clamp((s.stability[id]||30)+recovery,0,100);
    }
    if(s.wu<23 && s.land.includes('jing') && !s.land.includes('wu')) {
      s.land=s.land.filter(id=>id!=='jing');delete s.stability.jing;
      add(s,{army:-12,grain:-16,trust:-5,fatigue:9});
      report.push('边界承诺与互信破裂，吴军夺取荆州据点。北方战线已不能假设东面永远安全。');
    }
    if(s.year>=234&&!s.successor) {
      if(s.institution<55) { s.over={type:'succession',title:'人去，政亦息',text:'234 年的交接考验到来。制度传承不足 55，账目、决策与军政协调仍依附你一人；统一事业没有形成可持续的继任机制。'}; }
      else {s.successor=true;add(s,{elite:-4,army:-3});report.push('234 年交接考验通过。你的继任团队接手账目、军政与授权，故事从个人才智转入制度延续。');}
    }
    cap(s);
  }
  function victoryConditions(s) { return [
    {name:'控制全部七个战略区域',ok:REGIONS.every(r=>s.land.includes(r.id))},
    {name:'各地稳定 ≥ 60，平均 ≥ 75',ok:stability(s)>=75&&s.land.every(id=>s.stability[id]>=60)},
    {name:'民力 ≥ 45，民望 ≥ 60',ok:s.people>=45&&s.trust>=60},
    {name:'制度传承 ≥ 65，政务支持 ≥ 45',ok:s.institution>=65&&s.elite>=45},
    {name:'存粮 ≥ 25，役负 ≤ 60',ok:s.grain>=25&&s.fatigue<=60}
  ]; }
  function checkEnd(s,report) {
    if(s.over)return;
    if(s.people<15||s.trust<10||s.army<5) {
      s.over={type:'collapse',title:'天下未定，根基已空',text:s.people<15?'生产与动员能力跌破底线，乡里再也承担不起政权的征发。':s.trust<10?'民望耗尽，征税、征兵与行政失去基本配合。':'可用军备耗尽，政权无力守住据点。'};return;
    }
    if(victoryConditions(s).every(c=>c.ok)) s.consolidated++; else s.consolidated=0;
    if(s.consolidated>=2) {
      s.over={type:'win',title:'天下归一，政令得行',text:'七个战略区域接受共同军政与税制，经过连续两轮稳定检验。这个沙盘里，你完成了统一；现实历史是否能走到这里，不能由游戏数值证明。'};
    } else if(s.year>=268) {
      s.over={type:'timeout',title:s.land.includes('north')?'半卷山河，仍待后人':'守住一方，未竟全功',text:'268 年，沙盘时间用尽。'+(s.land.length===7?'疆域已连成一体，但稳定治理的统一条件仍未全部满足。':'你控制了 '+s.land.length+' 个战略区域，统一目标尚未实现。')};
    } else if(s.consolidated===1) report.push('统一条件首次齐备；还需再维持一轮，才能确认共同秩序站得住。');
  }
  function step(original,id) {
    if(!original||original.over)return {ok:false,error:'本局已经结束。'};
    const option=options(original).find(o=>o.id===id);
    if(!option)return {ok:false,error:'当前没有这项议案。'};
    if(option.reasons.length)return {ok:false,error:option.reasons.join('；')};
    const s=clone(original),before=clone(original),report=[];
    const decisionYear=s.year;
    if(s.chapter<4) {
      const c=INTRO[s.chapter].choices.find(c=>c[0]===id);
      add(s,c[3]);report.push(c[4]);
      if(s.chapter===3) gain(s,'yi',id==='i3a'?67:id==='i3b'?35:30);
      s.chapter++;
      s.year=s.chapter<4?INTRO[s.chapter].year:216;
      if(s.chapter===4)annual(s,report);
    } else {
      s.grain-=option.cost;
      if(id.startsWith('campaign:')) {
        const target=id.split(':')[1],c=campaign(before,target),won=random(s)*100<c.chance;
        add(s,{army:won?-9:-17,people:won?-4:-7,fatigue:won?12:20,trust:won?2:-6});
        if(target==='wu'||target==='jing') {s.wu=0;s.settlement=0;}
        if(won) {
          gain(s,target,target==='wu'?23:36);
          if(target!=='wu'&&target!=='jing')s.wei-=target==='north'?26:7;
          s.wu-=target==='north'?10:4;
          report.push('进取'+c.region.short+'成功（本局规则胜算 '+c.chance+'%）。支付粮秣 '+c.region.cost+'，军备受损，新地稳定较低；没有立即获得满额税源。');
        } else report.push('进取'+c.region.short+'失利（本局规则胜算 '+c.chance+'%）。即使准备较充分，敌军抵抗与战场变化仍可使计划落空。粮秣已消耗，部队退回原防线。');
      } else if(id==='settle') {
        s.settlement++;add(s,{elite:-5,institution:3,wu:-3});
        if(s.settlement>=2) {gain(s,'wu',65);report.push('两轮谈判后，吴方接受地方任用与财产保障，交割对外军事与主要税权。共同政制成立；它有真实让步与整合成本，并非孙权被一句大义说服。');}
        else report.push('第一轮议定地方权益保障与共同税制草案。吴方尚未交割权力；下一轮仍须维持互信和国内稳定。');
      } else {
        add(s,option.delta);report.push(option.report);
        if(id==='govern') for(const region of s.land)s.stability[region]=Math.min(100,s.stability[region]+18);
        if(id==='diplomacy'&&!s.land.includes('jing')&&s.wu>=70) {
          gain(s,'jing',50);s.wu-=15;s.grain=Math.max(0,s.grain-10);
          report.push('互信恢复后，以额外军需和边界让步议回荆州据点（再付粮秣最多 10，互信 −15）。');
        }
      }
      s.year+=2;annual(s,report);
    }
    s.turn++;s.lastAction=id;s.history.push(id);checkEnd(s,report);cap(s);
    const entry={year:decisionYear,toYear:s.year,name:option.name,report,delta:change(s,before)};
    s.log.push(entry);
    return {ok:true,state:s,entry};
  }
  function replay(seed,history) {
    if(!Array.isArray(history)||history.length>80)return null;
    let s=create(seed);
    for(const id of history) {if(typeof id!=='string')return null;const r=step(s,id);if(!r.ok)return null;s=r.state;}
    return s;
  }
  function situation(s) {
    if(s.chapter<4)return INTRO[s.chapter];
    if(s.over)return {label:'终局 · 战报',title:s.over.title,text:s.over.text};
    let title='天下未定。\n你把两年用在哪里？',text='你可以推进一项主要国策。两年之后，粮税、军政开支、地方稳定与各方关系会一并结算。';
    if(s.year>=230&&!s.successor&&s.institution<55){title='你可以事必躬亲。\n但还能亲力亲为多久？';text='234 年将进行交接考验。制度传承不足 55，政务将无法顺利交给继任者。放权与育才也要占用你的时间和粮秣。';}
    else if(s.grain<30){title='粮册上的余数，\n比敌人的檄文更紧迫。';text='粮秣已经偏低。先看两年收入与开支；扩军会增加持续消耗，征发则透支乡里。';}
    else if(s.wu<35&&!s.land.includes('wu')){title='你盯着北方。\n江东盯着你的后背。';text='孙刘互信偏低。低于 23，且吴地尚未纳入控制时，荆州据点可能因冲突失守。盟友不会自动配合你的长期目标。';}
    else if(s.land.includes('north')&&!s.land.includes('wu')){title='中原已定。\n江东为什么要交出权力？';text='共同敌人弱化，你的壮大反而使吴方不安。可以继续战争，也可以用权益保障换取共同军政与税制；两条路都要付代价。';}
    else if(s.land.length===7){title='地图已经同色。\n百姓的日子呢？';text='统一还要满足粮秣、民力、民望、制度与地方稳定条件，并连续维持两轮。占领之后，治理才刚刚开始。';}
    return {label:s.successor?'继志 · 自由军议':'经略 · 自由军议',title,text};
  }
  function reportText(s) {
    return '《再出隆中》· 局号 '+s.seed+'\n'+s.year+' 年，'+(s.over?s.over.title:'我的统一进度')+'\n控制 '+s.land.length+'/7 地，民望 '+s.trust+'，役负 '+s.fatigue+'，制度传承 '+s.institution+'。\n'+(s.successor?'事业已跨过个人交接。':'仍由诸葛亮亲自经略。')+'\n同一个开局，你会把天下带到哪里？';
  }
  const api={VERSION,STATS,REGIONS,INTRO,ACTIONS,create,step,replay,options,campaign,situation,production,upkeep,stability,victoryConditions,reportText};
  if(typeof module!=='undefined'&&module.exports)module.exports=api;
  root.HanEngine=api;
})(typeof globalThis!=='undefined'?globalThis:this);
