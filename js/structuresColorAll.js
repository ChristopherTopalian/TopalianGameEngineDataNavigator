//Dedicated to God the Father

//All Rights Reserved Christopher Topalian Copyright 2020-2021

//structuresColorAll.js

/*
    Color All Structures
*/

function structuresColorAll()
{
    let theStructure;

    for(let x = 1; x <= structuresArray.length; x++)
    {   
        theStructure = "STRUCTURE" + x;

        document.getElementById(theStructure).style.backgroundColor = "rgb(70,95,140)";
    }
}

//--------------------------------------------------//

