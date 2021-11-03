//Dedicated to God the Father

//All Rights Reserved Christopher Topalian Copyright 2020-2021

//positionGetSizeAndSides.js

/*
    POSITION, SIZE, SIDES, OF OBJECT
*/

function positionGetSizeAndSides(theId)
{
    theId = document.getElementById(theId);

    let theRect = theId.getBoundingClientRect();

    return theRect;
}

//How to Use this Function

//console.log(JSON.stringify(positionGetSizeAndSides('boxOne')));

//console.log(JSON.stringify(positionGetSizeAndSides('thePlayer')));

//console.log(JSON.stringify(positionGetSizeAndSides(ourPlayer.playerId)));

/*

Here is an example of using this function

//console.log(JSON.stringify(positionGetSizeAndSides('thePlayer')));

Returns the x position, y  position, width, height, of the object. It also returns position of the the top, bottom, left and right sides, as shown below.

{ "x":374,"y":250.33334350585938,"width":78,"height":78,"top":250.33334350585938,"right":452,"bottom":328.3333435058594,"left":374 }

*/

/*

The x represents the left top side of the object.

*/

/*

{ 
    "x":374,
    "y":250.33334350585938,
    "width":78,
    "height":78,
    "top":250.33334350585938,
    "right":452,
    "bottom":328.3333435058594,
    "left":374 
}

*/

/*

Notice that the x and left are the same.
They both return 374, in our example.

Notice the y and top are the same.
They both return 250.33334350585938.

*/

//example
//console.log(JSON.stringify(positionGetSizeAndSides('thePlayer')));

//--------------------------------------------------//

