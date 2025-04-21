import { baseUrl } from "./util.js";
function setSource(image, url) {
    image.src = baseUrl + url;
    return image;
}
const titleImage = setSource(new Image(960, 540), 'textures/title.png');
;
const logoImage = setSource(new Image(960, 540), 'textures/logo.png');
;
const playerTextures = {};
playerTextures['left'] = [];
playerTextures['right'] = [];
playerTextures['idle'] = [];
for (let i = 0; i < 8; i++) {
    playerTextures['left'].push(setSource(new Image(96, 243), `textures/walkcycle/left/${i + 1}.png`));
}
for (let i = 0; i < 8; i++) {
    playerTextures['right'].push(setSource(new Image(96, 243), `textures/walkcycle/right/${i + 1}.png`));
}
(() => {
    playerTextures['idle'].push(setSource(new Image(96, 243), 'textures/walkcycle/left/idle.png'));
})();
(() => {
    playerTextures['idle'].push(setSource(new Image(96, 243), 'textures/walkcycle/right/idle.png'));
})();
// let startButtonAnimation: HTMLImageElement[] = [new Image(128, 64), new Image(128, 64)];
// setSource(startButtonAnimation[0], 'textures/start-button.png');
// setSource(startButtonAnimation[1], 'textures/start-button-clicked.png');
const startButtonAnimation = {};
startButtonAnimation['idle'] = [];
startButtonAnimation['active'] = [];
(() => {
    startButtonAnimation['idle'].push(setSource(new Image(128, 64), 'textures/start-button.png'));
})();
(() => {
    startButtonAnimation['active'].push(setSource(new Image(128, 64), 'textures/start-button-clicked.png'));
})();
const signDecorImage = setSource(new Image(102, 105), 'textures/sign-decor.png');
const backgroundImage = setSource(new Image(960, 540), 'textures/background.png');
export { titleImage, startButtonAnimation, playerTextures, logoImage, signDecorImage, backgroundImage };
