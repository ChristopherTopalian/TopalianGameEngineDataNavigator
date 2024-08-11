// containerBoxingVideos.js

function containerBoxingVideos()
{
    let contentArray =
    [
        function()
        {
            // theX, theY, sizeX, sizeY, whichArray, criteria1, criteria2
            rowOfVideosMultipleFilters(100, yPos, 800, 600, boxingVideos,"boxing", "furyWilder1")
        },

        function()
        {
            // theX, theY, sizeX, sizeY, whichArray, criteria1, criteria2
            rowOfVideosMultipleFilters(100, yPos + 200, 800, 600, boxingVideos, "boxing", "furyWilder2")
        },
    ];

    for (i = 0; i < contentArray.length; i++)
    {
        contentArray[i]();
        yPos = yPos + space;
    }

    // spacer sector line
    // makeLine(yPos, rowNumber, "Cross this Line to Load Content");

    rowNumber += 1;
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

