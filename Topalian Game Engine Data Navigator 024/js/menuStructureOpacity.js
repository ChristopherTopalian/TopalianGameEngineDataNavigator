//Dedicated to God the Father

//All Rights Reserved Christopher Topalian Copyright 2020-2021

//menuStructureOpacity.js

let worldOpacityId;

let theOpacityID;

let theNumberOnly;

function menuStructureOpacity(theStructureId)
{
    theOpacityID = document.getElementById(theStructureId);

    worldOpacityId = theStructureId;

    //remove the text to find the digits only
    //which number in the array, based on id number - 1
                                            // \d find digit
    theNumberOnly = theStructureId.replace(/\D/g,'') - 1;

    playSound("blipQuiet2", 1.0);  

    //TYPE OF ELEMENT TO CREATE
    let theMenu = document.createElement("div");  

    //POSITION
    theMenu.style.position = "absolute";
    theMenu.style.left = ourPlayer.x + 100 +'px';
    theMenu.style.top = ourPlayer.y - 55 + 'px';

    //SIZE
    theMenu.style.width = 440 +'px';
    theMenu.style.height = 175 +'px';

    //PADDING effects size
    theMenu.style.paddingLeft = "20px";
    theMenu.style.paddingRight = "20px";
    theMenu.style.paddingTop = "4px";

    //LAYER
    theMenu.style.zIndex = "1005";

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

    theMenu.id = "menuOpacityStructure";

    //REMOVE MENU button
    theMenu.innerHTML += '<button onclick=removeElement("menuOpacityStructure");keyboardControlOn(); class="ourButton" style="margin-bottom: -4px">X</button>';

    //We Build the menu using innerHTML
    theMenu.innerHTML+= '<div><hr><span style="color:rgb(255, 255, 255)">OPACITY OF STRUCTURE</span><br>';   

    theMenu.innerHTML+= 'Alpha &nbsp<textarea id="theOpacity" class=\'textInput\' onkeydown="keyboardControlOff();"></textarea><br>';

    theMenu.innerHTML+= '<button onclick="customStructureOpacityFromTextInput();keyboardControlOn();enterButtonSound();" class=\'ourButton\'>Enter</button><hr>';

    theMenu.innerHTML+= '<button onclick="opacityOfStructure(\'default\')" class=\'ourButton\'>Default</button></div>';

    theMenu.innerHTML+= '<button onclick="opacityOfStructure(\'0.0\')" class=\'ourButton\'>0.0</button></div>';

    theMenu.innerHTML+= '<button onclick="opacityOfStructure(\'0.1\')" class=\'ourButton\'>0.1</button></div>';

    theMenu.innerHTML+= '<button onclick="opacityOfStructure(\'0.2\')" class=\'ourButton\'>0.2</button></div>';

    theMenu.innerHTML+= '<button onclick="opacityOfStructure(\'0.3\')" class=\'ourButton\'>0.3</button></div>';

    theMenu.innerHTML+= '<button onclick="opacityOfStructure(\'0.4\')" class=\'ourButton\'>0.4</button></div>';

    theMenu.innerHTML+= '<button onclick="opacityOfStructure(\'0.5\')" class=\'ourButton\'>0.5</button></div><br>';

    theMenu.innerHTML+= '<button onclick="opacityOfStructure(\'0.6\')" class=\'ourButton\'>0.6</button></div>';

    theMenu.innerHTML+= '<button onclick="opacityOfStructure(\'0.7\')" class=\'ourButton\'>0.7</button></div>';

    theMenu.innerHTML+= '<button onclick="opacityOfStructure(\'0.8\')" class=\'ourButton\'>0.8</button></div>';

    theMenu.innerHTML+= '<button onclick="opacityOfStructure(\'0.9\')" class=\'ourButton\'>0.9</button></div>';

    theMenu.innerHTML+= '<button onclick="opacityOfStructure(\'1.0\')" class=\'ourButton\'>1.0</button></div>';

    theMenu.innerHTML+= '<button onclick="customStructureOpacity();" class=\'ourButton\'>Custom</button><br>';
    
    /* 
        If the menu already exists, remove it, and create a new menu wherever the player is
    */

    if(document.getElementById("menuOpacityStructure"))
    {
        removeElement("menuOpacityStructure");
        
        document.body.append(theMenu);
    }
    else
    {
        document.body.append(theMenu);
    }
}

