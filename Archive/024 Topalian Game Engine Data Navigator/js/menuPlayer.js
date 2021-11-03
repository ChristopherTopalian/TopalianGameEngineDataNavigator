//Dedicated to God the Father

//All Rights Reserved Christopher Topalian Copyright 2020-2021

//menuPlayer.js

/*
    PLAYER MENU PLAYER MENU PLAYER MENU
*/

function menuPlayer()
{
    //TYPE OF ELEMENT TO CREATE
    let theMenu = document.createElement("div");

    //POSITION
    theMenu.style.position = "absolute";
    theMenu.style.left = ourPlayer.x - 285 +'px';
    theMenu.style.top = ourPlayer.y - 127 + 'px';

    //SIZE
    theMenu.style.width = 250 +'px';
    theMenu.style.height = 643 +'px';

    //PADDING effects size
    theMenu.style.paddingLeft = "10px";
    theMenu.style.paddingRight = "10px";
    theMenu.style.paddingTop = "4px";

    //LAYER
    theMenu.style.zIndex = "998";

    //BACKGROUND COLOR
    theMenu.style.background = "black";

    //BORDER    
    //theMenu.style.border = "solid 2px rgba(100,100,255,1.0)";
    theMenu.style.borderStyle = "solid";
    theMenu.style.borderWidth = "2px";
    theMenu.style.borderColor = "rgba(100,100,255,1.0)";
    theMenu.style.borderRadius= "10px";

    //FONT
    theMenu.style.fontFamily = "arial";
    theMenu.style.fontWeight = "bold";
    theMenu.style.fontSize = "large";
    theMenu.style.color = "white";
    theMenu.style.textAlign = "center";

    //REMOVE MENU button
    theMenu.innerHTML += '<button onclick=removeElement("menuPlayer"); class="ourButton">X</button>';

    //We Build the menu using innerHTML
    theMenu.innerHTML+= '<div><hr class="hrCompact"><span  class="textCompact">INSTRUCTIONS';

    theMenu.innerHTML+= '<button onclick="messageStart();" class="ourButton">INSTRUCTIONS</button></span>';

    theMenu.innerHTML += '<hr class="hrCompact">';

    theMenu.innerHTML+= '<span class="textCompact">GO TO<br></span>';

    theMenu.innerHTML+= '<button onclick="travelTo(\'scripting\');" class=\'ourButton\'>SCRIPTING</button>';

    theMenu.innerHTML+= '<button onclick="travelTo(\'evidence\');" class=\'ourButton\'>EVIDENCE</button>';

    theMenu.innerHTML+= '<button onclick="travelTo(\'books\');" class=\'ourButton\'>BOOKS</button><button onclick="travelTo(\'news\');" class=\'ourButton\'>NEWS</button>';

    theMenu.innerHTML += '<hr class="hrCompact">';

    theMenu.innerHTML+= '<span class="textCompact">AUDIO<br></span>';

    theMenu.innerHTML+= '<button onclick="songChoicesMenu()" class=\'ourButton\'>SONGS</button>';

    theMenu.innerHTML += '<hr class="hrCompact">';

    theMenu.innerHTML+= '<span class="textCompact">CREATE STRUCTURES<br></span>';

    theMenu.innerHTML+= '<button onclick="structuresMenu()" class=\'ourButton\'>HOW TO</button>';

    theMenu.innerHTML+= '<button id="createButton" onclick="buttonCreatePressed()" class=\'ourButton\'>CREATE</button><br>';

    theMenu.innerHTML+= '<button onclick="structuresRow(ourPlayer.x, ourPlayer.y, 125, 200, structuresArray)" class=\'ourButton\'>GO TO</button>';

    theMenu.innerHTML+= '<button id="loadStructureButtonId" onclick="loadStructureScript(\'TopalianStructureData.js\')" class=\'ourButton\'>LOAD</button>';

    theMenu.innerHTML += '<hr class="hrCompact">';

    theMenu.innerHTML+= '<span class="textCompact">PLAYER<br></span>';

    theMenu.innerHTML+= '<button onclick="menuPlayerName(\'thePlayer\')" class=\'ourButton\'>NAME</button>';

    theMenu.innerHTML+= '<button onclick="loadPlayerScript(\'TopalianPlayerData.js\');" class=\'ourButton\'>LOAD</button>';

    theMenu.innerHTML += '<hr class="hrCompact">';

    theMenu.innerHTML+= '<span class="textCompact">PLAYER APPEARANCE<br></span>';

    theMenu.innerHTML+= '<button onclick="menuPlayerColor()" class=\'ourButton\'>COLOR</button>';

     theMenu.innerHTML+= '<button onclick="menuPlayerColorText()" class=\'ourButton\'>TEXT</button><br>';

    theMenu.innerHTML+= '<button onclick="menuPlayerTexture()" class=\'ourButton\'>TEXTURE</button>';

    theMenu.innerHTML+= '<button onclick="menuPlayerOpacity()" class=\'ourButton\'>OPACITY</button>';

    theMenu.innerHTML += '<hr class="hrCompact">';

    theMenu.innerHTML+= '<span class="textCompact">PLAYER SPEED<br></span>';

    theMenu.innerHTML+= '<button onclick="menuPlayerSpeed()" class=\'ourButton\'>SPEED</button>';

    theMenu.innerHTML += '<hr class="hrCompact">';

    theMenu.innerHTML+= '<span class="textCompact">PLAYER POSITION<br></span>';

    theMenu.innerHTML+= '<button onclick="menuPlayerPositionGet()" class=\'ourButton\'>GET</button>';

    theMenu.innerHTML+= '<button onclick="menuPlayerPositionSet()" class=\'ourButton\'>SET</button>';

    theMenu.innerHTML += '<hr class="hrCompact">';

    theMenu.innerHTML+= '<span class="textCompact">PLAYER SIZE<br></span>';

    theMenu.innerHTML+= '<button onclick="menuPlayerSizeGet()" class=\'ourButton\'>GET</button>';

    theMenu.innerHTML+= '<button onclick="menuPlayerSizeSet()" class=\'ourButton\'>SET</button>';

    theMenu.innerHTML += '<hr class="hrCompact">';

    theMenu.innerHTML+= '<span class="textCompact">MOUSE POSITION<br></span>';

    theMenu.innerHTML+= '<button onclick="mouseOn();playSound(\'blipQuiet2\'); " class=\'ourButton\'>ON</button>';

    theMenu.innerHTML+= '<button onclick="mouseOff();playSound(\'blipQuiet2\');" class=\'ourButton\'>OFF</button>';

    theMenu.innerHTML += '<hr class="hrCompact">';

    theMenu.innerHTML+= '<span class="textCompact">DISTANCE<br></span>';

    theMenu.innerHTML+= '<button onclick="menuPlayerDistance()" class=\'ourButton\'>DISTANCE FINDER</button><hr class="hrCompact">';

    theMenu.innerHTML+= '<span class="textCompact">FIND<br></span>';

    theMenu.innerHTML+= '<button onclick="menuSearch()" class=\'ourButton\'>SEARCH</button>';

    theMenu.innerHTML += '<hr class="hrCompact">';

    theMenu.innerHTML +='</div>';

    //ID
    theMenu.id = "menuPlayer"; 
    
    /* 
        If the player menu already exists, remove it, and create a new player menu wherever the player is
    */

    if(document.getElementById("menuPlayer"))
    {
        removeElement("menuPlayer");
        
        document.body.append(theMenu);

        //prevent menu from leaving the screen on the left side
        if(positionGet("menuPlayer").x <= 30)
        {
            theMenu.style.left = 40;
        }

        //prevent menu from leaving the screen on the top side
        if(positionGet("menuPlayer").y <= 200)
        {
            theMenu.style.top = 100;
        }
    }
    else
    {
        document.body.append(theMenu);
    }
}

//--------------------------------------------------//

