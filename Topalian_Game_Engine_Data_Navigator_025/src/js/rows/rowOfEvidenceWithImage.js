// rowOfEvidenceWithImage.js

function rowOfEvidenceWithImage(theX, theY, sizeX, sizeY, whichArray, criteria1, theHeading)
{
    let counter = 0;

    let mainDiv = ce("div");
    mainDiv.id = "evidenceWithImageId";
    mainDiv.title = "rowOfEvidenceWithImage(theX, theY, sizeX, sizeY, whichArray, criteria1, theHeading)";
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

            if (whichArray)
            {
                counter += 1;

                //-//

                let subDiv = ce("div");
                subDiv.id = "EvidenceWithImage" + counter;
                subDiv.className = "divStyle001";
                subDiv.style.width = sizeX + 'px';
                subDiv.style.height = sizeY + 'px';
                mainDiv.append(subDiv);

                //-//

                let heading = ce("div");
                heading.innerHTML = theHeading + "<hr class='hrCompact'>";
                subDiv.append(heading);

                //-//

                let printButton = ce("button");
                printButton.className = "ourButton";
                printButton.innerText = "print";
                printButton.onclick = function()
                {
                    printOnlyDiv(subDiv.id);
                };
                subDiv.append(printButton);

                //-//

                subDiv.append(ce("br"));

                //-//

                let title = ce("b");
                title.innerHTML = whichArray[i].title + "<br>";
                subDiv.append(title);

                //-//

                let date = ce("div");
                date.innerHTML = whichArray[i].date + "<br>";
                subDiv.append(date);

                //-//

                let info = ce("div");
                info.innerHTML = whichArray[i].info + "<br>";
                subDiv.append(info);

                //-//

                let link = ce("a");
                link.href = whichArray[i].url;
                link.target = "_blank";
                link.innerHTML = "Link";
                subDiv.append(link);

                //-//

                subDiv.append(ce("br"));

                //-//

                let image = ce("img");
                image.src = whichArray[i].image;
                image.className = "theImage";
                subDiv.append(image);
            }
        }
    }
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

