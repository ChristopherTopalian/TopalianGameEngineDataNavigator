//Dedicated to God the Father

//All Rights Reserved Christopher Topalian Copyright 2020-2021

//sizeGet.js

/*
    Get the SIZE of any Element that has specified id
*/

function sizeGet(theId)
{
    theId = document.getElementById(theId);
    let theRect = theId.getBoundingClientRect();

    let sizeXY = {
        x: parseFloat(theRect.width),
        y: parseFloat(theRect.height)
    };
    return sizeXY;
}


/* 

How to Use this Function

//get the size of the player object
console.log(JSON.stringify(sizeGet('thePlayer')));

//Returns x and y size values, which includes padding
{"x":78,"y":78}


//Formatted to show x and y clearer
{
    "x":78,
    "y":78
}

/*

Important to note is that padding effects size.
So the object that is the size x of 70, becomes 78, if the padding of left and right are set to 4.

*/

//example

//console.log(JSON.stringify(sizeGet('thePlayer')));

//--------------------------------------------------//

