//Dedicated to God the Father

//All Rights Reserved Christopher Topalian Copyright 2020-2021

//menuPlayerName.js

let playerNameId;

let thePlayerNameID;

let theNumberOnlyPlayer;

function menuPlayerName(thePlayerId)
{
    thePlayerNameID = document.getElementById(thePlayerId);

    playerNameId = thePlayerId;

    //remove the text to find the digits only
    //which number in the array, based on id number - 1
                                            // \d find digit
    theNumberOnlyPlayer = thePlayerId.replace(/\D/g,'') - 1;

    playSound("blipQuiet2", 1.0);  

    //TYPE OF ELEMENT TO CREATE
    let theMenu = document.createElement("div");  

    //POSITION
    theMenu.style.position = "absolute";
    theMenu.style.left = ourPlayer.x + 100 +'px';
    theMenu.style.top = ourPlayer.y - 35 + 'px';

    //SIZE
    theMenu.style.width = 440 +'px';
    theMenu.style.height = 137 +'px';

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

    //ID
    theMenu.id = "menuNamePlayer";

    //REMOVE MENU button
    theMenu.innerHTML += '<button onclick=removeElement("menuNamePlayer");keyboardControlOn(); class="ourButton" style="margin-bottom: -4px">X</button>';

    //We Build the menu using innerHTML
    theMenu.innerHTML+= '<div><hr><span style="color:rgb(255, 255, 255)">NAME OF PLAYER</span><br>';   

    theMenu.innerHTML+= 'Name &nbsp<textarea id="thePlayerName" class=\'textInput\' onkeydown="keyboardControlOff();"></textarea><br>';

    theMenu.innerHTML+= '<button onclick="customPlayerNameFromTextInput();keyboardControlOn();enterButtonSound();" class=\'ourButton\'>Enter</button><hr class = "hrCompact">';

    theMenu.innerHTML+= '<button onclick="customPlayerName();" class=\'ourButton\'>Custom</button><br>';
    
    /* 
        If the menu already exists, remove it, and create a new menu wherever the player is
    */

    if(document.getElementById("menuNamePlayer"))
    {
        removeElement("menuNamePlayer");
        
        document.body.append(theMenu);
    }
    else
    {
        document.body.append(theMenu);
    }
}

function customPlayerName()
{
    let theName = prompt("Enter Name")

    //Name of Player
    thePlayerNameID.style.innerHTML=theName;

    //fill in the textarea, to show the value of our choice
    document.getElementById("thePlayerName").value = theName;

    playerArray[0].name = theName;

    ourPlayer.playerId.innerHTML = theName;

    showPlayerData();
}

//Read the 3 Textarea, for the Name value of our Player
//Set the Name on our Player

function customPlayerNameFromTextInput()
{
    let theName = document.getElementById("thePlayerName").value;
  
    thePlayerNameID.style.innerHTML= theName;

    playerArray[0].name = theName;

    ourPlayer.playerId.innerHTML = theName;

    showPlayerData();
}

//--------------------------------------------------//

