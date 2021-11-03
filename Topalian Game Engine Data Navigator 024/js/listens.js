//Dedicated to God the Father

//All Rights Reserved Christopher Topalian Copyright 2020-2021

//listens.js

/*
    Add a listen
    used currently to start Structure mode
*/

function addListen(theType, theListen)
{
    window.addEventListener(theType, theListen); 

    //example
    //window.addEventListener("click", structuresCreate, false); 
}

//addListen("click", structuresCreate);
    
/*
    Remove a listen
    used currently to end Structure mode
*/

function removeListen(theType, theListen)
{
    window.removeEventListener(theType, theListen); 

    //example
    //window.removeEventListener("click", structuresCreate); 
}

//--------------------------------------------------//

