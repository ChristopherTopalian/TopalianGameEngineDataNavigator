// whenLoaded.js

// When the Page Loads
function whenLoaded()
{
    makeBackground();

    makeDedication();

    loadSounds(soundsArray);
    loadSounds(songsArray);

    makeEngineTitle();

    makePlayer();

    movePlayer(activePlayer, -1, 0);

    makeInfoDiv();

    makeInfoDivPlayer();

    preventContextMenu();

    let playerElement = ge(activePlayer);

    if (playerElement)
    {
        // url of current document
        let theDocumentUrl = location.href;

        // first 4 letters of url
        theDocumentUrl = theDocumentUrl.substring(0, 4);

        // results in: file or http

        // if user is not using http internet version of app, then we can load scripts from js folder on their system
        if (theDocumentUrl != "http")
        {
            // load Structures Data
            loadStructureScript("structuresArray.js");

            // load Player Data
            loadPlayerScript("playerData.js");
        }

        structuresCreateFromFile();

        playerLoadData(activePlayer);

        makeStructureTextArea();

        makePlayerTextArea();

        // show structuresArray data in textarea
        setTimeout(function()
        {
            showStructureData();
        }, 1000);

        // show playerArray data in textarea
        setTimeout(function()
        {
            showPlayerData();
        }, 1000);

        // menuPlayer();

        sortData();

        containerLanguage();
    
        // makeInstructions();

        makeLogo();

        makeBottomToolbar(bottomToolbarArray);

        // makeVideo("ewDcgG8Q288");

        // listen for keydown presses
        window.addEventListener("keydown", theControls, false);

        // listen for keyup presses
        window.addEventListener("keyup", theControls, false);
    }

    gameLoop(activePlayer);
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

