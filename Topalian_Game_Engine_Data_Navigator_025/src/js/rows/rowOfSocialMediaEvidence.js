// rowOfSocialMediaEvidence.js

function rowOfSocialMediaEvidence(theX, theY, sizeX, sizeY, whichArray, criteria1)
{
    let counter = 0;

    //-//

    let mainDiv = ce("div");
    mainDiv.id = "notesWithTextareaId";
    mainDiv.title = "rowOfSocialMediaEvidence(theX, theY, sizeX, sizeY, whichArray, criteria1)";
    mainDiv.style.position = "absolute";
    mainDiv.style.left = theX + "px";
    mainDiv.style.top = theY + "px";
    mainDiv.style.display = "flex";
    mainDiv.style.flexDirection = "row";
    mainDiv.style.gap = "75px";
    ba(mainDiv);

    //-//

    for (let i = 0; i < whichArray.length; i++) {
        if (whichArray[i].tag == criteria1 && whichArray[i].date.substring(6, 10) == 2020 && whichArray[i].probability >= 50)
        {
            counter += 1;

            //-//

            let theDiv = ce("div");
            theDiv.id = "SocialMediaEvidence" + counter;
            theDiv.className = "divStyle001";
            theDiv.style.width = sizeX + 'px';
            theDiv.style.height = sizeY + 'px';
            theDiv.textContent = 'Social Media Evidence Rating';
            mainDiv.append(theDiv);

            //-//

            theDiv.append(ce('hr'));

            //-//

            let printButton = ce("button");
            printButton.className = "ourButton";
            printButton.textContent = "print";
            printButton.onclick = function()
            {
                printOnlyDiv(theDiv.id);
            };
            theDiv.append(printButton);

            //-//

            theDiv.append(ce("br"));

            //-//

            let title = ce("div");
            title.textContent = whichArray[i].title;
            theDiv.append(title);

            //-//

            theDiv.append(ce("br"));

            //-//

            let date = ce("div");
            date.textContent = whichArray[i].date;
            theDiv.append(date);

            //-//

            theDiv.append(ce("br"));

            //-//

            let info = ce("div");
            info.textContent = whichArray[i].info;
            theDiv.append(info);

            //-//

            theDiv.append(ce("br"));

            //-//

            let probability = ce("div");
            probability.textContent = "Probability Rating: " + whichArray[i].probability + "%";
            theDiv.append(probability);

            //-//

            theDiv.append(ce("br"));

            //-//

            let theLink = ce("a");
            theLink.href = whichArray[i].url;
            theLink.target = "_blank";
            theLink.textContent = "Link";
            theDiv.append(theLink);

            //-//

            theDiv.append(ce("br"));

            //-//

            let theImage = ce("img");
            theImage.src = whichArray[i].image;
            theImage.className = "theImage";
            theDiv.append(theImage);
        }
    }
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

