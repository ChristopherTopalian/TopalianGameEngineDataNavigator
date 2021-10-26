//Dedicated to God the Father

//All Rights Reserved Christopher Topalian Copyright 2020-2021

//menuPlayerColorText.js

function menuPlayerColorText()
{
    playSound("blipQuiet2", 1.0);  

    let theMenu = document.createElement("div");  

    //POSITION
    theMenu.style.position = "absolute";
    theMenu.style.left = ourPlayer.x + 100 +'px';
    theMenu.style.top = ourPlayer.y - 75 + 'px';

    //SIZE
    theMenu.style.width = 400 +'px';
    theMenu.style.height = 225 +'px';

    //PADDING effects size
    theMenu.style.paddingLeft = "20px";
    theMenu.style.paddingRight = "20px";
    theMenu.style.paddingTop = "4px";

    //LAYER
    theMenu.style.zIndex = "998";

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

    //BACKGROUND COLOR
    theMenu.style.background = "black";
    
    //REMOVE MENU button
    theMenu.innerHTML += '<button onclick=removeElement("menuColorPlayerText");keyboardControlOn(); class="ourButton" style="margin-bottom: -4px">X</button>';

    //We Build the menu using innerHTML
    theMenu.innerHTML+= '<div><hr><span style="color:rgb(255, 255, 255)">COLOR TEXT</span><br>';

    theMenu.innerHTML+= 'R &nbsp<textarea id="theRedFont" class=\'textInput\' onkeydown="keyboardControlOff();"></textarea><br>';

    theMenu.innerHTML+= 'G &nbsp<textarea id="theGreenFont" class=\'textInput\' onkeydown="keyboardControlOff();"></textarea><br>';

    theMenu.innerHTML+= 'B &nbsp<textarea id="theBlueFont" class=\'textInput\' onkeydown="keyboardControlOff();"></textarea><br>';

    theMenu.innerHTML+= '<button onclick="customPlayerTextColorFromTextInput();keyboardControlOn();enterButtonSound();" class=\'ourButton\'>Enter</button><hr>';

    theMenu.innerHTML+= '<button onclick="colorText(\'default\')" class=\'ourButton\'>Default</button></div>';

    theMenu.innerHTML+= '<button onclick="colorText(\'black\')" class=\'ourButton\'>Black</button></div>';

    theMenu.innerHTML+= '<button onclick="colorText(\'white\')" class=\'ourButton\'>White</button></div>';

    theMenu.innerHTML+= '<button onclick="colorText(\'gray\')" class=\'ourButton\'>Gray</button></div>';

    theMenu.innerHTML+= '<button onclick="colorText(\'red\')" class=\'ourButton\'>Red</button></div>';

    theMenu.innerHTML+= '<button onclick="colorText(\'green\')" class=\'ourButton\'>Green</button></div>';

    theMenu.innerHTML+= '<button onclick="colorText(\'blue\')" class=\'ourButton\'>Blue</button></div>';

    theMenu.innerHTML+= '<button onclick="colorText(\'aqua\')" class=\'ourButton\'>Aqua</button></div>';

    theMenu.innerHTML+= '<button onclick="colorText(\'yellow\')" class=\'ourButton\'>Yellow</button></div>';

    theMenu.innerHTML+= '<button onclick="colorText(\'pink\')" class=\'ourButton\'>Pink</button></div>';

    theMenu.innerHTML+= '<button onclick="colorText(\'purple\')" class=\'ourButton\'>Purple</button></div>';

    theMenu.innerHTML+= '<button onclick="customFontColor();" class=\'ourButton\'>Custom</button>';

    //ID
    theMenu.id = "menuColorPlayerText";
    
    /* 
        If the player menu already exists, remove it, and create a new player menu wherever the player is
    */

    if(document.getElementById("menuColorPlayerText"))
    {
        removeElement("menuColorPlayerText");
        
        document.body.append(theMenu);
    }
    else
    {
        document.body.append(theMenu);
    }
}

function customFontColor()
{
    let theColor = prompt("Enter RGB as 255,255,255")

    let theColorFormatted = 'rgb(' + theColor + ')';

    //color of text on player object
    ourPlayer.playerId.style.color=theColorFormatted;

    let colorSeparated = theColor.split(',');

    //fill in the textarea, to show the value of our choice
    document.getElementById("theRedFont").value = colorSeparated[0];

    document.getElementById("theGreenFont").value = colorSeparated[1];

    document.getElementById("theBlueFont").value = colorSeparated[2];

    //update playerArray to show the changed value
    updatePlayer();
}

