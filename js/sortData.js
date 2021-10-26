//Dedicated to God the Father

//All Rights Reserved Christopher Topalian Copyright 2020-2021

//sortData.js

/*
    SORT SORT SORT SORT
*/

//We use this SORT FUNCTION BELOW to sort many of the arrays!

//But, we can also use the spreadsheet tools to sort the data.

//Either way is fine.

//For Ascending order use a.date - b.date

//For Descending order use b.date - a.date
        
                            //ascending or descending
function sortByDate(whichArray, direction) 
{
    if(direction == "up")   // ASCENDING is a.date - b.date
    {
        whichArray.sort(function(a,b){return new Date(a.date) - new Date(b.date);});
    }
    else if(direction == "down") //DESCENDING is b.date - a.date
    {
        whichArray.sort(function(a,b){return new Date(b.date) - new Date(a.date);});
    }
}

//examples

//Sort by date
//sortByDate(theNotes, "up"); //Ascending
//sortByDate(theNotes, "down"); //Descending

function sortByNumber(whichArray, direction)
{
    if(direction == "up") //ASCENDING
    {
        whichArray.sort(function(a, b)
        {
            return a.number.localeCompare(b.number);
        });
    }
    else if(direction == "down") //DESCENDING
    {
        whichArray.sort(function(b, a)
        {
            return a.number.localeCompare(b.number);
        });
    }
}

//examples

//Sort by number
    //sortByNumber(theNotes, "up"); //Ascending
    //sortByNumber(theNotes, "down"); //Descending

/*
    We include which arrays we want to sort
*/
function sortIt()
{
    sortByDate(petitoGabrielleInvestigation, "up"); //Ascending
    sortByDate(theNews, "down"); //Descending
    sortByDate(evidence, "down"); //Descending
    sortByDate(videoEvidence, "down"); //Descending
    sortByDate(socialMediaEvidence, "up"); //Ascending   
    sortByDate(boxingVideos, "down"); //Descending
    sortByDate(collegeVideos, "down"); //Descending
    sortByDate(ourVideoFiles, "up"); //Ascending

    ////Sort by Multiple Criteria, category and name//// 
    javascriptLanguage.sort(function(a, b)
    {
        return a.category.localeCompare(b.category) || b.name - a.name;
    });

    ////Sort by Multiple Criteria, category and name////
    lindenLanguage.sort(function(a, b)
    {
        return a.category.localeCompare(b.category) || b.name - a.name;
    });

    ////Sort by one number only, number////
    theNotes.sort(function(a, b)
    {
        return a.number.localeCompare(b.number, 'en-US', {numeric:"true"}); //|| b.note - a.note;
    });

    ////Sort by one number only, probability////
    socialMediaEvidence.sort(function(a, b)
    {
        return a.probability.localeCompare(b.probability, 'en-US', {numeric:"true"}); //|| b.title - a.title;
    });

    //To sort by additional criteria, just use another ||

    ////Sort By Date//// ASCENDING
    scienceImages.sort(function(a,b){return new Date(a.date) - new Date(b.date);}); 
}

//--------------------------------------------------//

