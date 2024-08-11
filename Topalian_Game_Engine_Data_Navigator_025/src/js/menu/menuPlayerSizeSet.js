// menuPlayerSizeSet.js

function menuPlayerSizeSet()
{
    audioPlay("sfx_blip_001", 1.0);

    if (ge("menuSizePlayerSet"))
    {
        removeElement("menuSizePlayerSet");
    }

    let theMenu = ce("div");
    theMenu.id = "menuSizePlayerSet"; 
    theMenu.className = "divStyle001";
    theMenu.style.position = "absolute";
    theMenu.style.left = ourPlayer.x + 100 + 'px';
    theMenu.style.top = ourPlayer.y - 50 + 'px';
    theMenu.style.width = 400 + 'px';
    theMenu.style.height = 190 + 'px';
    ba(theMenu);

    //-//

    let closeButton = ce("button");
    closeButton.onclick = function()
    {
        removeElement("menuSizePlayerSet");
        keyboardControlOn();
    };
    closeButton.className = "ourButton";
    closeButton.style.marginBottom = "-4px";
    closeButton.textContent = "X";
    theMenu.append(closeButton);

    //-//

    theMenu.append(ce('hr'));

    //-//

    let title = ce("span");
    title.style.color = "rgb(255, 255, 255)";
    title.textContent = " SET PLAYER SIZE ";
    theMenu.append(title);

    //-//

    theMenu.append(ce('hr'));

    //-//

    let defaultButton = ce("button");
    defaultButton.onclick = playerSizeSetDefault;
    defaultButton.className = "ourButton";
    defaultButton.textContent = "Default";
    theMenu.append(defaultButton);

    //-//

    let xSizeLabel = ce("div");
    xSizeLabel.textContent = "X SIZE ";
    let xSizeInput = ce("textarea");
    xSizeInput.id = "customSizeX";
    xSizeInput.className = "textInput";
    xSizeInput.onkeydown = keyboardControlOff;
    xSizeLabel.append(xSizeInput);
    theMenu.append(xSizeLabel);

    //-//

    let ySizeLabel = ce("div");
    ySizeLabel.textContent = "Y SIZE ";
    let ySizeInput = ce("textarea");
    ySizeInput.id = "customSizeY";
    ySizeInput.className = "textInput";
    ySizeInput.onkeydown = keyboardControlOff;
    ySizeLabel.append(ySizeInput);
    theMenu.append(ySizeLabel);

    //-//

    let enterButton = ce("button");
    enterButton.onclick = function()
    {
        playerSizeSet();
        keyboardControlOn();
        enterButtonSound();
    };
    enterButton.className = "ourButton";
    enterButton.textContent = "Enter";
    theMenu.append(enterButton);
}

function playerSizeSet()
{
   // let currentSize = sizeGet("thePlayer");

    let theSizeX;
    let theSizeY;

    theSizeX = ge('customSizeX').value;
    theSizeY = ge('customSizeY').value;

    ge(activePlayer).innerHTML = theSizeX + "<br>" + theSizeY + "<br>";

    ge(activePlayer).style.width = theSizeX;
    ge(activePlayer).style.height = theSizeY;

    // update playerArray to show changed value
    updatePlayer();
}

function playerSizeSetDefault()
{
   // let currentSize = sizeGet("thePlayer");

    let theSizeX = 70;
    let theSizeY = 70;

    ge('customSizeX').value = theSizeX;
    ge('customSizeY').value = theSizeY;

    ge(activePlayer).innerHTML = theSizeX + "<br>" + theSizeY + "<br>";

    ge(activePlayer).style.width = theSizeX;
    ge(activePlayer).style.height = theSizeY;

    // update playerArray to show changed value
    updatePlayer();
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

