// get.js

function get(whichId, whichProperty)
{
    let theId = ge(whichId);

    if (whichProperty == 'name')
    {
        let theProperty = playerArray[0].name;
        return theProperty;
    }

    if (whichProperty == 'innerHTML')
    {
        let theProperty = ge(whichId).innerHTML;
        return theProperty;
    }

    if (whichProperty == 'id')
    {
        let theProperty = ge(whichId).id;
        return theProperty;
    }

    if (whichProperty == 'speedMultiplier')
    {
        let theProperty = playerArray[0].speedMultiplier;

        return theProperty;
    }

    if (whichProperty == 'size')
    {
        let theRect = theId.getBoundingClientRect();

        let sizeXY =
        {
            x: parseFloat(theRect.width).toFixed(3),
            y: parseFloat(theRect.height).toFixed(3)
        };

        return sizeXY;
    }

    if (whichProperty == 'pos')
    {
        let theRect = theId.getBoundingClientRect();

        let posXY = { 
            x: theRect.x + theRect.width / 2 + window.scrollX, 
            y: theRect.top + theRect.height / 2 + window.scrollY
        };

        return posXY;
    }

    else
    {
        let theProperty = window.getComputedStyle(theId).getPropertyValue(whichProperty);

        return theProperty;
    }
}

// 'color' is text color
// 'background-color' is bg color
// 'opacity' is transparency
// 'background-image' is texture name
// 'left' is x position
// 'top' is y position
// 'name' gets element's name
// 'width' gets width
// 'height' gets height
// 'font-size' gets font size
// 'z-index' gets the layer index
// can get any css property value using its css name

// example
// get('thePlayer', 'name');

// example
// get('thePlayer', 'opacity');

// example
// get('thePlayer', 'z-index');

// allows you to get any css property value by using its css name

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

