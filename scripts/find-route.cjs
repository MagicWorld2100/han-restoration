const E=require('../public/engine.js');
let start=E.create(207);
for(const id of ['i0a','i1a','i2a','i3a'])start=E.step(start,id).state;
const score=s=>{
  if(s.over)return s.over.type==='win'?100000:-100000;
  const need=s.year>=226&&!s.successor?Math.max(0,55-s.institution)*7:0;
  return s.land.length*135+s.grain*.35+s.people*.9+s.trust*.55+s.army*.85+
    s.logistics*.9+Math.min(75,s.institution)*1.2+s.elite*.55+s.wu*.5-s.fatigue*.85+
    E.stability(s)*.6+s.settlement*95+s.consolidated*200-need+
    (s.land.length===7?E.victoryConditions(s).filter(c=>c.ok).length*70:0);
};
let beam=[start];
for(let depth=0;depth<27;depth++){
  const next=[];
  for(const s of beam)for(const o of E.options(s)){
    if(o.reasons.length)continue;
    const r=E.step(s,o.id);if(!r.ok)continue;
    r.state.log=[];
    if(r.state.over?.type==='win'){
      console.log(JSON.stringify({won:true,year:r.state.year,history:r.state.history,stats:Object.fromEntries(Object.keys(E.STATS).map(k=>[k,r.state[k]]))},null,2));process.exit(0);
    }
    if(!r.state.over)next.push(r.state);
  }
  const seen=new Set();
  beam=next.sort((a,b)=>score(b)-score(a)).filter(s=>{const key=[s.land.join(','),s.rng,s.settlement,...Object.keys(E.STATS).map(k=>Math.floor(s[k]/5))].join(':');if(seen.has(key))return false;seen.add(key);return true;}).slice(0,450);
  console.log(JSON.stringify({depth,year:beam[0]?.year,best:beam[0]&&{land:beam[0].land,score:score(beam[0]),grain:beam[0].grain,institution:beam[0].institution}}));
  if(!beam.length)break;
}
console.log(JSON.stringify({won:false,best:beam[0]},null,2));
