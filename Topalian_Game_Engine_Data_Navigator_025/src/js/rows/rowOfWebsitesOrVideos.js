// rowOfWebsitesOrVideos.js

// Makes iframes in a row to add content to our level can be used to display Websites or Videos the websites must allow iframe the videos must allow embed

function rowOfWebsitesOrVideos(theX, theY, sizeX, sizeY, whichArray, criteria1)
{
    let counter = 0;

    //-//

    let mainDiv = ce("div");
    mainDiv.id = "rowOfWebsitesOrVideos";
    mainDiv.title = "rowOfWebsitesOrVideos(theX, theY, sizeX, sizeY, whichArray, criteria1)";
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
            counter += 1;

            //-//

            let subDiv = ce("div");
            subDiv.id = whichArray[i].title + i;
            subDiv.className = "divStyle001";
            mainDiv.append(subDiv);

            //-//

            let printButton = ce("button");
            printButton.textContent = "print";
            printButton.className = "ourButton";
            printButton.onclick = function()
            {
                printOnlyDiv(subDiv.id);
            };
            subDiv.append(printButton);

            //-//

            subDiv.append(ce("br"));

            //-//

            let boldCriteria = ce("b");
            boldCriteria.style.color = "yellow";
            boldCriteria.textContent = criteria1;
            subDiv.append(boldCriteria);

            //-//

            subDiv.append(ce("br"));

            //-//

            let boldTitle = ce("b");
            boldTitle.textContent = whichArray[i].title;
            subDiv.append(boldTitle);

            //-//

            subDiv.append(ce("br"));

            //-//

            let uploadDateText = ce("span");
            uploadDateText.textContent = "upload date " + whichArray[i].date;
            subDiv.append(uploadDateText);

            //-//

            subDiv.append(ce("br"));

            //-//

            let urlText = ce("span");
            urlText.textContent = whichArray[i].url;
            subDiv.append(urlText);

            //-//

            subDiv.append(ce("br"));

            //-//

            let linkElement = ce("a");
            linkElement.href = whichArray[i].url;
            linkElement.target = "_blank";
            linkElement.textContent = "Link";
            subDiv.append(linkElement);

            //-//

            subDiv.append(ce("br"));

            //-//

            let theFrame = ce("iframe");
            theFrame.src = whichArray[i].url;
            theFrame.style.width = sizeX + 'px';
            theFrame.style.height = sizeY + 'px';
            subDiv.append(theFrame);
        }
    }
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

