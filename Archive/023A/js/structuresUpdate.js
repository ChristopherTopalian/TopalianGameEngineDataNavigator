//Dedicated to God the Father

//All Rights Reserved Christopher Topalian Copyright 2020-2021

//structuresUpdate.js

/*
    Get the Structures Attributes
*/

//Get the Opacity Value of the Selected Structure
function opacityGet(idName)
{
    let theId = document.getElementById(idName);

    let theOpacity = window.getComputedStyle(theId).getPropertyValue("opacity");

    return theOpacity;
}

//Get the Fill Color Value of the Selected Structure
function colorFillGet(idName)
{
    let theId = document.getElementById(idName);

    let theColorFill = window.getComputedStyle(theId).getPropertyValue("background-color");

    return theColorFill;
}

//Get the Text Color Value of the Selected Structure
function colorTextGet(idName)
{
    let theId = document.getElementById(idName);

    let theColorText = window.getComputedStyle(theId).getPropertyValue("color");

    return theColorText;
}

//Get the Texture Name of the Selected Structure
function textureGet(idName)
{
    let theId = document.getElementById(idName);

    let theTexture = window.getComputedStyle(theId).getPropertyValue("background-Image");

    return theTexture;
}

//Update the structuresArray
function updateStructures(idName)
{
    //strips text, leaves only digits
    //to find the array index number
    let theNumberOnly = idName.replace(/\D/g,'') - 1;

    structureAttributes = 
    {
        //name: nameGet(idName),   //name
        name: structuresArray[theNumberOnly].name,
        id: idName,                           //id
        posX: positionGet(idName).x,      //posX
        posY: positionGet(idName).y,       //posY
        sizeX: sizeGet(idName).x,             //sizeX
        sizeY: sizeGet(idName).y,             //sizeY
        colorFill: colorFillGet(idName),   //fill color
        colorText: colorTextGet(idName), //text color
        opacity: opacityGet(idName),      //opacity
        texture: textureGet(idName)        //texture
    };

    structuresArray.splice(theNumberOnly,1,structureAttributes);

    showStructureData();
}

function structureTextArea(theX, theY, sizeX, sizeY)
{
     //theX -= sizeX;

    //This code below allows us to create an id to be used for location data by our menu.
    let idForPosition = document.createElement("div");
    idForPosition.style.position = "absolute";
    idForPosition.style.left = theX +'px';
    idForPosition.style.top = theY -22 + 'px'; 
    idForPosition.id = "structureTextAreaId";
    document.body.append(idForPosition);

    //TYPE OF ELEMENT TO CREATE
    let theTextArea = document.createElement("textarea");

    //POSITION
    theTextArea.style.position = "absolute";
    theTextArea.style.left = theX + 17 +'px';
    theTextArea.style.top = theY + 30 +'px';

    //SIZE
    theTextArea.style.width = sizeX - 30 +'px';
    theTextArea.style.height = sizeY - 50 +'px';

    //LAYER
    theTextArea.style.zIndex = "1";

    //BORDER
    //theTextArea.style.border = "solid 2px rgba(0,50,200,1.0)";
    theTextArea.style.borderStyle = "solid";
    theTextArea.style.borderWidth = "2px";
    theTextArea.style.borderColor = "rgba(0,50,200,1.0)";

    //BACKGROUND COLOR
    theTextArea.style.background = "rgba(85,85,85,1.0)";

    //FONT
    theTextArea.style.fontFamily = "arial";
    theTextArea.style.fontWeight = "bold";
    theTextArea.style.fontSize = "medium";
    theTextArea.style.color = "aqua";
    theTextArea.style.textAlign = "left";
    
    //theTextArea.resize = "none";

    //theTextArea.setAttribute("readonly", "true"); 

    theTextArea.setAttribute("click", "showStructureData();"); 

    theTextArea.setAttribute("keydown", "keyboardControlOff();"); 

    theTextArea.setAttribute("blur", "keyboardControlOn();"); 

    //ID
    theTextArea.id = "textAreaStructureData";

    //TYPE OF ELEMENT TO CREATE
    let copyButton = document.createElement("div");

    //POSITION
    copyButton.style.position = "absolute";
    copyButton.style.left = theX + 15 +'px';
    copyButton.style.top = theY + 7 + 'px';

    //FONT
    copyButton.style.color = "white";

    //LAYER
    copyButton.style.zIndex = "10";

    copyButton.innerHTML += '<button onclick="copyIt(\''+theTextArea.id+'\');" class="ourButton">Copy</button><br>';

    //TYPE OF ELEMENT TO CREATE
    let downloadButton = document.createElement("div");

    //POSITION
    downloadButton.style.position = "absolute";
    downloadButton.style.left = theX + 150 +'px';
    downloadButton.style.top = theY + 7 + 'px';

    //FONT
    downloadButton.style.color = "white";

    //LAYER
    downloadButton.style.zIndex = "10";

    downloadButton.innerHTML += '<button onclick="downloadStructureData(\''+theTextArea.id+'\');" class="ourButton">Download</button><br>';
    
    document.body.append(copyButton);
    document.body.append(downloadButton);
    document.body.append(theTextArea);
}

//--------------------------------------------------//

