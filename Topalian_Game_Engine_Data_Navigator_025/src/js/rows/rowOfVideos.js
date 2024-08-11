// rowOfVideos.js

// adds videos to the page. The videos must allow embed. On youtube, we copy the url in the Address Bar   

// for example https://www.youtube.com/watch?v=Q4tPG-cwiWE    

// then we just replace watch?v= with embed/      
// for example  https://www.youtube.com/embed/Q4tPG-cwiWE

function rowOfVideos(theX, theY, sizeX, sizeY, whichArray, criteria)
{
    let counter = 0;

    //-//

    let mainDiv = ce("div");
    mainDiv.id = "videoEvidenceId";
    mainDiv.title = "rowOfVideos(theX, theY, sizeX, sizeY, whichArray, criteria)";
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
        if (whichArray[i].description === criteria)
        {
            counter += 1;

            //-//

            let subDiv = ce("div");
            subDiv.id = whichArray[i].title + i;
            subDiv.className = "divStyle001";
            subDiv.style.width = sizeX + 'px';
            mainDiv.append(subDiv);

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

            let criteriaText = ce("b");
            criteriaText.style.color = "aqua";
            criteriaText.textContent = criteria;
            subDiv.append(criteriaText);

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

            let makeVideo = ce("iframe");
            makeVideo.src = whichArray[i].url;
            makeVideo.style.width = sizeX + 'px';
            makeVideo.style.height = sizeY + 'px';
            subDiv.append(makeVideo);
        }
    }
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

