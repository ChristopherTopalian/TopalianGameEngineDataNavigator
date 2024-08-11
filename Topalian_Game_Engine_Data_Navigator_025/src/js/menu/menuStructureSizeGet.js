// menuStructureSizeGet.js

let theSizeGetID;

function menuStructureSizeGet(theStructureId)
{
    theSizeGetID = theStructureId;

    audioPlay("sfx_blip_001", 1.0); 

    //-//

    if (ge("menuSizeStructureGet"))
    {
        removeElement("menuSizeStructureGet");
    }

    //-//

    let theMenu = ce("div");
    theMenu.id = "menuSizeStructureGet";
    theMenu.className = "divStyle001";
    theMenu.style.position = "absolute";
    theMenu.style.left = ourPlayer.x + 100 + 'px';
    theMenu.style.top = ourPlayer.y - 40 + 'px';
    theMenu.style.width = 400 + 'px';
    theMenu.style.height = 143 + 'px';
    ba(theMenu);

    //-//

    let closeButton = ce("button");
    closeButton.onclick = function()
    {
        removeElement("menuSizeStructureGet");
        keyboardControlOn();
    };
    closeButton.className = "ourButton";
    closeButton.style.marginBottom = "-4px";
    closeButton.textContent = "X";
    theMenu.append(closeButton);

    //-//

    theMenu.append(ce('hr'));

    //-//

    let sizeLabel = ce("span");
    sizeLabel.style.color = "rgb(255, 255, 255)";
    sizeLabel.textContent = "GET STRUCTURE SIZE";
    theMenu.append(sizeLabel);

    //-//

    theMenu.append(ce('hr'));

    //-//

    let getSizeButton = ce("button");
    getSizeButton.onclick = function()
    {
        structureSizeGet(theSizeGetID);
    };
    getSizeButton.className = "ourButton";
    getSizeButton.textContent = "GET SIZE";
    theMenu.append(getSizeButton);

    //-//

    theMenu.append(ce("br"));

    //-//

    let xSizeLabel = ce("span");
    xSizeLabel.textContent = "X Size";
    theMenu.append(xSizeLabel);

    //-//

    theMenu.append(ce("nbsp"));

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

    let ySizeLabel = ce("span");
    ySizeLabel.textContent = "Y Size";
    theMenu.append(ySizeLabel);

    //-//

    theMenu.append(ce("nbsp"));

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

function structureSizeGet()
{
    let currentSize = sizeGet(theSizeGetID);

    ge('gotSizeX').value = currentSize.x;
    ge('gotSizeY').value = currentSize.y;

    theSizeGetID.innerHTML = currentSize.x + "<br>" + currentSize.y + "<br>";
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

