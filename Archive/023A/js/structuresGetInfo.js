//Dedicated to God the Father

//All Rights Reserved Christopher Topalian Copyright 2020-2021

//structuresGetInfo.js

/* This function is useful in general, but we are using a different method now.

This function is NOT currently used in the engine, but we are keeping this function in our library, for a possible future implementation.

In the structuresCreate.js and the structuresCreateFromFile.js we can utilize the structuresGetInfo function.
When we click on any structure, it would show the data about that structure underneath that structure.

//This is how it was used, with another function
//when clicked activate two functions
    ourStructure.setAttribute('onclick', 'menuStructureEdit(\''+ourStructure.id+'\');structuresGetInfo(\''+ourStructure.id+'\');');

//or how was used as a single function
//ourStructure.setAttribute('onclick', 'structuresGetInfo(\''+ourStructure.id+'\');');

/*
This function below shows the name, id, posX, posY, sizeX and sizeY of any structure that we left clicked. 
The 1st time we left click the structure, it shows more info.

The 2nd time we left click the structure, it shows only the simplified position data. 

//NOTE: Need to redesign this function to work correctly for when we click a second structure, while the first structure's info is already open.
*/

let ourCounter = 1;
function structuresGetInfo(theId)
{
    theId = document.getElementById(theId);

    if(ourCounter % 2) //if ourCounter is an odd number
    { 
        document.getElementById(theId.id).innerHTML = "<br><br><br>" + theId.id + "<br>" + "X " + positionGet(theId.id).x + "<br>" + "Y " + positionGet(theId.id).y + "<br>" + "Height is " + sizeGet(theId.id).x + "<br>" + "Width is " + sizeGet(theId.id).y;
        
        ourCounter += 1;

        //show the id of the structure
        console.log(theId.id); 

        //NOTE: It currently adds the 2px BORDER of the structure to the position and size data. We will redesign this later.
    }
    else  //else if ourCounter is an even number
    {
        document.getElementById(theId.id).innerHTML = theId.id + "<br>" + parseInt(positionGet(theId.id).x) + ", " + parseInt(positionGet(theId.id).y);

        //NOTE: It currently adds the 2px BORDER of the structure to the position data. We will redesign this later.

        ourCounter += 1;
    }
}

//--------------------------------------------------//

