import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { makeTerrain,makeWater,makeVegetation,heightAt,locations,ROUTES,groundCurve,seededRandom } from './terrain.js';
import { buildCity } from './cities.js';
import { CampaignSequence } from './battle.js';
import { factionAt } from './game.mjs';

const ease=t=>1-Math.pow(1-t,3);
const regionNames={jing:'荆州',yi:'成都',han:'汉中',long:'陇右',guan:'长安',north:'中原',wu:'建业'};
export class World {
  constructor(canvas,labels,onSelect,preferences={}){
    this.canvas=canvas;this.labelsRoot=labels;this.onSelect=onSelect;this.mobile=innerWidth<760;this.frame=0;this.elapsed=0;this.quality='fine';this.running=true;this.mapMode='terrain';this.cities={};this.labels={};this.routeCurves={};this.motion=null;this.cameraTween=null;this.pendingResize=true;this.homeTarget=new THREE.Vector3(-5,3,-3);
    this.scene=new THREE.Scene();this.scene.background=new THREE.Color('#9faf9c');this.scene.fog=new THREE.Fog('#aabbab',300,650);
    this.renderer=new THREE.WebGLRenderer({canvas,antialias:true,alpha:false,powerPreference:'high-performance',preserveDrawingBuffer:true});
    const gl=this.renderer.getContext(),debug=gl.getExtension('WEBGL_debug_renderer_info');this.software=debug?/swiftshader|llvmpipe|software rasterizer/i.test(gl.getParameter(debug.UNMASKED_RENDERER_WEBGL)):false;
    this.quality=['fine','smooth'].includes(preferences.quality)?preferences.quality:this.software?'smooth':'fine';
    this.renderer.setPixelRatio(this.quality==='smooth'?1:Math.min(devicePixelRatio||1,this.mobile?1.6:1.75));this.renderer.outputColorSpace=THREE.SRGBColorSpace;this.renderer.toneMapping=THREE.ACESFilmicToneMapping;this.renderer.toneMappingExposure=.96;
    this.renderer.shadowMap.enabled=this.quality==='fine';this.renderer.shadowMap.type=THREE.PCFShadowMap;
    this.camera=new THREE.PerspectiveCamera(this.mobile?52:38,innerWidth/innerHeight,.5,1600);this.camera.position.set(157,162,214);
    this.controls=new OrbitControls(this.camera,canvas);this.controls.target.copy(this.homeTarget);this.controls.enableDamping=true;this.controls.dampingFactor=.065;this.controls.minDistance=28;this.controls.maxDistance=395;this.controls.maxPolarAngle=Math.PI*.445;this.controls.minPolarAngle=Math.PI*.08;this.controls.rotateSpeed=.45;this.controls.zoomSpeed=.85;this.controls.panSpeed=.6;this.controls.enablePan=true;this.controls.screenSpacePanning=false;this.controls.mouseButtons={LEFT:THREE.MOUSE.ROTATE,MIDDLE:THREE.MOUSE.DOLLY,RIGHT:THREE.MOUSE.PAN};this.controls.touches={ONE:THREE.TOUCH.ROTATE,TWO:THREE.TOUCH.DOLLY_PAN};
    this.controls.addEventListener('start',()=>{this.cameraTween=null;this.pausedScene=false;this.lastInput=performance.now();});
    this.controls.maxDistance=this.mobile?850:450;
    const hemi=new THREE.HemisphereLight('#dbe9e2','#677a4c',1.4);this.scene.add(hemi);
    const sun=new THREE.DirectionalLight('#fff1cf',2.8);sun.position.set(-95,160,65);sun.castShadow=true;sun.shadow.mapSize.set(this.mobile?2048:3072,this.mobile?2048:3072);sun.shadow.camera.left=-195;sun.shadow.camera.right=195;sun.shadow.camera.top=160;sun.shadow.camera.bottom=-160;sun.shadow.camera.near=1;sun.shadow.camera.far=410;sun.shadow.bias=-.00015;sun.shadow.normalBias=.25;this.scene.add(sun);
    this.sun=sun;const fill=new THREE.DirectionalLight('#afd5da',.65);fill.position.set(80,50,-110);this.scene.add(fill);
    this.scene.environmentIntensity=.18;if(this.quality==='fine'){this.ensureEnvironment();this.scene.environment=this.environment.texture;}
    this.terrain=makeTerrain(this.scene,this.mobile);this.water=makeWater(this.scene);this.vegetation=makeVegetation(this.scene,this.mobile);
    this.vegetation.setQuality(this.quality);this.terrain.material.userData.simple=this.quality==='smooth';
    this.buildRoads();for(const id of Object.keys(locations)){this.cities[id]=buildCity(id,this.scene);this.createLabel(id);}
    this.buildAtmosphere();this.buildPoliticalBorders();
    this.raycaster=new THREE.Raycaster();this.pointer=new THREE.Vector2();let down=null;
    canvas.addEventListener('pointerdown',e=>{down={x:e.clientX,y:e.clientY};});
    canvas.addEventListener('pointerup',e=>{if(!down||Math.hypot(e.clientX-down.x,e.clientY-down.y)>8)return;const rect=canvas.getBoundingClientRect();this.pointer.set((e.clientX-rect.left)/rect.width*2-1,-(e.clientY-rect.top)/rect.height*2+1);this.raycaster.setFromCamera(this.pointer,this.camera);const hits=this.raycaster.intersectObjects(Object.values(this.cities).map(c=>c.hit),false);if(hits[0])this.onSelect(hits[0].object.userData.city);down=null;});
    canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();this.running=false;this.finishCampaign(true);window.dispatchEvent(new CustomEvent('world-context-lost'));});
    this.resizeObserver=new ResizeObserver(()=>{this.pendingResize=true;});this.resizeObserver.observe(canvas.parentElement);
    this.clock=new THREE.Timer();this.clock.connect(document);this.resize();this.controls.update();this.renderer.render(this.scene,this.camera);this.renderer.shadowMap.autoUpdate=false;
    this.animate=this.animate.bind(this);this.animation=requestAnimationFrame(this.animate);
  }
  ensureEnvironment(){if(this.environment)return;const pmrem=new THREE.PMREMGenerator(this.renderer),room=new RoomEnvironment();this.environment=pmrem.fromScene(room,.03);room.dispose();pmrem.dispose();}
  createLabel(id){const el=document.createElement('button');el.className='city-label';el.dataset.city=id;el.innerHTML='<span class="city-emblem">'+(id==='wu'?'吴':id==='jing'?'汉':'魏')+'</span><span class="city-name">'+regionNames[id]+'</span><span class="city-caption"></span>';el.setAttribute('aria-label','选择'+regionNames[id]);el.addEventListener('click',()=>this.onSelect(id));this.labelsRoot.appendChild(el);this.labels[id]=el;}
  buildRoads(){
    this.roadGroup=new THREE.Group();this.scene.add(this.roadGroup);
    for(const [key,points] of Object.entries(ROUTES)){
      const curve=groundCurve(points);this.routeCurves[key]=curve;const p=curve.getPoints(180),verts=[],indices=[];
      p.forEach((v,i)=>{const tangent=curve.getTangent(i/(p.length-1)),nx=-tangent.z,nz=tangent.x;for(const s of [-1,1]){const x=v.x+nx*.32*s,z=v.z+nz*.32*s;verts.push(x,heightAt(x,z)+.10,z);}if(i<p.length-1){const n=i*2;indices.push(n,n+1,n+2,n+1,n+3,n+2);}});
      const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(verts,3));g.setIndex(indices);g.computeVertexNormals();const road=new THREE.Mesh(g,new THREE.MeshStandardMaterial({color:'#b1a383',roughness:1,transparent:true,opacity:.62,side:THREE.DoubleSide}));road.receiveShadow=true;this.roadGroup.add(road);
    }
  }
  buildAtmosphere(){
    const canvas=document.createElement('canvas');canvas.width=128;canvas.height=128;const ctx=canvas.getContext('2d'),g=ctx.createRadialGradient(64,64,0,64,64,64);g.addColorStop(0,'rgba(234,242,224,0.40)');g.addColorStop(.42,'rgba(234,242,224,0.18)');g.addColorStop(1,'rgba(234,242,224,0)');ctx.fillStyle=g;ctx.fillRect(0,0,128,128);const tex=new THREE.CanvasTexture(canvas);
    const rand=seededRandom(328);this.mists=[];for(let i=0;i<24;i++){const mat=new THREE.SpriteMaterial({map:tex,transparent:true,opacity:.19,depthWrite:false});const sprite=new THREE.Sprite(mat),x=(rand()-.5)*285,z=(rand()-.5)*170;sprite.position.set(x,heightAt(x,z)+10+rand()*8,z);sprite.scale.set(23+rand()*20,10+rand()*10,1);sprite.userData={origin:x,offset:rand()*10};this.scene.add(sprite);this.mists.push(sprite);}
    this.birds=new THREE.Group();const birdgeo=new THREE.BufferGeometry();birdgeo.setAttribute('position',new THREE.Float32BufferAttribute([-.5,.1,0,0,0,0,0,0,0,.5,.1,0],3));for(let i=0;i<9;i++){const b=new THREE.LineSegments(birdgeo,new THREE.LineBasicMaterial({color:'#414f46',transparent:true,opacity:.6}));b.userData.phase=rand()*6.28;b.userData.radius=16+rand()*9;this.birds.add(b);}this.scene.add(this.birds);
  }
  buildPoliticalBorders(){
    const polygons={long:[[-137,-100],[-86,-103],[-34,-78],[-43,-44],[-90,-25],[-139,-43]],han:[[-95,-17],[-41,-17],[-18,7],[-34,27],[-83,26],[-109,10]],yi:[[-126,28],[-83,26],[-34,27],[-20,70],[-70,99],[-141,77]],guan:[[-34,-78],[12,-81],[34,-45],[20,-10],[-18,7],[-41,-17],[-43,-44]],north:[[12,-81],[51,-105],[135,-92],[141,-40],[92,-5],[20,-10],[34,-45]],jing:[[-18,7],[20,-10],[59,9],[56,46],[27,81],[-20,70],[-34,27]],wu:[[59,9],[92,-5],[141,-40],[148,71],[90,98],[27,81],[56,46]]};
    this.borders={};for(const [id,points] of Object.entries(polygons)){const vector=[];points.forEach((p,i)=>{const q=points[(i+1)%points.length];for(let j=0;j<14;j++){const t=j/14,x=p[0]+(q[0]-p[0])*t,z=p[1]+(q[1]-p[1])*t;vector.push(new THREE.Vector3(x,heightAt(x,z)+.35,z));}});vector.push(vector[0]);const line=new THREE.Line(new THREE.BufferGeometry().setFromPoints(vector),new THREE.LineDashedMaterial({color:'#e6c689',transparent:true,opacity:.65,dashSize:.7,gapSize:.45,depthWrite:false}));line.computeLineDistances();line.visible=false;this.scene.add(line);this.borders[id]=line;}
  }
  updateState(state){this.state=state;for(const [id,city] of Object.entries(this.cities)){const owned=state.land.includes(id),faction=factionAt(state,id);city.setFaction(faction);const el=this.labels[id];el.classList.toggle('owned',owned);el.querySelector('.city-emblem').textContent=({han:'汉',wu:'吴',wei:'魏',cao:'曹',liu:'刘',zhang:'张'})[faction];el.querySelector('.city-caption').textContent=owned?'稳定 '+Math.round(state.stability[id]):faction==='wu'?'吴境':'未控制';this.borders[id].material.color.set(owned?'#e1c282':faction==='wu'?'#b4846e':'#b9c9c5');}}
  select(id,focus=false){for(const [key,c] of Object.entries(this.cities)){c.select(key===id);this.labels[key].classList.toggle('selected',key===id);}if(focus)this.focus(id);}
  focus(id,close=false){const city=this.cities[id];if(!city)return;const target=city.position.clone().add(new THREE.Vector3(0,1,0));const direction=this.camera.position.clone().sub(this.controls.target).normalize();const distance=close?37:this.mobile?99:84;if(this.mobile&&!close)target.addScaledVector(new THREE.Vector3(0,1,0).applyQuaternion(this.camera.quaternion),-distance*.13);const dest=target.clone().addScaledVector(direction,distance);dest.y=Math.max(dest.y,target.y+35);this.tweenCamera(dest,target,1.25);}
  home(){this.tweenCamera(new THREE.Vector3(this.mobile?210:157,this.mobile?580:162,this.mobile?470:214),this.homeTarget,1.3);}
  showcase(){if(this.mobile)this.tweenCamera(new THREE.Vector3(40,145,166),new THREE.Vector3(-48,8,5),1.3);else this.home();}
  tweenCamera(to,target,duration){this.pausedScene=false;this.cameraTween={from:this.camera.position.clone(),fromTarget:this.controls.target.clone(),to,target,duration:matchMedia('(prefers-reduced-motion: reduce)').matches?.05:duration,start:this.elapsed};}
  routeBetween(source,target){const a=source+'-'+target,b=target+'-'+source;if(this.routeCurves[a])return this.routeCurves[a];if(this.routeCurves[b])return new THREE.CatmullRomCurve3(this.routeCurves[b].getPoints(150).reverse());const p=locations[source],q=locations[target];return groundCurve([[p.x,p.z],[(p.x+q.x)/2-7,(p.z+q.z)/2],[q.x,q.z]]);}
  previewRoute(source,target){this.clearRoute();const curve=this.routeBetween(source,target);this.route=new THREE.Group();this.scene.add(this.route);const road=new THREE.Mesh(new THREE.TubeGeometry(curve,180,.12,5,false),new THREE.MeshBasicMaterial({color:'#f2d391',transparent:true,opacity:.88,depthWrite:false}));this.route.add(road);
    const dash=new THREE.Line(new THREE.BufferGeometry().setFromPoints(curve.getPoints(160)),new THREE.LineDashedMaterial({color:'#fff7d9',dashSize:1.1,gapSize:1.2,transparent:true,opacity:.95}));dash.computeLineDistances();this.route.add(dash);this.route.userData.curve=curve;
    const midpoint=curve.getPoint(.5);const dir=this.camera.position.clone().sub(this.controls.target).normalize(),distance=this.mobile?185:115;if(this.mobile)midpoint.addScaledVector(new THREE.Vector3(0,1,0).applyQuaternion(this.camera.quaternion),-distance*.11);const to=midpoint.clone().addScaledVector(dir,distance);to.y=Math.max(to.y,midpoint.y+65);this.tweenCamera(to,midpoint,1.1);
  }
  clearRoute(){if(this.route){this.scene.remove(this.route);this.route.traverse(o=>{o.geometry?.dispose();if(o.material)o.material.dispose();});this.route=null;}}
  async march(source,target,onFrame,reduced=false,options={}){
    this.finishCampaign(true);this.clearRoute();this.cameraTween=null;this.pausedScene=false;this.controls.enabled=false;
    return new Promise((resolve,reject)=>{
      try{this.motion=new CampaignSequence(this,source,target,{...options,reduced,onFrame,resolve});this.motion.update(this.elapsed);}
      catch(error){this.controls.enabled=true;reject(error);}
    });
  }
  finishCampaign(skipped=true){
    const motion=this.motion;if(!motion)return;
    this.motion=null;motion.dispose();this.controls.enabled=true;
    const center=this.cities[motion.target].position;this.controls.target.copy(center);this.camera.position.copy(center).add(new THREE.Vector3(38,this.mobile?70:48,this.mobile?78:57));this.controls.update();
    motion.resolve({skipped});
  }
  setMode(mode){this.mapMode=mode;for(const l of Object.values(this.borders))l.visible=mode==='politics';this.roadGroup.visible=mode!=='clean';this.labelsRoot.classList.toggle('quiet',mode==='clean');this.renderer.render(this.scene,this.camera);}
  setQuality(quality){this.quality=quality;if(quality==='fine')this.ensureEnvironment();this.renderer.setPixelRatio(quality==='smooth'?1:Math.min(devicePixelRatio||1,this.mobile?1.6:1.75));this.renderer.shadowMap.enabled=quality!=='smooth';this.scene.environment=quality==='smooth'?null:this.environment.texture;this.vegetation.setQuality(quality);this.terrain.material.userData.simple=quality==='smooth';this.terrain.material.needsUpdate=true;this.renderer.shadowMap.needsUpdate=true;this.pendingResize=true;}
  zoom(factor){const v=this.camera.position.clone().sub(this.controls.target),distance=THREE.MathUtils.clamp(v.length()*factor,28,this.controls.maxDistance);this.tweenCamera(this.controls.target.clone().add(v.normalize().multiplyScalar(distance)),this.controls.target.clone(),.45);}
  resize(){const rect=this.canvas.parentElement.getBoundingClientRect();this.width=rect.width;this.height=rect.height;this.camera.aspect=this.width/this.height;this.camera.updateProjectionMatrix();this.renderer.setSize(this.width,this.height,false);this.pendingResize=false;}
  updateLabels(){const v=new THREE.Vector3();const distance=this.camera.position.distanceTo(this.controls.target);for(const [id,city] of Object.entries(this.cities)){v.copy(city.position).add(new THREE.Vector3(0,6,0)).project(this.camera);const el=this.labels[id],visible=v.z<1&&v.z>0&&Math.abs(v.x)<1.1&&Math.abs(v.y)<1.1;el.hidden=!visible;if(visible){const x=Math.round((v.x*.5+.5)*this.width*10)/10,y=Math.round((-v.y*.5+.5)*this.height*10)/10;el.style.transform='translate('+x+'px,'+y+'px) translate(-50%,-100%)';el.classList.toggle('near',distance<100);}}}
  animate(){
    this.animation=requestAnimationFrame(this.animate);this.clock.update();if(!this.running||document.hidden||(this.pausedScene&&!this.pendingResize))return;
    const delta=this.clock.getDelta();this.elapsed+=delta;this.frame++;if(this.pendingResize)this.resize();
    if(this.cameraTween){const m=this.cameraTween,t=Math.min(1,(this.elapsed-m.start)/m.duration);this.camera.position.lerpVectors(m.from,m.to,ease(t));this.controls.target.lerpVectors(m.fromTarget,m.target,ease(t));if(t===1)this.cameraTween=null;}
    this.controls.target.x=THREE.MathUtils.clamp(this.controls.target.x,-145,145);this.controls.target.z=THREE.MathUtils.clamp(this.controls.target.z,-100,100);this.controls.update();
    const distance=this.camera.position.distanceTo(this.controls.target);this.scene.fog.near=Math.max(300,distance*.92);this.scene.fog.far=Math.max(650,distance*1.8);
    this.water.update(this.elapsed);for(const city of Object.values(this.cities))city.update(this.elapsed);
    this.mists.forEach(m=>{m.position.x=m.userData.origin+Math.sin(this.elapsed*.024+m.userData.offset)*7;});
    this.birds.children.forEach((b,i)=>{const a=this.elapsed*.12+b.userData.phase;b.position.set(-40+Math.cos(a)*b.userData.radius,29+i*.5,10+Math.sin(a)*b.userData.radius*.6);b.rotation.y=-a;b.rotation.z=Math.sin(this.elapsed*2+i)*.07;});
    if(this.motion){try{this.motion.update(this.elapsed);}catch(error){console.error(error);this.finishCampaign(true);window.dispatchEvent(new CustomEvent('world-cinematic-error'));}}
    this.updateLabels();this.renderer.render(this.scene,this.camera);
    if(this.frame%60===0){this.metrics={frames:this.frame,drawCalls:this.renderer.info.render.calls,triangles:this.renderer.info.render.triangles,pixelRatio:this.renderer.getPixelRatio(),trees:this.vegetation.trees};}
  }
  screenshot(){this.renderer.render(this.scene,this.camera);return this.canvas.toDataURL('image/png');}
}
