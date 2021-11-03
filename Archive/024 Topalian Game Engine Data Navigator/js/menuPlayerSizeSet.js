//Dedicated to God the Father

//All Rights Reserved Christopher Topalian Copyright 2020-2021

//menuPlayerSizeSet.js

function menuPlayerSizeSet()
{
    playSound("blipQuiet2", 1.0);

    //TYPE OF ELEMENT TO CREATE
    let theMenu = document.createElement("div");

    //POSITION
    theMenu.style.position = "absolute";
    theMenu.style.left = ourPlayer.x + 100 +'px';
    theMenu.style.top = ourPlayer.y - 50 + 'px';

    //SIZE
    theMenu.style.width = 400 +'px';
    theMenu.style.height = 165 +'px';

    //PADDING effects size
    theMenu.style.paddingLeft = "20px";
    theMenu.style.paddingRight = "20px";
    theMenu.style.paddingTop = "4px";

    //LAYER
    theMenu.style.zIndex = "998";

    //BACKGROUND COLOR
    theMenu.style.background = "black";

    //BORDER
    theMenu.style.borderStyle = "solid";
    theMenu.style.borderWidth = "2px";
    theMenu.style.borderColor = "rgba(255,255,255,1.0)";
    theMenu.style.borderRadius= "10px";

    //FONT
    theMenu.style.fontFamily = "arial";
    theMenu.style.fontWeight = "bold";
    theMenu.style.fontSize = "large";
    theMenu.style.color = "white";
    theMenu.style.textAlign = "center";

    //REMOVE MENU button
    theMenu.innerHTML += '<button onclick=removeElement("menuSizePlayerSet");keyboardControlOn(); class="ourButton" style="margin-bottom: -4px">X</button>';   

    //We Build the menu using innerHTML
    theMenu.innerHTML+= '<div><hr><span style="color:rgb(255, 255, 255)">SET PLAYER SIZE</span><hr class="hrCompact">';

    theMenu.innerHTML+= '<button onclick="playerSizeSetDefault();" class=\'ourButton\'>Default</button><br>';

    theMenu.innerHTML+= 'X SIZE &nbsp<textarea id="customSizeX" class=\'textInput\' onkeydown="keyboardControlOff();"></textarea><br>';

    theMenu.innerHTML+= 'Y SIZE &nbsp<textarea id="customSizeY" class=\'textInput\' onkeydown="keyboardControlOff();"></textarea><br>';

    theMenu.innerHTML+= '<button onclick="playerSizeSet();keyboardControlOn();enterButtonSound();" class=\'ourButton\'>Enter</button><br>';

    //ID
    theMenu.id = "menuSizePlayerSet"; 
    
    /* 
        If the player menu already exists, remove it, and create a new player menu wherever the player is
    */
    if(document.getElementById("menuSizePlayerSet"))
    {
        removeElement("menuSizePlayerSet");
        
        document.body.append(theMenu);
    }
    else
    {
        document.body.append(theMenu);
    }
}

function playerSizeSet()
{
   // let currentSize = sizeGet("thePlayer");
    let theSizeX;
    let theSizeY;

    theSizeX = document.getElementById('customSizeX').value;

    theSizeY = document.getElementById('customSizeY').value;

    ourPlayer.playerId.innerHTML = theSizeX + "<br>" + theSizeY + "<br>";

    ourPlayer.playerId.style.width = theSizeX;

    ourPlayer.playerId.style.height = theSizeY;

    //update playerArray to show the changed value
    updatePlayer();
}

function playerSizeSetDefault()
{
   // let currentSize = sizeGet("thePlayer");

    let theSizeX = 70;

    let theSizeY = 70;

    document.getElementById('customSizeX').value = theSizeX;

    document.getElementById('customSizeY').value = theSizeY;

    ourPlayer.playerId.innerHTML = theSizeX + "<br>" + theSizeY + "<br>";

    ourPlayer.playerId.style.width = theSizeX;

    ourPlayer.playerId.style.height = theSizeY;

    //update playerArray to show the changed value
    updatePlayer();
}
//--------------------------------------------------//

