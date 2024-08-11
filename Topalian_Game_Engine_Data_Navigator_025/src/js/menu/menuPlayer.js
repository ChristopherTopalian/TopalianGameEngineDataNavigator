// menuPlayer.js

// player menu activated when player presses the letter z

function menuPlayer()
{
    if (ge('menuPlayer'))
    {
        removeElement('menuPlayer');
    }

    //-//

    let theMenu = ce("div");
    theMenu.id = "menuPlayer";
    theMenu.className = "divStyle001";
    theMenu.title = "menuPlayer();";
    theMenu.style.position = "absolute";
    theMenu.style.left = ourPlayer.x - 50 +'px';
    theMenu.style.top = ourPlayer.y + 'px';
    theMenu.style.width = 250 +'px';
    theMenu.style.height = 200 +'px';
    theMenu.style.overflowY = 'scroll';
    ba(theMenu);
    
    // prevent menu leaving screen on left side
    if (positionGet("menuPlayer").x <= 100)
    {
        theMenu.style.left = 50;
    }

    // prevent menu being positioned off screen top side
    if (positionGet("menuPlayer").y <= 200)
    {
        theMenu.style.top = 50;
    }

    //-//

    let closeButton = ce("button");
    closeButton.textContent = "X";
    closeButton.className = "ourButton";
    closeButton.onclick = function()
    {
        removeElement("menuPlayer");
    };
    closeButton.onmouseover = function()
    {
        audioPlay('sfx_warp_001', 1.0);
    };
    theMenu.append(closeButton);

    //-//

    theMenu.append(ce('hr'));

    //-//

    let instructionsText = ce("span");
    instructionsText.id = 'instructionsText';
    instructionsText.className = "textCompact";
    instructionsText.textContent = "Instructions";
    theMenu.append(instructionsText);

    //-//

    theMenu.append(ce('br'));

    //-//

    let instructionsButton = ce("button");
    instructionsButton.id = 'instructionsButton';
    instructionsButton.className = "ourButton";
    instructionsButton.textContent = 'Instructions';
    instructionsButton.onmouseover = function()
    {
        audioPlay('sfx_warp_001', 1.0);
    };
    instructionsButton.onclick = function()
    {
        makeInstructions();
    };
    theMenu.append(instructionsButton);

    //-//

    theMenu.append(ce('hr'));

    //-//

    let goToText = ce("span");
    goToText.textContent = "Go To";
    goToText.className = "textCompact";
    theMenu.append(goToText);

    //-//

    theMenu.append(ce('br'));

    //-//

    let sections =
    [
        {
            name: 'Scripting',
            class: 'ourButton',
            whenClicked: `travelTo('scripting');`
        },

        {
            name: 'Evidence',
            class: 'ourButton',
            whenClicked: `travelTo('evidence');`
        },

        {
            name: 'Books',
            class: 'ourButton',
            whenClicked: `travelTo('books');`
        },

        {
            name: 'News',
            class: 'ourButton',
            whenClicked: `travelTo('news');`
        }
    ];

    for (let i = 0; i < sections.length; i++)
    {
        let travelToButton = ce("button");
        travelToButton.textContent = sections[i].name;
        travelToButton.className = sections[i].class;
        travelToButton.onmouseover = function()
        {
            audioPlay('sfx_warp_001', 1.0);
        };
        travelToButton.onclick = function()
        {
            audioPlay('sfx_blip_001', 1.0);
            eval(sections[i].whenClicked);
        };
        theMenu.append(travelToButton);
    }

    //-//

    theMenu.append(ce('hr'));

    //-//

    let audioText = ce("span");
    audioText.textContent = "Audio";
    audioText.className = "textCompact";
    theMenu.append(audioText);

    //-//

    theMenu.append(ce('br'));

    //-//

    let songButton = ce("button");
    songButton.textContent = "Songs";
    songButton.className = "ourButton";
    songButton.onmouseover = function()
    {
        audioPlay('sfx_warp_001', 1.0);
    };
    songButton.onclick = function()
    {
        songChoicesMenu();
    };
    theMenu.append(songButton);

    //-//

    theMenu.append(ce('hr'));

    //-//

    let createStructuresText = ce("span");
    createStructuresText.textContent = "Create Structures";
    createStructuresText.className = "textCompact";
    theMenu.append(createStructuresText);

    //-//

    theMenu.append(ce('br'));

    //-//

    let howToButton = ce("button");
    howToButton.textContent = "How To";
    howToButton.className = 'ourButton';
    howToButton.onmouseover = function()
    {
        audioPlay('sfx_warp_001', 1.0);
    };
    howToButton.onclick = function()
    {
        structuresMenu();
    };
    theMenu.append(howToButton);

    //-//

    let createButton = ce("button");
    createButton.textContent = "Create";
    createButton.className = "ourButton";
    createButton.onmouseover = function()
    {
        audioPlay('sfx_warp_001', 1.0);
    };
    createButton.onclick = function()
    {
        activateBuildMode();
    };
    theMenu.append(createButton);

    //-//

    let goToButton = ce("button");
    goToButton.textContent = "Go To";
    goToButton.className = "ourButton";
    goToButton.onmouseover = function()
    {
        audioPlay('sfx_warp_001', 1.0);
    };
    goToButton.onclick = function()
    {
        structuresRow(ourPlayer.x, ourPlayer.y, 125, 200, structuresArray);
    };
    theMenu.append(goToButton);

    //-//

    let loadButton = ce("button");
    loadButton.textContent = "Load";
    loadButton.id = "loadStructureButtonId";
    loadButton.className = "ourButton";
    loadButton.onmouseover = function()
    {
        audioPlay('sfx_warp_001', 1.0);
    };
    loadButton.onclick = function()
    {
        loadStructureScript('structuresArray.js');
    };
    theMenu.append(loadButton);

    //-//

    theMenu.append(ce('hr'));

    //-//

    let playerText = ce("span");
    playerText.textContent = "Player";
    playerText.className = "textCompact";
    theMenu.append(playerText);

    //-//

    theMenu.append(ce('br'));

    //-//

    let nameButton = ce("button");
    nameButton.textContent = "Name";
    nameButton.className = "ourButton";
    nameButton.onmouseover = function()
    {
        audioPlay('sfx_warp_001', 1.0);
    };
    nameButton.onclick = function()
    {
        menuPlayerName('thePlayer');
    };
    theMenu.append(nameButton);

    //-//

    let loadScriptButton = ce("button");
    loadScriptButton.textContent = "Load";
    loadScriptButton.className = "ourButton";
    loadScriptButton.onmouseover = function()
    {
        audioPlay('sfx_warp_001', 1.0);
    };
    loadScriptButton.onclick = function()
    {
        loadPlayerScript('playerData.js');
    };

    //-//

    theMenu.append(ce('hr'));

    //-//

    let playerAppearanceText = ce("span");
    playerAppearanceText.textContent = "Player Appearance";
    playerAppearanceText.className = "textCompact";
    theMenu.append(playerAppearanceText);

    //-//

    theMenu.append(ce('br'));

    //-//

    let textColorButton = ce("button");
    textColorButton.textContent = "Text Color";
    textColorButton.className = "ourButton";
    textColorButton.title = 'menuPlayerColorText';
    textColorButton.onmouseover = function()
    {
        audioPlay('sfx_warp_001', 1.0);
    };
    textColorButton.onclick = function()
    {
        menuPlayerColorText();
    };
    theMenu.append(textColorButton);

    //-//

    let textureButton = ce("button");
    textureButton.textContent = "Texture";
    textureButton.className = "ourButton";
    textureButton.onmouseover = function()
    {
        audioPlay('sfx_warp_001', 1.0);
    };
    textureButton.onclick = function()
    {
        menuPlayerTexture();
    };
    theMenu.append(textureButton);

    //-//

    let opacityButton = ce("button");
    opacityButton.textContent = "Opacity";
    opacityButton.className = "ourButton";
    opacityButton.onmouseover = function()
    {
        audioPlay('sfx_warp_001', 1.0);
    };
    opacityButton.onclick = function()
    {
        menuPlayerOpacity();
    };
    theMenu.append(opacityButton);

    //-//

    let colorButton = ce("button");
    colorButton.textContent = "Color";
    colorButton.className = "ourButton";
    colorButton.onmouseover = function()
    {
        audioPlay('sfx_warp_001', 1.0);
    };
    colorButton.onclick = function()
    {
        menuPlayerColor();
    };
    theMenu.append(colorButton);

    //-//

    theMenu.append(ce('hr'));

    //-//

    let playerSpeedText = ce("span");
    playerSpeedText.textContent = "Player Speed";
    playerSpeedText.className = "textCompact";
    theMenu.append(playerSpeedText);

    //-//

    theMenu.append(ce('br'));

    //-//

    let playerSpeedButton = ce("button");
    playerSpeedButton.textContent = "Speed";
    playerSpeedButton.className = "ourButton";
    playerSpeedButton.onmouseover = function()
    {
        audioPlay('sfx_warp_001', 1.0);
    };
    playerSpeedButton.onclick = function()
    {
        menuPlayerSpeed();
    };
    theMenu.append(playerSpeedButton);

    //-//

    theMenu.append(ce('hr'));

    //-//

    let playerPosText = ce("span");
    playerPosText.textContent = "Player Position";
    playerPosText.className = "textCompact";
    theMenu.append(playerPosText);

    //-//

    theMenu.append(ce('br'));

    //-//

    let getPosButton = ce("button");
    getPosButton.textContent = "Get";
    getPosButton.className = "ourButton";
    getPosButton.onmouseover = function()
    {
        audioPlay('sfx_warp_001', 1.0);
    };
    getPosButton.onclick = function()
    {
        menuPlayerPositionGet();
    };
    theMenu.append(getPosButton);

    //-//

    let setPosButton = ce("button");
    setPosButton.textContent = "Set";
    setPosButton.className = "ourButton";
    setPosButton.onmouseover = function()
    {
        audioPlay('sfx_warp_001', 1.0);
    };
    setPosButton.onclick = function()
    {
        menuPlayerPositionSet();
    };
    theMenu.append(setPosButton);

    //-//

    theMenu.append(ce('hr'));

    //-//

    let playerSizeText = ce("span");
    playerSizeText.textContent = "Player Size";
    playerSizeText.className = "textCompact";
    theMenu.append(playerSizeText);

    //-//

    theMenu.append(ce('br'));

    //-//

    let playerSizeGetButton = ce("button");
    playerSizeGetButton.textContent = "Get";
    playerSizeGetButton.className = "ourButton";
    playerSizeGetButton.onmouseover = function()
    {
        audioPlay('sfx_warp_001', 1.0);
    };
    playerSizeGetButton.onclick = function()
    {
        menuPlayerSizeGet();
    };
    theMenu.append(playerSizeGetButton);

    //-//

    let playerSizeSetButton = ce("button");
    playerSizeSetButton.textContent = "Set";
    playerSizeSetButton.className = "ourButton";
    playerSizeSetButton.onmouseover = function()
    {
        audioPlay('sfx_warp_001', 1.0);
    };
    playerSizeSetButton.onclick = function()
    {
        menuPlayerSizeSet();
    };
    theMenu.append(playerSizeSetButton);

    //-//

    theMenu.append(ce('hr'));

    //-//

    let mousePosText = ce("span");
    mousePosText.textContent = "Mouse Position";
    mousePosText.className = "textCompact";
    theMenu.append(mousePosText);

    //-//

    theMenu.append(ce('br'));

    //-//

    let mouseOnButton = ce("button");
    mouseOnButton.textContent = "On";
    mouseOnButton.className = "ourButton";
    mouseOnButton.onmouseover = function()
    {
        audioPlay('sfx_warp_001', 1.0);
    };
    mouseOnButton.onclick = function()
    {
        mouseOn();
        audioPlay("blipQuiet", 1.0);
    };
    theMenu.append(mouseOnButton);

    //-//

    let mouseOffButton = ce("button");
    mouseOffButton.textContent = "Off";
    mouseOffButton.className = "ourButton";
    mouseOffButton.onmouseover = function()
    {
        audioPlay('sfx_warp_001', 1.0);
    };
    mouseOffButton.onclick = function()
    {
        mouseOff();
        audioPlay("sfx_blip_001", 1.0);
    };
    theMenu.append(mouseOffButton);

    //-//

    theMenu.append(ce('hr'));

    //-//

    let distanceText = ce("span");
    distanceText.textContent = "Distance";
    distanceText.className = "textCompact";
    theMenu.append(distanceText);

    //-//

    theMenu.append(ce('br'));

    //-//

    let distanceFinderButton = ce("button");
    distanceFinderButton.textContent = "Distance Finder";
    distanceFinderButton.className = "ourButton";
    distanceFinderButton.onmouseover = function()
    {
        audioPlay('sfx_warp_001', 1.0);
    };
    distanceFinderButton.onclick = function()
    {
        menuPlayerDistance();
    };
    theMenu.append(distanceFinderButton);

    //-//

    theMenu.append(ce('hr'));

    //-//

    let findText = ce("span");
    findText.textContent = "Find";
    findText.className = "textCompact";
    theMenu.append(findText);

    //-//

    theMenu.append(ce('br'));

    //-//

    let searchButton = ce("button");
    searchButton.textContent = "Search";
    searchButton.className = "ourButton";
    searchButton.onmouseover = function()
    {
        audioPlay('sfx_warp_001', 1.0);
    };
    searchButton.onclick = function()
    {
        menuSearch();
    };
    theMenu.append(searchButton);

    //-//

    theMenu.append(ce('hr'));
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

