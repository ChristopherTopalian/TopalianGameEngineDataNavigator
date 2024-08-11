// rowOfInvestigation.js

function sortInvestigation(whichY, whichDirection) 
{
    let whichArray = petitoGabrielleInvestigation;

    if (whichDirection == "up")
    {
        whichArray.sort(function(a, b)
        {
            return new Date(a.date) - new Date(b.date);
        });
    }
    else if (whichDirection == "down")
    {
        whichArray.sort(function(b, a)
        {
            return new Date(a.date) - new Date(b.date);
        });
    }

    rowOfInvestigation(100, whichY, 400, 400, whichArray, "note");
}

function removeRow()
{
    let name = "Investigation";

    let counter = 0;

    for (x = 0; x < petitoGabrielleInvestigation.length; x++)
    {
        counter += 1;

        removeElement(name + counter);
    }

    removeElement("theIdOfButtons");
}

function rowOfInvestigation(theX, theY, sizeX, sizeY, whichArray, criteria1)
{
    let counter = 0;

    let mainDiv = ce("div");
    mainDiv.id = "evidenceWithImageId";
    mainDiv.title = "rowOfInvestigation(theX, theY, sizeX, sizeY, whichArray, criteria1)";
    mainDiv.style.position = "absolute";
    mainDiv.style.left = theX + "px";
    mainDiv.style.top = theY + "px";
    mainDiv.style.display = "flex";
    mainDiv.style.flexDirection = "row";
    mainDiv.style.gap = "75px";
    ba(mainDiv);

    //-//

    let theButtons = ce("div");
    theButtons.id = "theIdOfButtons";
    theButtons.className = "divStyle001";
    mainDiv.append(theButtons);

    //-//

    let buttonAscending = ce("button");
    buttonAscending.className = "ourButton";
    buttonAscending.onclick = function()
    {
        sortInvestigation(theY, 'up'); removeRow();
    };
    buttonAscending.innerHTML = "Ascending";
    theButtons.append(buttonAscending);

    //-//

    let buttonDescending = ce("button");
    buttonDescending.className = "ourButton";
    buttonDescending.onclick = function()
    {
        sortInvestigation(theY, 'down'); removeRow();
    };
    buttonDescending.innerHTML = "Descending";
    theButtons.append(buttonDescending);

    //-//

    let buttonRemoveRow = ce("button");
    buttonRemoveRow.className = "ourButton";
    buttonRemoveRow.onclick = function()
    {
        removeRow();
    };
    buttonRemoveRow.innerHTML = "Remove \n Row";
    theButtons.append(buttonRemoveRow);

    //-//

    for (let i = 0; i < whichArray.length; i++) {
        if (whichArray[i].tag == criteria1)
        {
            // filter by MONTH
            // if (whichArray[i].date.substring(0, 2) == 7)

            // filter by Multiple MONTHS
            // if(whichArray[i].date.substring(0, 2) == 8 || whichArray[i].date.substring(0, 2) == 9)

            // filter by DATE
            // if (whichArray[i].date.substring(0, 10) == "02/29/2018")

            // filter by Multiple DATES
            // if (whichArray[i].date.substring(0, 10) == "02/29/2018" || whichArray[i].date.substring(0, 10) == "02/29/2020")

            // filter by DAY, of any month, of any year
            // if (whichArray[i].date.substring(3, 5) == 2)

            // filter by YEAR
            // if (whichArray[i].date.substring(6, 10) == 2019)

            // filter by MULTIPLE YEARS
            // if (whichArray[i].date.substring(6, 10) == 2019 || whichArray[i].date.substring(6, 10) == 2020)

            // filter by MONTH and YEAR
            // if (whichArray[i].date.substring(0, 2) == 2 && whichArray[i].date.substring(6, 10) == 2020)

            if (whichArray) // shows all items
            {
                counter += 1;

                let theDiv = ce("div");
                theDiv.id = "Investigation" + counter;
                theDiv.className = "divStyle001";
                theDiv.style.width = sizeX + 'px';
                theDiv.style.height = sizeY + 'px';
                mainDiv.append(theDiv);

                //-//

                let printButton = ce("button");
                printButton.className = "ourButton";
                printButton.style.marginRight = "10px";
                printButton.style.zIndex = "20";
                printButton.onclick = function()
                {
                    printOnlyDiv(theDiv.id);
                };
                printButton.textContent = "print";
                theDiv.append(printButton);

                //-//

                let dateSpan = ce("span");
                dateSpan.innerHTML = whichArray[i].date;
                theDiv.append(dateSpan);

                //-//

                theDiv.append(ce("hr"));

                //-//

                let summarySpan = ce("span");
                summarySpan.style.color = "rgb(0, 255, 255)";
                summarySpan.style.fontWeight = "bold";
                summarySpan.innerHTML = whichArray[i].summary;
                theDiv.append(summarySpan);

                //-//

                theDiv.append(ce("br"));

                //-//

                let noteSpan = ce("span");
                noteSpan.innerHTML = whichArray[i].note;
                theDiv.append(noteSpan);

                //-//

                theDiv.append(ce("hr"));

                //-//

                let newsArticleLink = ce("a");
                newsArticleLink.href = whichArray[i].newsArticleOne;
                newsArticleLink.target = "_blank";
                newsArticleLink.innerHTML = whichArray[i].newsArticleOne;
                newsArticleLink.style.color = "aqua";
                theDiv.append(newsArticleLink);

                //-//

                theDiv.append(ce("hr"));
            }
        }
    }
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

