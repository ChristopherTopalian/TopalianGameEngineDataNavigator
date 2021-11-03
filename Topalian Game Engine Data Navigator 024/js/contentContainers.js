//Dedicated to God the Father

//All Rights Reserved Christopher Topalian Copyright 2020-2021

//contentContainers.js

/*
    ADDING OUR CONTENT TO THE WORLD
    using our method of creating Rows of content
*/

//Content starts at specified y Position
let yPos= 1500;

//Content is Positioned in Rows Based on the Functions Place in the Array
let rowNumber = 1;

function containerLanguage()
{
    let contentArray = 
    [
        //Investigation - Petito, Gabrielle
        function(){ rowOfInvestigation(100, yPos, 400, 400, petitoGabrielleInvestigation, "note")},
        //theX, theY, sizeX, sizeY, whichArray, criteria1

        //LANGUAGE - Show All
        function(){ rowOfLanguageShowAll(100, yPos, 400, 500, javascriptLanguage, "function", "JavaScript")},
        //whichArray, theX, theY, sizeX, sizeY, catetory,  tag

        //LANGUAGE - Show Category
        function(){ rowOfLanguage(100, yPos, 400, 500, javascriptLanguage, "array", "function")},
        //whichArray, theX, theY, sizeX, sizeY, criteria

        function(){ rowOfLanguage(100, yPos, 400, 500, javascriptLanguage, "string", "function")},
        //whichArray, theX, theY, sizeX, sizeY, criteria

        function(){ rowOfLanguage(100, yPos, 400, 500, javascriptLanguage, "math", "function")},
        //whichArray, theX, theY, sizeX, sizeY, criteria

        function(){ rowOfLanguage(100, yPos, 400, 500, javascriptLanguage, "date", "function")},
        //whichArray, theX, theY, sizeX, sizeY, criteria

        function(){ rowOfLanguage(100, yPos, 400, 500, javascriptLanguage, "boolean", "function")},
        //whichArray, theX, theY, sizeX, sizeY, criteria

        function(){ rowOfLanguage(100, yPos, 400, 500, javascriptLanguage, "global", "function")},
        //whichArray, theX, theY, sizeX, sizeY, criteria

        function(){ rowOfLanguage(100, yPos, 400, 500, javascriptLanguage, "number", "function")},
        //whichArray, theX, theY, sizeX, sizeY, criteria

        function(){ rowOfLanguage(100, yPos, 400, 500, javascriptLanguage, "regular expression", "function")},
        //whichArray, theX, theY, sizeX, sizeY, criteria

        function(){ rowOfLanguage(100, yPos, 400, 500, javascriptLanguage, "classes", "function")},
        //whichArray, theX, theY, sizeX, sizeY, criteria

        function(){ rowOfLanguage(100, yPos, 400, 500, javascriptLanguage, "error", "function")},
        //whichArray, theX, theY, sizeX, sizeY, criteria

        function(){ rowOfLanguage(100, yPos, 400, 500, javascriptLanguage, "json", "function")},
        //whichArray, theX, theY, sizeX, sizeY, criteria

        function(){ rowOfLanguage(100, yPos, 400, 500, javascriptLanguage, "console", "function")},
        //whichArray, theX, theY, sizeX, sizeY, criteria

        function(){ rowOfLanguage(100, yPos, 400, 500, javascriptLanguage, "history", "function")},
        //whichArray, theX, theY, sizeX, sizeY, criteria

        function(){ rowOfLanguage(100, yPos, 400, 500, javascriptLanguage, "storage", "function")},
        //whichArray, theX, theY, sizeX, sizeY, criteria

        function(){ rowOfLanguage(100, yPos, 400, 500, javascriptLanguage, "geolocation", "function")},
        //whichArray, theX, theY, sizeX, sizeY, criteria

        function(){ rowOfLanguage(100, yPos, 400, 500, javascriptLanguage, "string", "function")},
        //whichArray, theX, theY, sizeX, sizeY, criteria

        //Linden Scripting Language - Show All
        function(){ rowOfLanguageShowAll(100, yPos, 400, 500, lindenLanguage, "function", "Linden")},
        //whichArray, theX, theY, sizeX, sizeY, criteria
    ];

    for (i = 0; i < contentArray.length; i++)
    {
        contentArray[i]();    //adds one row each time through the loop
        yPos = yPos + 900; //add 900 to the yPos, between new section below
    }
    //contentArray[0]();

    //spacer sector line
    makeLine(yPos, rowNumber, "Cross this Line to Load Content"); 

    rowNumber += 1;
}

