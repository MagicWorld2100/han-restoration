import test from 'node:test';
import assert from 'node:assert/strict';
import {E,createScenario,replayScenario,campaignSource,factionAt,serialize,restore} from '../src/game.mjs';

test('formal 3D campaign starts with exactly the original constraints',()=>{
  assert.deepEqual(createScenario('campaign'),E.create(207));
  assert.equal(createScenario('campaign').grain,66);
  assert.equal(createScenario('campaign').year,207);
});
test('tutorial preset is isolated from formal runs and can finish its taught loop',()=>{
  const initial=createScenario('tutorial');
  assert.equal(initial.year,228);assert.equal(initial.land.length,3);
  const battle=E.step(initial,'campaign:long');assert.equal(battle.ok,true);
  assert.equal(battle.state.land.includes('long'),true);
  assert.ok(battle.state.stability.long<60);
  let s=battle.state;
  for(let i=0;i<2;i++){const r=E.step(s,'govern');assert.equal(r.ok,true);s=r.state;}
  assert.ok(s.stability.long>=60);assert.equal(s.successor,true);assert.equal(s.over,null);
  assert.equal(createScenario('campaign').year,207);assert.equal(initial.land.length,3);
});
test('3D save stores decisions, not untrusted stats, and survives committed march reload',()=>{
  const s=E.step(createScenario('tutorial'),'campaign:long').state;
  const raw=serialize('tutorial',s),restored=restore(raw);
  assert.deepEqual(restored,{mode:'tutorial',state:s});
  const edited=JSON.parse(raw);edited.grain=99999;edited.land=['jing','yi','han','long','guan','north','wu'];
  assert.deepEqual(restore(JSON.stringify(edited)).state,s);
  assert.equal(restored.state.history.filter(x=>x==='campaign:long').length,1);
});
test('invalid mode, history, schema and actions fail closed',()=>{
  assert.equal(replayScenario('cheat',207,[]),null);
  assert.equal(replayScenario('tutorial',207,new Array(81).fill('rest')),null);
  assert.equal(replayScenario('campaign',207,['campaign:north']),null);
  assert.equal(restore('{broken'),null);assert.equal(restore('{}'),null);
  assert.equal(restore(JSON.stringify({schema:2,mode:'tutorial',history:[{}]})),null);
});
test('campaign paths originate only from controlled staging regions',()=>{
  const s=createScenario('tutorial');assert.equal(campaignSource(s,'long'),'han');
  assert.equal(campaignSource(s,'north'),null);assert.equal(campaignSource(s,'invalid'),null);
});
test('flags distinguish early local rulers, later Wei, and a lost Jingzhou',()=>{
  const s=createScenario('campaign');assert.equal(factionAt(s,'yi'),'liu');
  assert.equal(factionAt(s,'han'),'zhang');assert.equal(factionAt(s,'north'),'cao');
  assert.equal(factionAt({...s,year:228},'north'),'wei');
  assert.equal(factionAt({...s,land:['yi']},'jing'),'wu');
});
