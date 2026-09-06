import * as THREE from 'three';
import { makeFlag } from './cities.js';
import { heightAt } from './terrain.js';

// Articulated troops are instanced by body part: dozens of actors, a small draw-call budget.
export function makeFormation({ faction = 'han', columns = 6, rows = 4, cavalry = 4, supplies = true } = {}) {
  const group = new THREE.Group(), total = columns * rows + cavalry, meshes = {}, counters = {}, dummy = new THREE.Object3D();
  const mats = {
    armor: new THREE.MeshStandardMaterial({ color: faction === 'han' ? '#5b665f' : '#575e67', roughness: .64, metalness: .3 }),
    cloth: new THREE.MeshStandardMaterial({ color: faction === 'han' ? '#3d715c' : '#835749', roughness: .95 }),
    skin: new THREE.MeshStandardMaterial({ color: '#c7aa81', roughness: 1 }),
    wood: new THREE.MeshStandardMaterial({ color: '#68472f', roughness: .9 }),
    iron: new THREE.MeshStandardMaterial({ color: '#a6b1af', roughness: .34, metalness: .65 }),
    horse: new THREE.MeshStandardMaterial({ color: faction === 'han' ? '#795640' : '#626059', roughness: .9 }),
    dark: new THREE.MeshStandardMaterial({ color: '#302e29', roughness: .92 }),
    sacks: new THREE.MeshStandardMaterial({ color: '#b8a16d', roughness: 1 }),
    shadow: new THREE.MeshBasicMaterial({ color: '#223126', transparent: true, opacity: .18, depthWrite: false })
  };
  const sphere = new THREE.SphereGeometry(1, 14, 10), box = new THREE.BoxGeometry(1, 1, 1), cylinder = new THREE.CylinderGeometry(1, 1, 1, 8);
  function part(name, geometry, material) {
    const mesh = new THREE.InstancedMesh(geometry, mats[material], total * 4 + 24);
    mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage); mesh.frustumCulled = false; mesh.castShadow = false; mesh.receiveShadow = false;
    meshes[name] = mesh; group.add(mesh);
  }
  part('torso', cylinder, 'armor'); part('face', sphere, 'skin');
  part('helmet', new THREE.SphereGeometry(1, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2), 'armor');
  part('cloth', box, 'cloth'); part('limbs', cylinder, 'cloth'); part('spear', cylinder, 'wood');
  part('point', new THREE.ConeGeometry(1, 1, 6), 'iron'); part('shield', new THREE.CylinderGeometry(1, 1, 1, 12), 'wood');
  part('horse', sphere, 'horse'); part('horseLeg', cylinder, 'horse'); part('dark', box, 'dark');
  part('wood', box, 'wood'); part('wheel', new THREE.TorusGeometry(.4, .065, 8, 18), 'wood'); part('sack', sphere, 'sacks');
  part('shadow', new THREE.CircleGeometry(1, 18), 'shadow');
  const flag = makeFlag(faction, .9); group.add(flag);
  function put(name, x, y, z, sx, sy, sz, rx = 0, ry = 0, rz = 0) {
    dummy.position.set(x, y, z); dummy.rotation.set(rx, ry, rz); dummy.scale.set(sx, sy, sz); dummy.updateMatrix();
    meshes[name].setMatrixAt(counters[name]++, dummy.matrix);
  }
  group.userData.unitCount = total; group.userData.cavalry = cavalry;
  group.userData.update = (t, { stride = 1, combat = 0, retreat = 0 } = {}) => {
    for (const key of Object.keys(meshes)) counters[key] = 0;
    const cos = Math.cos(group.rotation.y), sin = Math.sin(group.rotation.y);
    const ground = (x, z) => heightAt(group.position.x + cos * x + sin * z, group.position.z - sin * x + cos * z) + .09 - group.position.y;
    const person = (x, z, base, index, mounted = false) => {
      const cycle = t * (mounted ? 10 : 7.2) + index * .79;
      const step = Math.sin(cycle) * stride, hit = Math.max(0, Math.sin(t * 5.8 + index * 1.3)) * combat;
      const bob = Math.abs(step) * (mounted ? .07 : .035), y = base + bob;
      put('torso', x, y + .84, z, .23, .56, .18, hit * .16);
      put('cloth', x, y + .54, z, .42, .21, .31);
      put('face', x, y + 1.25, z, .135, .16, .13);
      put('helmet', x, y + 1.28, z - .015, .164, .18, .17);
      for (const side of [-1, 1]) {
        put('limbs', x + side * (mounted ? .24 : .115), y + .28, z, .075, .48, .07, mounted ? -.35 : step * side * .58);
        put('dark', x + side * (mounted ? .25 : .115), y + .045, z + .035 + (mounted ? .1 : step * side * .13), .15, .12, .25);
        put('limbs', x + side * .29, y + .85, z + (side === 1 ? hit * .23 : 0), .065, .42, .07, side === 1 ? -hit * 1.25 : -step * .3);
      }
      put('spear', x + .35, y + 1.1, z + .12 + hit * .58, .025, 2.05, .025, .13 + hit * 1.1);
      put('point', x + .35, y + 1.1 + Math.cos(.13 + hit * 1.1) * 1.15, z + .12 + hit * .58 + Math.sin(.13 + hit * 1.1) * 1.15, .075, .28, .055, .13 + hit * 1.1);
      if (!mounted) put('shield', x - .32, y + .83, z + .16, .3, .08, .4, Math.PI / 2);
    };
    for (let row = 0; row < rows; row++) for (let col = 0; col < columns; col++) {
      const i = row * columns + col, x = (col - (columns - 1) / 2) * .91;
      const z = -row * .97 + Math.sin(t * 4.6 + i) * combat * .12 - retreat * (i % 3) * .18;
      const y = ground(x, z);
      put('shadow', x, y + .013, z, .33, .4, 1, -Math.PI / 2);
      person(x, z, y, i);
    }
    for (let i = 0; i < cavalry; i++) {
      const side = i % 2 ? 1 : -1, x = side * (columns * .47 + 1.15), z = .2 - Math.floor(i / 2) * 2.3 + Math.sin(t * 2.2 + i) * combat * .45;
      const y = ground(x, z), gait = t * 10 + i * 1.7, bounce = Math.abs(Math.sin(gait)) * .055 * stride;
      put('shadow', x, y + .015, z, .52, 1.12, 1, -Math.PI / 2);
      put('horse', x, y + .94 + bounce, z, .34, .44, .83);
      put('horse', x, y + 1.36 + bounce, z + .55, .21, .47, .26, .4);
      put('horse', x, y + 1.66 + bounce, z + .92, .2, .21, .41, .18);
      for (const sign of [-1, 1]) {
        put('horse', x + sign * .11, y + 1.95 + bounce, z + .72, .06, .17, .09);
        for (const front of [-1, 1]) {
          const a = Math.sin(gait + (front === sign ? 0 : Math.PI)) * .56 * stride;
          put('horseLeg', x + sign * .23, y + .46, z + front * .53, .068, .76, .066, a);
          put('dark', x + sign * .23, y + .09 + Math.max(0, Math.sin(gait + front)) * .1 * stride, z + front * .53 - Math.sin(a) * .3, .14, .14, .23);
        }
      }
      put('dark', x, y + 1.04, z - .89, .085, .54, .1, -.45 + Math.sin(t * 5 + i) * .15);
      put('cloth', x, y + 1.21 + bounce, z - .09, .69, .12, .64);
      person(x, z - .08, y + 1.06 + bounce, 40 + i, true);
    }
    if (supplies) {
      const z = -rows * .97 - 1.7, y = ground(0, z);
      put('wood', 0, y + .64, z, 1.18, .28, 1.55); put('wood', 0, y + .74, z - .68, 1.18, .48, .1);
      for (const sign of [-1, 1]) { put('wheel', sign * .68, y + .42, z, 1, 1, 1, 0, Math.PI / 2, t * stride * 3); put('wood', sign * .47, y + .63, z + 1.2, .06, .08, 1.5); }
      for (const sign of [-1, 1]) put('sack', sign * .25, y + .94, z, .32, .31, .6);
    }
    flag.position.set(-.3, ground(-.3, -1.6) + .25, -1.6); flag.userData.update(t);
    for (const [name, mesh] of Object.entries(meshes)) { mesh.count = counters[name]; mesh.instanceMatrix.needsUpdate = true; }
  };
  group.userData.dispose = () => {
    const geometries = new Set(); group.traverse(o => { if (o.geometry) geometries.add(o.geometry); });
    geometries.forEach(g => g.dispose()); Object.values(mats).forEach(m => m.dispose()); flag.children[1].material.dispose();
    Object.values(meshes).forEach(m => m.dispose());
  };
  return group;
}

