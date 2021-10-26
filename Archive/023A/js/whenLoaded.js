//Dedicated to God the Father

//All Rights Reserved Christopher Topalian Copyright 2020-2021

//whenLoaded.js

// When the Page Loads
function whenLoaded()
{
    //load the Structures Data
    loadStructureScript("TopalianStructureData.js");

    //load the Player Data
    loadPlayerScript("TopalianPlayerData.js");

    //load sounds
    loadSounds();

    //load songs
    loadSongs();

    //create structure TextArea
    structureTextArea(20, 200, 325, 300);
    //structureTextArea(theX, theY, sizeX, sizeY)

    //create player TextArea
    playerTextArea(325, 200, 325, 300);
    //playerTextArea(theX, theY, sizeX, sizeY)

    //show the structuresArray data in textarea
    showStructureData();

    //show the playerArray data in textarea
    showPlayerData();

    //create the player menu on the page
    menuPlayer();

    //sorts the arrays
    sortIt();

    //load section 1
    containerLanguage(); 
    
    //creates message on screen, that can be deleted
    messageStart();

    //creates message on screen, that stays
    messageStays();

    //listen for mouse clicks
    //window.addEventListener("click", mousePos, false);

    //listen for keydown presses
    window.addEventListener("keydown", theControls, false);

    //listen for keyup presses
    window.addEventListener("keyup", theControls, false);

    //compare the Y pos distance of obj1 with obj2
    //keepGettingY('thePlayer',  'STRUCTURE1');

    //compare the X pos distance of obj1 with obj2
    //keepGettingX('thePlayer',  'STRUCTURE1');

    //compare the X and Y pos distance of obj1 with obj2
    //keepGettingXY('thePlayer',  'STRUCTURE1');
}

//--------------------------------------------------//

