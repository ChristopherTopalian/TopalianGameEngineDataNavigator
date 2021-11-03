//Dedicated to God the Father

//All Rights Reserved Christopher Topalian Copyright 2020-2021

//structuresCreateFromFile.js

function structuresCreateFromFile()
{
//console.log(JSON.stringify(structuresArray));

//the structuresArray that we use in this function, is located in TopalianStructureData.js

for(let z = 0; z < structuresArray.length; z++)
{
    //TYPE OF ELEMENT TO CREATE
    let ourStructure = document.createElement("div");

    //POSITION
    ourStructure.style.position = "absolute";

    //For a Center Position System, use this way below
    //We minus the structures size divided by itself.
    //This way we place structures according to their center, instead of their top left corner.
    ourStructure.style.left = structuresArray[z].posX - (structuresArray[z].sizeX / 2) + 'px';

    ourStructure.style.top = structuresArray[z].posY - (structuresArray[z].sizeY / 2) + 'px'; 

    /*
    //For a Top Left Coordinate System, use this way below
    ourStructure.style.left = structuresArray[z].posX + 'px';

    ourStructure.style.top = structuresArray[z].posY + 'px'; 
    */

    //SIZE
    ourStructure.style.width = structuresArray[z].sizeX +'px';

    ourStructure.style.height = structuresArray[z].sizeY +'px';

    //PADDING
    //ourStructure.style.paddingTop = "2px";

    //"STRUCTURE" + structureId;

    //ID
    ourStructure.id = structuresArray[z].id;

    //Show info about the structure, under the structure
    //ourStructure.setAttribute('onclick', 'structuresGetInfo(\''+ourStructure.id+'\');');

    //Open the Structure Edit Menu of the clicked structure
    ourStructure.setAttribute('onclick', 'menuStructureEdit(\''+ourStructure.id+'\');');

    //ourStructure.setAttribute('onclick', 'menuStructureEdit(\''+ourStructure.id+'\');structuresGetInfo(\''+ourStructure.id+'\');');

    //LAYER
    ourStructure.style.zIndex = "1002";

    //BACKGROUND
    if (structuresArray[z].texture != "none")
    {
        //TEXTURE THE STRUCTURE
        ourStructure.style.backgroundImage = structuresArray[z].texture;
    }
    else
    {
        //else if texture is not used
        //COLOR THE BACKGROUND OF THE PLAYER
        ourStructure.style.background = structuresArray[z].colorFill;
    }

    //BORDER
    ourStructure.style.border = "solid 2px";
    ourStructure.style.borderColor = "rgba(100,100,255,1.0)";

    //OPACITY
    ourStructure.style.opacity = structuresArray[z].opacity;

    //FONT
    ourStructure.style.fontFamily = "arial";
    ourStructure.style.fontWeight = "bold";
    ourStructure.style.fontSize = "medium";
    ourStructure.style.color = structuresArray[z].colorText;
    ourStructure.style.textAlign = "center";

    //Show the id of the structure and also the simplified position data
    ourStructure.innerHTML = structuresArray[z].id + "<br>" + structuresArray[z].name + "<br>" + structuresArray[z].posX.toFixed(0) + "<br>" + structuresArray[z].posY.toFixed(0);

    document.body.append(ourStructure);
    }
    //console.log(JSON.stringify(structuresArray));
}

//example

//structuresArray data in the console
//console.log(JSON.stringify(structuresArray, null, ' ') + ";" + "\n\n");

//--------------------------------------------------//

