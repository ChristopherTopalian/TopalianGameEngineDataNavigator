// menuStructureDistance.js

let theDistanceID;

function menuStructureDistance(theStructureId)
{
    audioPlay("sfx_blip_001", 1.0);

    theDistanceID = theStructureId;

    if (ge("menuPositionDistanceStructure"))
    {
        removeElement("menuPositionDistanceStructure");
    }

    let theMenu = ce("div");
    theMenu.id = "menuPositionDistanceStructure";
    theMenu.className = "divStyle001";
    theMenu.style.position = "absolute";
    theMenu.style.left = ourPlayer.x + 100 + 'px';
    theMenu.style.top = ourPlayer.y - 50 + 'px';
    theMenu.style.width = 400 + 'px';
    theMenu.style.height = 160 + 'px';
    ba(theMenu);

    //-//

    let closeButton = ce("button");
    closeButton.onclick = function()
    {
        removeElement("menuPositionDistanceStructure");
        keyboardControlOn();
    };
    closeButton.className = "ourButton";
    closeButton.style.marginBottom = "-4px";
    closeButton.textContent = "X";
    theMenu.append(closeButton);

    //-//

    theMenu.append(ce('hr'));

    //-//

    let theTitle = ce("span");
    theTitle.style.color = "rgb(255, 255, 255)";
    theTitle.textContent = "Distance";
    theMenu.append(theTitle);

    //-//

    theMenu.append(ce('hr'));

    //-//

    let idLabel = ce("span");
    idLabel.textContent = "Id of Object ";
    theMenu.append(idLabel);

    //-//

    let idTextArea = ce("textarea");
    idTextArea.id = "idToFindDistance";
    idTextArea.className = "textInput";
    idTextArea.onkeydown = function()
    {
        keyboardControlOff();
    };
    theMenu.append(idTextArea);

    //-//

    theMenu.append(ce("br"));

    //-//

    let enterButton = ce("button");
    enterButton.onclick = function()
    {
        keepGettingXYStructureCustom();
        keyboardControlOn();
        enterButtonSound();
    };
    enterButton.className = "ourButton";
    enterButton.textContent = "Enter";
    theMenu.append(enterButton);

    //-//

    theMenu.append(ce("br"));

    //-//

    theMenu.append(ce('hr'));

    //-//

    let cancelButton = ce("button");
    cancelButton.onclick = function()
    {
        removeTimer(ourDistanceTimer);
    };
    cancelButton.className = "ourButton";
    cancelButton.textContent = "Cancel";
    theMenu.append(cancelButton);

    //-//

    theMenu.append(ce("br"));
}

let ourDistanceTimer;
function keepGettingXYStructureCustom()
{
    let obj1 = theDistanceID;

    let obj2 = ge("idToFindDistance").value;

    // clear any previous searches
    if (ourDistanceTimer)
    {
        clearInterval(ourTimer);
    }

    ourDistanceTimer = setInterval(function()
    {
        getDistanceXY(obj1, obj2);
    }, 1000);
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

