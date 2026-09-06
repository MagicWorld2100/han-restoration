import test from 'node:test';
import assert from 'node:assert/strict';
import E from '../public/engine.js';

function opened(){let s=E.create(207);for(const id of ['i0a','i1a','i2a','i3a'])s=E.step(s,id).state;return s;}
test('opening decisions have costs and do not grant unlimited command',()=>{
  const plan=E.step(E.create(),'i0a').state,prophecy=E.step(E.create(),'i0c').state;
  assert.ok(plan.grain<E.create().grain);assert.ok(plan.elite>prophecy.elite);
  assert.equal(E.create().year,207);assert.equal(opened().year,216);
});
test('an unaffordable or disconnected campaign cannot mutate state',()=>{
  const s=opened();s.grain=0;const before=JSON.stringify(s);
  const rejected=E.step(s,'campaign:han');assert.equal(rejected.ok,false);assert.equal(s.year,216);
  assert.equal(E.step(s,'campaign:north').ok,false);assert.equal(JSON.stringify(s),before);
  assert.equal(s.history.length,4);
});
test('identical seed and decisions replay exactly, malformed saves are rejected',()=>{
  let s=opened();for(const id of ['reform','train','roads','institution'])s=E.step(s,id).state;
  assert.deepEqual(E.replay(s.seed,s.history),s);
  assert.equal(E.replay(207,['<img onerror=alert(1)>']),null);
  assert.equal(E.replay(207,'bad'),null);
});
test('larger armies consume more food and poor administrative cooperation lowers revenue',()=>{
  const s=opened();assert.ok(E.upkeep({...s,army:95})>E.upkeep({...s,army:30}));
  assert.ok(E.production({...s,elite:15})<E.production({...s,elite:60}));
});
test('continuous emergency levies destroy the production base',()=>{
  let s=opened();while(!s.over&&s.year<234)s=E.step(s,'levy').state;
  assert.equal(s.over?.type,'collapse');assert.ok(s.people<15||s.trust<10);
});
test('a broken alliance loses the Jingzhou base through a state-dependent response',()=>{
  const s=opened();s.wu=20;const r=E.step(s,'rest');assert.equal(r.ok,true);assert.ok(!r.state.land.includes('jing'));
  assert.ok(r.entry.report.some(x=>x.includes('吴军夺取')));
});
test('succession requires institutional preparation, not just survival to a date',()=>{
  const s=opened();s.year=232;s.institution=25;s.grain=100;
  const fail=E.step(s,'rest').state;assert.equal(fail.over.type,'succession');
  const ready={...s,institution:60};const pass=E.step(ready,'rest').state;
  assert.equal(pass.successor,true);assert.equal(pass.over,null);
});
test('occupation alone cannot win, stable integration must survive two rounds',()=>{
  const s=opened();s.land=E.REGIONS.map(r=>r.id);s.stability=Object.fromEntries(s.land.map(id=>[id,35]));
  s.year=240;s.successor=true;s.institution=80;s.people=75;s.trust=80;s.elite=80;s.grain=150;s.fatigue=10;s.army=60;
  const unstable=E.step(s,'rest').state;assert.notEqual(unstable.over?.type,'win');
  s.stability=Object.fromEntries(s.land.map(id=>[id,90]));
  const first=E.step(s,'rest').state;assert.equal(first.consolidated,1);assert.equal(first.over,null);
  const second=E.step(first,'rest').state;assert.equal(second.over.type,'win');
  assert.equal(E.step(second,'rest').ok,false);
});
test('an end date cannot overwrite a completed two-round unification',()=>{
  const s=opened();s.land=E.REGIONS.map(r=>r.id);s.stability=Object.fromEntries(s.land.map(id=>[id,95]));
  Object.assign(s,{year:266,successor:true,institution:80,people:75,trust:80,elite:80,grain:150,fatigue:10,army:60,consolidated:1});
  assert.equal(E.step(s,'rest').state.over.type,'win');
});
test('high average stability cannot conceal a newly conquered unstable region',()=>{
  const s=opened();s.land=E.REGIONS.map(r=>r.id);s.stability=Object.fromEntries(s.land.map(id=>[id,100]));s.stability.wu=23;
  assert.ok(E.stability(s)>75);assert.equal(E.victoryConditions(s)[1].ok,false);
});
test('default challenge has a replayable unification route with succession and negotiated integration',()=>{
  const route=['i0a','i1a','i2a','i3a','institution','reform','train','campaign:han','roads','rest','reform','campaign:long','roads','rest','train','campaign:guan','diplomacy','diplomacy','train','campaign:north','diplomacy','diplomacy','diplomacy','settle','diplomacy','settle','rest'];
  const s=E.replay(207,route);assert.ok(s);assert.equal(s.over.type,'win');assert.equal(s.successor,true);assert.equal(s.year,262);assert.equal(s.land.length,7);assert.equal(s.settlement,2);
});
