//Dedicated to God the Father

//All Rights Reserved Christopher Topalian Copyright 2020-2021

//structuresGoTo.js

/*
    Send the Player to the Chosen Structure Location
*/

function structuresGoTo(theId)
{
    playSound("blipQuiet2", 1.0);

    //position
    ourPlayer.x = positionGet(theId).x;
    ourPlayer.y = positionGet(theId).y;

    //update player position
    movePlayer();
}

//--------------------------------------------------//

