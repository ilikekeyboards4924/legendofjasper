import { Rect } from "./rect.js";
export class TexturedRect extends Rect {
    constructor(x, y, w, h, imageOrAnimationFrames) {
        super(x, y, w, h);
        if (imageOrAnimationFrames && typeof imageOrAnimationFrames === "object" && !("src" in imageOrAnimationFrames)) { // hacky bs to overload constructor
            this.animationFrames = imageOrAnimationFrames;
            this.image = undefined;
        }
        else {
            this.image = imageOrAnimationFrames;
            this.animationFrames = undefined;
        }
        this._visible = true; // should i always start them invisible? should this.visible be protected?
        this.currentAnimationFrame = 0;
    }
    setVisibility(visible) { this._visible = visible; }
    animateUpdate() {
        console.log('empty method');
    }
    draw(camera, offset = true) {
        if (this._visible == false)
            return;
        if (this.animationFrames == undefined) {
            camera.drawImage(this.image, this, offset);
        }
        else {
            const frames = this.animationFrames[this.currentAnimation];
            const frame = frames[this.currentAnimationFrame];
            camera.drawImage(frame, this, offset);
        }
    }
}