function opacityOfStructure(theOpacity)
{
    playSound("blipQuiet1", 1.0);

    if(theOpacity == 'default')
    {
        //opacity of structure
        theOpacityID.style.opacity=1.0;

        //fill in the textarea, to show the value of our choice
        document.getElementById("theOpacity").value = 1.0;
    }

    if(theOpacity == '0.0')
    {
        //opacity of structure
        theOpacityID.style.opacity="0.0";

        //fill in the textarea, to show the value of our choice
        document.getElementById("theOpacity").value = 0.0;
    }
    if(theOpacity == '0.1')
    {
        //opacity of structure
        theOpacityID.style.opacity="0.1";

        //fill in the textarea, to show the value of our choice
        document.getElementById("theOpacity").value = 0.1;
    }
    if(theOpacity == '0.2')
    {
        //opacity of structure
        theOpacityID.style.opacity="0.2";

        //fill in the textarea, to show the value of our choice
        document.getElementById("theOpacity").value = 0.2;
    }
    if(theOpacity == '0.3')
    {
        //opacity of structure
        theOpacityID.style.opacity="0.3";

        //updateStructures(worldId);

        //fill in the textarea, to show the value of our choice
        document.getElementById("theOpacity").value = 0.3;
    }
    if(theOpacity == '0.4')
    {
        //opacity of structure
        theOpacityID.style.opacity="0.4";

        //fill in the textarea, to show the value of our choice
        document.getElementById("theOpacity").value = 0.4;
    }
    if(theOpacity == '0.5')
    {
        //opacity of structure
        theOpacityID.style.opacity="0.5";

        //fill in the textarea, to show the value of our choice
        document.getElementById("theOpacity").value = 0.5;
    }
    if(theOpacity == '0.6')
    {
        //opacity of structure
        theOpacityID.style.opacity="0.6";

        //fill in the textarea, to show the value of our choice
        document.getElementById("theOpacity").value = 0.6;
    }
    if(theOpacity == '0.7')
    {
        //opacity of structure
        theOpacityID.style.opacity="0.7";

        //fill in the textarea, to show the value of our choice
        document.getElementById("theOpacity").value = 0.7;
    }
    if(theOpacity == '0.8')
    {
        //opacity of structure
        theOpacityID.style.opacity="0.8";

        //fill in the textarea, to show the value of our choice
        document.getElementById("theOpacity").value = 0.8;
    }
    if(theOpacity == '0.9')
    {
        //opacity of structure
        theOpacityID.style.opacity="0.9";

        //fill in the textarea, to show the value of our choice
        document.getElementById("theOpacity").value = 0.9;
    }
    if(theOpacity == '1.0')
    {
        //opacity of structure
        theOpacityID.style.opacity="1.0";

        //fill in the textarea, to show the value of our choice
        document.getElementById("theOpacity").value = 1.0;
    }
    playSound("blipQuiet1", 1.0);

    //update structuresArray to show the changed value
    updateStructures(worldOpacityId);
}

function customStructureOpacity()
{
    let theOpacity = prompt("Enter Opacity as 0.0 to 1.0")

    //opacity of structure
    theOpacityID.style.opacity=theOpacity;

    //fill in the textarea, to show the value of our choice
    document.getElementById("theOpacity").value = theOpacity;

    //update structuresArray to show the changed value
    updateStructures(worldOpacityId);
}

//Read the 3 Textarea, for the opacity value of our structure
//Set the opacity on our structure

function customStructureOpacityFromTextInput()
{
    let theOpacity = document.getElementById("theOpacity").value;
  
    theOpacityID.style.opacity= theOpacity;

    //update structuresArray to show the changed value
    updateStructures(worldOpacityId);
}

//--------------------------------------------------//

