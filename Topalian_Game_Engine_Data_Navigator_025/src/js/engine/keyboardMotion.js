// keyboardMotion.js

// keyboard letter codes being pressed
let keyboard = { };

keyboard.UP = 87;  // 87 w, 38 up arrow
keyboard.DOWN = 83;  // 83 s, 40 down arrow
keyboard.LEFT = 65;    // 65 a, 37 left arrow
keyboard.RIGHT = 68; // 68 d, 39 right arrow
keyboard.SHIFT = 16;  // 16 shift

// Player Controls

function playerMotion(whichId)
{
    let playerElement = ge(whichId);

    // if person is not typing in a textarea, controls are ON
    if (controlFlag == 1)
    {
        if (keyboard[keyboard.LEFT])
        {
            movePlayer(whichId, -1, 0);

            ge(ourPlayer.id).style.transform = 'scaleX(-1)';
        }
        if (keyboard[keyboard.RIGHT])
        {
            movePlayer(whichId, 1, 0);

            ge(ourPlayer.id).style.transform = 'scaleX(1)';
        }
        if (keyboard[keyboard.UP])
        {
            movePlayer(whichId, 0, -1);
        }
        if (keyboard[keyboard.DOWN])
        {
            movePlayer(whichId, 0, 1);
        }

        if (keyboard[keyboard.LEFT] && keyboard[keyboard.SHIFT])
        {
            movePlayer(whichId, -2, 0);
        }
        if (keyboard[keyboard.RIGHT] && keyboard[keyboard.SHIFT])
        {
            movePlayer(whichId, 2, 0);
        }
        if (keyboard[keyboard.UP] && keyboard[keyboard.SHIFT])
        {
            movePlayer(whichId, 0, -2);
        }
        if (keyboard[keyboard.DOWN] && keyboard[keyboard.SHIFT])
        {
            movePlayer(whichId, 0, 2);
        }
    }
}

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

