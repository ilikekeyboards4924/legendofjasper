import { random } from "../core/util.js";
import { Entity } from "./entity.js";
export class Enemy extends Entity {
    constructor(x, y, w, h, imageOrAnimationFrames) {
        super(x, y, w, h, imageOrAnimationFrames);
        const randomNumber = random(0, 3);
        this.enemyType = randomNumber == 0 ? 'type1' : (randomNumber == 1 ? 'type2' : 'type3');
    }
}
