import { TexturedRect } from "../components/texturedrect.js";
import { Controller } from "./controller.js";
import { Camera } from "./camera.js";
import { Decor } from "../gameplay/decor.js";
import { Player } from "../gameplay/player.js";
import { Renderer } from "./renderer.js";
import { logoImage, startButtonAnimation, titleImage, playerTextures, signDecorImage } from "./textures.js";
import { StartButton } from "../ui/startbutton.js";
import { gameData, random } from "./util.js";
import { Background } from "../gameplay/background.js";
import { Enemy } from "../gameplay/enemy.js";
const renderer = new Renderer();
const controller = new Controller();
renderer.canvas.width = 960;
renderer.canvas.height = 540;
const camera = new Camera(renderer);
const logo = new TexturedRect(0, 0, 960, 540, logoImage);
const titleCard = new TexturedRect(0, 0, 960, 540, titleImage);
const button = new StartButton(renderer.canvas.width - 128 - 40, 40, 128, 64, startButtonAnimation);
const player = new Player(0, 0, 96 * 2 / 3, 243 * 2 / 3, playerTextures);
let decors = [];
for (let i = 0; i < 100; i++) {
    let decor = new Decor(random(-renderer.canvas.width * 5, renderer.canvas.width * 6), random(-renderer.canvas.height * 5, renderer.canvas.height * 6), 102, 105, signDecorImage);
    decors.push(decor);
}
const background = new Background(renderer);
logo.setVisibility(false);
titleCard.setVisibility(false);
button.setVisibility(false);
player.setVisibility(false);
decors.forEach(decor => decor.setVisibility(false));
for (let i = 0; i < 100; i++) {
    new Enemy(0, 0, 102, 105, signDecorImage);
}
document.addEventListener('keydown', event => controller.keyHandler(event));
document.addEventListener('keyup', event => controller.keyHandler(event));
document.addEventListener('mousemove', event => controller.mouseMoveHandler(event, renderer.canvas));
document.addEventListener('mousedown', event => controller.mouseButtonHandler(event));
document.addEventListener('mouseup', event => controller.mouseButtonHandler(event));
function onTouch(evt) {
    // evt.preventDefault();
    if (evt.touches.length > 1 ||
        (evt.type === "touchend" && evt.touches.length > 0))
        return;
    const newEvt = document.createEvent("MouseEvents");
    let type = null;
    let touch = null;
    switch (evt.type) {
        case "touchstart":
            type = "mousedown";
            touch = evt.changedTouches[0];
            break;
        case "touchmove":
            type = "mousemove";
            touch = evt.changedTouches[0];
            break;
        case "touchend":
            type = "mouseup";
            touch = evt.changedTouches[0];
            break;
    }
    newEvt.initMouseEvent(type, true, true, document.defaultView, 0, touch.screenX, touch.screenY, touch.clientX, touch.clientY, evt.ctrlKey, evt.altKey, evt.shiftKey, evt.metaKey, 0, null);
    evt.target.dispatchEvent(newEvt);
    let rect = renderer.canvas.getBoundingClientRect();
    let touchX = Math.floor((touch.clientX - rect.left) / (rect.right - rect.left) * renderer.canvas.width);
    let touchY = Math.floor((touch.clientY - rect.top) / (rect.bottom - rect.top) * renderer.canvas.height);
    if (gameData.documentFocused) {
        player.x -= renderer.canvas.width / 2 - touchX;
        player.y -= renderer.canvas.height / 2 - touchY;
    }
}
document.addEventListener('touchstart', event => onTouch(event));
export { renderer, controller, camera, logo, titleCard, button, player, decors, background };
