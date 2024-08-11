// menuPlayerSizeGet.js

function menuPlayerSizeGet()
{
    audioPlay("sfx_blip_001", 1.0);

    //-//

    if (ge("menuSizePlayerGet"))
    {
        removeElement("menuSizePlayerGet");
    }

    let theMenu = ce("div");
    theMenu.id = "menuSizePlayerGet"; 
    theMenu.className = "divStyle001";
    theMenu.style.position = "absolute";
    theMenu.style.left = ourPlayer.x + 100 + 'px';
    theMenu.style.top = ourPlayer.y - 41 + 'px';
    theMenu.style.width = 400 + 'px';
    theMenu.style.height = 170 + 'px';
    ba(theMenu);

    //-//

    let closeButton = ce("button");
    closeButton.onclick = function()
    {
        removeElement("menuSizePlayerGet");
        keyboardControlOn();
    };
    closeButton.className = "ourButton";
    closeButton.style.marginBottom = "-4px";
    closeButton.textContent = "X";
    theMenu.append(closeButton);

    //-//

    let titleDiv = ce("div");
    theMenu.append(titleDiv);

    //-//

    let titleSpan = ce("span");
    titleSpan.style.color = "rgb(255, 255, 255)";
    titleSpan.textContent = "GET PLAYER SIZE";
    titleDiv.append(titleSpan);

    //-//

    titleDiv.append(ce("hr"));

    //-//

    titleDiv.append(ce("hr"));

    //-//

    let getSizeButton = ce("button");
    getSizeButton.onclick = function()
    {
        playerSizeGet();
    };
    getSizeButton.className = "ourButton";
    getSizeButton.textContent = "GET SIZE";
    theMenu.append(getSizeButton);

    //-//

    theMenu.append(ce("br"));

    //-//

    let xSizeLabel = ce('div');
    xSizeLabel.textContent = "X Size ";
    theMenu.append(xSizeLabel);

    //-//

    let xSizeTextarea = ce("textarea");
    xSizeTextarea.id = "gotSizeX";
    xSizeTextarea.className = "textInput";
    xSizeTextarea.onkeydown = function()
    {
        keyboardControlOff();
    };
    theMenu.append(xSizeTextarea);

    //-//

    theMenu.append(ce("br"));

    //-//

    let ySizeLabel = ce('div');
    ySizeLabel.textContent = "Y Size ";
    theMenu.append(ySizeLabel);

    //-//

    let ySizeTextarea = ce("textarea");
    ySizeTextarea.id = "gotSizeY";
    ySizeTextarea.className = "textInput";
    ySizeTextarea.onkeydown = function()
    {
        keyboardControlOff();
    };
    theMenu.append(ySizeTextarea);
}

//-//

function playerSizeGet()
{
    let currentSize = sizeGet("thePlayer");

    ge('gotSizeX').value = currentSize.x;
    ge('gotSizeY').value = currentSize.y;

    ge(activePlayer).innerHTML = currentSize.x + "<br>" + currentSize.y + "<br>";
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

