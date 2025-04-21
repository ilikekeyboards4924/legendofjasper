import { TexturedRect } from "../components/texturedrect.js";

export class Enemy extends TexturedRect {
    
    
    constructor(x: number, y: number, w: number, h: number, imageOrAnimationFrames?: HTMLImageElement | Record<string, HTMLImageElement[]>) {
        super(x, y, w, h, imageOrAnimationFrames);
    }
}