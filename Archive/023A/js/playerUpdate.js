//Dedicated to God the Father

//All Rights Reserved Christopher Topalian Copyright 2020-2021

//playerUpdate.js

/*
    Get the Player Attributes
*/

//Get the Opacity Value of the specified Player
function opacityGetPlayer(idName)
{
    let theId = document.getElementById('thePlayer');

    let theOpacity = window.getComputedStyle(theId).getPropertyValue("opacity");

    return theOpacity;
}

//Get the Fill Color Value of the specified Player
function colorFillGetPlayer(idName)
{
    let theId = document.getElementById('thePlayer');

    let theColorFill = window.getComputedStyle(theId).getPropertyValue("background-color");

    return theColorFill;
}

//Get the Text Color Value of the specified Player
function colorTextGetPlayer(idName)
{
    let theId = document.getElementById('thePlayer');

    let theColorText = window.getComputedStyle(theId).getPropertyValue("color");

    return theColorText;
}

//Get the Texture Name of the specified Player
function textureGetPlayer(idName)
{
    let theId = document.getElementById('thePlayer');

    let theTexture = window.getComputedStyle(theId).getPropertyValue("background-Image");

    return theTexture;
}

//Gets the X Pos of the player using getComputedStyle
function getX(idName)
{
    //let theId = document.getElementById('thePlayer');

    //let theLeft = window.getComputedStyle(theId).getPropertyValue("left");

    let theLeft = window.getComputedStyle(ourPlayer.playerId).getPropertyValue("left");

    return theLeft;
}

//Gets the Y Pos of the player using getComputedStyle
function getY(idName)
{
    //let theId = document.getElementById('thePlayer');

    //let theTop = window.getComputedStyle(theId).getPropertyValue("top");

    let theTop = window.getComputedStyle(ourPlayer.playerId).getPropertyValue("top");

    return theTop;
}

//Get the Name of the Player
function nameGetPlayer(idName)
{
    //textarea, where player entered a name value
    let theName = document.getElementById('thePlayerName').value;

    return theName;
}

//Update the playerArray
function updatePlayer(idName)
{
    //idName = document.getElementById('thePlayer');

    idName = 'thePlayer';

    playerAttributes = 
    {
        //name: nameGetPlayer(idName),
        name: playerArray[0].name,     //name
        id: 'thePlayer',                            //id
        posX: positionGet(idName).x,  //posX
        posY: positionGet(idName).y,  //posY
        //posY: getX(idName),  //posX
        //posY: getY(idName),  //posY
        sizeX: sizeGet(idName).x,    //sizeX
        sizeY: sizeGet(idName).y,    //sizeY
        colorFill: colorFillGetPlayer(idName),   //fill color
        colorText: colorTextGetPlayer(idName), //text color
        opacity: opacityGetPlayer(idName),    //opacity
        texture: textureGetPlayer(idName)      //texture
        //texture: playerArray[0].texture      //texture
    };

    playerArray.splice(theNumberOnly,1,playerAttributes);

    showPlayerData();
}

function playerTextArea(theX, theY, sizeX, sizeY)
{
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

    theTextArea.setAttribute("click", "showPlayerData();"); 

    theTextArea.setAttribute("keydown", "keyboardControlOff();"); 

    theTextArea.setAttribute("blur", "keyboardControlOn();"); 

    //ID
    theTextArea.id = "textAreaPlayerData";

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

    downloadButton.innerHTML += '<button onclick="downloadPlayerData(\''+theTextArea.id+'\');" class="ourButton">Download</button><br>';
    
    document.body.append(copyButton);
    document.body.append(downloadButton);
    document.body.append(theTextArea);
}

//--------------------------------------------------//

