// rowOfScienceImagesAndLink.js

function rowOfScienceImagesAndLink(theX, theY, sizeX, sizeY, whichArray, criteria1, criteria2) {
    let counter = 0;

    //-//

    let mainDiv = ce("div");
    mainDiv.id = "notesWithTextareaId";
    mainDiv.title = "rowOfScienceImagesAndLink(theX, theY, sizeX, sizeY, whichArray, criteria1, criteria2)";
    mainDiv.style.position = "absolute";
    mainDiv.style.left = theX + "px";
    mainDiv.style.top = theY + "px";
    mainDiv.style.display = "flex";
    mainDiv.style.flexDirection = "row";
    mainDiv.style.gap = "75px";
   ba(mainDiv);

   //-//

    for (let i = 0; i < whichArray.length; i++) {
        if (whichArray[i].tag == criteria1 || whichArray[i].description == criteria2) {
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
                subDiv.id = "ScienceWithImageAndLink" + counter;
                subDiv.className = "divStyle001";
                subDiv.style.width = sizeX + 'px';
                subDiv.style.height = sizeY + 'px';
                mainDiv.append(subDiv);

                //-//

                let theContent = ce("div");
                theContent.textContent = "Science Row with Image and Link";
                subDiv.append(theContent);

                //-//

                theContent.append(ce("hr"));

                //-//

                let printButton = ce("button");
                printButton.className = "ourButton";
                printButton.textContent = "Print";
                printButton.onclick = function()
                {
                    printOnlyDiv(subDiv.id);
                };
                theContent.append(printButton);

                //-//

                theContent.append(ce("br"));

                //-//

                let title = ce("div");
                title.textContent = whichArray[i].title;
                theContent.append(title);

                //-//

                theContent.append(ce("br"));

                //-//

                let date = ce("div");
                date.textContent = whichArray[i].date;
                theContent.append(date);

                //-//

                theContent.append(ce("br"));

                //-//

                let info = ce("div");
                info.textContent = whichArray[i].info;
                theContent.append(info);

                //-//

                theContent.append(ce("br"));

                //-//

                let details = ce("details");
                let link = ce("a");
                link.href = whichArray[i].url;
                link.target = "_blank";
                link.textContent = whichArray[i].url;
                details.append(link);
                theContent.append(details);

                //-//

                theContent.append(ce("br"));

                //-//

                let theImage = ce("img");
                theImage.src = whichArray[i].image;
                theImage.className = "theScienceImages";
                theContent.append(theImage);
            }
        }
    }
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

