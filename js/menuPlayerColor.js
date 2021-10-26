//Dedicated to God the Father

//All Rights Reserved Christopher Topalian Copyright 2020-2021

//menuPlayerColor.js

function menuPlayerColor()
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
    theMenu.innerHTML += '<button onclick=removeElement("menuColorPlayer");keyboardControlOn(); class="ourButton" style="margin-bottom: -4px">X</button>';

    //We Build the menu using innerHTML
    theMenu.innerHTML+= '<div><hr><span style="color:rgb(255, 255, 255)">COLOR PLAYER</span><br>';   

    theMenu.innerHTML+= 'R &nbsp<textarea id="theRed" class=\'textInput\' onkeydown="keyboardControlOff();"></textarea><br>';

    theMenu.innerHTML+= 'G &nbsp<textarea id="theGreen" class=\'textInput\' onkeydown="keyboardControlOff();"></textarea><br>';

    theMenu.innerHTML+= 'B &nbsp<textarea id="theBlue" class=\'textInput\' onkeydown="keyboardControlOff();"></textarea><br>';

    theMenu.innerHTML+= '<button onclick="customPlayerColorFromTextInput();keyboardControlOn();enterButtonSound();" class=\'ourButton\'>Enter</button><hr>';

    theMenu.innerHTML+= '<button onclick="colorPlayer(\'default\')" class=\'ourButton\'>Default</button></div>';

    theMenu.innerHTML+= '<button onclick="colorPlayer(\'black\')" class=\'ourButton\'>Black</button></div>';

    theMenu.innerHTML+= '<button onclick="colorPlayer(\'white\')" class=\'ourButton\'>White</button></div>';

    theMenu.innerHTML+= '<button onclick="colorPlayer(\'gray\')" class=\'ourButton\'>Gray</button></div>';

    theMenu.innerHTML+= '<button onclick="colorPlayer(\'red\')" class=\'ourButton\'>Red</button></div>';

    theMenu.innerHTML+= '<button onclick="colorPlayer(\'green\')" class=\'ourButton\'>Green</button></div>';

    theMenu.innerHTML+= '<button onclick="colorPlayer(\'blue\')" class=\'ourButton\'>Blue</button></div>';

    theMenu.innerHTML+= '<button onclick="colorPlayer(\'aqua\')" class=\'ourButton\'>Aqua</button></div>';

    theMenu.innerHTML+= '<button onclick="colorPlayer(\'yellow\')" class=\'ourButton\'>Yellow</button></div>';

    theMenu.innerHTML+= '<button onclick="colorPlayer(\'pink\')" class=\'ourButton\'>Pink</button></div>';

    theMenu.innerHTML+= '<button onclick="colorPlayer(\'purple\')" class=\'ourButton\'>Purple</button></div>';

    theMenu.innerHTML+= '<button onclick="customColor();" class=\'ourButton\'>Custom</button><br>';

    //ID
    theMenu.id = "menuColorPlayer";
    
    /* 
        If the player menu already exists, remove it, and create a new player menu wherever the player is
    */

    if(document.getElementById("menuColorPlayer"))
    {
        removeElement("menuColorPlayer");
        
        document.body.append(theMenu);
    }
    else
    {
        document.body.append(theMenu);
    }

    showPlayerData();
}

