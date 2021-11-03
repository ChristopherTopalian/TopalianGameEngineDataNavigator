//Dedicated to God the Father

//All Rights Reserved Christopher Topalian Copyright 2020-2021

//menuPlayerPositionSet.js

function menuPlayerPositionSet()
{
    playSound("blipQuiet2", 1.0); 

    //TYPE OF ELEMENT TO CREATE
    let theMenu = document.createElement("div");   

    //POSITION
    theMenu.style.position = "absolute";
    theMenu.style.left = ourPlayer.x + 100 +'px';
    theMenu.style.top = ourPlayer.y - 80 + 'px';

    //SIZE
    theMenu.style.width = 400 +'px';
    theMenu.style.height = 235 +'px';

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
    theMenu.innerHTML += '<button onclick=removeElement("menuPositionPlayerSet");keyboardControlOn(); class="ourButton" style="margin-bottom: -4px">X</button>';   

    //We Build the menu using innerHTML
    theMenu.innerHTML+= '<div><hr><span style="color:rgb(255, 255, 255)">PLAYER POSITION OPTIONS</span><hr>';    

    theMenu.innerHTML+= '<button onclick="playerMoveTo(\'1\')" class=\'ourButton\'>1</button></div>';

    theMenu.innerHTML+= '<button onclick="playerMoveTo(\'2\')" class=\'ourButton\'>2</button></div>';

    theMenu.innerHTML+= '<button onclick="playerMoveTo(\'3\')" class=\'ourButton\'>3</button></div>';

    theMenu.innerHTML+= '<button onclick="playerMoveTo(\'4\')" class=\'ourButton\'>4</button></div>';

    theMenu.innerHTML+= '<button onclick="playerMoveTo(\'5\')" class=\'ourButton\'>5</button></div>';

    theMenu.innerHTML+= '<button onclick="playerMoveTo(\'6\')" class=\'ourButton\'>6</button></div>';

    theMenu.innerHTML+= '<button onclick="playerMoveTo(\'7\')" class=\'ourButton\'>7</button></div>';

    theMenu.innerHTML+= '<button onclick="playerMoveTo(\'8\')" class=\'ourButton\'>8</button></div>';

    theMenu.innerHTML+= '<button onclick="playerMoveTo(\'9\')" class=\'ourButton\'>9</button></div>';

    theMenu.innerHTML+= '<button onclick="playerMoveTo(\'0\')" class=\'ourButton\'>10</button></div><hr>';

    theMenu.innerHTML+= '<button onclick="customPosition();" class=\'ourButton\'>Custom Player Position</button><hr>';

    theMenu.innerHTML+= 'X POS &nbsp<textarea id="customPosX" class=\'textInput\' onkeydown="keyboardControlOff();"></textarea><br>';

    theMenu.innerHTML+= 'Y POS &nbsp<textarea id="customPosY" class=\'textInput\' onkeydown="keyboardControlOff();"></textarea><br>';

    theMenu.innerHTML+= '<button onclick="customPositionText();keyboardControlOn();enterButtonSound();" class=\'ourButton\'>Enter</button><br>';

    //ID
    theMenu.id = "menuPositionPlayerSet"; 

    /* 
        If the player menu already exists, remove it, and create a new player menu wherever the player is
    */
    if(document.getElementById("menuPositionPlayerSet"))
    {
        removeElement("menuPositionPlayerSet");
        
        document.body.append(theMenu);
    }
    else
    {
        document.body.append(theMenu);
    }
}

//Move the player to a preset location, based on which button was pressed
function playerMoveTo(theLocation)
{
    playSound("blipQuiet2", 1.0);

    if(theLocation == '1')
    {
        //x location of the player
        ourPlayer.x=100;

        //y location of the player
        ourPlayer.y=700;
    }
    if(theLocation == '2')
    {
        //x location of the player
        ourPlayer.x=200;

        //y location of the player
        ourPlayer.y=700;
    }
    if(theLocation == '3')
    {
        //x location of the player
        ourPlayer.x=300;

        //y location of the player
        ourPlayer.y=700;
    }
    if(theLocation == '4')
    {
        //x location of the player
        ourPlayer.x=400;

        //y location of the player
        ourPlayer.y=700;
    }
    if(theLocation == '5')
    {
        //x location of the player
        ourPlayer.x=500;

        //y location of the player
        ourPlayer.y=700;
    }
    if(theLocation == '6')
    {
        //x location of the player
        ourPlayer.x=600;

        //y location of the player
        ourPlayer.y=700;
    }
    if(theLocation == '7')
    {
        //x location of the player
        ourPlayer.x=700;

        //y location of the player
        ourPlayer.y=700;
    }
    if(theLocation == '8')
    {
        //x location of the player
        ourPlayer.x=800;

        //y location of the player
        ourPlayer.y=700;
    }
    if(theLocation == '9')
    {
        //x location of the player
        ourPlayer.x=900;

        //y location of the player
        ourPlayer.y=700;
    }
    if(theLocation == '0')
    {
        //x location of the player
        ourPlayer.x=1000;

        //y location of the player
        ourPlayer.y=700;
    }

    movePlayer();

    //update the playerArray posX
    playerArray[0].posX = ourPlayer.x;

    //update the playerArray posY
    playerArray[0].posY = ourPlayer.y;

    //update the textArea of the posX and posY
    document.getElementById("customPosX").value = ourPlayer.x;

    document.getElementById("customPosY").value = ourPlayer.y

    //show the playerArray data in the textarea that has the id named textAreaPlayerData
    showPlayerData();

    //update playerArray to show the changed value
    //updatePlayer();
}

function customPosition()
{
    let playerX = prompt("Enter X Position");
    let playerY = prompt("Enter Y Position");

    //If person doesn't input a value, then keep the player where they are
    if(playerX == '' || playerY == '')
    {
        ourPlayer.x = ourPlayer.x;
        ourPlayer.y = ourPlayer.y;
        return;
    }

    //x location of the player
    ourPlayer.x= parseFloat(playerX);

    //y location of the player
    ourPlayer.y= parseFloat(playerY);

    //if person did answer Y position, move player
    if(playerY != '')
    {
        movePlayer();
    }

    //update the playerArray posX
    playerArray[0].posX = ourPlayer.x;

    //update the playerArray posY
    playerArray[0].posY = ourPlayer.y;

    //show the playerArray data in the textarea that has the id named textAreaPlayerData
    showPlayerData();

    document.getElementById("customPosX").value = ourPlayer.x;

    document.getElementById("customPosY").value = ourPlayer.y;

    //update playerArray to show the changed value
    //updatePlayer();
}

function customPositionText()
{
    let playerX = document.getElementById("customPosX").value;

    let playerY = document.getElementById("customPosY").value;

    //If person doesn't input a value, then keep person where they are
    if(playerY == '')
    {
        ourPlayer.x = ourPlayer.x;
        ourPlayer.y = ourPlayer.y;
        return;
    }

    //x location of the player
    ourPlayer.x= parseFloat(playerX);

    //y location of the player
    ourPlayer.y= parseFloat(playerY);

    //if person did answer Y position, move player
    if(playerY != '')
    {
        movePlayer();
    }

    //update the playerArray posX
    playerArray[0].posX = ourPlayer.x;

    //update the playerArray posY
    playerArray[0].posY = ourPlayer.y;

    //show the playerArray data in the textarea that has the id named textAreaPlayerData
    showPlayerData();

    //update playerArray to show the changed value
    //updatePlayer();
}

//--------------------------------------------------//

