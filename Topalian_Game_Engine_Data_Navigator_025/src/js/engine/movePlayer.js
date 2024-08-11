// movePlayer.js

function movePlayer(whichId, theX, theY)
{
    let playerElement = ge(whichId);

    if (playerElement)
    {
        ourPlayer.x += (theX || 0) * ourPlayer.speedMultiplier;

        ourPlayer.y += (theY || 0) * ourPlayer.speedMultiplier;

        playerElement.style.left = ourPlayer.x + 'px';

        playerElement.style.top = ourPlayer.y + 'px';
    }
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