function containerNews()
{
    let contentArray = 
    [
        function(){ rowOfNews(100, yPos, 800, 250, theNews, "news")},
        //theX, theY, sizeX, sizeY,whichArray, criteria1

        function(){ rowOfEvidence(100,yPos,700,300, evidence, "fact")},
        //theX, theY, sizeX, sizeY,whichArray, criteria1

        function(){ rowOfSocialMediaEvidence(100, yPos, 700, 500, socialMediaEvidence, "twitter")},
        //theX, theY, sizeX, sizeY,whichArray, criteria1

        function(){ rowOfDetails(100, yPos, 700, 500, socialMediaEvidence, "twitter")},
        //theX, theY, sizeX, sizeY, whichArray, criteria1

        function(){ rowOfEvidenceWithImage(100,yPos,1250,600, evidence, "fact", "Evidence")},
        //theX, theY, sizeX, sizeY, whichArray, criteria1, theTitle

        function(){ rowOfNotes(100, yPos, 400, 400, theNotes, "note")},
        //theX, theY, sizeX, sizeY, whichArray, criteria1

         function(){ rowOfNotesWithTextArea(100, yPos, 600, 500, theNotes, "note")}
        //theX, theY, sizeX, sizeY, whichArray, criteria1
    ];

    for (i = 0; i < contentArray.length; i++)
    {
        contentArray[i]();    //adds one row each time through the loop
        yPos = yPos + 900; //add 900 to the yPos, between new section below
    }
    //contentArray[0]();

    //spacer sector line
    makeLine(yPos, rowNumber, "Cross this Line to Load Content"); 

    rowNumber += 1;
}

function containerBooks()
{
    let contentArray = 
    [
        function(){ rowOfScienceImagesAndLink(100, yPos, 600, 600, scienceImages, "electricity", "electron flow")},
        //theX, theY, sizeX, sizeY, whichArray, criteria1, criteria2

        function(){ rowOfCollegeLinks(100, yPos, 300, 75, collegeLinks)},
        //theX, theY, sizeX, sizeY, whichArray

        //COLLEGE
        function(){ rowOfCollegeBooks(100, yPos, 400, 400, collegeBooks)},
        //theX, theY, sizeX, sizeY, whichArray

        function(){ rowOfBookImages(100, yPos, 600, 600, pythonLanguage, "book",  "Python", "python")},
        //theX, theY, sizeX, sizeY, whichArray, criteria1, theHeading

        function(){ rowOfBookImages(100, yPos, 600, 600, javascriptBook1, "book",  "JavascriptBookA", "texture")},
        //theX, theY, sizeX, sizeY, whichArray, criteria1, theHeading

        function(){ rowOfBookImages(100, yPos, 600, 600, javascriptBook2, "book",  "JavascriptBookB", "texture")},
        //theX, theY, sizeX, sizeY, whichArray, criteria1, theHeading

        function(){ rowOfBookImages(100, yPos, 600, 600, logicBookA, "book",  "LogicBookA", "texture")},
        //theX, theY, sizeX, sizeY, whichArray, criteria1, theHeading

        function(){ rowOfBookImages(100, yPos, 875, 480, logicBookB, "book",  "LogicBookB", "texture")},
        //theX, theY, sizeX, sizeY, whichArray, criteria1, theHeading

        function(){ rowOfBookImages(100, yPos, 600, 600, logicBookC, "book",  "LogicBookC", "texture")},
        //theX, theY, sizeX, sizeY, whichArray, criteria1, theHeading

        function(){ rowOfBookImages(100, yPos, 800, 600, papercliptronics, "book", "Papercliptronics","texture") },
        //theX, theY, sizeX, sizeY, whichArray, criteria1, theHeading

        function(){ rowOfBookImages(100, yPos, 600, 600, science, "book",  "Science", "texture") },
        //theX, theY, sizeX, sizeY, whichArray, criteria1, theHeading

        function(){ rowOfBookImages(100, yPos, 600, 600, mathematics, "book",  "Mathematics", "texture") },
        //theX, theY, sizeX, sizeY, whichArray, criteria1, theHeading

        function(){ rowOfBookImages(100, yPos, 600, 600, simulation, "book",  "Simulation", "texture") },
        //theX, theY, sizeX, sizeY, whichArray, criteria1, theHeading

        function(){ rowOfBookImages(100, yPos, 600, 600, human, "book",  "Human", "texture") },
        //theX, theY, sizeX, sizeY, whichArray, criteria1, theHeading
    ];
    for (i = 0; i < contentArray.length; i++)
    {
        contentArray[i]();    //adds one row each time through the loop
        yPos = yPos + 900; //add 900 to the yPos, between new section below
    }

    //spacer sector 1 line
    makeLine(yPos, rowNumber, "Cross this Line to Load Content"); 

    rowNumber += 1;
}

