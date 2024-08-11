// menuStructureOpacity.js

let worldOpacityId;

let theOpacityID;

let theNumberOnly;

function menuStructureOpacity(theStructureId)
{
    theOpacityID = ge(theStructureId);
    worldOpacityId = theStructureId;

    // remove text to find digits only
    let theNumberOnly = theStructureId.replace(/\D/g,'') - 1;

    //-//

    audioPlay("sfx_blip_001", 1.0);

    //-//

    if (ge("menuOpacityStructure"))
    {
        removeElement("menuOpacityStructure");
    }

    //-//

    let theMenu = ce("div");
    theMenu.id = "menuOpacityStructure";
    theMenu.className = "divStyle001";
    theMenu.style.position = "absolute";
    theMenu.style.left = ourPlayer.x + 100 + 'px';
    theMenu.style.top = ourPlayer.y - 55 + 'px';
    theMenu.style.width = 440 + 'px';
    theMenu.style.height = 175 + 'px';
    ba(theMenu);

    //-//

    let closeButton = ce("button");
    closeButton.onclick = function()
    {
        removeElement("menuOpacityStructure");
        keyboardControlOn();
    };
    closeButton.className = "ourButton";
    closeButton.style.marginBottom = "-4px";
    closeButton.textContent = "X";
    theMenu.append(closeButton);

    //-//

    theMenu.append(ce('hr'));

    //-//

    let opacityLabel = ce("span");
    opacityLabel.style.color = "rgb(255, 255, 255)";
    opacityLabel.textContent = "OPACITY OF STRUCTURE";
    theMenu.append(opacityLabel);

    //-//

    theMenu.append(ce("br"));

    //-//

    let alphaText = ce("span");
    alphaText.textContent = "Alpha";
    theMenu.append(alphaText);

    //-//

    theMenu.append(ce("nbsp"));

    //-//

    let alphaTextarea = ce("textarea");
    alphaTextarea.id = "theOpacity";
    alphaTextarea.className = "textInput";
    alphaTextarea.onkeydown = function()
    {
        keyboardControlOff();
    };
    theMenu.append(alphaTextarea);

    //-//

    theMenu.append(ce("br"));

    //-//

    let enterButton = ce("button");
    enterButton.onclick = function()
    {
        customStructureOpacityFromTextInput();
        keyboardControlOn();
        enterButtonSound();
    };
    enterButton.className = "ourButton";
    enterButton.textContent = "Enter";
    theMenu.append(enterButton);

    //-//

    theMenu.append(ce('hr'));

    //-//

    let opacityValues = [
        0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0
    ];

    for (let z = 0; z < opacityValues.length; z++)
    {
        let opacityButton = ce("button");
        opacityButton.textContent = opacityValues[z];
        opacityButton.className = 'ourButton';
        opacityButton.onclick = function()
        {
            ge(theStructureId).style.opacity = opacityValues[z];

            ge("theOpacity").value = opacityValues[z]; 

            updateStructures(theStructureId);
        };
        theMenu.append(opacityButton);
    }

    //-//

    theMenu.append(ce("br"));

    //-//

    let customButton = ce("button");
    customButton.onclick = function()
    {
        customStructureOpacity();
    };
    customButton.className = "ourButton";
    customButton.textContent = "Custom";
    theMenu.append(customButton);

    //-//

    theMenu.append(ce('br'));
}

function customStructureOpacity()
{
    let theOpacity = prompt("Enter Opacity as 0.0 to 1.0")

    // opacity of structure
    theOpacityID.style.opacity = theOpacity;

    // fill in the textarea, to show the value of our choice
    ge("theOpacity").value = theOpacity;

    // update structuresArray to show the changed value
    updateStructures(worldOpacityId);
}

// Read the 3 Textarea, for the opacity value of our structure
// Set the opacity on our structure

function customStructureOpacityFromTextInput()
{
    let theOpacity = ge("theOpacity").value;
  
    theOpacityID.style.opacity = theOpacity;

    // update structuresArray to show the changed value
    updateStructures(worldOpacityId);
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

