export class Vector2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    normalize(magnitude = 1) {
        if (this.x != 0 || this.y != 0) {
            let angle = this.angle();
            this.x = Math.cos(angle) * magnitude;
            this.y = Math.sin(angle) * magnitude;
            // remove weird rounding errors
            this.x = Math.round(this.x * 1000000) / 1000000;
            this.y = Math.round(this.y * 1000000) / 1000000;
        }
    }
    magnitude() {
        return Math.hypot(this.x, this.y);
    }
    angle() {
        return Math.atan2(this.y, this.x);
    }
}
