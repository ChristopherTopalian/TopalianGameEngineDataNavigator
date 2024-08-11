// containerScience.js

function containerScience()
{
    let contentArray =
    [
        function()
        {
            // theX, theY, sizeX, sizeY, whichArray, criteria1, criteria2
            rowOfVideosMultipleFilters(100, yPos, 800, 600, collegeVideos,"youtubeVideo", "javascript")
        },

        function()
        {
            // theX, theY, sizeX, sizeY, whichArray, criteria1, criteria2
            rowOfVideosMultipleFilters(100, yPos, 800, 600, collegeVideos,"youtubeVideo", "papercliptronics")
        },

        function()
        {
            // theX, theY, sizeX, sizeY, whichArray, criteria1, criteria2
            rowOfVideosMultipleFilters(100, yPos, 800, 600, collegeVideos,"youtubeVideo", "breadboard")
        },

        function()
        {
            // theX, theY, sizeX, sizeY, whichArray, criteria1, criteria2
            makeVideosOnlineStartEnd(100, yPos, 800, 600, techVideos, "youtubeVideo", "electric motor")
        },

        function()
        {
            // theX, theY, sizeX, sizeY, whichArray, criteria1, criteria2
            makeVideosOnlineStartEnd(100, yPos, 800, 600, techVideos, "youtubeVideo", "water pump")
        },

        function()
        {
            // theX, theY, sizeX, sizeY, whichArray, criteria1, criteria2
            makeVideosOnlineStartEnd(100, yPos, 800, 600, techVideos, "youtubeVideo", "air pump")
        },

        function()
        {
            // theX, theY, sizeX, sizeY, whichArray, criteria1, criteria2
            makeVideosOnlineStartEnd(100, yPos, 800, 600, techVideos, "youtubeVideo", "microphone")
        }
    ];

    for (i = 0; i < contentArray.length; i++)
    {
        // adds one row each time through loop
        contentArray[i]();

        // add 900 to the yPos, between new section below
        yPos = yPos + space + 200;
    }

    // spacer sector 1 line
    makeLine(yPos, rowNumber, "Cross this Line to Load Content");

    rowNumber += 1;
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

