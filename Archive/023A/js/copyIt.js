//Dedicated to God the Father

//All Rights Reserved Christopher Topalian Copyright 2020-2021

//copyIt.js

//We can copy the Text Area easily by clicking the Copy button

function copyIt(theId)
{
    let copyText = document.getElementById(theId);

    copyText.select();

    copyText.setSelectionRange(0, 1000000);

    document.execCommand("copy");

    let whichOne;
    if(theId == "textAreaStructureData")
    {
        whichOne = "TopalianStructureData";
    }
    if(theId == "textAreaPlayerData")
    {
        whichOne = "TopalianPlayerData";
    }

    alert("Successfully COPIED. \nNow PASTE it in " + whichOne + ".js");

    //alert("Successfully Copied " + copyText.value);
}

//--------------------------------------------------//

