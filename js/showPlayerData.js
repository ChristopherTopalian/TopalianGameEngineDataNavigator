//Dedicated to God the Father

//All Rights Reserved Christopher Topalian Copyright 2020-2021

//showPlayerData.js

//Show the playerArray data in a Text Area that is scrollable

function showPlayerData()
{
    document.getElementById("textAreaPlayerData").value  = "playerArray=" + JSON.stringify(playerArray, null, ' ') + ";" + "\n\n" ;
}

//--------------------------------------------------//

