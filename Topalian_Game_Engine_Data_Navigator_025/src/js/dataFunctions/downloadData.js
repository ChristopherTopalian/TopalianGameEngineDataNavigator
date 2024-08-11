// downloadData.js

// creates a text file named structureData.js. 
function downloadStructureData() 
{
    // get the data from the Text Area
    // let data = ge("textAreaStructureData").value;

    // get data from structuresArray format it
    let ourData = "structuresArray=" + JSON.stringify(structuresArray, null, ' ') + ";" + "\n\n";

    // create an anchor element
    let ourElement = ce("a");

    // we can choose .txt .html or in our case, we use .js
    ourElement.download = "structuresArray.js";

    // we choose the data and kind
    let theKind = new Blob([ourData],
    {
        type: "text/plain"
    });

    ourElement.href = window.URL.createObjectURL(theKind);

    ourElement.click();
}

function downloadPlayerData() 
{
    // get the data from the Text Area
    // let data = ge("textAreaPlayerData").value;

    // get data from playerArray, format it
    let ourData = "playerArray = " + JSON.stringify(playerArray, null, ' ') + ";" + "\n\n";

    // create an anchor element
    let ourElement = ce("a");

    // we can choose .txt .html or in our case, we use .js
    ourElement.download = "playerData.js";

    // we choose the data and kind
    let theKind = new Blob([ourData],
    {
        type: "text/plain"
    });

    ourElement.href = window.URL.createObjectURL(theKind);

    ourElement.click();
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

