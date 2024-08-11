// containerBooks.js

function containerBooks()
{
    let contentArray =
    [
        function()
        {
            // theX, theY, sizeX, sizeY, whichArray, criteria1, criteria2
            rowOfScienceImagesAndLink(100, yPos, 600, 600, scienceImages, "electricity", "electron flow")
        },

        function()
        {
            // theX, theY, whichArray
            rowOfCollegeLinks(100, yPos, collegeLinks)
        },

        function()
        {
            // theX, theY, sizeX, sizeY, whichArray
            rowOfCollegeBooks(100, yPos, 400, 400, collegeBooks)
        },

        function()
        {
            // theX, theY, sizeX, sizeY, whichArray, criteria1, theHeading
            rowOfBookImages(100, yPos, 600, 600, mathematics, "book",  "Mathematics", "texture")
        }
    ];

    for (i = 0; i < contentArray.length; i++)
    {
        // adds one row each time through loop
        contentArray[i]();

        // add 900 to the yPos, between new section below
        yPos = yPos + space;
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