function colorPlayer(theColor)
{
    playSound("blipQuiet1", 1.0);

    //Color is only applied if NO texture is on the player
    ourPlayer.playerId.style.backgroundImage='none';

    if(theColor == 'default')
    {
        //color of player
        ourPlayer.playerId.style.backgroundColor="rgb(73,100,150)";

        //color of text on player object
        ourPlayer.playerId.style.color="white";

        //border around the player object
        ourPlayer.playerId.style.border="none";

        //fill in the textarea, to show the value of our choice
        document.getElementById("theRed").value = 73;
        document.getElementById("theGreen").value = 100;
        document.getElementById("theBlue").value = 150;
    }

    if(theColor == 'black')
    {
        //color of player
        ourPlayer.playerId.style.backgroundColor="black";

        //color of text on player object
        ourPlayer.playerId.style.color="white";

        //border around the player object
        ourPlayer.playerId.style.border="solid";
        ourPlayer.playerId.style.borderSize="2px";
        ourPlayer.playerId.style.borderColor="white";

        //fill in the textarea, to show the value of our choice
        document.getElementById("theRed").value = 0;
        document.getElementById("theGreen").value = 0;
        document.getElementById("theBlue").value = 0;
    }
    if(theColor == 'white')
    {
        //color of player
        ourPlayer.playerId.style.backgroundColor="white";

        //border around the player object
        ourPlayer.playerId.style.border="solid";
        ourPlayer.playerId.style.borderSize="2px";
        ourPlayer.playerId.style.borderColor="black";

        //fill in the textarea, to show the value of our choice
        document.getElementById("theRed").value = 255;
        document.getElementById("theGreen").value = 255;
        document.getElementById("theBlue").value = 255;
    }
    if(theColor == 'grey' || theColor =='gray')
    {
        //color of player
        ourPlayer.playerId.style.backgroundColor="gray";

        //border around the player object
        ourPlayer.playerId.style.border="none";

        //fill in the textarea, to show the value of our choice
        document.getElementById("theRed").value = 128;
        document.getElementById("theGreen").value = 128;
        document.getElementById("theBlue").value = 128;
    }
    if(theColor == 'red')
    {
        //color of player
        ourPlayer.playerId.style.backgroundColor="red";

        //border around the player object
        ourPlayer.playerId.style.border="none";

        //fill in the textarea, to show the value of our choice
        document.getElementById("theRed").value = 255;
        document.getElementById("theGreen").value = 0;
        document.getElementById("theBlue").value = 0;
    }
    if(theColor == 'green')
    {
         //color of player
        ourPlayer.playerId.style.backgroundColor="green";

        //border around the player object
        ourPlayer.playerId.style.border="none";

        //fill in the textarea, to show the value of our choice
        document.getElementById("theRed").value = 0;
        document.getElementById("theGreen").value = 255;
        document.getElementById("theBlue").value = 0;
    }
    if(theColor == 'blue')
    {
         //color of player
        ourPlayer.playerId.style.backgroundColor="blue";

        //border around the player object
        ourPlayer.playerId.style.border="none";

        //fill in the textarea, to show the value of our choice
        document.getElementById("theRed").value = 0;
        document.getElementById("theGreen").value = 0;
        document.getElementById("theBlue").value = 255;
    }
    if(theColor == 'aqua')
    {
        //color of player
        ourPlayer.playerId.style.backgroundColor="aqua";

        //border around the player object
        ourPlayer.playerId.style.border="none";

        //fill in the textarea, to show the value of our choice
        document.getElementById("theRed").value = 0;
        document.getElementById("theGreen").value = 255;
        document.getElementById("theBlue").value = 255;
    }
    if(theColor == 'yellow')
    {
        //color of player
        ourPlayer.playerId.style.backgroundColor="yellow";

        //border around the player object
        ourPlayer.playerId.style.border="none";

        //fill in the textarea, to show the value of our choice
        document.getElementById("theRed").value = 255;
        document.getElementById("theGreen").value = 255;
        document.getElementById("theBlue").value = 0;
    }
    if(theColor == 'pink')
    {
        //color of player
        ourPlayer.playerId.style.backgroundColor="pink";

        //border around the player object
        ourPlayer.playerId.style.border="none";

        //fill in the textarea, to show the value of our choice
        document.getElementById("theRed").value = 255;
        document.getElementById("theGreen").value = 0;
        document.getElementById("theBlue").value = 255;
    }
    if(theColor == 'purple')
    {
        //color of player
        ourPlayer.playerId.style.backgroundColor="purple";

        //border around the player object
        ourPlayer.playerId.style.border="none";

        //fill in the textarea, to show the value of our choice
        document.getElementById("theRed").value = 128;
        document.getElementById("theGreen").value = 0;
        document.getElementById("theBlue").value = 255;
    }

    //update playerArray to show the changed value
    updatePlayer();
}

function customColor()
{
    playSound("blipQuiet1", 1.0);

    //Color is only applied if NO texture is on the player
    ourPlayer.playerId.style.backgroundImage='none';

    let theColor = prompt("Enter RGB as 255,255,255")

    let theColorFormatted = 'rgb(' + theColor + ')';

    //color of player
    ourPlayer.playerId.style.backgroundColor=theColorFormatted;

    let colorSeparated = theColor.split(',');

    //fill in the textarea, to show the value of our choice
    document.getElementById("theRed").value = colorSeparated[0];

    document.getElementById("theGreen").value = colorSeparated[1];

    document.getElementById("theBlue").value = colorSeparated[2];

    //update playerArray to show the changed value
    updatePlayer();
}

//Read the 3 Textarea, for the red, green, blue values of our player
//Set the color on our player
function customPlayerColorFromTextInput()
{
    //Color is only applied if NO texture is on the player
    ourPlayer.playerId.style.backgroundImage='none';

    let r = document.getElementById("theRed").value;

    let g = document.getElementById("theGreen").value;

    let b = document.getElementById("theBlue").value;
  
    ourPlayer.playerId.style.backgroundColor= "rgb(" +r+ "," +g+ "," +b+")";

    //update playerArray to show the changed value
    updatePlayer();
}

//--------------------------------------------------//

