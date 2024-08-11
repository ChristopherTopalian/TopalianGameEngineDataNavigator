// rowOfNotes.js

function rowOfNotes(theX, theY, sizeX, sizeY, whichArray, criteria1)
{
    let counter = 0;

    //-//

    let mainDiv = ce("div");
    mainDiv.id = "notesId";
    mainDiv.title = "rowOfNotes(theX, theY, sizeX, sizeY, whichArray, criteria1)";
    mainDiv.style.position = "absolute";
    mainDiv.style.left = theX + "px";
    mainDiv.style.top = theY + "px";
    mainDiv.style.display = "flex";
    mainDiv.style.flexDirection = "row";
    mainDiv.style.gap = "75px";
    ba(mainDiv);

    //-//

    for (let i = 0; i < whichArray.length; i++) {
        if (whichArray[i].tag == criteria1)
        {
            // filter by MONTH
            // if (whichArray[i].date.substring(0, 2) == 3)

            // filter by Multiple MONTHS
            // if(whichArray[i].date.substring(0, 2) == 8 || whichArray[i].date.substring(0, 2) == 9)

            // filter by DATE
            // if (whichArray[i].date.substring(0, 10) == "02/29/2018")

            // filter by Multiple DATES
            // if (whichArray[i].date.substring(0, 10) == "02/29/2018" || whichArray[i].date.substring(0, 10) == "02/29/2020")

            // filter by DAY of month
            // if (whichArray[i].date.substring(3, 5) == 2)

            // filter by YEAR
            // if (whichArray[i].date.substring(6, 10) == 2019)

            // filter by MULTIPLE YEARS
            // if (whichArray[i].date.substring(6, 10) == 2019 || whichArray[i].date.substring(6, 10) == 2020)

            // filter by MONTH and YEAR
            // if (whichArray[i].date.substring(0, 2) == 2 && whichArray[i].date.substring(6, 10) == 2020)

            // or show all by using
            // if (whichArray)

            if (whichArray)
            {
                counter += 1;

                //-//

                let theDiv = ce("div");
                theDiv.id = "Notes" + counter;
                theDiv.className = "divStyle001";
                theDiv.style.width = "170px";
                theDiv.style.padding = "12px";
                mainDiv.append(theDiv);

                //-//

                let notesHeading = ce("div");
                notesHeading.textContent = "Notes Row";

                //-//

                theDiv.append(ce("hr"));

                //-//

                let printButton = ce("button");
                printButton.className = "ourButton";
                printButton.textContent = "Print";
                printButton.onclick = function()
                {
                    printOnlyDiv(theDiv.id);
                };
                theDiv.append(printButton);

                //-//

                theDiv.append(ce("br"));

                //-//

                let date = ce("div");
                date.textContent = whichArray[i].date;
                theDiv.append(date);

                //-//

                let number = ce("div");
                number.textContent = whichArray[i].number;
                theDiv.append(number);

                //-//

                let note = ce("div");
                note.textContent = whichArray[i].note;
                theDiv.append(note);
            }
        }
    }
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

