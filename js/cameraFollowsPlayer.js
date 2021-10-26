//Dedicated to God the Father

//All Rights Reserved Christopher Topalian Copyright 2020-2021

//cameraFollowsPlayer.js

/*
    CAMERA CAMERA CAMERA CAMERA
*/

//camera starts active
let cameraFlag = 1;

//Camera Follows the Player
function cameraFollowsPlayer()
{
    if(cameraFlag == 1)
    {
        ourPlayer.playerId.scrollIntoView( { block: "center", inline: "center" } );
    }
    if(cameraFlag == 0)
    {
        //get position of where the person clicks their mouse arrow
        mouseOn();

        return;
    }
}

//--------------------------------------------------//

