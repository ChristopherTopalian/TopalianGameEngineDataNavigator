//structuresRemoveAll.js

// Remove All Structures

function structuresRemoveAll()
{
    let theStructure;

    for (let x = 1; x <= structuresArray.length; x++)
    {
        theStructure = "STRUCTURE" + x;

        removeElement(theStructure);
    }

    // reset the array
    structuresArray = [ ];
    
    // reset the structureId to 1
    structureId = 1;
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

