//Dedicated to God the Father

//All Rights Reserved Christopher Topalian Copyright 2020-2021

//updateWorld.js

/*
    THE GAME LOOP
*/

function updateWorld()
{
    playerMotion();

    cameraFollowsPlayer();   

    wasLineCrossed();  

    //getDistanceXY('thePlayer', 'STRUCTURE1');

    requestAnimationFrame(updateWorld);  
}

//--------------------------------------------------//

