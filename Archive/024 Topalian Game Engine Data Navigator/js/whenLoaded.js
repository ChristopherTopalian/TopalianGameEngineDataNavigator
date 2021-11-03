//Dedicated to God the Father

//All Rights Reserved Christopher Topalian Copyright 2020-2021

//whenLoaded.js

// When the Page Loads
function whenLoaded()
{
    //We first check if the user is using the file, or http version of the app
    //If the user is using the offline version of the app, the address will start with the name file.
    //If the user is using the online version of the app, the address will start with the name http.

    //get the address of the current document
    let theDocumentUrl = location.href;

    //get the first 4 letters of the address
    theDocumentUrl = theDocumentUrl.substring(0,4);
    //results in: file or http

    //display in the console, the first 4 letters of the address, which will be file, or http
    //console.log(theUrl);

    //if the user is not using the http internet version of the app, then we can load the scripts from the js folder on their system
    if(theDocumentUrl != "http")
    {
        //load the Structures Data
        loadStructureScript("TopalianStructureData.js");

        //load the Player Data
        loadPlayerScript("TopalianPlayerData.js");
    }

    //load the structuresArray
    structuresCreateFromFile();

    //load the playerArray
    playerLoadData();

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

    //listen for keydown presses
    window.addEventListener("keydown", theControls, false);

    //listen for keyup presses
    window.addEventListener("keyup", theControls, false); 
}

//--------------------------------------------------//

