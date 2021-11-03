//Dedicated to God the Father

//All Rights Reserved Christopher Topalian Copyright 2020-2021

//menuPlayerPositionGet.js

function menuPlayerPositionGet()
{
    playSound("blipQuiet2", 1.0);

    //TYPE OF ELEMENT TO CREATE
    let theMenu = document.createElement("div");

    //POSITION
    theMenu.style.position = "absolute";
    theMenu.style.left = ourPlayer.x + 100 +'px';
    theMenu.style.top = ourPlayer.y - 55 + 'px';

    //SIZE
    theMenu.style.width = 400 +'px';
    theMenu.style.height = 192 +'px';

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
    theMenu.innerHTML += '<button onclick=removeElement("menuPositionPlayerGet");keyboardControlOn(); class="ourButton" style="margin-bottom: -4px">X</button>';   

    //We Build the menu using innerHTML
    theMenu.innerHTML+= '<div><hr><span style="color:rgb(255, 255, 255)">GET PLAYER POSITION</span><hr class="hrCompact">';

    theMenu.innerHTML+= '<button onclick="playerPositionGet()" class=\'ourButton\'>GET POS</button><br>';

    theMenu.innerHTML+= '<button onclick="playerPositionGetRepeat()" class=\'ourButton\'>GET POS REPEAT</button><br>';

    theMenu.innerHTML+= '<button onclick="removeTimer(currentPosTimer)" class=\'ourButton\'>Cancel Get Pos</button><hr class="hrCompact">';

    theMenu.innerHTML+= 'X POS &nbsp<textarea id="gotX" class=\'textInput\' onkeydown="keyboardControlOff();"></textarea><br>';

    theMenu.innerHTML+= 'Y POS &nbsp<textarea id="gotY" class=\'textInput\' onkeydown="keyboardControlOff();"></textarea><br>';

    //ID
    theMenu.id = "menuPositionPlayerGet"; 
    
    /* 
        If the player menu already exists, remove it, and create a new player menu wherever the player is
    */
    if(document.getElementById("menuPositionPlayerGet"))
    {
        removeElement("menuPositionPlayerGet");
        
        document.body.append(theMenu);
    }
    else
    {
        document.body.append(theMenu);
    }
}

function playerPositionGet()
{
    let currentPosition = positionGet("thePlayer");

    ourPlayer.playerId.innerHTML = currentPosition.x.toFixed(0) + "<br>" + currentPosition.y.toFixed(0) + "<br>";

    document.getElementById('gotX').value = currentPosition.x;

    document.getElementById('gotY').value = currentPosition.y;
}

let currentPosTimer;
function playerPositionGetRepeat()
{
    currentPosTimer = setInterval(function(){ playerPositionGet();}, 1000);
}

//--------------------------------------------------//

