//Dedicated to God the Father

//All Rights Reserved Christopher Topalian Copyright 2020-2021

//menuStructureColor.js

let theColorID;

let worldColorId;

function menuStructureColor(theStructureId)
{
    theColorID = document.getElementById(theStructureId);

    worldColorId = theStructureId;

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
    theMenu.innerHTML += '<button onclick=removeElement("menuColorStructure");keyboardControlOn(); class="ourButton" style="margin-bottom: -4px">X</button>';

    //We Build the menu using innerHTML
    theMenu.innerHTML+= '<div><hr><span style="color:rgb(255, 255, 255)">COLOR STRUCTURE</span><br>';   

    theMenu.innerHTML+= 'R &nbsp<textarea id="theRed" class=\'textInput\' onkeydown="keyboardControlOff();"></textarea><br>';

    theMenu.innerHTML+= 'G &nbsp<textarea id="theGreen" class=\'textInput\' onkeydown="keyboardControlOff();"></textarea><br>';

    theMenu.innerHTML+= 'B &nbsp<textarea id="theBlue" class=\'textInput\' onkeydown="keyboardControlOff();"></textarea><br>';

    theMenu.innerHTML+= '<button onclick="customStructureColorFromTextInput();keyboardControlOn();enterButtonSound();" class=\'ourButton\'>Enter</button><hr>';

    theMenu.innerHTML+= '<button onclick="colorStructure(theColorID, \'default\')" class=\'ourButton\'>Default</button></div>';

    theMenu.innerHTML+= '<button onclick="colorStructure(theColorID, \'black\')" class=\'ourButton\'>Black</button></div>';

    theMenu.innerHTML+= '<button onclick="colorStructure(theColorID, \'white\')" class=\'ourButton\'>White</button></div>';

    theMenu.innerHTML+= '<button onclick="colorStructure(theColorID,\'gray\')" class=\'ourButton\'>Gray</button></div>';

    theMenu.innerHTML+= '<button onclick="colorStructure(theColorID, \'red\')" class=\'ourButton\'>Red</button></div>';

    theMenu.innerHTML+= '<button onclick="colorStructure(theColorID, \'green\')" class=\'ourButton\'>Green</button></div>';

    theMenu.innerHTML+= '<button onclick="colorStructure(theColorID, \'blue\')" class=\'ourButton\'>Blue</button></div>';

    theMenu.innerHTML+= '<button onclick="colorStructure(theColorID, \'aqua\')" class=\'ourButton\'>Aqua</button></div>';

    theMenu.innerHTML+= '<button onclick="colorStructure(theColorID, \'yellow\')" class=\'ourButton\'>Yellow</button></div>';

    theMenu.innerHTML+= '<button onclick="colorStructure(theColorID, \'pink\')" class=\'ourButton\'>Pink</button></div>';

    theMenu.innerHTML+= '<button onclick="colorStructure(theColorID, \'purple\')" class=\'ourButton\'>Purple</button></div>';

    theMenu.innerHTML+= '<button onclick="customStructureColor();" class=\'ourButton\'>Custom</button><br>';

    //ID
    theMenu.id = "menuColorStructure";
    
    /* 
        If the menu already exists, remove it, and create a new menu wherever the player is
    */

    if(document.getElementById("menuColorStructure"))
    {
        removeElement("menuColorStructure");
        
        document.body.append(theMenu);
    }
    else
    {
        document.body.append(theMenu);
    }
}

