import { TexturedRect } from "../components/texturedrect.js";
export class Enemy extends TexturedRect {
    constructor(x, y, w, h, imageOrAnimationFrames) {
        super(x, y, w, h, imageOrAnimationFrames);
    }
}
