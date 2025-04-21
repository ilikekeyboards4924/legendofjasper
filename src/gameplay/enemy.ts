import { TexturedRect } from "../components/texturedrect.js";
import { random } from "../core/util.js";
import { Entity } from "./entity.js";

export class Enemy extends Entity {
    enemyType: string;

    constructor(x: number, y: number, w: number, h: number, imageOrAnimationFrames?: HTMLImageElement | Record<string, HTMLImageElement[]>) {
        super(x, y, w, h, imageOrAnimationFrames);
    
        const randomNumber: number = random(0, 3);
        this.enemyType = randomNumber == 0 ? 'type1' : (randomNumber == 1 ? 'type2' : 'type3');

    }
}