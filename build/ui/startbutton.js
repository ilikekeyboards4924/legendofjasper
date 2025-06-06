import { Button } from "./button.js";
import { gameData } from "../core/util.js";
export class StartButton extends Button {
    constructor(x, y, w, h, imageOrAnimationFrames) {
        super(x, y, w, h, imageOrAnimationFrames);
        this.delay = 30;
    }
    interact() {
        if (!(gameData.frameCounter - this.frameClicked < this.delay))
            this.frameClicked = gameData.frameCounter;
        this.updateInteraction = true;
    }
    interactionUpdate() {
        if (gameData.frameCounter - this.frameClicked > this.delay) {
            gameData.state = 2;
            this.updateInteraction = false;
            this._visible = false;
        }
    }
    animateUpdate() {
        if (this.currentAnimation == undefined)
            this.currentAnimation = 'idle';
        if (this.beingClicked == false)
            this.currentAnimation = 'idle';
        if (this.beingClicked == true)
            this.currentAnimation = 'active';
    }
}
