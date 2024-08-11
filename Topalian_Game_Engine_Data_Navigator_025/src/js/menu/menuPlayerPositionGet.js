// menuPlayerPositionGet.js

let currentPosTimer;

function menuPlayerPositionGet()
{
    audioPlay("sfx_blip_001", 1.0);

    if (ge('menuPositionPlayerGet'))
    {
        removeElement('menuPositionPlayerGet');
    }

    //-//

    let theMenu = ce("div");
    theMenu.id = "menuPositionPlayerGet"; 
    theMenu.className = "divStyle001";
    theMenu.title = "menuPlayerPositionGet()";
    theMenu.style.position = "absolute";
    theMenu.style.left = ourPlayer.x + 100 + 'px';
    theMenu.style.top = ourPlayer.y - 55 + 'px';
    theMenu.style.width = 400 + 'px';
    theMenu.style.height = 220 + 'px';
    ba(theMenu);

    //-//

    let closeButton = ce("button");
    closeButton.className = "ourButton";
    closeButton.style.marginBottom = "-4px";
    closeButton.onclick = function()
    {
        removeElement("menuPositionPlayerGet");
        keyboardControlOn();
    };
    closeButton.innerHTML = "X";
    theMenu.append(closeButton);

    //-//

    theMenu.append(ce("hr"));

    //-//

    let span = ce("span");
    span.style.color = "rgb(255, 255, 255)";
    span.innerHTML = "GET PLAYER POSITION";
    theMenu.append(span);

    //-//

    theMenu.append(ce("hr"));

    //-//

    let buttonContainer = ce('div');
    theMenu.append(buttonContainer);

    //-//

    let playerPosButton = ce("button");
    playerPosButton.className = "ourButton";
    playerPosButton.onclick = function()
    {
        playerPositionGet();
    };
    playerPosButton.innerHTML = "GET POS";
    buttonContainer.append(playerPosButton);

    //-//

    buttonContainer.append(ce("br"));

    //-//

    let playerPosRepeatButton = ce("button");
    playerPosRepeatButton.className = "ourButton";
    playerPosRepeatButton.onclick = function()
    {
        playerPositionGetRepeat();
    };
    playerPosRepeatButton.innerHTML = "GET POS REPEAT";
    buttonContainer.append(playerPosRepeatButton);

    //-//

    buttonContainer.append(ce("br"));

    //-//

    let clearPosTimeButton = ce("button");
    clearPosTimeButton.className = "ourButton";
    clearPosTimeButton.onclick = function()
    {
        clearCurrentPosTimer();
    };
    clearPosTimeButton.innerHTML = "Cancel Get Pos";
    buttonContainer.append(clearPosTimeButton);

    //-//

    buttonContainer.append(ce("br"));

    //-//

    buttonContainer.append(ce("br"));

    //-//

    theMenu.append(ce("hr"));

    //-//

    let xPosLabel = ce("span");
    xPosLabel.innerHTML = "X POS &nbsp";
    theMenu.append(xPosLabel);

    //-//

    let xPosInput = ce("textarea");
    xPosInput.id = "gotX";
    xPosInput.className = "textInput";
    xPosInput.onkeydown = function()
    {
        keyboardControlOff();
    };
    theMenu.append(xPosInput);

    //-//

    let yPosLabel = ce("span");
    yPosLabel.innerHTML = "Y POS &nbsp";
    theMenu.append(yPosLabel);

    //-//

    let yPosInput = ce("textarea");
    yPosInput.id = "gotY";
    yPosInput.className = "textInput";
    yPosInput.onkeydown = function()
    {
        keyboardControlOff();
    };
    theMenu.append(yPosInput);

    //-//

    theMenu.append(ce("br"));

    //-//

    let cancelButton = ce("button");
    cancelButton.innerHTML = "Cancel Timer";
    cancelButton.onclick = function()
    {
        clearInterval(currentPosTimer);
    };
    theMenu.append(cancelButton);
}

//-//

function playerPositionGet()
{
    let currentPosition = positionGet("thePlayer");

    ge(activePlayer).innerHTML = currentPosition.x.toFixed(0) + "<br>" + currentPosition.y.toFixed(0) + "<br>";

    ge('gotX').value = currentPosition.x;
    ge('gotY').value = currentPosition.y;
}

function playerPositionGetRepeat()
{
    currentPosTimer = setInterval(function()
    {
        playerPositionGet();
    }, 1000);
}

function clearCurrentPosTimer()
{
    clearInterval(currentPosTimer);
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

