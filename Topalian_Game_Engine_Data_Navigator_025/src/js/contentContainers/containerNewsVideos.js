// containerNewsVideos.js

function containerNewsVideos()
{
    let contentArray =
    [
        function()
        {
            // theX, theY, sizeX, sizeY, whichArray, criteria1
            rowOfWebsitesOrVideos(100, yPos, 700, 500, videoEvidence, "youtubeVideo")
        },

        function()
        {
            // theX, theY, sizeX, sizeY, whichArray, criteria1
            rowOfVideos(100, yPos, 800, 600, videoEvidence, "exercise")
        },

        function()
        {
            // theX, theY, sizeX, sizeY, whichArray, criteria1
            rowOfVideos(100, yPos, 800, 600, videoEvidence, "mask")
        },

        function()
        {
            // theX, theY, sizeX, sizeY, whichArray, criteria1, criteria2
            makeVideosOnlineStartEnd(100, yPos, 800, 600, videoEvidence, "youtubeVideo", "exercise")
        },
    ];

    for (i = 0; i < contentArray.length; i++)
    {
        // adds one row each time through loop
        contentArray[i]();

        // add 900 to yPos, between new section below
        yPos = yPos + space + 200;
    }

    // spacer sector line
    makeLine(yPos, rowNumber, "Cross this Line to Load Content");

    rowNumber += 1;
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