export function makeBattleDust() {
  const count = 110, positions = new Float32Array(count * 3), sizes = new Float32Array(count), geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3)); geometry.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));
  const material = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, uniforms: { uStrength: { value: 0 } },
    vertexShader: 'attribute float aSize; varying float vAlpha; void main(){vec4 p=modelViewMatrix*vec4(position,1.);gl_Position=projectionMatrix*p;gl_PointSize=min(72.,aSize*230./max(1.,-p.z));vAlpha=aSize*.22;}',
    fragmentShader: 'uniform float uStrength; varying float vAlpha; void main(){float d=length(gl_PointCoord-.5)*2.;float a=pow(max(0.,1.-d),2.)*vAlpha*uStrength;gl_FragColor=vec4(.73,.66,.49,a);}'
  });
  const points = new THREE.Points(geometry, material); points.frustumCulled = false;
  points.userData.update = (t, center, strength) => {
    material.uniforms.uStrength.value = strength;
    for (let i = 0; i < count; i++) {
      const life = (t * .22 + i * .618) % 1, angle = i * 2.399;
      const x = center.x + Math.sin(angle) * (1 + life * 8), z = center.z + Math.cos(angle) * (1 + life * 4);
      positions[i * 3] = x; positions[i * 3 + 1] = heightAt(x, z) + .2 + life * 2.6; positions[i * 3 + 2] = z; sizes[i] = Math.sin(life * Math.PI) * (1.5 + (i % 4) * .6);
    }
    geometry.attributes.position.needsUpdate = true; geometry.attributes.aSize.needsUpdate = true;
  };
  points.userData.dispose = () => { geometry.dispose(); material.dispose(); };
  return points;
}
