// structuresCreateFromFile.js

function structuresCreateFromFile()
{
    // console.log(JSON.stringify(structuresArray));

    // the structuresArray that we use in this function, is located in structureData.js

    for (let z = 0; z < structuresArray.length; z++)
    {
        let ourStructure = ce("div");

        ourStructure.style.position = "absolute";

        // For a Center Position System, use this way below
        // We minus the structures size divided by itself.
        // This way we place structures according to their center, instead of their top left corner.
        ourStructure.style.left = structuresArray[z].posX - (structuresArray[z].sizeX / 2) + 'px';

        ourStructure.style.top = structuresArray[z].posY - (structuresArray[z].sizeY / 2) + 'px'; 

        /*
        // For a Top Left Coordinate System, use this way below
        ourStructure.style.left = structuresArray[z].posX + 'px';

        ourStructure.style.top = structuresArray[z].posY + 'px'; 
        */

        // SIZE
        ourStructure.style.width = structuresArray[z].sizeX +'px';

        ourStructure.style.height = structuresArray[z].sizeY +'px';

        ourStructure.style.overflowY = "scroll";

        // PADDING
        // ourStructure.style.paddingTop = "2px";

        // "STRUCTURE" + structureId;

        // id
        ourStructure.id = structuresArray[z].id;

        ourStructure.style.resize = 'both';

        // Show info about the structure, under the structure
        // ourStructure.setAttribute('onclick', 'structuresGetInfo(\''+ourStructure.id+'\');');

        // when right clicked
        // open structure edit menu
        ourStructure.oncontextmenu = function()
        {
            menuStructureEdit(ourStructure.id);
        };

        // ourStructure.setAttribute('onclick', 'menuStructureEdit(\''+ourStructure.id+'\');structuresGetInfo(\''+ourStructure.id+'\');');

        ourStructure.style.zIndex = "1002";

        if (structuresArray[z].texture != "none")
        {
            ourStructure.style.backgroundImage = structuresArray[z].texture;
        }
        else
        {
            ourStructure.style.background = structuresArray[z].colorFill;
        }
        ourStructure.style.border = "solid 2px";
        ourStructure.style.borderColor = "rgba(100, 100, 255, 1.0)";
        ourStructure.style.opacity = structuresArray[z].opacity;

        // FONT
        ourStructure.style.fontFamily = "arial";
        ourStructure.style.fontWeight = "bold";
        ourStructure.style.fontSize = "20px";
        ourStructure.style.color = structuresArray[z].colorText;
        ourStructure.style.textAlign = "center";

        // Show the id of the structure and also the simplified position data
        ourStructure.innerHTML = structuresArray[z].id + "<br>" + structuresArray[z].name + "<br>" + structuresArray[z].posX.toFixed(0) + "<br>" + structuresArray[z].posY.toFixed(0);

        ba(ourStructure);
    }

    //console.log(JSON.stringify(structuresArray));
}

// example

// structuresArray data in the console
// console.log(JSON.stringify(structuresArray, null, ' ') + ";" + "\n\n");

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

