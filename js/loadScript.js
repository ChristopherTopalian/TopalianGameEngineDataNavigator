//Dedicated to God the Father

//All Rights Reserved Christopher Topalian Copyright 2020-2021

//loadScript.js

function loadStructureScript(scriptName)
{
    //scriptName = "TopalianStructureData.js";

    //First, we remove any currently existing structures
    structuresRemoveAll();

    let script = document.createElement('script');
    script.onload = function() {
        structuresCreateFromFile();
    };
    script.src = scriptName;  //"TopalianStructureData.js";
    document.getElementsByTagName('head')[0].append(script);
}

function loadPlayerScript(scriptName)
{
    let script = document.createElement('script');
    script.onload = function() {
        playerLoadData();
    };
    script.src = scriptName;  //"TopalianPlayerData.js";
    document.getElementsByTagName('head')[0].append(script);
}
//--------------------------------------------------//

