//Dedicated to God the Father

//All Rights Reserved Christopher Topalian Copyright 2020-2021

//travelTo.js

/*
    travelTo travelTo travelTo
*/

//Send Player to New Location Based On Choice from menuPlayer
        
function travelTo(theSection)
{
    if (theSection=="news")
    {
        if(!document.getElementById("newsId"))
        {
            alert("First, Explore the World\nto REVEAL the NEWS Section");
        }
        else
        {
           playSound("blipQuiet2", 1.0);

            ourPlayer.x = 100;

            ourPlayer.y = positionGet("newsId").y;
        }
        //get pos of newsId div
        //console.log(positionGet("newsId").y);
    }
    if (theSection=="scripting")
    {
        if(!document.getElementById("scriptingId"))
        {
            alert("First, Explore the World\nto REVEAL the SCRIPTING Section");
        }
        else
        {
            playSound("blipQuiet2", 1.0);

            ourPlayer.x = 331;

            ourPlayer.y = positionGet("scriptingId").y;
        }
    }
    if (theSection=="books")
    {
        if(!document.getElementById("collegeBooksId"))
        {
            alert("First, Explore the World\nto REVEAL the COLLEGE BOOKS Section");
        }
        else
        {
            playSound("blipQuiet2", 1.0);

            ourPlayer.x = 392;

            ourPlayer.y = positionGet("collegeBooksId").y;
        }
    }
    if (theSection=="evidence")
    {
        if(!document.getElementById("evidenceId"))
        {
            alert("First, Explore the World\nto REVEAL the EVIDENCE Section");
        }
        else
        {
            playSound("blipQuiet2", 1.0);

            ourPlayer.x = 406;

            ourPlayer.y = positionGet("evidenceId").y;
        }
    }
    movePlayer();
}

//--------------------------------------------------//

