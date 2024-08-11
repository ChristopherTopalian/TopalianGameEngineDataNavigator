// rowOfEvidence.js

function rowOfEvidence(theX, theY, sizeX, sizeY, whichArray, criteria1)
{
    let counter = 0;

    //-//

    let mainDiv = ce("div");
    mainDiv.id = "evidenceIdSection";
    mainDiv.title = "rowOfEvidence(theX, theY, sizeX, sizeY, whichArray, criteria1)";
    mainDiv.style.position = "absolute";
    mainDiv.style.left = theX + "px";
    mainDiv.style.top = theY + "px";
    mainDiv.style.display = "flex";
    mainDiv.style.flexDirection = "row";
    mainDiv.style.gap = "75px";
    ba(mainDiv);

    //-//

    // used with evidence array
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

            // filter by month
            if (whichArray[i].date.substring(0, 2) == 7)
            {
                counter += 1;

                //-//

                let subDiv = ce("div");
                subDiv.id = "Evidence" + counter;
                subDiv.className = "divStyle001";
                subDiv.style.width = sizeX + 'px';
                mainDiv.append(subDiv);

                //-//

                let hrCompact = ce("hr");
                hrCompact.className = 'hrCompact';
                subDiv.append(hrCompact);

                //-//

                let printButton = ce("button");
                printButton.className = "ourButton";
                printButton.innerText = "Print";
                printButton.onclick = function()
                {
                    printOnlyDiv(subDiv.id);
                };
                subDiv.append(printButton);

                //-//

                subDiv.append(ce("br"));

                //-//

                let title = ce("span");
                title.innerText = whichArray[i].title + "\n";
                subDiv.append(title);

                //-//

                let date = ce("span");
                date.innerText = whichArray[i].date + "\n";
                subDiv.append(date);

                //-//

                let info = ce("span");
                info.innerText = whichArray[i].info + "\n";
                subDiv.append(info);

                //-//

                let link = ce("a");
                link.href = whichArray[i].url;
                link.target = "_blank";
                link.innerText = "Link";
                subDiv.append(link);
            }
        }
    }
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

