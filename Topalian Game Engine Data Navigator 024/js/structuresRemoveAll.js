//Dedicated to God the Father

//All Rights Reserved Christopher Topalian Copyright 2020-2021

//structuresRemoveAll.js

/*
    Remove All Structures
*/

function structuresRemoveAll()
{
    let theStructure;

    for(let x = 1; x <= structuresArray.length; x++)
    {
        theStructure = "STRUCTURE" + x;
        removeElement(theStructure);
    }

    //reset the array
    structuresArray = [ ];
    
    //reset the structureId to 1
    structureId = 1;
}

//--------------------------------------------------//

