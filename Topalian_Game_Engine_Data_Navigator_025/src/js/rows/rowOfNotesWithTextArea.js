// rowOfNotesWithTextArea.js

function rowOfNotesWithTextArea(theX, theY, sizeX, sizeY, whichArray, criteria1)
{
    let counter = 0;

    //-//

    let mainDiv = ce("div");
    mainDiv.id = "notesWithTextareaId";
    mainDiv.title = "rowOfNotesWithTextArea(theX, theY, sizeX, sizeY, whichArray, criteria1)";
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

                let subDiv = ce("div");
                subDiv.className = "divStyle001";
                mainDiv.append(subDiv);

                //-//

                let theTextArea = ce("textarea");
                theTextArea.id = "NotesWithTextArea" + counter;
                theTextArea.className = "divStyle001";
                theTextArea.style.width = (sizeX - 30) + 'px';
                theTextArea.style.height = (sizeY - 50) + 'px';
                theTextArea.style.resize = "none";
                theTextArea.setAttribute("readonly", "true");

                theTextArea.value = "Notes Row with Text Area Scrolling" + "\n";
                theTextArea.value += whichArray[i].date + "\n";
                theTextArea.value += whichArray[i].number + "\n";
                theTextArea.value += whichArray[i].note + "\n";
                subDiv.append(theTextArea);

                //-//

                let printButton = ce("button");
                printButton.className = "ourButton";
                printButton.textContent = "Print";
                printButton.onclick = function()
                {
                    printTextArea(theTextArea.id);
                };
                subDiv.append(printButton);
            }
        }
    }
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

