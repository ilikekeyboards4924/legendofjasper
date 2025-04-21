import { Camera } from "../core/camera";
import { Renderer } from "../core/renderer.js";
import { Rect } from "./rect.js";

export class TexturedRect extends Rect {
    image: HTMLImageElement; // use for one static texture

    animationFrames: Record<string, HTMLImageElement[]>; // use for animations
    currentAnimation: string;
    currentAnimationFrame: number;

    frameCounterLastFrame: number; // the frame count when the last animation frame was changed/displayed, use this to get time between frames

    protected _visible: boolean;

    constructor(x: number, y: number, w: number, h: number, imageOrAnimationFrames?: HTMLImageElement | Record<string, HTMLImageElement[]>) {
        super(x, y, w, h);

        if (imageOrAnimationFrames && typeof imageOrAnimationFrames === "object" && !("src" in imageOrAnimationFrames)) { // hacky bs to overload constructor
            this.animationFrames = imageOrAnimationFrames;
            this.image = undefined!;
        } else {
            this.image = imageOrAnimationFrames as HTMLImageElement;
            this.animationFrames = undefined!;
        }


        this._visible = true; // should i always start them invisible? should this.visible be protected?
        this.currentAnimationFrame = 0;
    }

    setVisibility(visible: boolean) { this._visible = visible; }

    protected animateUpdate() { // update animations n stuff here
        console.log('empty method');
    }

    draw(camera: Camera, offset: boolean = true) {
        if (this._visible == false) return;

        if (this.animationFrames == undefined) {
            camera.drawImage(this.image, this, offset);
        } else {
            const frames = this.animationFrames[this.currentAnimation];
            const frame = frames[this.currentAnimationFrame];
            camera.drawImage(frame, this, offset);
        }
    }
}