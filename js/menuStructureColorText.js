//Dedicated to God the Father

//All Rights Reserved Christopher Topalian Copyright 2020-2021

//menuStructureColorText.js

let theTextID;

let worldColorTextId;

function menuStructureColorText(ourStructureId)
{
    theTextID = document.getElementById(ourStructureId);

    worldColorTextId = ourStructureId;

    playSound("blipQuiet2", 1.0);  

    //TYPE OF ELEMENT TO CREATE
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
    theMenu.style.zIndex = "1005";

    //BORDER
    theMenu.style.borderStyle = "solid";
    theMenu.style.borderWidth = "2px";
    theMenu.style.borderColor = "rgba(255,255,255,1.0)";
    theMenu.style.borderRadius= "10px";

    //BACKGROUND COLOR
    theMenu.style.background = "black";

    //FONT
    theMenu.style.fontFamily = "arial";
    theMenu.style.fontWeight = "bold";
    theMenu.style.fontSize = "large";
    theMenu.style.color = "white";
    theMenu.style.textAlign = "center";
    
    //REMOVE MENU button
    theMenu.innerHTML += '<button onclick=removeElement("menuTextColorStructure");keyboardControlOn(); class="ourButton" style="margin-bottom: -4px">X</button>';
   
    //COLOR TEXT
    theMenu.innerHTML+= '<div><hr><span style="color:rgb(255, 255, 255)">COLOR TEXT</span><br>';

    theMenu.innerHTML+= 'R &nbsp<textarea id="redFontId" class=\'textInput\' onkeydown="keyboardControlOff();"></textarea><br>';

    theMenu.innerHTML+= 'G &nbsp<textarea id="greenFontId" class=\'textInput\' onkeydown="keyboardControlOff();"></textarea><br>';

    theMenu.innerHTML+= 'B &nbsp<textarea id="blueFontId" class=\'textInput\' onkeydown="keyboardControlOff();"></textarea><br>';

    theMenu.innerHTML+= '<button onclick="customStructureTextColorFromTextInput();keyboardControlOn();enterButtonSound();" class=\'ourButton\'>Enter</button><hr>';

    theMenu.innerHTML+= '<button onclick="colorStructureText(theTextID, \'default\')" class=\'ourButton\'>Default</button></div>';

    theMenu.innerHTML+= '<button onclick="colorStructureText(theTextID, \'black\')" class=\'ourButton\'>Black</button></div>';

    theMenu.innerHTML+= '<button onclick="colorStructureText(theTextID, \'white\')" class=\'ourButton\'>White</button></div>';

    theMenu.innerHTML+= '<button onclick="colorStructureText(theTextID, \'gray\')" class=\'ourButton\'>Gray</button></div>';

    theMenu.innerHTML+= '<button onclick="colorStructureText(theTextID, \'red\')" class=\'ourButton\'>Red</button></div>';

    theMenu.innerHTML+= '<button onclick="colorStructureText(theTextID, \'green\')" class=\'ourButton\'>Green</button></div>';

    theMenu.innerHTML+= '<button onclick="colorStructureText(theTextID, \'blue\')" class=\'ourButton\'>Blue</button></div>';

    theMenu.innerHTML+= '<button onclick="colorStructureText(theTextID, \'aqua\')" class=\'ourButton\'>Aqua</button></div>';

    theMenu.innerHTML+= '<button onclick="colorStructureText(theTextID, \'yellow\')" class=\'ourButton\'>Yellow</button></div>';

    theMenu.innerHTML+= '<button onclick="colorStructureText(theTextID, \'pink\')" class=\'ourButton\'>Pink</button></div>';

    theMenu.innerHTML+= '<button onclick="colorStructureText(theTextID, \'purple\')" class=\'ourButton\'>Purple</button></div>';

    theMenu.innerHTML+= '<button onclick="customStructureFontColor();" class=\'ourButton\'>Custom</button>';

    //ID
    theMenu.id = "menuTextColorStructure";
    
    /* 
        If the menu already exists, remove it, and create a new menu wherever the player is
    */

    if(document.getElementById("menuTextColorStructure"))
    {
        removeElement("menuTextColorStructure");
        
        document.body.append(theMenu);
    }
    else
    {
        document.body.append(theMenu);
    }
}

