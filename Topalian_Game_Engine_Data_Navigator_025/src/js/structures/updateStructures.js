// updateStructures.js

// update the structuresArray
function updateStructures(idName)
{
    // strips text, leaves only digits
    // to find the array index number
    let theNumberOnly = idName.replace(/\D/g,'') - 1;

    structureAttributes = 
    {
        name: structuresArray[theNumberOnly].name,
        id: idName,
        posX: get(idName, 'pos').x,
        posY: get(idName, 'pos').y,
        sizeX: get(idName, 'size').x,
        sizeY: get(idName, 'size').y,
        colorFill: get(idName, 'background-color'),
        colorText: get(idName, 'color'),
        opacity: get(idName, 'opacity'),
        texture: get(idName, 'background-image')
    };

    structuresArray.splice(theNumberOnly,1,structureAttributes);

    showStructureData();
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

