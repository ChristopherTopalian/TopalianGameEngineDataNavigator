// menuStructureEdit.js

// when person clicks a structure, an edit menu appears to edit that structure.

function menuStructureEdit(theStructureId)
{
    audioPlay("sfx_blip_001", 1.0);

    // let structureMenuId = ge(theStructureId);

    // remove the text to find the digits only which number in the array, based on id number - 1 \d find digit
    let theNumberOnlyStructure = theStructureId.replace(/\D/g,'') - 1;

    //-//

    // if menu already exists, remove it, and create a new menu wherever the player is
    if (ge("menuStructureEdit"))
    {
        removeElement("menuStructureEdit");
    }

    let theMenu = ce("div");
    theMenu.id = "menuStructureEdit";
    theMenu.className = "divStyle001";
    theMenu.style.position = "absolute";
    theMenu.style.left = ourPlayer.x + 55 + 'px';
    theMenu.style.top = ourPlayer.y + 'px';
    theMenu.style.width = 250 + 'px';
    theMenu.style.height = 200 + 'px';
    theMenu.style.zIndex = 10000;
    theMenu.title = "menuStructureEdit";
    ba(theMenu);

    //-//

    // prevent menu from leaving screen left side
    if (positionGet("menuStructureEdit").x <= 30)
    {
        theMenu.style.left = '40px';
    }

    // prevent menu from leaving screen top side
    if (positionGet("menuStructureEdit").y <= 200)
    {
        theMenu.style.top = '100px';
    }

    //-//

    let closeButton = ce("button");
    closeButton.className = "ourButton";
    closeButton.textContent = "X";
    closeButton.onclick = function()
    {
        removeElement("menuStructureEdit");
    };
    theMenu.append(closeButton);

    //-//

    theMenu.append(ce('hr'));

    //-//

    let idLabel = ce("span");
    idLabel.className = "textCompact";
    idLabel.innerHTML = `<b> '${theStructureId}' </b>`;
    theMenu.append(idLabel);

    //-//

    theMenu.append(ce('hr'));

    //-//

    let structureNameText = ce("div");
    structureNameText.id = "structureNameText";
    structureNameText.innerHTML = `<span class='textCompact'> '${structuresArray[theNumberOnlyStructure].name}'`;
    theMenu.append(structureNameText);

    //-//

    theMenu.append(ce('hr'));

    //-//

    let nameLabel = ce("span");
    nameLabel.className = "textCompact";
    nameLabel.textContent = "NAME";
    theMenu.append(nameLabel);

    //-//

    theMenu.append(ce("br"));

    //-//

    let nameButton = ce("button");
    nameButton.className = "ourButton";
    nameButton.textContent = "NAME";
    nameButton.onclick = function()
    {
        menuStructureName(theStructureId);
    };
    theMenu.append(nameButton);

    //-//

    theMenu.append(ce("hr"));

    //-//

    let colorLabel = ce("span");
    colorLabel.className = "textCompact";
    colorLabel.textContent = "COLOR";
    theMenu.append(colorLabel);

    //-//

    theMenu.append(ce("br"));

    //-//

    let colorButton = ce("button");
    colorButton.className = "ourButton";
    colorButton.textContent = "COLOR";
    colorButton.onclick = function()
    {
        menuStructureColor(theStructureId);
    };
    theMenu.append(colorButton);

    //-//

    let colorTextButton = ce("button");
    colorTextButton.className = "ourButton";
    colorTextButton.textContent = "TEXT";
    colorTextButton.onclick = function()
    {
        menuStructureColorText(theStructureId);
    };
    theMenu.append(colorTextButton);

    //-//

    theMenu.append(ce("hr"));

    //-//

    let textureLabel = ce("span");
    textureLabel.className = "textCompact";
    textureLabel.textContent = "TEXTURE";
    theMenu.append(textureLabel);

    //-//

    theMenu.append(ce("br"));

    //-//

    let textureButton = ce("button");
    textureButton.className = "ourButton";
    textureButton.textContent = "TEXTURE";
    textureButton.onclick = function()
    {
        menuStructureTexture(theStructureId);
    };
    theMenu.append(textureButton);

    //-//

    theMenu.append(ce("hr"));

    //-//

    let alphaLabel = ce("span");
    alphaLabel.className = "textCompact";
    alphaLabel.textContent = "ALPHA";
    theMenu.append(alphaLabel);

    //-//

    theMenu.append(ce("br"));

    //-//

    let opacityButton = ce("button");
    opacityButton.className = "ourButton";
    opacityButton.textContent = "OPACITY";
    opacityButton.onclick = function()
    {
        menuStructureOpacity(theStructureId);
    };
    theMenu.append(opacityButton);

    //-//

    theMenu.append(ce("hr"));

    //-//

    let positionLabel = ce("span");
    positionLabel.className = "textCompact";
    positionLabel.textContent = "POSITION";
    theMenu.append(positionLabel);

    //-//

    theMenu.append(ce("br"));

    //-//

    let getPosButton = ce("button");
    getPosButton.className = "ourButton";
    getPosButton.textContent = "GET POS";
    getPosButton.onclick = function()
    {
        menuStructurePositionGet(theStructureId);
    };
    theMenu.append(getPosButton);

    //-//

    let setPosButton = ce("button");
    setPosButton.className = "ourButton";
    setPosButton.textContent = "SET POS";
    setPosButton.onclick = function()
    {
        menuStructurePositionSet(theStructureId);
    };
    theMenu.append(setPosButton);

    //-//

    theMenu.append(ce("hr"));

    //-//

    let sizeLabel = ce("span");
    sizeLabel.className = "textCompact";
    sizeLabel.textContent = "SIZE";
    theMenu.append(sizeLabel);

    //-//

    theMenu.append(ce("br"));

    //-//

    let getSizeButton = ce("button");
    getSizeButton.className = "ourButton";
    getSizeButton.textContent = "GET";
    getSizeButton.onclick = function()
    {
        menuStructureSizeGet(theStructureId);
    };
    theMenu.append(getSizeButton);

    //-//

    let setSizeButton = ce("button");
    setSizeButton.className = "ourButton";
    setSizeButton.textContent = "SET";
    setSizeButton.onclick = function()
    {
        menuStructureSizeSet(theStructureId);
    };
    theMenu.append(setSizeButton);

    //-//

    theMenu.append(ce("hr"));

    //-//

    let distanceLabel = ce("span");
    distanceLabel.className = "textCompact";
    distanceLabel.textContent = "DISTANCE";
    theMenu.append(distanceLabel);

    //-//

    theMenu.append(ce("br"));

    //-//

    let distanceButton = ce("button");
    distanceButton.className = "ourButton";
    distanceButton.textContent = "DISTANCE FINDER";
    distanceButton.onclick = function()
    {
        menuStructureDistance(theStructureId);
    };
    theMenu.append(distanceButton);

    //-//

    theMenu.append(ce("hr"));

    //-//

    showStructureData();
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

