// playerLoadData.js

// playerArray is used to load player settings
function playerLoadData(whichId)
{
    let playerElement = ge(whichId);

    if (playerElement)
    {
        if (playerArray[0].texture != "none")
        {
            // texture the player
            playerElement.style.backgroundImage = playerArray[0].texture;
        }
        else
        {
            // else if texture is not used
            // background Color of the player
            playerElement.style.background = playerArray[0].colorFill;
        }

        // opacity
        playerElement.style.opacity = playerArray[0].opacity;

        // text color
        playerElement.style.color = playerArray[0].colorText;

        // X position
        playerElement.style.left = playerArray[0].x;

        // Y position
        playerElement.style.top = playerArray[0].y;

        // width
        playerElement.style.width = playerArray[0].width;

        // height
        playerElement.style.height = playerArray[0].height;
    }
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

