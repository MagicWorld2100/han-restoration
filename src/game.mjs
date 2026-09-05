import '../public/engine.js';
export const E=globalThis.HanEngine;
export function createScenario(mode='campaign',seed=207){
  const s=E.create(seed);
  if(mode==='tutorial')Object.assign(s,{year:228,chapter:4,land:['jing','yi','han'],stability:{jing:82,yi:86,han:80},grain:120,people:75,army:78,trust:78,elite:70,wu:74,logistics:72,institution:64,fatigue:12});
  return s;
}
export function replayScenario(mode,seed,history){
  if(!['campaign','tutorial'].includes(mode)||!Array.isArray(history)||history.length>80)return null;
  let state=createScenario(mode,seed);
  for(const id of history){if(typeof id!=='string')return null;const r=E.step(state,id);if(!r.ok)return null;state=r.state;}
  return state;
}
export function campaignSource(state,target){
  const parent={yi:'jing',han:'yi',long:'han',guan:'long',north:'guan',wu:'north',jing:'yi'};
  const source=parent[target];return state.land.includes(source)?source:null;
}
export function factionAt(state,id){
  if(state.land.includes(id))return 'han';
  if(id==='wu'||id==='jing')return 'wu';
  if(id==='yi'&&state.year<214)return 'liu';
  if(id==='han'&&state.year<215)return 'zhang';
  return state.year<220?'cao':'wei';
}
export function serialize(mode,state){return JSON.stringify({schema:2,mode,seed:state.seed,history:state.history});}
export function restore(raw){
  try{const data=JSON.parse(raw);if(!data||data.schema!==2)return null;const state=replayScenario(data.mode,data.seed,data.history);return state?{mode:data.mode,state}:null;}catch(_){return null;}
}