function containerScience()
{
    let contentArray = 
    [
        //TECH
        function(){ rowOfVideosMultipleFilters(100, yPos, 800, 600, collegeVideos,"youtubeVideo", "javascript")},
        //theX, theY, sizeX, sizeY, whichArray, criteria1, criteria2

        function(){ rowOfVideosMultipleFilters(100, yPos, 800, 600, collegeVideos,"youtubeVideo", "papercliptronics")},
        //theX, theY, sizeX, sizeY, whichArray, criteria1, criteria2

        function(){ rowOfVideosMultipleFilters(100, yPos, 800, 600, collegeVideos,"youtubeVideo", "breadboard")},
        //theX, theY, sizeX, sizeY, whichArray, criteria1, criteria2

        function(){ makeVideosOnlineStartEnd(100, yPos, 600, 500, techVideos, "youtubeVideo", "electric motor")},
        //theX, theY, sizeX, sizeY, whichArray, criteria1, criteria2

        function(){ makeVideosOnlineStartEnd(100, yPos, 600, 500, techVideos, "youtubeVideo", "water pump")},
        //theX, theY, sizeX, sizeY, whichArray, criteria1, criteria2

        function(){  makeVideosOnlineStartEnd(100, yPos, 600, 500, techVideos, "youtubeVideo", "air pump")},
        //theX, theY, sizeX, sizeY, whichArray, criteria1, criteria2

        function(){  makeVideosOnlineStartEnd(100, yPos, 600, 500, techVideos, "youtubeVideo", "microphone")},
        //theX, theY, sizeX, sizeY, whichArray, criteria1, criteria2

        //PERSONAL
        function(){  makeVideosUsingVideoFile(100, yPos, 790, 445, ourVideoFiles,"personal", "personal")}
        //theX, theY, sizeX, sizeY, whichArray, criteria1, criteria2)
    ];

    for (i = 0; i < contentArray.length; i++)
    {
        contentArray[i]();    //adds one row each time through the loop
        yPos = yPos + 900; //add 900 to the yPos, between new section below
    }
    //contentArray[0]();

    //spacer sector 1 line
    makeLine(yPos, rowNumber, "Cross this Line to Load Content"); 

    rowNumber += 1;
}

function containerNewsVideos()
{
     let contentArray = 
    [
        function(){ rowOfWebsitesOrVideos(100,yPos,700,500, videoEvidence, "youtubeVideo")},
        //theX, theY, sizeX, sizeY, whichArray, criteria1

        function(){ rowOfVideos(100, yPos, 800, 600, videoEvidence, "exercise")},
        //theX, theY, sizeX, sizeY, whichArray, criteria1

        function(){ rowOfVideos(100, yPos, 800, 600, videoEvidence, "mask")},
        //theX, theY, sizeX, sizeY, whichArray, criteria1

        function(){ makeVideosOnlineStartEnd(100, yPos, 800, 600, videoEvidence, "youtubeVideo", "exercise")},
        //theX, theY, sizeX, sizeY, whichArray, criteria1, criteria2
    ];

    for (i = 0; i < contentArray.length; i++)
    {
        contentArray[i]();    //adds one row each time through the loop
        yPos = yPos + 900; //add 900 to the yPos, between new section below
    }
    //contentArray[0]();

    //spacer sector line
    makeLine(yPos, rowNumber, "Cross this Line to Load Content"); 

    rowNumber += 1;
}

