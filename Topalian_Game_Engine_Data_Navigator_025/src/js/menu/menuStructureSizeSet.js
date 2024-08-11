// menuStructureSizeSet.js

let theSizeSetID;

let worldSizeId;

function menuStructureSizeSet(theStructureId)
{
    theSizeSetID = ge(theStructureId);

    worldSizeId = theStructureId;

    // Remove the text to find the digits only
    // Which number in the array, based on id number - 1
    // \d find digit
    numberOnlyStructure = worldSizeId.replace(/\D/g, '') - 1;

    audioPlay("sfx_blip_001", 1.0);

    //-//

    if (ge("menuSizeStructureSet"))
    {
        removeElement("menuSizeStructureSet");
    }

    //-//

    let theMenu = ce("div");
    theMenu.id = "menuSizeStructureSet";
    theMenu.style.position = "absolute";
    theMenu.className = "divStyle001";
    theMenu.style.left = ourPlayer.x + 100 + 'px';
    theMenu.style.top = ourPlayer.y - 50 + 'px';
    theMenu.style.width = 400 + 'px';
    theMenu.style.height = 165 + 'px';
    ba(theMenu);

    //-//

    let closeButton = ce("button");
    closeButton.onclick = function()
    {
        removeElement("menuSizeStructureSet");
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
    sizeLabel.textContent = "SET STRUCTURE SIZE";
    theMenu.append(sizeLabel);

    //-//

    theMenu.append(ce('hr'));

    //-//

    let defaultButton = ce("button");
    defaultButton.onclick = function()
    {
        structureSizeSetDefault();
    };
    defaultButton.className = "ourButton";
    defaultButton.textContent = "Default";
    theMenu.append(defaultButton);

    //-//

    theMenu.append(ce("br"));

    //-//

    let xSizeLabel = ce("span");
    xSizeLabel.textContent = "X SIZE";
    theMenu.append(xSizeLabel);

    //-//

    theMenu.append(ce("nbsp"));

    //-//

    let xSizeTextarea = ce("textarea");
    xSizeTextarea.id = "customSizeX";
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
    ySizeLabel.textContent = "Y SIZE";
    theMenu.append(ySizeLabel);

    //-//

    theMenu.append(ce("nbsp"));

    //-//

    let ySizeTextarea = ce("textarea");
    ySizeTextarea.id = "customSizeY";
    ySizeTextarea.className = "textInput";
    ySizeTextarea.onkeydown = function()
    {
        keyboardControlOff();
    };
    theMenu.append(ySizeTextarea);

    //-//

    theMenu.append(ce("br"));

    //-//

    let enterButton = ce("button");
    enterButton.onclick = function()
    {
        structureSizeSet();
        keyboardControlOn();
        enterButtonSound();
    };
    enterButton.className = "ourButton";
    enterButton.textContent = "Enter";
    theMenu.append(enterButton);
}

function structureSizeSet()
{
    let theSizeX;
    let theSizeY;

    theSizeX = ge('customSizeX').value;
    theSizeY = ge('customSizeY').value;

    // theSizeSetID.innerHTML = theSizeX + "<br>" + theSizeY + "<br>";

    // update the innerHTML of the structure
    theSizeSetID.innerHTML = structuresArray[numberOnlyStructure].id + "<br>" + structuresArray[numberOnlyStructure].name + "<br>" + "Position" + "<br>" + structuresArray[numberOnlyStructure].posX + "<br>" + structuresArray[numberOnlyStructure].posY + "<br>" + "Size" + "<br>" + theSizeX + "<br>" + theSizeY;

    theSizeSetID.style.width = theSizeX;
    theSizeSetID.style.height = theSizeY;

    updateStructures(worldSizeId);
}

function structureSizeSetDefault()
{
    let theSizeX = 114;
    let theSizeY = 70;

    ge('customSizeX').value = theSizeX;
    ge('customSizeY').value = theSizeY;

    // theSizeSetID.innerHTML = theSizeX + "<br>" + theSizeY + "<br>";

    // update the innerHTML of the structure
    theSizeSetID.innerHTML = structuresArray[numberOnlyStructure].id + "<br>" + structuresArray[numberOnlyStructure].name + "<br>" + "Position" + "<br>" + structuresArray[numberOnlyStructure].posX + "<br>" + structuresArray[numberOnlyStructure].posY + "<br>" + "Size" + "<br>" + theSizeX + "<br>" + theSizeY;

    theSizeSetID.style.width = theSizeX;
    theSizeSetID.style.height = theSizeY;

    updateStructures(worldSizeId);
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