//Read the 3 Textarea, for the red, green, blue values of our player text color
//Set the text color of our player
function customPlayerTextColorFromTextInput()
{
    let r = document.getElementById("theRedFont").value;

    let g = document.getElementById("theGreenFont").value;

    let b = document.getElementById("theBlueFont").value;
  
    ourPlayer.playerId.style.color= "rgb(" +r+ "," +g+ "," +b+")";

    //fill in the textarea, to show the value of our choice
    document.getElementById("theRedFont").value = r;
    document.getElementById("theGreenFont").value = g;
    document.getElementById("theBlueFont").value = b;

    //update playerArray to show the changed value
    updatePlayer();
}

function colorText(theColor)
{
    playSound("blipQuiet2", 1.0);

    if(theColor == 'default')
    {
        //color of text on player object
        ourPlayer.playerId.style.color="rgb(255,255,255)";

        //fill in the textarea, to show the value of our choice
        document.getElementById("theRedFont").value = 255;
        document.getElementById("theGreenFont").value = 255;
        document.getElementById("theBlueFont").value = 255;
    }

    if(theColor == 'black')
    {
        //color of text on player object
        ourPlayer.playerId.style.color="black";

        //fill in the textarea, to show the value of our choice
        document.getElementById("theRedFont").value = 0;
        document.getElementById("theGreenFont").value = 0;
        document.getElementById("theBlueFont").value = 0;
    }
    if(theColor == 'white')
    {
        //color of text on player object
        ourPlayer.playerId.style.color="white";

        //fill in the textarea, to show the value of our choice
        document.getElementById("theRedFont").value = 255;
        document.getElementById("theGreenFont").value = 255;
        document.getElementById("theBlueFont").value = 255;
    }
    if(theColor == 'grey' || theColor =='gray')
    {
        //color of text on player object
        ourPlayer.playerId.style.color="gray";

        //fill in the textarea, to show the value of our choice
        document.getElementById("theRedFont").value = 128;
        document.getElementById("theGreenFont").value = 128;
        document.getElementById("theBlueFont").value = 128;
    }
    if(theColor == 'red')
    {
        //color of text on player object
        ourPlayer.playerId.style.color="red";

        //fill in the textarea, to show the value of our choice
        document.getElementById("theRedFont").value = 255;
        document.getElementById("theGreenFont").value = 0;
        document.getElementById("theBlueFont").value = 0;
    }
    if(theColor == 'green')
    {
         //color of text on player object
        ourPlayer.playerId.style.color="green";

        //fill in the textarea, to show the value of our choice
        document.getElementById("theRedFont").value = 0;
        document.getElementById("theGreenFont").value = 255;
        document.getElementById("theBlueFont").value = 0;
    }
    if(theColor == 'blue')
    {
         //color of text on player object
        ourPlayer.playerId.style.color="blue";

        //fill in the textarea, to show the value of our choice
        document.getElementById("theRedFont").value = 0;
        document.getElementById("theGreenFont").value = 0;
        document.getElementById("theBlueFont").value = 255;
    }
    if(theColor == 'aqua')
    {
        //color of text on player object
        ourPlayer.playerId.style.color="aqua";

        //fill in the textarea, to show the value of our choice
        document.getElementById("theRedFont").value = 0;
        document.getElementById("theGreenFont").value = 255;
        document.getElementById("theBlueFont").value = 255;
    }
    if(theColor == 'yellow')
    {
        //color of text on player object
        ourPlayer.playerId.style.color="yellow";

        //fill in the textarea, to show the value of our choice
        document.getElementById("theRedFont").value = 255;
        document.getElementById("theGreenFont").value = 255;
        document.getElementById("theBlueFont").value = 0;
    }
    if(theColor == 'pink')
    {
        //color of text on player object
        ourPlayer.playerId.style.color="pink";

        //fill in the textarea, to show the value of our choice
        document.getElementById("theRedFont").value = 255;
        document.getElementById("theGreenFont").value = 0;
        document.getElementById("theBlueFont").value = 255;
    }
    if(theColor == 'purple')
    {
        //color of text on player object
        ourPlayer.playerId.style.color="purple";

        //fill in the textarea, to show the value of our choice
        document.getElementById("theRedFont").value = 128;
        document.getElementById("theGreenFont").value = 0;
        document.getElementById("theBlueFont").value = 255;
    }

    //update playerArray to show the changed value
    updatePlayer();
}

//--------------------------------------------------//

