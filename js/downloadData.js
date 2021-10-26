//Dedicated to God the Father

//All Rights Reserved Christopher Topalian Copyright 2020-2021

//downloadData.js

//This function below creates a text file named TopalianStructureData.js. 

//Each time we download it, it will change the name to be TopalianStructureData(1).js and then the next time TopalianStructureData(2).js and so on, in our downloads folder,
//so we make sure to change that name when putting it in our folder to TopalianStructureData.js

function downloadStructureData() 
{
    //get the data from the Text Area
    //let data = document.getElementById("textAreaStructureData").value;

    //get the data from the structuresArray and format it nicely
    let ourData = "structuresArray=" + JSON.stringify(structuresArray, null, ' ') + ";" + "\n\n";

    //create an anchor element
    let ourElement = document.createElement("a");

    //we can choose .txt .html or in our case, we use .js
    ourElement.download = "TopalianStructureData.js";

    //we choose the data and kind
    let theKind = new Blob([ourData], {
    type: "text/plain"
    });

    ourElement.href = window.URL.createObjectURL(theKind);

    ourElement.click();
}

function downloadPlayerData() 
{
    //get the data from the Text Area
    //let data = document.getElementById("textAreaPlayerData").value;

    //get the data from the playerArray and format it nicely
    let ourData = "playerArray=" + JSON.stringify(playerArray, null, ' ') + ";" + "\n\n";

    //create an anchor element
    let ourElement = document.createElement("a");

    //we can choose .txt .html or in our case, we use .js
    ourElement.download = "TopalianPlayerData.js";

    //we choose the data and kind
    let theKind = new Blob([ourData], {
    type: "text/plain"
    });

    ourElement.href = window.URL.createObjectURL(theKind);

    ourElement.click();
}

//--------------------------------------------------//

