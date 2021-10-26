//Dedicated to God the Father

//All Rights Reserved Christopher Topalian Copyright 2020-2021

//movePlayer.js

/*
    CONTROLS CONTROLS CONTROLS CONTROLS
*/

/* The Keyboard Letter Codes that are Being Pressed */

let keyboard = { };  //object holds keyboard presses

keyboard.UP = 87;         //87 is w, 38 is up arrow
keyboard.DOWN = 83;   //83 is s, 40 is down arrow
keyboard.LEFT = 65;     //65 is a, 37 is left arrow
keyboard.RIGHT = 68;  //68 is d, 39 is right arrow   

/* Player Controls */
function playerMotion()
{
    //if person is not typing in a textarea, controls are ON
    if(controlFlag == 1)
    {
        if(keyboard[keyboard.LEFT])
        {
            movePlayer(-1,0);
        }
        if(keyboard[keyboard.RIGHT])
        {
            movePlayer(1,0);
        }
        if(keyboard[keyboard.UP])
        {
            movePlayer(0,-1);
        }
        if(keyboard[keyboard.DOWN])
        {
            movePlayer(0,1);
        }
    }
}

/* Character Movement Updating */
function movePlayer(theX, theY)
{
   ourPlayer.x += (theX || 0) * ourPlayer.speedMultiplier;

   ourPlayer.y += (theY || 0) * ourPlayer.speedMultiplier;

   ourPlayer.playerId.style.left = ourPlayer.x + 'px';

   ourPlayer.playerId.style.top = ourPlayer.y + 'px';
};

//--------------------------------------------------//

