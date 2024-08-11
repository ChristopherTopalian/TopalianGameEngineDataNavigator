// processSpreadsheetData.js

function processSpreadsheetData()
{
    let ourData = ge("pasteDataHere").value;
    ourData.trim();

    for (let j = 0; j < ourData.length; j++)
    {   
        //   /g means do a gloal replacement, meaning all occurrences

        //   /s means any spaces found

        // Trim all beginning white space when it finds  "space
        ourData = ourData.replace(/\`\s/g,'\`'); 

        // Trim all ending white space when it finds   space"
        ourData = ourData.replace(/\s\`/g,'\`');
    }
    
    let test = ge("displayData").innerHTML=ourData.split(/},/g).join('},'+ '\n');
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian