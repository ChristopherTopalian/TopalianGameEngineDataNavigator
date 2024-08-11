// containerLanguage.js

function containerLanguage()
{
    let contentArray =
    [
        function()
        {
            if (online == false)
            {
                rowOfWebsitesOrVideos(100, yPos, 900, 400, computerSciencePdf, 'pdf')
            }
        },

        function()
        {
            // theX, theY, sizeX, sizeY, whichArray, criteria1, criteria2
            rowOfLanguage(100, yPos, 400, 500, javascriptLanguage, "array", "function")
        },

        function()
        {
            rowOfLanguage(100, yPos, 400, 500, javascriptLanguage, "string", "function")
        },

        function()
        {
            rowOfLanguage(100, yPos, 400, 500, javascriptLanguage, "math", "function")
        },

        function()
        {
            rowOfLanguage(100, yPos, 400, 500, javascriptLanguage, "date", "function")
        },

        function()
        {
            rowOfLanguage(100, yPos, 400, 500, javascriptLanguage, "boolean", "function")
        },

        function()
        {
            rowOfLanguage(100, yPos, 400, 500, javascriptLanguage, "global", "function")
        },

        function()
        {
            rowOfLanguage(100, yPos, 400, 500, javascriptLanguage, "number", "function")
        },

        function()
        {
            rowOfLanguage(100, yPos, 400, 500, javascriptLanguage, "regular expression", "function")
        },

        function()
        {
            rowOfLanguage(100, yPos, 400, 500, javascriptLanguage, "classes", "function")
        },

        function()
        {
            rowOfLanguage(100, yPos, 400, 500, javascriptLanguage, "error", "function")
        },

        function()
        {
            rowOfLanguage(100, yPos, 400, 500, javascriptLanguage, "json", "function")
        },

        function()
        {
            rowOfLanguage(100, yPos, 400, 500, javascriptLanguage, "console", "function")
        },

        function()
        {
            rowOfLanguage(100, yPos, 400, 500, javascriptLanguage, "history", "function")
        },

        function()
        {
            rowOfLanguage(100, yPos, 400, 500, javascriptLanguage, "storage", "function")
        },

        function()
        {
            rowOfLanguage(100, yPos, 400, 500, javascriptLanguage, "geolocation", "function")
        },

        function()
        {
            rowOfLanguage(100, yPos, 400, 500, javascriptLanguage, "string", "function")
        },

        function()
        {
            // whichArray, theX, theY, sizeX, sizeY, catetory, tag
            rowOfLanguageShowAll(100, yPos + 300, 400, 500, javascriptLanguage, "function", "JavaScript")
        },

        // Linden Scripting Language - Show All
        function()
        {
            // rowOfLanguageShowAll(100, yPos, 400, 500, lindenLanguage, "function", "Linden")
        },
    ];

    for (i = 0; i < contentArray.length; i++)
    {
        // adds one row each time through loop
        contentArray[i]();

        // add space to yPos, between new section below
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

