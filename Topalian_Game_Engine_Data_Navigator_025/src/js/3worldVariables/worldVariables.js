// worldVariables.js

let online = false;

let backgroundSizeX = 250000;
let backgroundSizeY = 250000;

let controlFlag = 1;

let activePlayer = "thePlayer";

let playerNumber = 0;

let structuresArray = [];

let ourPlayer =
{
    x: playerArray[playerNumber].x,
    y: playerArray[playerNumber].y,
    width: playerArray[playerNumber].width,
    height: playerArray[playerNumber].height,
    speedMultiplier: 2,
    id: playerArray[playerNumber].id,
    playerColor: playerArray[playerNumber].colorFill,
    texture: `url(${playerArray[playerNumber].texture})`,
    texturePos: '0% 0%',
    velocityY: 0,
};

let colorChoices = [
    { name: 'aqua', color: '0, 255, 255' },
    { name: 'black', color: '0, 0, 0' },
    { name: 'blue', color: '0, 0, 255' },
    { name: 'fuchsia', color: '255, 0, 255' },
    { name: 'gray', color: '128, 128, 128' },
    { name: 'green', color: '0, 128, 0' },
    { name: 'lime', color: '0, 255, 0' },
    { name: 'maroon', color: '128, 0, 0' },
    { name: 'navy', color: '0, 0, 128' },
    { name: 'olive', color: '128, 128, 0' },
    { name: 'purple', color: '128, 0, 128' },
    { name: 'red', color: '255, 0, 0' },
    { name: 'silver', color: '192, 192, 192' },
    { name: 'teal', color: '0, 128, 128' },
    { name: 'white', color: '255, 255, 255' },
    { name: 'yellow', color: '255, 255, 0' },
    { name: 'orange', color: '255, 165, 0' },
    { name: 'pink', color: '255, 192, 203' },
    { name: 'brown', color: '165, 42, 42' },
    { name: 'violet', color: '238, 130, 238' },
    { name: 'cyan', color: '0, 255, 255' },
    { name: 'magenta', color: '255, 0, 255' },
    { name: 'limegreen', color: '50, 205, 50' },
    { name: 'gold', color: '255, 215, 0' },
    { name: 'coral', color: '255, 127, 80' },
    { name: 'indigo', color: '75, 0, 130' },
    { name: 'khaki', color: '240, 230, 140' },
    { name: 'plum', color: '221, 160, 221' },
    { name: 'salmon', color: '250, 128, 114' },
    { name: 'tan', color: '210, 180, 140' },
    { name: 'turquoise', color: '64, 224, 208' },
    { name: 'wheat', color: '245, 222, 179' }
];

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

