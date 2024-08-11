// travelTo.js

// Send Player to New Location
// based on Choice from menuPlayer GoTo section

function travelTo(theSection)
{
    if (theSection == "news")
    {
        if (!ge("newsSection"))
        {
            alert("First, Explore the World\nto REVEAL the NEWS Section");
        }
        else
        {
           audioPlay("sfx_blip_001", 1.0);

            ourPlayer.x = 100;

            ourPlayer.y = positionGet("newsSection").y;
        }
    }

    if (theSection == "scripting")
    {
        if (!ge("scriptingSection"))
        {
            alert("First, Explore the World\nto REVEAL the SCRIPTING Section");
        }
        else
        {
            audioPlay("sfx_blip_001", 1.0);

            ourPlayer.x = 100;

            ourPlayer.y = positionGet("scriptingSection").y;
        }
    }

    if (theSection == "books")
    {
        if (!ge("collegeBooksSection"))
        {
            alert("First, Explore the World\nto REVEAL the COLLEGE BOOKS Section");
        }
        else
        {
            audioPlay("sfx_blip_001", 1.0);

            ourPlayer.x = 100;

            ourPlayer.y = positionGet("collegeBooksSection").y;
        }
    }

    if (theSection == "evidence")
    {
        if (!ge("evidenceIdSection"))
        {
            alert("First, Explore the World\nto REVEAL the EVIDENCE Section");
        }
        else
        {
            audioPlay("sfx_blip_001", 1.0);

            ourPlayer.x = 100;

            ourPlayer.y = positionGet("evidenceIdSection").y;
        }
    }
    movePlayer(activePlayer);
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

