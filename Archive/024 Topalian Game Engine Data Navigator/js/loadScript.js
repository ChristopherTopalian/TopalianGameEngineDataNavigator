//Dedicated to God the Father

//All Rights Reserved Christopher Topalian Copyright 2020-2021

//loadScript.js

function loadStructureScript(scriptName)
{
    //get the address of the current document
    let theDocumentUrl = location.href;

    //get the first 4 letters of the address
    theDocumentUrl = theDocumentUrl.substring(0,4);  //results in: file or http

    //if the user is using the offline version of the app
    if(theDocumentUrl != "http")
    {       
        //first, we remove any currently existing structures
        structuresRemoveAll();

        let script = document.createElement('script');

        script.onload = function() {
            structuresCreateFromFile();
        };
        script.src = "./js/" + scriptName; //"TopalianStructureData.js";
        document.getElementsByTagName('head')[0].append(script);
    }
    else
    {
        alert('Online version does NOT currently support loading scripts');
    }
}

function loadPlayerScript(scriptName)
{
    //get the address of the current document
    let theDocumentUrl = location.href;

    //get the first 4 letters of the address
    theDocumentUrl = theDocumentUrl.substring(0,4);  //results in: file or http

    //if the user is using the offline version of the app
    if(theDocumentUrl != "http")
    {
        let script = document.createElement('script');
        script.onload = function() {
            playerLoadData();
        };
        script.src = "./js/" + scriptName;  //"TopalianPlayerData.js";
        document.getElementsByTagName('head')[0].append(script);
    }
    //else if the person is using the online version of the app
    else
    {
        alert('Online version does NOT currently support loading scripts');
    }
}
//--------------------------------------------------//

