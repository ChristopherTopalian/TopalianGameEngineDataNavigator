// sortByNumber.js

function sortByNumber(whichArray, direction)
{
    if (direction == "up") // ASCENDING
    {
        whichArray.sort(function(a, b)
        {
            return a.number.localeCompare(b.number);
        });
    }
    else if (direction == "down") // DESCENDING
    {
        whichArray.sort(function(b, a)
        {
            return a.number.localeCompare(b.number);
        });
    }
}

// examples

// Sort by number
// sortByNumber(theNotes, "up"); // Ascending
// sortByNumber(theNotes, "down"); // Descending