function containerBoxingVideos()
{
    let contentArray = 
    [
        //SHOW ALL VIDEOS of array rickyHattonInterview.
        function(){ makeVideosOnlineStartEndTIMECODEShowAll(100, yPos, 800, 600, rickyHattonInterview, "youtubeVideo")},
        //theX, theY, sizeX, sizeY, whichArray, criteria1

        //BOXING
        function(){  rowOfVideosMultipleFilters(100, yPos, 800, 600, boxingVideos,"boxing", "furyWilder1")},
        //theX, theY, sizeX, sizeY, whichArray, criteria1, criteria2

        function(){ rowOfVideosMultipleFilters(100, yPos, 800, 600, boxingVideos, "boxing", "furyWilder2")},
        //theX, theY, sizeX, sizeY, whichArray, criteria1, criteria2
        
        //SHOW ALL VIDEOS of array bdaBoxingComments.
        function(){ makeVideosOnlineStartEndTIMECODEShowAll(100, yPos, 800, 600, bdaBoxingComments, "youtubeVideo")},
        //theX, theY, sizeX, sizeY, whichArray, criteria1
        
        //Show Selected Videos of array bdaBoxingComments
        function(){ makeVideosOnlineStartEndTIMECODE(100, yPos, 800, 600, bdaBoxingComments, "Bucho", "size excuse")},
        //theX, theY, sizeX, sizeY, whichArray, criteria1, criteria2

        function(){ makeVideosOnlineStartEndTIMECODE(100, yPos, 800, 600, bdaBoxingComments, "BDA", "size excuse")},
        //theX, theY, sizeX, sizeY, whichArray, criteria1, criteria2

        ////----////

        /*
        function(){ makeVideosOnlineStartEndTIMECODE(100, yPos, 800, 600, bdaBoxingComments, "Recognize", "size excuse")},
        //theX, theY, sizeX, sizeY, whichArray, criteria1, criteria2

        function(){ makeVideosOnlineStartEndTIMECODE(100, yPos, 800, 600, bdaBoxingComments, "Bucho", "shoulder excuse")},
        //theX, theY, sizeX, sizeY, whichArray, criteria1, criteria2

        function(){ makeVideosOnlineStartEndTIMECODE(100, yPos, 800, 600, bdaBoxingComments, "BDA", "shoulder excuse")},
        //theX, theY, sizeX, sizeY, whichArray, criteria1, criteria2

        function(){ makeVideosOnlineStartEndTIMECODE(100, yPos, 800, 600, bdaBoxingComments, "Recognize", "shoulder excuse")},
        //theX, theY, sizeX, sizeY, whichArray, criteria1, criteria2

        function(){ makeVideosOnlineStartEndTIMECODE(100, yPos, 800, 600, bdaBoxingComments, "Gonzalo", "shoulder excuse")},
        //theX, theY, sizeX, sizeY, whichArray, criteria1, criteria2

        function(){ makeVideosOnlineStartEndTIMECODE(100, yPos, 800, 600, bdaBoxingComments, "Bucho", "judges excuse")},
        //theX, theY, sizeX, sizeY, whichArray, criteria1, criteria2

        function(){ makeVideosOnlineStartEndTIMECODE(100, yPos, 800, 600, bdaBoxingComments, "BDA", "judges excuse")},
        //theX, theY, sizeX, sizeY, whichArray, criteria1, criteria2

        function(){ makeVideosOnlineStartEndTIMECODE(100, yPos, 800, 600, bdaBoxingComments, "Recognize", "judges excuse")},
        //theX, theY, sizeX, sizeY, whichArray, criteria1, criteria2

        function(){ makeVideosOnlineStartEndTIMECODE(100, yPos, 800, 600, bdaBoxingComments, "Precise", "judges excuse")},
        //theX, theY, sizeX, sizeY, whichArray, criteria1, criteria2

        function(){ makeVideosOnlineStartEndTIMECODE(100, yPos, 800, 600, bdaBoxingComments, "Recognize", "promoter excuse")},
        //theX, theY, sizeX, sizeY, whichArray, criteria1, criteria2

        function(){ makeVideosOnlineStartEndTIMECODE(100, yPos, 800, 600, bdaBoxingComments, "Apology", "compubox excuse")},
        //theX, theY, sizeX, sizeY, whichArray, criteria1, criteria2

        function(){ makeVideosOnlineStartEndTIMECODE(100, yPos, 800, 600, bdaBoxingComments, "BDA", "funny")},
        //theX, theY, sizeX, sizeY, whichArray, criteria1, criteria2

        function(){ makeVideosOnlineStartEndTIMECODE(100, yPos, 800, 600, bdaBoxingComments, "Bucho", "funny")},
        //theX, theY, sizeX, sizeY, whichArray, criteria1, criteria2

        function(){ makeVideosOnlineStartEndTIMECODE(100, yPos, 800, 600, bdaBoxingComments, "Recognize", "funny")},
        //theX, theY, sizeX, sizeY, whichArray, criteria1, criteria2

        function(){ makeVideosOnlineStartEndTIMECODE(100, yPos, 800, 600, bdaBoxingComments, "Pete", "funny")},
        //theX, theY, sizeX, sizeY, whichArray, criteria1, criteria2

        function(){ makeVideosOnlineStartEndTIMECODE(100, yPos, 800, 600, bdaBoxingComments, "Precise", "funny")},
        //theX, theY, sizeX, sizeY, whichArray, criteria1, criteria2

        function(){ makeVideosOnlineStartEndTIMECODE(100, yPos, 800, 600, bdaBoxingComments, "BDA", "attacks person")},
        //theX, theY, sizeX, sizeY, whichArray, criteria1, criteria2

        function(){ makeVideosOnlineStartEndTIMECODE(100, yPos, 800, 600, bdaBoxingComments, "Bucho", "attacks person")},
        //theX, theY, sizeX, sizeY, whichArray, criteria1, criteria2

        function(){ makeVideosOnlineStartEndTIMECODE(100, yPos, 800, 600, bdaBoxingComments, "Recognize", "attacks person")},
        //theX, theY, sizeX, sizeY, whichArray, criteria1, criteria2

        function(){ makeVideosOnlineStartEndTIMECODE(100, yPos, 800, 600, bdaBoxingComments, "Apology", "attacks person")},
        //theX, theY, sizeX, sizeY, whichArray, criteria1, criteria2

        function(){ makeVideosOnlineStartEndTIMECODE(100, yPos, 800, 600, bdaBoxingComments, "Dee", "attacks person")},
        //theX, theY, sizeX, sizeY, whichArray, criteria1, criteria2

        function(){ makeVideosOnlineStartEndTIMECODE(100, yPos, 800, 600, bdaBoxingComments, "Precise", "attacks person")},
        //theX, theY, sizeX, sizeY, whichArray, criteria1, criteria2

        function(){ makeVideosOnlineStartEndTIMECODE(100, yPos, 800, 600, bdaBoxingComments, "Bucho", "mockery")},
        //theX, theY, sizeX, sizeY, whichArray, criteria1, criteria2

        function(){ makeVideosOnlineStartEndTIMECODE(100, yPos, 800, 600, bdaBoxingComments, "Recognize", "mockery")},
        //theX, theY, sizeX, sizeY, whichArray, criteria1, criteria2

        function(){ makeVideosOnlineStartEndTIMECODE(100, yPos, 800, 600, bdaBoxingComments, "Dee", "mockery")},
        //theX, theY, sizeX, sizeY, whichArray, criteria1, criteria2

        function(){ makeVideosOnlineStartEndTIMECODE(100, yPos, 800, 600, bdaBoxingComments, "Pete", "mockery")},
        //theX, theY, sizeX, sizeY, whichArray, criteria1, criteria2

        function(){ makeVideosOnlineStartEndTIMECODE(100, yPos, 800, 600, bdaBoxingComments, "Precise", "low blow excuse")}
        //theX, theY, sizeX, sizeY, whichArray, criteria1, criteria2
        */
    ];

    for (i = 0; i < contentArray.length; i++)
    {
        contentArray[i]();
        yPos = yPos + 900;
    }

    //spacer sector line
    //makeLine(yPos, rowNumber, "Cross this Line to Load Content"); 

    rowNumber += 1;
}

//--------------------------------------------------//

