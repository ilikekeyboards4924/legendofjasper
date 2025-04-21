import { Vector2 } from "../components/vector2.js";
import { Controller } from "../core/controller.js";
import { gameData } from "../core/util.js";
import { Entity } from "./entity.js";

export class Player extends Entity {
    constructor(x: number, y: number, w: number, h: number, imageOrAnimationFrames?: HTMLImageElement | Record<string, HTMLImageElement[]>) {
        super(x, y, w, h, imageOrAnimationFrames);

        // initialize player into idle animation
        this.currentAnimationFrame = 0;
        this.currentAnimation = 'idle';
    }

    update() {
        super.update();

        if (this.direction.x == -1) this.currentAnimation = 'left';
        if (this.direction.x == 1) this.currentAnimation = 'right';
    
        this.animateUpdate();
    }

    protected animateUpdate() {
        if (this.vel.x != 0 || this.vel.y != 0) { // if moving
            if (this.currentAnimation == 'idle') this.currentAnimation = 'left';
            if (this.frameCounterLastFrame == undefined) this.frameCounterLastFrame = gameData.frameCounter;
            if (gameData.frameCounter - this.frameCounterLastFrame > 6) {
                this.currentAnimationFrame = (this.currentAnimationFrame + 1)%8; // assuming the walk animation is 8 frames
                this.frameCounterLastFrame = gameData.frameCounter;
            }
        } else {
            if (this.direction.x < 0) {
                this.currentAnimation = 'idle';
                this.currentAnimationFrame = 0;
            }
            if (this.direction.x > 0) {
                this.currentAnimation = 'idle';
                this.currentAnimationFrame = 1;
            }
            if (this.direction.y != 0 && this.direction.x == 0) {
                this.currentAnimationFrame = 0;
                this.currentAnimation = 'idle';
            }
        }
    }

    move(controller: Controller) {
        if (gameData.playerControlsActive == false) return;

        if (controller.keys.has('a')) this.vel.x = -5;
        if (controller.keys.has('d')) this.vel.x = 5;
        if (!controller.keys.has('a') && !controller.keys.has('d')) this.vel.x = 0;
        if (controller.keys.has('w')) this.vel.y = -5;
        if (controller.keys.has('s')) this.vel.y = 5;
        if (!controller.keys.has('w') && !controller.keys.has('s')) this.vel.y = 0;

        this.x += this.vel.x;
        this.y += this.vel.y;
    }
}