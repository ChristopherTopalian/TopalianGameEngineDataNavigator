//Dedicated to God the Father

//All Rights Reserved Christopher Topalian Copyright 2020-2021

//menuPlayerOpacity.js

function menuPlayerOpacity()
{
    playSound("blipQuiet2", 1.0);  

    //TYPE OF ELEMENT TO CREATE
    let theMenu = document.createElement("div");  

    //POSITION
    theMenu.style.position = "absolute";
    theMenu.style.left = ourPlayer.x + 100 +'px';
    theMenu.style.top = ourPlayer.y - 55 + 'px';

    //SIZE
    theMenu.style.width = 440 +'px';
    theMenu.style.height = 193 +'px';

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
    theMenu.id = "menuOpacityPlayer";

    //REMOVE MENU button
    theMenu.innerHTML += '<button onclick=removeElement("menuOpacityPlayer");keyboardControlOn(); class="ourButton" style="margin-bottom: -4px">X</button>';

    //We Build the menu using innerHTML
    theMenu.innerHTML+= '<div><hr><span style="color:rgb(255, 255, 255)">OPACITY OF PLAYER</span><br>';   

    theMenu.innerHTML+= 'Alpha &nbsp<textarea id="theOpacity" class=\'textInput\' onkeydown="keyboardControlOff();"></textarea><br>';

    theMenu.innerHTML+= '<button onclick="customPlayerOpacityFromTextInput();keyboardControlOn();enterButtonSound();" class=\'ourButton\'>Enter</button><hr>';

    theMenu.innerHTML+= '<button onclick="opacityOfPlayer(\'default\')" class=\'ourButton\'>Default</button></div><br>';

    theMenu.innerHTML+= '<button onclick="opacityOfPlayer(\'0.0\')" class=\'ourButton\'>0.0</button></div>';

    theMenu.innerHTML+= '<button onclick="opacityOfPlayer(\'0.1\')" class=\'ourButton\'>0.1</button></div>';

    theMenu.innerHTML+= '<button onclick="opacityOfPlayer(\'0.2\')" class=\'ourButton\'>0.2</button></div>';

    theMenu.innerHTML+= '<button onclick="opacityOfPlayer(\'0.3\')" class=\'ourButton\'>0.3</button></div>';

    theMenu.innerHTML+= '<button onclick="opacityOfPlayer(\'0.4\')" class=\'ourButton\'>0.4</button></div>';

    theMenu.innerHTML+= '<button onclick="opacityOfPlayer(\'0.5\')" class=\'ourButton\'>0.5</button></div>';

    theMenu.innerHTML+= '<button onclick="opacityOfPlayer(\'0.6\')" class=\'ourButton\'>0.6</button></div>';

    theMenu.innerHTML+= '<button onclick="opacityOfPlayer(\'0.7\')" class=\'ourButton\'>0.7</button></div>';

    theMenu.innerHTML+= '<button onclick="opacityOfPlayer(\'0.8\')" class=\'ourButton\'>0.8</button></div>';

    theMenu.innerHTML+= '<button onclick="opacityOfPlayer(\'0.9\')" class=\'ourButton\'>0.9</button></div>';

    theMenu.innerHTML+= '<button onclick="opacityOfPlayer(\'1.0\')" class=\'ourButton\'>1.0</button></div><br>';

    theMenu.innerHTML+= '<button onclick="customOpacity();" class=\'ourButton\'>Custom</button><br>';
    
    /* 
        If the player menu already exists, remove it, and create a new player menu wherever the player is
    */

    if(document.getElementById("menuOpacityPlayer"))
    {
        removeElement("menuOpacityPlayer");
        
        document.body.append(theMenu);
    }
    else
    {
        document.body.append(theMenu);
    }
}

function opacityOfPlayer(theOpacity)
{
    playSound("blipQuiet2", 1.0);

    if(theOpacity == 'default')
    {
        //opacity of player
        ourPlayer.playerId.style.opacity=1.0;

        //fill in the textarea, to show the value of our choice
        document.getElementById("theOpacity").value = 1.0;
    }

    if(theOpacity == '0.0')
    {
        //opacity of player
        ourPlayer.playerId.style.opacity="0.0";

        //fill in the textarea, to show the value of our choice
        document.getElementById("theOpacity").value = 0.0;
    }
    if(theOpacity == '0.1')
    {
        //opacity of player
        ourPlayer.playerId.style.opacity="0.1";

        //fill in the textarea, to show the value of our choice
        document.getElementById("theOpacity").value = 0.1;
    }
    if(theOpacity == '0.2')
    {
        //opacity of player
        ourPlayer.playerId.style.opacity="0.2";

        //fill in the textarea, to show the value of our choice
        document.getElementById("theOpacity").value = 0.2;
    }
    if(theOpacity == '0.3')
    {
        //opacity of player
        ourPlayer.playerId.style.opacity="0.3";

        //fill in the textarea, to show the value of our choice
        document.getElementById("theOpacity").value = 0.3;
    }
    if(theOpacity == '0.4')
    {
        //opacity of player
        ourPlayer.playerId.style.opacity="0.4";

        //fill in the textarea, to show the value of our choice
        document.getElementById("theOpacity").value = 0.4;
    }
    if(theOpacity == '0.5')
    {
        //opacity of player
        ourPlayer.playerId.style.opacity="0.5";

        //fill in the textarea, to show the value of our choice
        document.getElementById("theOpacity").value = 0.5;
    }
    if(theOpacity == '0.6')
    {
        //opacity of player
        ourPlayer.playerId.style.opacity="0.6";

        //fill in the textarea, to show the value of our choice
        document.getElementById("theOpacity").value = 0.6;
    }
    if(theOpacity == '0.7')
    {
        //opacity of player
        ourPlayer.playerId.style.opacity="0.7";

        //fill in the textarea, to show the value of our choice
        document.getElementById("theOpacity").value = 0.7;
    }
    if(theOpacity == '0.8')
    {
        //opacity of player
        ourPlayer.playerId.style.opacity="0.8";

        //fill in the textarea, to show the value of our choice
        document.getElementById("theOpacity").value = 0.8;
    }
    if(theOpacity == '0.9')
    {
        //opacity of player
        ourPlayer.playerId.style.opacity="0.9";

        //fill in the textarea, to show the value of our choice
        document.getElementById("theOpacity").value = 0.9;
    }
    if(theOpacity == '1.0')
    {
        //opacity of player
        ourPlayer.playerId.style.opacity="1.0";

        //fill in the textarea, to show the value of our choice
        document.getElementById("theOpacity").value = 1.0;
    }

    //update playerArray to show the changed value
    updatePlayer();
}

function customOpacity()
{
    let theOpacity = prompt("Enter Opacity as 0.0 to 1.0")

    //opacity of player
    ourPlayer.playerId.style.opacity=theOpacity;

    //fill in the textarea, to show the value of our choice
    document.getElementById("theOpacity").value = theOpacity;

    //update playerArray to show the changed value
    updatePlayer();
}

//Read the 3 Textarea, for the opacity value of our player
//Set the opacity on our player
function customPlayerOpacityFromTextInput()
{
    let theOpacity = document.getElementById("theOpacity").value;
  
    ourPlayer.playerId.style.opacity= theOpacity;

    //update playerArray to show the changed value
    updatePlayer();
}

//--------------------------------------------------//

