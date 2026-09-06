import * as THREE from 'three';
import { makeFormation, makeBattleDust } from './forces.js';
import { heightAt } from './terrain.js';
import { campaignFrame } from './cinematic.mjs';

const mix = THREE.MathUtils.lerp;
const smooth = t => t * t * (3 - 2 * t);

export class CampaignSequence {
  constructor(world, source, target, { won, defender, reduced, onFrame, onPhase, resolve }) {
    Object.assign(this, { world, source, target, won, reduced, onFrame, onPhase, resolve });
    this.start = world.elapsed; this.curve = world.routeBetween(source, target); this.length = this.curve.getLength();
    this.departureAt = Math.min(.28, 16 / this.length); this.battleAt = Math.max(.52, Math.min(.83, 1 - 24 / this.length));
    this.center = this.curve.getPointAt(this.battleAt); this.direction = this.curve.getTangentAt(this.battleAt).setY(0).normalize();
    this.side = new THREE.Vector3(this.direction.z, 0, -this.direction.x); this.yaw = Math.atan2(this.direction.x, this.direction.z);
    this.army = makeFormation({ faction: 'han', columns: world.mobile ? 5 : 6 });
    this.enemy = makeFormation({ faction: defender, columns: world.mobile ? 5 : 6, supplies: false });
    this.dust = makeBattleDust(); this.enemy.visible = false;
    world.scene.add(this.army, this.enemy, this.dust);
    this.look = new THREE.Vector3(); this.eye = new THREE.Vector3();
    this.previousPhase = null; this.frame = campaignFrame(0, reduced);
  }
  place(army, p, yaw) { army.position.set(p.x, heightAt(p.x, p.z) + .12, p.z); army.rotation.y = yaw; }
  update(elapsed) {
    const f = campaignFrame(elapsed - this.start, this.reduced); this.frame = f;
    if (f.id !== this.previousPhase) {
      this.previousPhase = f.id;
      this.onPhase?.(f.id === 'aftermath' ? this.won ? 'victory' : 'retreat' : f.id);
    }
    const p = f.local, w = this.world, heading = this.direction.clone(), side = this.side.clone();
    let combat = 0, march = 1, focus;
    if (f.id === 'departure' || f.id === 'march') {
      const from = this.departureAt + (f.id === 'march' ? 3 / this.length : 0);
      const to = f.id === 'departure' ? this.departureAt + 3 / this.length : Math.max(from + .02, this.battleAt - 8 / this.length);
      const at = Math.min(.8, mix(from, to, p)), position = this.curve.getPointAt(at), tangent = this.curve.getTangentAt(at).setY(0).normalize();
      this.place(this.army, position, Math.atan2(tangent.x, tangent.z));
      heading.copy(tangent); side.set(tangent.z, 0, -tangent.x); focus = position.clone().addScaledVector(tangent, -1.7);
      march = f.id === 'departure' ? .65 : 1;
      this.dust.userData.update(elapsed, position.clone().addScaledVector(tangent, -4), .55);
    } else {
      this.enemy.visible = true; focus = this.center.clone();
      let left = 8 - smooth(Math.min(1, p / .35)) * 6.65, right = left;
      if (f.id === 'battle') {
        combat = smooth(Math.min(1, Math.max(0, (p - .2) / .2)));
        left += Math.sin(elapsed * 3.2) * .09 * combat; right += Math.sin(elapsed * 3.6) * .09 * combat;
      } else {
        left = this.won ? 1.35 - p * 4 : 1.35 + p * 11;
        right = this.won ? 1.35 + p * 11 : 1.35 - p * 4;
      }
      const withdraw = f.id === 'aftermath' ? smooth(Math.min(1, p * 2.5)) * Math.PI : 0;
      this.place(this.army, this.center.clone().addScaledVector(heading, -left), this.yaw + (!this.won ? withdraw : 0));
      this.place(this.enemy, this.center.clone().addScaledVector(heading, right), this.yaw + Math.PI + (this.won ? withdraw : 0));
      march = f.id === 'battle' ? Math.max(.18, 1 - combat * .8) : .9;
      this.enemy.userData.update(elapsed, { stride: march, combat, retreat: this.won && f.id === 'aftermath' ? p : 0 });
      this.dust.userData.update(elapsed, this.center, f.id === 'battle' ? .55 + .5 * combat : .75 * (1 - p));
    }
    this.army.userData.update(elapsed, { stride: march, combat, retreat: !this.won && f.id === 'aftermath' ? p : 0 });
    // A bounded cinematic cutaway keeps foreground canopies out of the troop formation.
    // Original instance transforms are restored when the shot ends; this changes no game land.
    if(w.vegetation.setClearing(focus, f.id === 'battle' || f.id === 'aftermath' ? 15 : 11))w.renderer.shadowMap.needsUpdate=true;
    // Reduced motion keeps a single high overview; no cinematic tracking or dust.
    const scale = w.mobile ? 1.48 : 1;
    if (this.reduced) { focus = this.center.clone(); heading.copy(this.direction); side.copy(this.side); this.dust.visible = false; }
    this.look.copy(focus); this.look.y = heightAt(focus.x, focus.z) + 1.1;
    const track = this.reduced ? 0 : f.id === 'battle' ? Math.sin(p * Math.PI) * 2.5 : 0;
    this.eye.copy(this.look).addScaledVector(side, (22 + track) * scale).addScaledVector(heading, (!this.reduced && f.id === 'departure' ? 14 : 10) * scale);
    this.eye.y += (this.reduced ? 28 : 17) * scale;
    this.eye.y = Math.max(this.eye.y, heightAt(this.eye.x, this.eye.z) + 5);
    w.camera.position.copy(this.eye); w.controls.target.copy(this.look); w.camera.lookAt(this.look);
    this.onFrame?.(f);
    if (f.done) w.finishCampaign(false);
  }
  dispose() {
    this.world.vegetation.setClearing(null, 0);this.world.renderer.shadowMap.needsUpdate=true;
    this.world.scene.remove(this.army, this.enemy, this.dust);
    this.army.userData.dispose(); this.enemy.userData.dispose(); this.dust.userData.dispose();
  }
}
