// rowOfVideosMultipleFilters.js 

function rowOfVideosMultipleFilters(theX, theY, sizeX, sizeY, whichArray, criteria1, criteria2)
{
    let counter = 0;

    //-//

    let mainDiv = ce("div");
    mainDiv.id = "videoEvidenceMultipleFilters";
    mainDiv.title = "rowOfVideosMultipleFilters(theX, theY, sizeX, sizeY, whichArray, criteria1, criteria2)";
    mainDiv.style.position = "absolute";
    mainDiv.style.left = theX + "px";
    mainDiv.style.top = theY + "px";
    mainDiv.style.display = "flex";
    mainDiv.style.flexDirection = "row";
    mainDiv.style.gap = "75px";
    ba(mainDiv);

    //-//

    for (let i = 0; i < whichArray.length; i++)
    {
        if (whichArray[i].tag === criteria1 && whichArray[i].description === criteria2)
        {
            counter += 1;

            //-//

            let subDiv = ce("div");
            subDiv.id = whichArray[i].title + i;
            subDiv.className = "divStyle001";
            subDiv.style.width = sizeX + 'px';
            mainDiv.append(subDiv);

            //-//

            let criteria1Text = ce("b");
            criteria1Text.style.color = "yellow";
            criteria1Text.textContent = criteria1;
            subDiv.append(criteria1Text);

            //-//

            let separatorText = ce("span");
            separatorText.textContent = " - ";
            subDiv.append(separatorText);

            //-//

            let criteria2Text = ce("b");
            criteria2Text.style.color = "aqua";
            criteria2Text.textContent = criteria2;
            subDiv.append(criteria2Text);

            //-//

            subDiv.append(ce("br"));

            //-//

            let titleText = ce("span");
            titleText.textContent = whichArray[i].title;
            subDiv.append(titleText);

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

            let printButton = ce("button");
            printButton.textContent = "print";
            printButton.className = "ourButton";
            printButton.onclick = function()
            {
                printOnlyDiv(subDiv.id);
            };
            subDiv.append(printButton);

            //-//

            let theVideo = ce("iframe");
            theVideo.src = whichArray[i].url;
            theVideo.style.width = sizeX + 'px';
            theVideo.style.height = sizeY + 'px';
            subDiv.append(theVideo);
        }
    }
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

