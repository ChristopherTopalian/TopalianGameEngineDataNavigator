//Dedicated to God the Father

//All Rights Reserved Christopher Topalian Copyright 2020-2021

//playerLoadData.js

//playerArray is used to load player settings
function playerLoadData()
{  
    if (playerArray[0].texture != "none")
    {
        //TEXTURE THE PLAYER
        ourPlayer.playerId.style.backgroundImage = playerArray[0].texture;
    }
    else
    {
        //else if texture is not used
        //COLOR THE BACKGROUND OF THE PLAYER
        ourPlayer.playerId.style.background = playerArray[0].colorFill;
    }

    //OPACITY
    ourPlayer.playerId.style.opacity = playerArray[0].opacity;

    //COLOR OF TEXT
    ourPlayer.playerId.style.color = playerArray[0].colorText;

    //X POSITION
    ourPlayer.playerId.style.left = playerArray[0].posX;

    //Y POSITION
    ourPlayer.playerId.style.top = playerArray[0].posY;

    //WIDTH
    ourPlayer.playerId.style.width = playerArray[0].theWidth;

    //HEIGHT
    ourPlayer.playerId.style.height = playerArray[0].theHeight;
}