function colorStructure(structureId, theColor)
{  
    playSound("blipQuiet2", 1.0);

    //Color is only applied if NO texture is on the structure
    theColorID.style.backgroundImage='none';

    if(theColor == 'default')
    {
        //color of structure
        theColorID.style.backgroundColor="rgb(73,100,150)";

        //color of text on structure object
        theColorID.style.color="white";

        //fill in the textarea, to show the value of our choice
        document.getElementById("theRed").value = 73;
        document.getElementById("theGreen").value = 100;
        document.getElementById("theBlue").value = 150;
    }

    if(theColor == 'black')
    {
        //color of structure
        theColorID.style.backgroundColor="black";

        //color of text on structure object
        theColorID.style.color="white";

        //fill in the textarea, to show the value of our choice
        document.getElementById("theRed").value = 0;
        document.getElementById("theGreen").value = 0;
        document.getElementById("theBlue").value = 0;
    }
    if(theColor == 'white')
    {
        //color of structure
        theColorID.style.backgroundColor="white";

        //fill in the textarea, to show the value of our choice
        document.getElementById("theRed").value = 255;
        document.getElementById("theGreen").value = 255;
        document.getElementById("theBlue").value = 255;
    }
    if(theColor == 'grey' || theColor =='gray')
    {
        //color of structure
        theColorID.style.backgroundColor="gray";

        //fill in the textarea, to show the value of our choice
        document.getElementById("theRed").value = 128;
        document.getElementById("theGreen").value = 128;
        document.getElementById("theBlue").value = 128;
    }
    if(theColor == 'red')
    {
        //color of structure
        theColorID.style.backgroundColor="red";

        //fill in the textarea, to show the value of our choice
        document.getElementById("theRed").value = 255;
        document.getElementById("theGreen").value = 0;
        document.getElementById("theBlue").value = 0;
    }
    if(theColor == 'green')
    {
         //color of structure
        theColorID.style.backgroundColor="green";

        //fill in the textarea, to show the value of our choice
        document.getElementById("theRed").value = 0;
        document.getElementById("theGreen").value = 255;
        document.getElementById("theBlue").value = 0;
    }
    if(theColor == 'blue')
    {
         //color of structure
        theColorID.style.backgroundColor="blue";

        //fill in the textarea, to show the value of our choice
        document.getElementById("theRed").value = 0;
        document.getElementById("theGreen").value = 0;
        document.getElementById("theBlue").value = 255;
    }
    if(theColor == 'aqua')
    {
        //color of structure
        theColorID.style.backgroundColor="aqua";

        //fill in the textarea, to show the value of our choice
        document.getElementById("theRed").value = 0;
        document.getElementById("theGreen").value = 255;
        document.getElementById("theBlue").value = 255;
    }
    if(theColor == 'yellow')
    {
        //color of structure
        theColorID.style.backgroundColor="yellow";

        //fill in the textarea, to show the value of our choice
        document.getElementById("theRed").value = 255;
        document.getElementById("theGreen").value = 255;
        document.getElementById("theBlue").value = 0;
    }
    if(theColor == 'pink')
    {
        //color of structure
        theColorID.style.backgroundColor="pink";

        //fill in the textarea, to show the value of our choice
        document.getElementById("theRed").value = 255;
        document.getElementById("theGreen").value = 0;
        document.getElementById("theBlue").value = 255;
    }
    if(theColor == 'purple')
    {
        //color of the structure
        theColorID.style.backgroundColor="purple";

        //fill in the textarea, to show the value of our choice
        document.getElementById("theRed").value = 128;
        document.getElementById("theGreen").value = 0;
        document.getElementById("theBlue").value = 255;
    }

    //update structuresArray to show the changed value
    updateStructures(worldColorId);
}

function customStructureColor()
{
    let theColor = prompt("Enter RGB as 255,255,255")

    let theColorFormatted = 'rgb(' + theColor + ')';

    //color of structure
    theColorID.style.backgroundColor=theColorFormatted;

    let colorSeparated = theColor.split(',');

    //fill in the textarea, to show the value of our choice
    document.getElementById("theRed").value = colorSeparated[0];

    document.getElementById("theGreen").value = colorSeparated[1];

    document.getElementById("theBlue").value = colorSeparated[2];

    //update structuresArray to show the changed value
    updateStructures(worldColorId);
}

//Read the 3 Textarea, for the red, green, blue values of our structure
//Set the color on our player
function customStructureColorFromTextInput()
{
    let r = document.getElementById("theRed").value;

    let g = document.getElementById("theGreen").value;

    let b = document.getElementById("theBlue").value;
  
   theColorID.style.backgroundColor= "rgb(" +r+ "," +g+ "," +b+")";

    //update structuresArray to show the changed value
    updateStructures(worldColorId);
}

//--------------------------------------------------//

