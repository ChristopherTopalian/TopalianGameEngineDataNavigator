// playerUpdate.js

function updatePlayer(idName)
{
    idName = 'thePlayer';

    playerArray[0].name = playerArray[0].name;
    playerArray[0].id = idName;
    playerArray[0].posX = get(idName, 'pos').x;
    playerArray[0].posY = get(idName, 'pos').y;
    playerArray[0].sizeX = get(idName, 'size').x;
    playerArray[0].sizeY = get(idName, 'size').y;
    playerArray[0].colorFill = get(idName, 'background-color'),
    playerArray[0].colorText = get(idName, 'color'),
    playerArray[0].opacity = get(idName, 'opacity');
    playerArray[0].texture = get(idName, 'background-image');

    showPlayerData();
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

