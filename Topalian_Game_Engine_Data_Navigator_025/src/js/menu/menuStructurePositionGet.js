// menuStructurePositionGet.js

let thePositionGetID;

function menuStructurePositionGet(theStructureId)
{
    thePositionGetID = theStructureId;

    audioPlay("sfx_blip_001", 1.0);

    //-//

    if (ge("menuPositionStructureGet"))
    {
        removeElement("menuPositionStructureGet");
        
    }

    //-//

    let theMenu = ce("div");
    theMenu.id = "menuPositionStructureGet";
    theMenu.className = "divStyle001";
    theMenu.style.position = "absolute";
    theMenu.style.left = ourPlayer.x + 100 + 'px';
    theMenu.style.top = ourPlayer.y - 55 + 'px';
    theMenu.style.width = 400 + 'px';
    theMenu.style.height = 192 + 'px';
    ba(theMenu);

    //-//

    let closeButton = ce("button");
    closeButton.onclick = function()
    {
        removeElement("menuPositionStructureGet");
        keyboardControlOn();
    };
    closeButton.className = "ourButton";
    closeButton.style.marginBottom = "-4px";
    closeButton.textContent = "X";
    theMenu.append(closeButton);

    //-//

    let positionLabel = ce("span");
    positionLabel.style.color = "rgb(255, 255, 255)";
    positionLabel.textContent = "GET STRUCTURE POSITION";
    theMenu.append(positionLabel);

    //-//

    theMenu.append(ce('hr'));

    //-//

    let getPosButton = ce("button");
    getPosButton.onclick = function()
    {
        structurePositionGet();
        keyboardControlOn();
    };
    getPosButton.className = "ourButton";
    getPosButton.textContent = "GET POS";
    theMenu.append(getPosButton);

    //-//

    theMenu.append(ce("br"));

    //-//

    let getPosRepeatButton = ce("button");
    getPosRepeatButton.onclick = function()
    {
        structurePositionGetRepeat();
        keyboardControlOn();
    };
    getPosRepeatButton.className = "ourButton";
    getPosRepeatButton.textContent = "GET POS REPEAT";
    theMenu.append(getPosRepeatButton);

    //-//

    theMenu.append(ce("br"));

    //-//

    let cancelGetPosButton = ce("button");
    cancelGetPosButton.onclick = function()
    {
        removeTimer(currentStructurePositionTimer);
    };
    cancelGetPosButton.className = "ourButton";
    cancelGetPosButton.textContent = "Cancel Get Pos";
    theMenu.append(cancelGetPosButton);

    //-//

    theMenu.append(ce('hr'));

    //-//

    let xPosLabel = ce("span");
    xPosLabel.textContent = "X POS";
    theMenu.append(xPosLabel);

    //-//

    theMenu.append(ce("nbsp"));

    //-//

    let xPosTextarea = ce("textarea");
    xPosTextarea.id = "gotX";
    xPosTextarea.className = "textInput";
    xPosTextarea.onkeydown = function()
    {
        keyboardControlOff();
    };
    theMenu.append(xPosTextarea);

    //-//

    theMenu.append(ce("br"));

    //-//

    let yPosLabel = ce("span");
    yPosLabel.textContent = "Y POS";
    theMenu.append(yPosLabel);

    //-//

    theMenu.append(ce("nbsp"));

    //-//

    let yPosTextarea = ce("textarea");
    yPosTextarea.id = "gotY";
    yPosTextarea.className = "textInput";
    yPosTextarea.onkeydown = function()
    {
        keyboardControlOff();
    };
    theMenu.append(yPosTextarea);

    //-//

    theMenu.append(ce("br"));
}

function structurePositionGet()
{
    let currentPosition = positionGet(thePositionGetID);

    thePositionGetID.innerHTML = currentPosition.x.toFixed(0) + "<br>" + currentPosition.y.toFixed(0) + "<br>";

    ge('gotX').value = currentPosition.x.toFixed(0);

    ge('gotY').value = currentPosition.y.toFixed(0);
}

let currentStructurePositionTimer;

function structurePositionGetRepeat()
{
    currentStructurePositionTimer = setInterval(function()
    {
        structurePositionGet();
    }, 1000);
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

