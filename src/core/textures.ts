import { baseUrl } from "./util.js";

function setSource(image: HTMLImageElement, url: string) {
    image.src = baseUrl + url;
    return image;
}

const titleImage: HTMLImageElement = setSource(new Image(960, 540), 'textures/title.png');;
const logoImage: HTMLImageElement = setSource(new Image(960, 540), 'textures/logo.png');;


const playerTextures: Record<string, HTMLImageElement[]> = {};
playerTextures['left'] = [];
playerTextures['right'] = [];
playerTextures['idle'] = [];

for (let i = 0; i < 8; i++) {
    playerTextures['left'].push(setSource(new Image(96, 243), `textures/walkcycle/left/${i+1}.png`));
}
for (let i = 0; i < 8; i++) {
    playerTextures['right'].push(setSource(new Image(96, 243), `textures/walkcycle/right/${i+1}.png`));
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

const startButtonAnimation: Record<string, HTMLImageElement[]> = {};
startButtonAnimation['idle'] = [];
startButtonAnimation['active'] = [];

(() => {
    startButtonAnimation['idle'].push(setSource(new Image(128, 64), 'textures/start-button.png'));
})();
(() => {
    startButtonAnimation['active'].push(setSource(new Image(128, 64), 'textures/start-button-clicked.png'));
})();

const signDecorImage: HTMLImageElement = setSource(new Image(102, 105), 'textures/sign-decor.png');
const backgroundImage: HTMLImageElement = setSource(new Image(960, 540), 'textures/background.png');

export { titleImage, startButtonAnimation, playerTextures, logoImage, signDecorImage, backgroundImage };