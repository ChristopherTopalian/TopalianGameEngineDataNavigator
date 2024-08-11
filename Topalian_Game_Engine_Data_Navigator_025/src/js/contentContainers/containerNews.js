// containerNews.js

function containerNews()
{
    let contentArray =
    [
        function()
        {
            // theX, theY, sizeX, sizeY,whichArray, criteria1
            rowOfNews(100, yPos, 800, 250, theNews, "news")
        },

        function()
        {
            // theX, theY, sizeX, sizeY,whichArray, criteria1
            rowOfEvidence(100, yPos, 700, 300, evidence, "fact")
        },

        function()
        {
            // theX, theY, sizeX, sizeY,whichArray, criteria1
            rowOfSocialMediaEvidence(100, yPos, 700, 500, socialMediaEvidence, "twitter")
        },

        function()
        {
            // theX, theY, sizeX, sizeY, whichArray, criteria1
            rowOfDetails(100, yPos, 700, 500, socialMediaEvidence, "twitter")
        },

        function()
        {
            // theX, theY, sizeX, sizeY, whichArray, criteria1, theTitle
            rowOfEvidenceWithImage(100,yPos,1250,600, evidence, "fact", "Evidence")
        },

        function()
        {
            // theX, theY, sizeX, sizeY, whichArray, criteria1
            rowOfNotes(100, yPos, 400, 400, theNotes, "note")
        },

        function()
        {
            // theX, theY, sizeX, sizeY, whichArray, criteria1
            rowOfNotesWithTextArea(100, yPos, 600, 500, theNotes, "note")
        },

        // Investigation
        function()
        {
            rowOfInvestigation(100, yPos, 400, 400, petitoGabrielleInvestigation, "note")
        },
    ];

    for (i = 0; i < contentArray.length; i++)
    {
        // adds one row each time through loop
        contentArray[i]();

        // add 900 to the yPos, between new section below
        yPos = yPos + space;
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

