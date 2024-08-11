// menuPlayerDistance.js

function menuPlayerDistance()
{
    audioPlay("sfx_blip_001", 1.0);

    //-//

    if (ge('menuPositionPlayer'))
    {
        removeElement('menuPositionPlayer');
    }

    let theMenu = ce("div");
    theMenu.id = "menuPositionPlayer";
    theMenu.className = "divStyle001";
    theMenu.style.position = "absolute";
    theMenu.style.left = ourPlayer.x + 150 + 'px';
    theMenu.style.top = ourPlayer.y + 'px';
    theMenu.style.width = '400px';
    theMenu.style.height = '160px';
    ba(theMenu);

    //-//

    let removeButton = ce("button");
    removeButton.textContent = 'X';
    removeButton.className = 'ourButton';
    removeButton.style.marginBottom = '-4px';
    removeButton.onclick = function()
    {
        removeElement("menuPositionPlayer");
        keyboardControlOn();
    };
    theMenu.append(removeButton);

    //-//

    let hr001 = ce("hr");
    theMenu.append(hr001);

    //-//

    let distanceSection = ce("div");
    theMenu.append(distanceSection);

    //-//

    let distanceLabel = ce("span");
    distanceLabel.style.color = 'rgb(255, 255, 255)';
    distanceLabel.textContent = 'Distance';
    distanceSection.append(distanceLabel);

    //-//

    let hr002 = ce("hr");
    distanceSection.append(hr002);

    //-//

    let idLabel = ce("span");
    idLabel.style.color = 'rgb(255, 255, 255)';
    idLabel.textContent = 'Id of Object';
    distanceSection.append(idLabel);

    //-//

    let idTextarea = ce("textarea");
    idTextarea.id = 'idToFindDistance';
    idTextarea.className = 'textInput';
    idTextarea.onkeydown = function()
    {
        keyboardControlOff();
    };
    theMenu.append(idTextarea);

    //-//

    let enterButton = ce("button");
    enterButton.textContent = 'Enter';
    enterButton.className = 'ourButton';
    enterButton.onclick = function()
    {
        keepGettingXYCustom();
        keyboardControlOn();
        enterButtonSound();
    };
    theMenu.append(enterButton);

    //-//

    let hr003 = ce("hr");
    theMenu.append(hr003);

    //-//

    let cancelButton = ce("button");
    cancelButton.textContent = 'Cancel';
    cancelButton.className = 'ourButton';
    cancelButton.onclick = function()
    {
        removeTimer(ourTimer);
    };
    theMenu.append(cancelButton);
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

