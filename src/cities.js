import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { heightAt,locations,seededRandom } from './terrain.js';

const materials={
  stone:new THREE.MeshStandardMaterial({color:'#acaa8b',roughness:.95}),
  pale:new THREE.MeshStandardMaterial({color:'#d4cbb0',roughness:.95}),
  dark:new THREE.MeshStandardMaterial({color:'#3d4c46',roughness:.84}),
  wood:new THREE.MeshStandardMaterial({color:'#815841',roughness:.86}),
  roof:new THREE.MeshStandardMaterial({color:'#425c59',roughness:.67,metalness:.12,side:THREE.DoubleSide}),
  tiles:new THREE.MeshStandardMaterial({color:'#627674',roughness:.8}),
  road:new THREE.MeshStandardMaterial({color:'#b4ab89',roughness:1})
};
materials.roof.onBeforeCompile=shader=>{
  shader.vertexShader=shader.vertexShader.replace('#include <common>','#include <common>\nvarying vec2 vRoofUV;').replace('#include <begin_vertex>','#include <begin_vertex>\nvRoofUV=uv;');
  shader.fragmentShader=shader.fragmentShader.replace('#include <common>','#include <common>\nvarying vec2 vRoofUV;').replace('#include <color_fragment>',`#include <color_fragment>
    float groove=smoothstep(.03,.16,abs(fract(vRoofUV.x*28.)-.5));
    float course=smoothstep(.015,.08,fract(vRoofUV.y*12.));
    float fade=1.-smoothstep(.35,.7,max(fwidth(vRoofUV.x)*28.,fwidth(vRoofUV.y)*12.));
    diffuseColor.rgb*=mix(1.,mix(.78,1.08,groove)*mix(.88,1.,course),fade);
  `);
};
function roofGeometry(w,d,h){
  const g=new THREE.PlaneGeometry(w,d,20,14);g.rotateX(-Math.PI/2);const p=g.attributes.position;
  for(let i=0;i<p.count;i++){const x=p.getX(i),z=p.getZ(i),v=Math.abs(z)/(d*.5),end=Math.abs(x)/(w*.5);const y=h*(1-Math.pow(v,.74))+.19*Math.pow(v,7)+.18*Math.pow(end,8)*Math.pow(v,4);p.setY(i,y);}g.computeVertexNormals();return g;
}
const flagTextures={};
function flagTexture(faction){
  if(flagTextures[faction])return flagTextures[faction];
  const c=document.createElement('canvas');c.width=256;c.height=320;const x=c.getContext('2d');
  x.fillStyle=faction==='han'?'#577d68':faction==='wu'?'#a77e5e':'#65717d';x.fillRect(0,0,256,320);
  x.strokeStyle='#ddc28d';x.lineWidth=7;x.strokeRect(15,15,226,290);x.font='bold 140px serif';x.fillStyle='#f1e8cf';x.textAlign='center';x.textBaseline='middle';x.fillText(({han:'汉',wu:'吴',wei:'魏',cao:'曹',liu:'刘',zhang:'张'})[faction]||'魏',128,155);
  const tex=new THREE.CanvasTexture(c);tex.colorSpace=THREE.SRGBColorSpace;tex.anisotropy=4;flagTextures[faction]=tex;return tex;
}
export function makeFlag(faction='han',scale=1){
  const group=new THREE.Group();const pole=new THREE.Mesh(new THREE.CylinderGeometry(.04,.05,4,8),materials.wood);pole.position.y=2;group.add(pole);
  const flag=new THREE.Mesh(new THREE.PlaneGeometry(1.2,1.5,10,10),new THREE.MeshStandardMaterial({map:flagTexture(faction),side:THREE.DoubleSide,roughness:.92}));flag.position.set(.65,3,0);group.add(flag);
  const p=flag.geometry.attributes.position,original=Float32Array.from(p.array);group.scale.setScalar(scale);
  group.userData.update=t=>{for(let i=0;i<p.count;i++){const x=original[i*3],y=original[i*3+1];p.setZ(i,Math.sin(x*3.4-y*1.6+t*2.3)*(x+.6)*.14);}p.needsUpdate=true;};
  group.userData.setFaction=f=>{flag.material.map=flagTexture(f);flag.material.needsUpdate=true;};return group;
}
export function buildCity(id,scene){
  const group=new THREE.Group(),batches={},rand=seededRandom(id.split('').reduce((n,c)=>n+c.charCodeAt(0),0)),size=id==='north'?1.27:id==='yi'?1.12:1;
  function put(geo,mat,x,y,z,rotation=0){const m=new THREE.Matrix4().compose(new THREE.Vector3(x,y,z),new THREE.Quaternion().setFromEuler(new THREE.Euler(0,rotation,0)),new THREE.Vector3(1,1,1));geo.applyMatrix4(m);(batches[mat]??=[]).push(geo);}
  const box=(w,h,d,mat,x,y,z,r=0)=>put(new THREE.BoxGeometry(w,h,d),mat,x,y,z,r);
  function house(x,z,w=1.6,d=1.2,h=1,r=0){
    box(w,h,d,'pale',x,h/2+.12,z,r);box(w+.12,.12,d+.14,'wood',x,h+.12,z,r);
    put(roofGeometry(w+.55,d+.55,.72),'roof',x,h+.18,z,r);
    // Deep-set dark openings and timber beams remain visible at city zoom.
    const dx=Math.sin(r)*(d*.5+.012),dz=Math.cos(r)*(d*.5+.012);box(.33,.65,.03,'dark',x+dx,.5,z+dz,r);
    for(const sign of [-1,1])box(.08,h+.1,.08,'wood',x+Math.cos(r)*w*.36*sign,h/2,z-Math.sin(r)*w*.36*sign,r);
  }
  function tower(x,z){
    box(1.55,2.1,1.55,'stone',x,1.05,z);box(1.75,.2,1.75,'pale',x,2.15,z);box(1.3,.85,1.3,'wood',x,2.65,z);
    for(const off of [-.38,.38])box(.28,.4,.025,'dark',x+off,2.7,z+.66);
    put(roofGeometry(2.2,2.2,.95),'roof',x,3.07,z);
    box(.11,.14,1.9,'tiles',x,4.04,z,Math.PI/2);
  }
  const half=6.2;
  box(12.8,.28,12.8,'stone',0,0,0);
  box(.8,1.45,12.1,'stone',-half,.78,0);box(.8,1.45,12.1,'stone',half,.78,0);box(12.1,1.45,.8,'stone',0,.78,-half);
  box(4.85,1.45,.8,'stone',-3.55,.78,half);box(4.85,1.45,.8,'stone',3.55,.78,half);
  for(let i=-5;i<=5;i++){for(const sign of [-1,1]){box(.45,.38,.78,'stone',i,1.67,sign*half);box(.78,.38,.45,'stone',sign*half,1.67,i);}}
  for(const x of [-half,half])for(const z of [-half,half])tower(x,z);
  box(2.7,.7,1.6,'wood',0,2.02,half);put(roofGeometry(3.25,2.25,1.02),'roof',0,2.37,half);
  box(.54,1.6,1.3,'stone',-1.1,.8,half);box(.54,1.6,1.3,'stone',1.1,.8,half);
  const arch=new THREE.TorusGeometry(.88,.21,8,24,Math.PI);put(arch,'stone',0,1.0,half+.42);
  box(1.15,.045,11.5,'road',0,.17,0);box(11.5,.045,.8,'road',0,.17,1.1);
  for(let row=0;row<3;row++)for(const side of [-1,1])for(let col=0;col<2;col++){
    const x=side*(2+col*2.3),z=2.5-row*2.4;house(x,z,1.5+rand()*.35,1.05+rand()*.25,.72+rand()*.42,side<0?Math.PI/2:-Math.PI/2);
  }
  // A raised ceremonial compound with colonnade and two layers of curved eaves.
  box(4.5,.42,2.7,'stone',0,.35,-3.75);box(3.7,1.45,2.15,'pale',0,1.27,-3.75);
  for(let i=-2;i<=2;i++)box(.13,1.7,.13,'wood',i*.72,1.35,-2.57);
  put(roofGeometry(4.9,3.3,1.1),'roof',0,2.04,-3.75);box(2.4,.65,1.2,'wood',0,2.95,-3.75);put(roofGeometry(3.0,2.15,.95),'roof',0,3.28,-3.75);
  for(let step=0;step<4;step++)box(2.1,.09,1.1-step*.2,'pale',0,.18+step*.08,-1.9-step*.1);
  for(const [name,geos] of Object.entries(batches)){
    const mesh=new THREE.Mesh(mergeGeometries(geos,false),materials[name]);mesh.castShadow=true;mesh.receiveShadow=true;group.add(mesh);geos.forEach(g=>g.dispose());
  }
  group.scale.setScalar(size);
  const p=locations[id];group.position.set(p.x,heightAt(p.x,p.z)+.16,p.z);scene.add(group);
  const flag=makeFlag(id==='wu'?'wu':'wei',1.0);flag.position.set(-1,3.4,2.2);group.add(flag);
  const halo=new THREE.Mesh(new THREE.RingGeometry(8.1*size,8.22*size,96),new THREE.MeshBasicMaterial({color:'#d9bd7f',transparent:true,opacity:0,side:THREE.DoubleSide,depthWrite:false}));halo.rotation.x=-Math.PI/2;halo.position.copy(group.position);halo.position.y+=.22;scene.add(halo);
  const hit=new THREE.Mesh(new THREE.CylinderGeometry(9*size,9*size,7,16),new THREE.MeshBasicMaterial({visible:false}));hit.position.copy(group.position);hit.position.y+=3;hit.userData.city=id;scene.add(hit);
  // Patchwork fields are geometry, following nearby terrain rather than a bitmap map.
  const fieldGeos=[];for(let i=0;i<14;i++){const a=rand()*Math.PI*2,r=10.5+rand()*4.5,x=p.x+Math.cos(a)*r,z=p.z+Math.sin(a)*r,y=heightAt(x,z);if(y<3)continue;const geom=new THREE.PlaneGeometry(2.4,1.4,5,3);geom.rotateX(-Math.PI/2);const pos=geom.attributes.position,colors=new Float32Array(pos.count*3),color=new THREE.Color(['#888b4f','#738357','#9e975f','#59704b'][Math.floor(rand()*4)]);for(let j=0;j<pos.count;j++){const xx=x+pos.getX(j),zz=z+pos.getZ(j);pos.setXYZ(j,xx,heightAt(xx,zz)+.08,zz);colors.set([color.r,color.g,color.b],j*3);}geom.setAttribute('color',new THREE.BufferAttribute(colors,3));geom.computeVertexNormals();fieldGeos.push(geom);}
  const fieldMat=new THREE.MeshStandardMaterial({vertexColors:true,roughness:1});
  fieldMat.onBeforeCompile=shader=>{shader.vertexShader=shader.vertexShader.replace('#include <common>','#include <common>\nvarying vec2 vFieldUV;').replace('#include <begin_vertex>','#include <begin_vertex>\nvFieldUV=uv;');shader.fragmentShader=shader.fragmentShader.replace('#include <common>','#include <common>\nvarying vec2 vFieldUV;').replace('#include <color_fragment>','#include <color_fragment>\ndiffuseColor.rgb*=.78+.22*smoothstep(.12,.32,fract(vFieldUV.x*14.));');};
  if(fieldGeos.length){const fields=new THREE.Mesh(mergeGeometries(fieldGeos),fieldMat);fields.receiveShadow=true;scene.add(fields);fieldGeos.forEach(g=>g.dispose());}
  let currentFaction=null;
  return {id,group,flag,halo,hit,position:group.position.clone(),setFaction(faction){if(currentFaction!==faction){flag.userData.setFaction(faction);currentFaction=faction;}},select(on){halo.material.opacity=on?.72:0;},update(t){flag.userData.update(t);}};
}
export function makeArmy(){
  const group=new THREE.Group(),armor=new THREE.MeshStandardMaterial({color:'#69766a',roughness:.67,metalness:.25}),cloth=new THREE.MeshStandardMaterial({color:'#537157',roughness:.92}),skin=new THREE.MeshStandardMaterial({color:'#c7ad83',roughness:.9}),wood=new THREE.MeshStandardMaterial({color:'#6a5238',roughness:.95});
  const soldiers=[];
  for(let row=0;row<5;row++)for(let col=0;col<3;col++){
    const g=new THREE.Group(),body=new THREE.Mesh(new THREE.CylinderGeometry(.15,.23,.55,8),armor);body.position.y=.65;g.add(body);
    const head=new THREE.Mesh(new THREE.SphereGeometry(.125,10,8),skin);head.position.y=1.04;g.add(head);
    const helmet=new THREE.Mesh(new THREE.SphereGeometry(.145,10,8,0,Math.PI*2,0,Math.PI/2),armor);helmet.position.y=1.07;g.add(helmet);
    const legs=[];for(const sign of [-1,1]){const leg=new THREE.Mesh(new THREE.CylinderGeometry(.065,.07,.42,6),cloth);leg.position.set(sign*.09,.22,0);g.add(leg);legs.push(leg);}
    const spear=new THREE.Mesh(new THREE.CylinderGeometry(.022,.025,1.8,5),wood);spear.position.set(.27,.94,0);g.add(spear);
    g.position.set((col-1)*.67,0,-row*.86);group.add(g);soldiers.push({g,legs,row,col});
  }
  const flag=makeFlag('han',.65);flag.position.set(0,.6,.3);group.add(flag);
  const cart=new THREE.Group();const bed=new THREE.Mesh(new THREE.BoxGeometry(.9,.32,1.25),wood);bed.position.y=.5;cart.add(bed);
  for(const x of [-.55,.55]){const wheel=new THREE.Mesh(new THREE.TorusGeometry(.3,.055,6,14),wood);wheel.rotation.y=Math.PI/2;wheel.position.set(x,.35,0);cart.add(wheel);}
  const sacks=new THREE.Mesh(new THREE.SphereGeometry(.45,12,8),new THREE.MeshStandardMaterial({color:'#b6a06d',roughness:1}));sacks.scale.set(1,.6,1.3);sacks.position.y=.8;cart.add(sacks);cart.position.z=-5.5;group.add(cart);
  group.scale.setScalar(1.4);group.traverse(o=>{if(o.isMesh)o.castShadow=false;});
  group.userData.update=t=>{flag.userData.update(t);const c=Math.cos(group.rotation.y),s=Math.sin(group.rotation.y),scale=group.scale.x;const ground=(x,z)=>(heightAt(group.position.x+(c*x+s*z)*scale,group.position.z+(-s*x+c*z)*scale)+.2-group.position.y)/scale;soldiers.forEach(({g,legs,row})=>{const a=Math.sin(t*8+row*.7);g.position.y=ground(g.position.x,g.position.z)+Math.abs(a)*.04;legs[0].rotation.x=a*.3;legs[1].rotation.x=-a*.3;});cart.position.y=ground(cart.position.x,cart.position.z);};
  group.userData.dispose=()=>{const geos=new Set();group.traverse(o=>{if(o.geometry)geos.add(o.geometry);});geos.forEach(g=>g.dispose());for(const m of [armor,cloth,skin,wood,sacks.material,flag.children[1].material])m.dispose();};
  return group;
}
