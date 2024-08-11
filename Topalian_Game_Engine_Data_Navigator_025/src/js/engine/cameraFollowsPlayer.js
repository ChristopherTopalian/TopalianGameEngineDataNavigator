// cameraFollowsPlayer.js

// camera starts active
let cameraFlag = 1;

// camera Follows the Player
function cameraFollowsPlayer(whichId)
{
    if (cameraFlag == 1)
    {
        let playerElement = ge(whichId);

        if (playerElement)
        {
            playerElement.scrollIntoView(
            {
                block: "center", inline: "center"
            });
        }
    }

    if (cameraFlag == 0)
    {
        // get position of where the person clicks their mouse arrow
        mouseOn();

        return;
    }
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

