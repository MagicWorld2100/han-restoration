import * as THREE from 'three';

export const WIDTH=310,DEPTH=220;
const lerp=(a,b,t)=>a+(b-a)*t,clamp=(x,a=0,b=1)=>Math.min(b,Math.max(a,x));
const smooth=(a,b,x)=>{const t=clamp((x-a)/(b-a));return t*t*(3-2*t);};
function hash(x,z){const v=Math.sin(x*127.1+z*311.7)*43758.5453123;return v-Math.floor(v);}
export function noise(x,z){const ix=Math.floor(x),iz=Math.floor(z),fx=x-ix,fz=z-iz,u=fx*fx*(3-2*fx),v=fz*fz*(3-2*fz);return lerp(lerp(hash(ix,iz),hash(ix+1,iz),u),lerp(hash(ix,iz+1),hash(ix+1,iz+1),u),v);}
function fbm(x,z){let value=0,weight=.55;for(let i=0;i<5;i++){value+=noise(x,z)*weight;x=x*2.08+31.6;z=z*2.08-16.2;weight*=.49;}return value;}
export const locations={
  jing:{x:14,z:26},yi:{x:-65,z:51},han:{x:-48,z:3},long:{x:-68,z:-52},guan:{x:-16,z:-27},north:{x:55,z:-51},wu:{x:104,z:42}
};
const riverDefinitions=[
  {name:'长江',width:2.5,points:[[-160,71],[-137,55],[-117,60],[-100,69],[-82,59],[-64,41],[-44,48],[-22,35],[0,39],[27,41],[52,40],[75,51],[104,59],[136,45],[165,49]]},
  {name:'黄河',width:1.6,points:[[-120,-70],[-107,-87],[-84,-92],[-57,-82],[-51,-63],[-33,-50],[-19,-61],[2,-76],[24,-69],[38,-48],[65,-33],[90,-26],[121,-25],[165,-41]]}
];
export const rivers=riverDefinitions.map(r=>({...r,curve:new THREE.CatmullRomCurve3(r.points.map(([x,z])=>new THREE.Vector3(x,0,z)),false,'catmullrom',.45)}));
const riverLines=rivers.map(r=>({width:r.width,points:r.curve.getPoints(180)}));
export function riverDistance(x,z){let min=Infinity,width=2.5;for(const line of riverLines){for(let i=0;i<line.points.length-1;i++){const a=line.points[i],b=line.points[i+1],dx=b.x-a.x,dz=b.z-a.z,t=clamp(((x-a.x)*dx+(z-a.z)*dz)/(dx*dx+dz*dz));const d=Math.hypot(x-a.x-dx*t,z-a.z-dz*t);if(d<min){min=d;width=line.width;}}}return {distance:min,width};}
function rawHeight(x,z){
  const warp=fbm(x*.022,z*.022)*12;
  const n=fbm(x*.035,z*.035),ridge=1-Math.abs(2*fbm(x*.033+9,z*.033)-1);
  const qin=Math.exp(-Math.pow((z-(-12+Math.sin(x*.035)*5))/(7.5+warp*.3),2))*smooth(48,5,x)*smooth(-146,-100,x);
  const west=Math.exp(-Math.pow((x+129+Math.sin(z*.05)*9)/17,2));
  const north=Math.exp(-Math.pow((z+91+Math.sin(x*.04)*11)/20,2))*.85;
  const southwest=Math.exp(-((x+99)**2/1100+(z-83)**2/470));
  const eastHills=Math.exp(-((x-75)**2/1900+(z-5)**2/400))*.42;
  const peaks=(qin*25+west*31+north*31+southwest*22+eastHills*18)*(Math.pow(ridge,2.2)*.8+.3)*(n*.75+.6);
  const erosion=Math.abs(noise(x*.16+warp,z*.16)-.5)*1.4;
  return 3.5+n*5.5+peaks-erosion*Math.min(1,peaks/10);
}
const cityBase=Object.fromEntries(Object.entries(locations).map(([id,p])=>[id,Math.min(8,rawHeight(p.x,p.z))]));
function elevation(x,z){
  let h=rawHeight(x,z);const river=riverDistance(x,z);
  h=lerp(1.05,h,smooth(river.width*.72,river.width+4.5,river.distance));
  for(const [id,p] of Object.entries(locations)){const d=Math.hypot(x-p.x,z-p.z);if(d<11)h=lerp(cityBase[id],h,smooth(7,11,d));}
  const edge=Math.min(WIDTH/2-Math.abs(x),DEPTH/2-Math.abs(z));
  h*=smooth(0,9,edge);
  return h;
}
let heightGrid,gridX=320,gridZ=226;
export function heightAt(x,z){
  if(!heightGrid)return elevation(x,z);
  const gx=clamp((x/WIDTH+.5)*gridX,0,gridX-.001),gz=clamp((z/DEPTH+.5)*gridZ,0,gridZ-.001),ix=Math.floor(gx),iz=Math.floor(gz),fx=gx-ix,fz=gz-iz,w=gridX+1;
  return lerp(lerp(heightGrid[iz*w+ix],heightGrid[iz*w+ix+1],fx),lerp(heightGrid[(iz+1)*w+ix],heightGrid[(iz+1)*w+ix+1],fx),fz);
}
export function makeTerrain(scene,mobile=false){
  gridX=mobile?260:360;gridZ=mobile?184:255;
  heightGrid=new Float32Array((gridX+1)*(gridZ+1));
  const geometry=new THREE.PlaneGeometry(WIDTH,DEPTH,gridX,gridZ);geometry.rotateX(-Math.PI/2);
  const positions=geometry.attributes.position,colors=new Float32Array(positions.count*3),color=new THREE.Color();
  for(let i=0;i<positions.count;i++){const x=positions.getX(i),z=positions.getZ(i),h=elevation(x,z);positions.setY(i,h);heightGrid[i]=h;}
  geometry.computeVertexNormals();const normals=geometry.attributes.normal;
  const grass=new THREE.Color('#799565'),meadow=new THREE.Color('#a1a778'),forest=new THREE.Color('#526d50'),rock=new THREE.Color('#8e9585'),snow=new THREE.Color('#dae0ce'),sand=new THREE.Color('#b6b192');
  for(let i=0;i<positions.count;i++){
    const x=positions.getX(i),z=positions.getZ(i),h=positions.getY(i),slope=1-normals.getY(i),n=fbm(x*.19,z*.19);
    color.copy(grass).lerp(meadow,smooth(.35,.7,n)*.7).lerp(forest,smooth(.4,.7,fbm(x*.08+6,z*.08))*.45);
    color.lerp(rock,smooth(.12,.55,slope)*.94);color.lerp(snow,smooth(27,38,h)*.78);
    if(h<2.8)color.lerp(sand,(1-smooth(1,2.8,h))*.9);
    color.multiplyScalar(.86+n*.28);colors.set([color.r,color.g,color.b],i*3);
  }
  geometry.setAttribute('color',new THREE.BufferAttribute(colors,3));
  const material=new THREE.MeshStandardMaterial({vertexColors:true,roughness:.96,metalness:0});
  material.onBeforeCompile=shader=>{
    shader.vertexShader=shader.vertexShader.replace('#include <common>','#include <common>\nvarying vec3 vTerrainWorld;').replace('#include <begin_vertex>','#include <begin_vertex>\nvTerrainWorld=position;');
    shader.fragmentShader=shader.fragmentShader.replace('#include <common>',`#include <common>
      varying vec3 vTerrainWorld;
      float terrainHash(vec3 p){return fract(sin(dot(p,vec3(127.1,311.7,74.7)))*43758.5453);}
      float terrainNoise(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(mix(terrainHash(i),terrainHash(i+vec3(1,0,0)),f.x),mix(terrainHash(i+vec3(0,1,0)),terrainHash(i+vec3(1,1,0)),f.x),f.y),mix(mix(terrainHash(i+vec3(0,0,1)),terrainHash(i+vec3(1,0,1)),f.x),mix(terrainHash(i+vec3(0,1,1)),terrainHash(i+vec3(1,1,1)),f.x),f.y),f.z);}
    `).replace('#include <color_fragment>',material.userData.simple?`#include <color_fragment>
      diffuseColor.rgb*=.95+terrainHash(floor(vTerrainWorld*18.))*.06;
    `:`#include <color_fragment>
      float detail=terrainNoise(vTerrainWorld*2.8)*.12+terrainHash(floor(vTerrainWorld*24.))*.035;
      diffuseColor.rgb*=.91+detail;
    `);
  };
  material.customProgramCacheKey=()=>material.userData.simple?'terrain-simple':'terrain-detailed';
  const terrain=new THREE.Mesh(geometry,material);terrain.receiveShadow=true;terrain.castShadow=true;terrain.name='mountain-terrain';scene.add(terrain);
  // A stone foundation gives the whole landscape a tangible edge when orbited.
  const foundation=new THREE.Mesh(new THREE.BoxGeometry(WIDTH,3.2,DEPTH),new THREE.MeshStandardMaterial({color:'#636e60',roughness:1}));foundation.position.y=-1.9;foundation.receiveShadow=true;scene.add(foundation);
  return terrain;
}
export function makeWater(scene){
  const uniforms={uTime:{value:0},uColor:{value:new THREE.Color('#428a8d')},uSun:{value:new THREE.Vector3(-.6,.75,.45)}};
  const material=new THREE.ShaderMaterial({uniforms,transparent:false,side:THREE.DoubleSide,
    vertexShader:`varying vec3 vWorld;varying vec2 vUv;void main(){vUv=uv;vec4 w=modelMatrix*vec4(position,1.);vWorld=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}`,
    fragmentShader:`uniform float uTime;uniform vec3 uColor;uniform vec3 uSun;varying vec3 vWorld;varying vec2 vUv;
      void main(){float a=sin(vWorld.x*1.7+vWorld.z*.8-uTime*1.2),b=sin(vWorld.z*2.5-vWorld.x*.6+uTime*.85);
      vec3 n=normalize(vec3(a*.10,1.,b*.10)),v=normalize(cameraPosition-vWorld);float fres=pow(1.-max(dot(n,v),0.),3.);
      float sparkle=pow(max(dot(reflect(-normalize(uSun),n),v),0.),95.);float edge=smoothstep(0.,.14,vUv.x)*smoothstep(0.,.14,1.-vUv.x);
      vec3 col=mix(vec3(.34,.52,.48),uColor,edge);col=mix(col,vec3(.64,.75,.71),fres*.6);col+=vec3(.92,.80,.55)*sparkle*.7;
      col+=(a+b)*.012;gl_FragColor=vec4(col,1.);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
      }`});
  for(const river of rivers){
    const points=river.curve.getPoints(350),verts=[],uvs=[],indices=[];
    points.forEach((p,i)=>{const dir=river.curve.getTangent(i/(points.length-1)),normal=new THREE.Vector3(-dir.z,0,dir.x),w=river.width*(.85+noise(i*.08,3)*.3);for(const side of [-1,1]){verts.push(clamp(p.x+normal.x*w*side,-WIDTH/2+.05,WIDTH/2-.05),1.22,clamp(p.z+normal.z*w*side,-DEPTH/2+.05,DEPTH/2-.05));uvs.push((side+1)/2,i/20);}if(i<points.length-1){const n=i*2;indices.push(n,n+2,n+1,n+1,n+2,n+3);}});
    const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.Float32BufferAttribute(verts,3));geo.setAttribute('uv',new THREE.Float32BufferAttribute(uvs,2));geo.setIndex(indices);geo.computeVertexNormals();const mesh=new THREE.Mesh(geo,material);mesh.name=river.name;scene.add(mesh);
  }
  return {update:t=>{uniforms.uTime.value=t;}};
}
export function seededRandom(seed){let s=seed;return()=>{s=(Math.imul(s,1664525)+1013904223)>>>0;return s/4294967296;};}
export function makeVegetation(scene,mobile=false){
  const rand=seededRandom(3287),count=mobile?1600:2600,chunks=new Map();let placed=0,attempts=0;
  while(placed<count&&attempts<count*10){attempts++;const x=(rand()-.5)*(WIDTH-22),z=(rand()-.5)*(DEPTH-18),h=heightAt(x,z);
    if(h<3||h>26||Object.values(locations).some(p=>Math.hypot(x-p.x,z-p.z)<9)||noise(x*.09,z*.09)<.31)continue;
    const cx=Math.floor(x/36)*36+18,cz=Math.floor(z/36)*36+18,key=cx+':'+cz;
    if(!chunks.has(key))chunks.set(key,{x:cx,z:cz,trees:[]});
    chunks.get(key).trees.push({x,z,h,size:.6+rand()*1.12,angle:rand()*Math.PI*2,color:new THREE.Color().setHSL(.235+rand()*.065,.20+rand()*.16,.24+rand()*.14)});placed++;
  }
  const leaf=new THREE.MeshStandardMaterial({color:'#719565',roughness:.98}),bark=new THREE.MeshStandardMaterial({color:'#665b43',roughness:1});
  const high=new THREE.SphereGeometry(1,22,16),low=new THREE.SphereGeometry(1,8,6),trunkGeo=new THREE.CylinderGeometry(.10,.16,1,6),dummy=new THREE.Object3D(),levels=[];
  for(const chunk of chunks.values()){
    // Spatial LOD lets a city close-up render its nearby forest, not every tree in China.
    const lod=new THREE.LOD();lod.position.set(chunk.x,0,chunk.z);
    for(const [index,geo] of [high,low].entries()){
      const group=new THREE.Group(),crowns=new THREE.InstancedMesh(geo,leaf,chunk.trees.length*2),trunks=new THREE.InstancedMesh(trunkGeo,bark,chunk.trees.length);
      chunk.trees.forEach((tree,i)=>{const {x,z,h,size,angle,color}=tree;
        dummy.position.set(x-chunk.x,h+size*.75,z-chunk.z);dummy.scale.set(size,size*1.5,size);dummy.rotation.set(0,angle,0);dummy.updateMatrix();trunks.setMatrixAt(i,dummy.matrix);
        for(let j=0;j<2;j++){dummy.position.set(x-chunk.x+(j?.28:0)*size,h+size*(1.5+j*.58),z-chunk.z);dummy.scale.set(size*(j?.72:1),size*(j?.94:1.18),size*(j?.74:1));dummy.updateMatrix();crowns.setMatrixAt(i*2+j,dummy.matrix);crowns.setColorAt(i*2+j,color);}
      });
      crowns.castShadow=true;crowns.receiveShadow=true;crowns.computeBoundingSphere();trunks.computeBoundingSphere();group.add(crowns,trunks);lod.addLevel(group,index?105:0,0.12);levels.push({crowns,trunks,count:chunk.trees.length,trees:chunk.trees,hidden:new Uint8Array(chunk.trees.length),originalCrowns:Float32Array.from(crowns.instanceMatrix.array),originalTrunks:Float32Array.from(trunks.instanceMatrix.array)});
    }
    scene.add(lod);
  }
  const rocks=new THREE.InstancedMesh(new THREE.IcosahedronGeometry(1,1),new THREE.MeshStandardMaterial({color:'#898d7b',roughness:1}),220);
  for(let i=0;i<220;i++){const x=(rand()-.5)*280,z=(rand()-.5)*192,h=heightAt(x,z);dummy.position.set(x,h,z);dummy.scale.set(.4+rand(),.3+rand()*1.1,.4+rand());dummy.rotation.set(rand(),rand()*6,rand());dummy.updateMatrix();rocks.setMatrixAt(i,dummy.matrix);}rocks.castShadow=true;scene.add(rocks);
  const originalRocks=Float32Array.from(rocks.instanceMatrix.array),hiddenRocks=new Uint8Array(220);let clearing=null;
  const mask=(mesh,original,index,hidden)=>{const offset=index*16;mesh.instanceMatrix.array.set(original.subarray(offset,offset+16),offset);if(hidden)for(const i of [0,1,2,4,5,6,8,9,10])mesh.instanceMatrix.array[offset+i]=0;};
  return {trees:placed,
    setClearing(center,radius=0){
      const x=center?.x||0,z=center?.z||0;if(clearing&&clearing.radius===radius&&Math.hypot(x-clearing.x,z-clearing.z)<.3)return false;
      clearing={x,z,radius};
      for(const level of levels){let changed=false;level.trees.forEach((tree,i)=>{const hide=radius>0&&Math.hypot(tree.x-x,tree.z-z)<radius?1:0;if(hide===level.hidden[i])return;level.hidden[i]=hide;mask(level.trunks,level.originalTrunks,i,hide);mask(level.crowns,level.originalCrowns,i*2,hide);mask(level.crowns,level.originalCrowns,i*2+1,hide);changed=true;});if(changed){level.crowns.instanceMatrix.needsUpdate=true;level.trunks.instanceMatrix.needsUpdate=true;}}
      let changed=false;for(let i=0;i<220;i++){const hide=radius>0&&Math.hypot(originalRocks[i*16+12]-x,originalRocks[i*16+14]-z)<radius?1:0;if(hide!==hiddenRocks[i]){hiddenRocks[i]=hide;mask(rocks,originalRocks,i,hide);changed=true;}}if(changed)rocks.instanceMatrix.needsUpdate=true;
      return true;
    },
    setQuality(quality){for(const level of levels){const count=quality==='smooth'?Math.max(1,Math.ceil(level.count*.55)):level.count;level.crowns.count=count*2;level.trunks.count=count;}}
  };
}
export function groundCurve(points){
  const curve=new THREE.CatmullRomCurve3(points.map(([x,z])=>new THREE.Vector3(x,0,z)),false,'catmullrom',.3);
  const samples=curve.getPoints(150).map(p=>new THREE.Vector3(p.x,heightAt(p.x,p.z)+.22,p.z));
  return new THREE.CatmullRomCurve3(samples);
}
export const ROUTES={
  'yi-han':[[-65,51],[-72,38],[-62,29],[-60,18],[-48,3]],
  'han-long':[[-48,3],[-64,-5],[-80,-16],[-77,-31],[-68,-52]],
  'long-guan':[[-68,-52],[-57,-44],[-44,-36],[-30,-40],[-16,-27]],
  'guan-north':[[-16,-27],[4,-33],[23,-30],[39,-42],[55,-51]],
  'jing-yi':[[14,26],[-8,24],[-28,30],[-44,34],[-65,51]],
  'jing-north':[[14,26],[22,6],[33,-10],[45,-28],[55,-51]],
  'jing-wu':[[14,26],[39,30],[62,26],[84,35],[104,42]],
  'north-wu':[[55,-51],[74,-30],[80,-4],[92,21],[104,42]]
};
