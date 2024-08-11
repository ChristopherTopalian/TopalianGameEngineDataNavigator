// loadScript.js

function loadStructureScript(scriptName)
{
    // get address of current document
    let theDocumentUrl = location.href;

    // get first 4 letters of address
    theDocumentUrl = theDocumentUrl.substring(0,4);
    //results in: file or http

    // if the user is using the offline version of the app
    if (theDocumentUrl != "http")
    {       
        // first, we remove any currently existing structures
        structuresRemoveAll();

        //-//

        let script = ce('script');

        script.onload = function()
        {
            structuresCreateFromFile();
        };

        script.src = "src/js/2data/" + scriptName;

        //"structuresArray.js";

        document.getElementsByTagName('head')[0].append(script);
    }

    else
    {
        alert('Online version does NOT currently support loading scripts');
    }
}

function loadPlayerScript(scriptName)
{
    // get address of the current document
    let theDocumentUrl = location.href;

    // get first 4 letters of address
    theDocumentUrl = theDocumentUrl.substring(0,4);
    //results in: file or http

    // if the user is using the offline version of the app
    if (theDocumentUrl != "http")
    {
        let script = ce('script');

        script.onload = function()
        {
            playerLoadData(activePlayer);
        };

        script.src = "src/js/2data/" + scriptName;
        //"playerData.js";

        document.getElementsByTagName('head')[0].append(script);
    }

    // else if person is using online version of the app
    else
    {
        alert('Online version does NOT currently support loading scripts');
    }
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