function customStructureFontColor()
{
    let theColor = prompt("Enter RGB as 255,255,255")

    let theColorFormatted = 'rgb(' + theColor + ')';

    //color of text on player object
    theTextID.style.color=theColorFormatted;

    let colorSeparated = theColor.split(',');

    //fill in the textarea, to show the value of our choice
    document.getElementById("redFontId").value = colorSeparated[0];

    document.getElementById("greenFontId").value = colorSeparated[1];

    document.getElementById("blueFontId").value = colorSeparated[2];

    //update structuresArray to show the changed value
    updateStructures(worldColorTextId);
}

//Read the 3 Textarea, for the red, green, blue values of our structure text color
//Set the text color of our structure
function customStructureTextColorFromTextInput()
{
    let r = document.getElementById("redFontId").value;

    let g = document.getElementById("greenFontId").value;

    let b = document.getElementById("blueFontId").value;
  
    theTextID.style.color= "rgb(" +r+ "," +g+ "," +b+")";

    //fill in the textarea, to show the value of our choice
    document.getElementById("redFontId").value = r;
    document.getElementById("greenFontId").value = g;
    document.getElementById("blueFontId").value = b;

    //update structuresArray to show the changed value
    updateStructures(worldColorTextId);
}

function colorStructureText(structureId, theColor)
{
    playSound("blipQuiet2", 1.0);

    if(theColor == 'default')
    {
        //color of text on player object
        theTextID.style.color="rgb(255,255,255)";

        //fill in the textarea, to show the value of our choice
        document.getElementById("redFontId").value = 255;
        document.getElementById("greenFontId").value = 255;
        document.getElementById("blueFontId").value = 255;
    }

    if(theColor == 'black')
    {
        //color of text on structure
        theTextID.style.color="black";

        //fill in the textarea, to show the value of our choice
        document.getElementById("redFontId").value = 0;
        document.getElementById("greenFontId").value = 0;
        document.getElementById("blueFontId").value = 0;
    }
    if(theColor == 'white')
    {
        //color of text on structure
        theTextID.style.color="white";

        //fill in the textarea, to show the value of our choice
        document.getElementById("redFontId").value = 255;
        document.getElementById("greenFontId").value = 255;
        document.getElementById("blueFontId").value = 255;
    }
    if(theColor == 'grey' || theColor =='gray')
    {
        //color of text on structure
        theTextID.style.color="gray";

        //fill in the textarea, to show the value of our choice
        document.getElementById("redFontId").value = 128;
        document.getElementById("greenFontId").value = 128;
        document.getElementById("blueFontId").value = 128;
    }
    if(theColor == 'red')
    {
        //color of text on structure
        theTextID.style.color="red";

        //fill in the textarea, to show the value of our choice
        document.getElementById("redFontId").value = 255;
        document.getElementById("greenFontId").value = 0;
        document.getElementById("blueFontId").value = 0;
    }
    if(theColor == 'green')
    {
         //color of text on structure
        theTextID.style.color="green";

        //fill in the textarea, to show the value of our choice
        document.getElementById("redFontId").value = 0;
        document.getElementById("greenFontId").value = 255;
        document.getElementById("blueFontId").value = 0;
    }
    if(theColor == 'blue')
    {
         //color of text on structure
        theTextID.style.color="blue";

        //fill in the textarea, to show the value of our choice
        document.getElementById("redFontId").value = 0;
        document.getElementById("greenFontId").value = 0;
        document.getElementById("blueFontId").value = 255;
    }
    if(theColor == 'aqua')
    {
        //color of text on structure
        theTextID.style.color="aqua";

        //fill in the textarea, to show the value of our choice
        document.getElementById("redFontId").value = 0;
        document.getElementById("greenFontId").value = 255;
        document.getElementById("blueFontId").value = 255;
    }
    if(theColor == 'yellow')
    {
        //color of text on structure
        theTextID.style.color="yellow";

        //fill in the textarea, to show the value of our choice
        document.getElementById("redFontId").value = 255;
        document.getElementById("greenFontId").value = 255;
        document.getElementById("blueFontId").value = 0;
    }
    if(theColor == 'pink')
    {
        //color of text on structure
        theTextID.style.color="pink";

        //fill in the textarea, to show the value of our choice
        document.getElementById("redFontId").value = 255;
        document.getElementById("greenFontId").value = 0;
        document.getElementById("blueFontId").value = 255;
    }
    if(theColor == 'purple')
    {
        //color of text on structure
        theTextID.style.color="purple";

        //fill in the textarea, to show the value of our choice
        document.getElementById("redFontId").value = 128;
        document.getElementById("greenFontId").value = 0;
        document.getElementById("blueFontId").value = 255;
    }

    //update structuresArray to show the changed value
    updateStructures(worldColorTextId);
}

//--------------------------------------------------//

