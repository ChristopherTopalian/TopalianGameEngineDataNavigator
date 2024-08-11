// rowOfBookImages.js

function rowOfBookImages(theX, theY, sizeX, sizeY, whichArray, criteria1, theHeading)
{
    let counter = 0;

    let mainDiv = ce("div");
    mainDiv.id = "displayBooksId";
    mainDiv.className = "bookImageStyle";
    mainDiv.title = "rowOfBookImages(theX, theY, sizeX, sizeY, whichArray, criteria1, theHeading)";
    mainDiv.style.position = "absolute";
    mainDiv.style.left = theX;
    mainDiv.style.top = theY;
    mainDiv.style.display = "flex";
    mainDiv.style.flexDirection = "row";
    mainDiv.style.gap = 75 + "px";
    ba(mainDiv);

    //-//

    // used with papercliptronics, javascriptBook1, javascriptBook2, logicA, logicB, logicC, simulation, science, human, mathematics arrays
    for (let x = 0; x < whichArray.length; x++)
    {
        counter += 1;

        if (whichArray[x].tag == criteria1)
        {
            // filter by month
            //if (whichArray[x].month === '12')

            // filter by multiple months
            //if (whichArray[x].month === '8' || whichArray[x].month === '9')

            // filter by date
            // if (whichArray[x].month === '2' && whichArray[x].day === '29' && whichArray[x].year === '2018')

            // filter by multiple dates
            //if ((whichArray[x].month === '2' && whichArray[x].day === '29' && whichArray[x].year === '2018') || (whichArray[x].month === '2' && whichArray[x].day === '29' && whichArray[x].year === '2020'))

            // filter by day, of any month, of any year
            // if (whichArray[x].day === '2')

            // filter by year
            // if (whichArray[x].year === '2022')

            // filter by multiple years
            // if (whichArray[x].year === '2019' || whichArray[x].year === '2020')

            // filter by month and year
            // if (whichArray[x].month === '2' && whichArray[x].year === '2020')

            // we can replace the if statement below, with one of the options above.
            if (whichArray) // filter by all
            {
                let subDiv = ce("div");
                subDiv.id = theHeading + counter;
                subDiv.style.width = sizeX + 'px';
                subDiv.style.borderStyle = "solid";
                subDiv.style.borderWidth = 1 + "px";
                subDiv.style.borderColor = "rgb(0, 255, 255)";
                mainDiv.append(subDiv);

                //-//

                let printButton = ce("button");
                printButton.className = "ourButton";
                printButton.textContent = "print";
                printButton.onclick = function()
                {
                    printOnlyDiv(subDiv.id);
                };
                subDiv.append(printButton);

                //-//

                let theTexture = ce("img");
                theTexture.id = theHeading + counter;
                theTexture.src = whichArray[x].image;
                theTexture.className = "bookImage";
                subDiv.append(theTexture);
            }
        }
    }
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

