// recordDelete.js

function deleteThisRecord(whichDiv)
{
    let warningDelete = confirm("DELETE ONLY This Record?");

    if (warningDelete == true)
    {
        ge(whichDiv).outerHTML = "";
    }
    else if (warningDelete == false)
    {
        ge('infoDiv').textContent = "Canceled";
    }
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

