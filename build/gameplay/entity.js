import { TexturedRect } from "../components/texturedrect.js";
import { Vector2 } from "../components/vector2.js";
export class Entity extends TexturedRect {
    constructor(x, y, w, h, imageOrAnimationFrames) {
        super(x, y, w, h, imageOrAnimationFrames);
        this.vel = new Vector2(0, 0);
        this.direction = new Vector2(0, 0);
        this.entityIndex = Date.now(); // is this the best way to make an index?
    }
    update() {
        if (this.vel.x < 0)
            this.direction.x = -1;
        if (this.vel.x > 0)
            this.direction.x = 1;
        if (this.vel.y < 0)
            this.direction.y = -1;
        if (this.vel.y > 0)
            this.direction.y = 1;
    }
}
