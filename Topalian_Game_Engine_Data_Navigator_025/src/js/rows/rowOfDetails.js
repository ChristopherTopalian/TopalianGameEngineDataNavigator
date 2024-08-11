// rowOfDetails.js

function rowOfDetails(theX, theY, sizeX, sizeY, whichArray, criteria1)
{
    let counter = 0;

    //-//

    let mainDiv = ce("div");
    mainDiv.id = "detailsId";
    mainDiv.title = "rowOfDetails(theX, theY, sizeX, sizeY, whichArray, criteria1)";
    mainDiv.style.position = "absolute";
    mainDiv.style.left = theX + "px";
    mainDiv.style.top = theY + "px";
    mainDiv.style.display = "flex";
    mainDiv.style.flexDirection = "row";
    mainDiv.style.gap = "75px";
    ba(mainDiv);

    //-//

    for (let i = 0; i < whichArray.length; i++) {
        counter += 1;

        if (whichArray[i].tag == criteria1)
        {
            // filter by month
            if (whichArray[i].date.substring(0, 2) == "07")
            {
                if (whichArray[i].probability >= 50)
                {
                    let subDiv = ce("div");
                    subDiv.className = "divStyle001";
                    mainDiv.append(subDiv);

                    //-//

                    let theDiv = ce("details");
                    theDiv.id = "EvidenceDetails" + counter;
                    theDiv.style.width = sizeX + 'px';
                    theDiv.style.height = sizeY + 'px';
                    theDiv.style.color = "rgb(255, 255, 255)";
                    subDiv.append(theDiv);

                    //-//

                    theDiv.innerText = "Content Sensitive - Open at Your Discretion";

                    //-//

                    theDiv.append(ce("br"));

                    //-//

                    let printButton = ce("button");
                    printButton.className = "ourButton";
                    printButton.textContent = "print";
                    printButton.onclick = function()
                    {
                        printOnlyDiv(theDiv.id);
                    };

                    subDiv.append(printButton);

                    //-//

                    theDiv.append(ce("br"));

                    //-//

                    let titleText = whichArray[i].title;
                    theDiv.append(titleText);

                    //-//

                    theDiv.append(ce("br"));

                    //-//

                    let dateText = whichArray[i].date;
                    theDiv.append(dateText);

                    //-//

                    theDiv.append(ce("br"));

                    //-//

                    let infoText = whichArray[i].info;
                    theDiv.append(infoText);

                    //-//

                    theDiv.append(ce("br"));

                    //-//

                    let probabilityText = "Probability Rating: " + whichArray[i].probability + "%";
                    theDiv.append(probabilityText);

                    //-//

                    theDiv.append(ce("br"));

                    //-//

                    let link = ce("a");
                    link.href = whichArray[i].url;
                    link.target = "_blank";
                    link.innerText = "Link";
                    theDiv.append(link);

                    //-//

                    theDiv.append(ce("br"));

                    //-//

                    let image = ce("img");
                    image.src = whichArray[i].image;
                    image.className = "theImage";
                    theDiv.append(image);
                }
            }
        }
    }
}

//--//

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

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian