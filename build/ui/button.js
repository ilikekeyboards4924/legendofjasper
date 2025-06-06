import { Rect } from "../components/rect.js";
import { TexturedRect } from "../components/texturedrect.js";
export class Button extends TexturedRect {
    constructor(x, y, w, h, imageOrAnimationFrames) {
        super(x, y, w, h, imageOrAnimationFrames);
    }
    update(mouse) {
        if (this._visible == false)
            return;
        let mouseRect = new Rect(mouse.x, mouse.y, 1, 1);
        if (this.collision(mouseRect) && mouse.lmb && !mouse.alreadyClicked) {
            mouse.alreadyClicked = true;
            this.beingClicked = true;
        }
        if (!mouse.lmb && !mouse.alreadyClicked && this.beingClicked) {
            this.interact();
        }
        if (this.updateInteraction == true)
            this.interactionUpdate();
        if (mouse.lmb == false)
            this.beingClicked = false;
        this.animateUpdate();
    }
    interact() {
        console.log('empty method');
    }
    interactionUpdate() {
        console.log('empty method');
    }
}
