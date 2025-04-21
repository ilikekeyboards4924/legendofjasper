import { titleScreenMusic } from "./audio.js";
import { background, button, camera, controller, decors, logo, player, renderer, titleCard } from "./init.js";
import { gameData } from "./util.js";

function updateGameState() {
    renderer.color(0, 0, 0);
    renderer.ctx.fillRect(0, 0, renderer.canvas.width, renderer.canvas.height);

    if (gameData.state == 0) {
        if (gameData.frameCounter >= 0 && gameData.frameCounter < 120) logo.setVisibility(true);
        if (gameData.frameCounter > 120) logo.setVisibility(false);
        if (gameData.frameCounter > 170) gameData.state = 1;
        console.log(gameData.frameCounter);
    }
    
    if (gameData.state == 1) {
        if (gameData.frameCounter > 200) {
            titleCard.setVisibility(true);
            button.setVisibility(true);
        }
    }

    if (gameData.state == 2) {
        gameData.playerControlsActive = true;

        renderer.color(100,100,255);

        titleCard.setVisibility(false);
        player.setVisibility(true)
        decors.forEach(decor => decor.setVisibility(true));
        background.sections.forEach(row => {
            row.forEach(section => {
                section.setVisibility(true);
            });
        })
    }
}

export function run() {
    updateGameState();

    controller.update();

    background.draw(camera);

    logo.draw(camera, false);
    titleCard.draw(camera, false);
    
    button.update(controller.mouse);
    button.draw(camera, false);
    
    decors.forEach(decor => {
        decor.draw(camera);
    });

    player.move(controller);
    player.update();
    camera.center(player);
    player.draw(camera);

    background.update(player);    
}

document.addEventListener('click', _ => {
    gameData.documentFocused = true;

    document.getElementsByClassName('item')[0]?.remove();
    document.querySelector('canvas').style = 'display: flex; border: 2px solid black;';

    titleScreenMusic.play().then(_ => { // move this out of the event listener at some point
        titleScreenMusic.controls = true;
        titleScreenMusic.volume = 0.2;
        titleScreenMusic.loop = true;
    })
});