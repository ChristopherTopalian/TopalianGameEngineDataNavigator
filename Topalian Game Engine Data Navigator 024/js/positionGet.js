//Dedicated to God the Father

//All Rights Reserved Christopher Topalian Copyright 2020-2021

//positionGet.js

/*
    Get the Position of any Element that has specified id
*/

function positionGet(theId)
{
    theId = document.getElementById(theId);
    let theRect = theId.getBoundingClientRect();
    let theRectY = theId.getBoundingClientRect().top + window.scrollY; 

    let posXY = { 
        x:parseInt(theRect.x) + parseInt(theRect.width)/2 + window.scrollX, 
        y:parseInt(theRectY) + parseInt(theRect.height)/2
    }; 
    return posXY;
}

//--------------------------------------------------//

