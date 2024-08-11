// sortData.js

// we include which arrays we want to sort
function sortData()
{
    // ascending
    sortByDate(booksPdf, "up");

    // ascending
    sortByDate(petitoGabrielleInvestigation, "up");

    // descending
    sortByDate(theNews, "down");

    // descending
    sortByDate(evidence, "down");

    // descending
    sortByDate(videoEvidence, "down");

    // ascending
    sortByDate(socialMediaEvidence, "up");

    // descending
    sortByDate(boxingVideos, "down");

    // descending
    sortByDate(collegeVideos, "down");

    // ascending
    sortByDate(ourVideoFiles, "up");

    // sort by Multiple Criteria, category and name
    javascriptLanguage.sort(function(a, b)
    {
        return a.category.localeCompare(b.category) || b.name - a.name;
    });

    // sort by Multiple Criteria, category and name
    lindenLanguage.sort(function(a, b)
    {
        return a.category.localeCompare(b.category) || b.name - a.name;
    });

    // sort by one number only, number
    theNotes.sort(function(a, b)
    {
        return a.number.localeCompare(b.number, 'en-US', {numeric:"true"});
        // || b.note - a.note;
    });

    // sort by one number only, probability
    socialMediaEvidence.sort(function(a, b)
    {
        return a.probability.localeCompare(b.probability, 'en-US', {numeric:"true"}); // || b.title - a.title;
    });

    // to sort by additional criteria, just use another ||

    // sort By Date - ASCENDING
    scienceImages.sort(function(a,b)
    {
        return new Date(a.date) - new Date(b.date);
    }); 
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

