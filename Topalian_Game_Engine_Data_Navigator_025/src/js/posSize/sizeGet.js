// sizeGet.js

// gets size of any element of a specified id

function sizeGet(whichId)
{
    whichId = ge(whichId);

    let theRect = whichId.getBoundingClientRect();

    let sizeXY =
    {
        x: parseFloat(theRect.width),
        y: parseFloat(theRect.height)
    };

    return sizeXY;
}

/*

How to Use this Function

// get the size of the player object
console.log(JSON.stringify(sizeGet('thePlayer')));

// Returns x and y size values, which includes padding
{"x":78,"y":78}

// Formatted to show x and y clearer
{
    "x":78,
    "y":78
}

/*

Important to note is that padding effects size.
So the object that is the size x of 70, becomes 78, if the padding of left and right are set to 4.

*/

// example

// console.log(JSON.stringify(sizeGet('thePlayer')));

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

