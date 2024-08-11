// removeElement.js

function removeElement(whichElement)
{
    // check if the element exists first
    if (ge(whichElement))
    {
        audioPlay("sfx_blip_001", 1.0);

        ge(whichElement).remove();
    }
}

// removes any element on the page,
// that has the id that was specified

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

