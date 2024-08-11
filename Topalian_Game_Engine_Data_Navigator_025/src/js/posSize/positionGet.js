// positionGet.js

// get the Position of any Element that has specified id

function positionGet(whichId)
{
    let playerElement = ge(whichId);

    if (playerElement)
    {
        let theRect = playerElement.getBoundingClientRect();

        let posXY = { 
            x: theRect.x + theRect.width / 2 + window.scrollX, 
            y: theRect.top + theRect.height / 2 + window.scrollY
        };

        return posXY;
    }
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

