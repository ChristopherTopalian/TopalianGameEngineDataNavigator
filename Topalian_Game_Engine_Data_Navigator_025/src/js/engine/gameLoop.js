// gameLoop.js

function gameLoop(whichId)
{
    playerMotion(activePlayer);

    cameraFollowsPlayer(activePlayer);   

    keepPlayerInWorld(activePlayer);

    wasLineCrossed(activePlayer);

    // getDistanceXY('thePlayer', 'STRUCTURE1');

    requestAnimationFrame(gameLoop); 
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

