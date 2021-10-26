//Dedicated to God the Father

//All Rights Reserved Christopher Topalian Copyright 2020-2021

//removeElement.js

/*  
    Removes any element on the page, that has the id that was specified
*/

function removeElement(theElement)
{
    //check if the element exists first
    if(document.getElementById(theElement))
    {
        playSound("blipQuiet3", 1.0);

        document.getElementById(theElement).remove();
    }
}

//--------------------------------------------------//

