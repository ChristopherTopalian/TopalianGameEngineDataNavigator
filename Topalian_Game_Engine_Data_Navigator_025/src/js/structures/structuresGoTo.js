// structuresGoTo.js

// Send the Player to the Chosen Structure Location

function structuresGoTo(whichId)
{
    console.log(whichId);

    //let playerElement = ge(whichId);

     //if (playerElement)
     //{
        audioPlay("sfx_blip_001", 1.0);

        // Get the position
        let newPosition = positionGet(whichId);

        // Update player position
        ourPlayer.x = newPosition.x + 15;
        ourPlayer.y = newPosition.y - 35;

        // Move player to the new position
        // movePlayer(whichId, ourPlayer.x, ourPlayer.y);
        ge(activePlayer).style.left = ourPlayer.x + "px";
        ge(activePlayer).style.top = ourPlayer.y + "px";
    //}
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

