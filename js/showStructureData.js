//Dedicated to God the Father

//All Rights Reserved Christopher Topalian Copyright 2020-2021

//showStructureData.js

//Show the structuresArray data in a Text Area that is scrollable

function showStructureData()
{
    document.getElementById("textAreaStructureData").value  = "structuresArray=" + JSON.stringify(structuresArray, null, ' ') + ";" + "\n\n" ;
}

//--------------------------------------------------//

