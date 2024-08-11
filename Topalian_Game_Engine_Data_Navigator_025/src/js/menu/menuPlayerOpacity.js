// menuPlayerOpacity.js

function menuPlayerOpacity()
{
    audioPlay("sfx_blip_001", 1.0);

    // if menu exists, remove it
    if (ge("menuOpacityPlayer"))
    {
        removeElement('menuOpacityPlayer');
    }

    //-//

    let theMenu = ce("div");
    theMenu.id = "menuOpacityPlayer";
    theMenu.className = "divStyle001";
    theMenu.style.position = "absolute";
    theMenu.style.left = ourPlayer.x + 100 + 'px';
    theMenu.style.top = ourPlayer.y - 55 + 'px';
    theMenu.style.width = '440px';
    theMenu.style.height = '193px';
    ba(theMenu);

    //-//

    let closeButton = ce("button");
    closeButton.textContent = 'X';
    closeButton.className = 'ourButton';
    closeButton.style.marginBottom = '-4px';
    closeButton.onclick = function()
    {
        removeElement("menuOpacityPlayer");
        keyboardControlOn();
    };
    theMenu.append(closeButton);

    //-//

    theMenu.append(ce('hr'));

    //-//

    let titleSpan = ce("span");
    titleSpan.style.color = 'rgb(255, 255, 255)';
    titleSpan.textContent = 'OPACITY OF PLAYER';
    theMenu.append(titleSpan);

    //-//

    theMenu.append(ce('br'));

    //-//

    let textNode = ce('div');
    textNode.textContent = 'Alpha ';
    theMenu.append(textNode);

    //-//

    let opacityTextarea = ce("textarea");
    opacityTextarea.id = 'theOpacity';
    opacityTextarea.className = 'textInput';
    opacityTextarea.onkeydown = function()
    {
        keyboardControlOff();
    };
    theMenu.append(opacityTextarea);

    //-//

    theMenu.append(ce('br'));

    //-//

    let enterButton = ce("button");
    enterButton.textContent = 'Enter';
    enterButton.className = 'ourButton';
    enterButton.onclick = function()
    {
        let theOpacity = ge("theOpacity").value;

        ge(activePlayer).style.opacity = theOpacity;

        keyboardControlOn();

        enterButtonSound();

        updatePlayer();
    };
    theMenu.append(enterButton);

    //-//

    theMenu.append(ce('hr'));

    //-//

    let opacityButtons = [
        "Default", 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0
    ];

    for (let z = 0; z < opacityButtons.length; z++)
    {
        let opacityButton = ce("button");
        opacityButton.textContent = opacityButtons[z];
        opacityButton.className = 'ourButton';
        opacityButton.onclick = function()
        {
            ge(activePlayer).style.opacity = opacityButtons[z];
            ge("theOpacity").value = opacityButtons[z];

            updatePlayer();
        };
        theMenu.append(opacityButton);
    }

    //-//

    theMenu.append(ce('br'));

    //-//

    let customButton = ce("button");
    customButton.textContent = 'Custom';
    customButton.className = 'ourButton';
    customButton.onclick = function()
    {
        customOpacity();
    };
    theMenu.append(customButton);

    //-//

    theMenu.append(ce('br'));
}

//-//

function customOpacity()
{
    let theOpacity = prompt("Enter Opacity as 0.0 to 1.0")

    ge(activePlayer).style.opacity = theOpacity;
    ge("theOpacity").value = theOpacity;

    updatePlayer();
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

