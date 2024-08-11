// rowOfLanguage.js

function rowOfLanguage(theX, theY, sizeX, sizeY, whichArray, criteria1, criteria2)
{
    let counter = 0;

    //-//

    let mainDiv = ce("div");
    mainDiv.id = "scriptingCategory";
    mainDiv.title = "rowOfLanguage(theX, theY, sizeX, sizeY, whichArray, criteria1, criteria2)";
    mainDiv.style.position = "absolute";
    mainDiv.style.left = theX + "px";
    mainDiv.style.top = theY + "px";
    mainDiv.style.display = "flex";
    mainDiv.style.flexDirection = "row";
    mainDiv.style.gap = 75 + "px";
    ba(mainDiv);

    //-//

    // used with lindenLanguage array
    // used with javascriptLanguage array
    for (let i = 0; i < whichArray.length; i++)
    {
        if (whichArray[i].category == criteria1 && whichArray[i].tag == criteria2)
        {
            counter += 1;

            //-//

            let subDiv = ce("div");
            subDiv.id = "JavaScriptCategories_" + whichArray[i].category + counter;
            subDiv.className = "divStyle001";
            subDiv.style.width = sizeX +'px';
            subDiv.style.height = sizeY +'px';
            mainDiv.append(subDiv);

            //-//

            let controlPanelDetails = ce("details");
            subDiv.append(controlPanelDetails);

            //-//

            let controlPanelSummary = ce("summary");
            controlPanelDetails.append(controlPanelSummary);

            //-//

            let controlPanel = ce("div");
            controlPanel.style.position = "relative";
            controlPanelSummary.append(controlPanel);

            //-//

            subDiv.append(ce('hr'));

            //-//

            let printButton = ce("button");
            printButton.className = "ourButton";
            printButton.style.marginRight = 10 + "px";
            printButton.onclick = function()
            {
                printOnlyDiv(subDiv.id);
            };
            printButton.textContent = "print";
            controlPanelDetails.append(printButton);

            //-//

            let titleOfUrlAnchor = ce("a");
            titleOfUrlAnchor.target = "_blank";
            titleOfUrlAnchor.href = whichArray[i].url;
            titleOfUrlAnchor.style.marginRight = 10 + "px";
            controlPanelDetails.append(titleOfUrlAnchor);

            //-//

            let titleOfUrl = ce("span");
            titleOfUrl.innerHTML = "Link 1";
            titleOfUrlAnchor.append(titleOfUrl);

            //-//

            let titleOfUrlAnchor2 = ce("a");
            titleOfUrlAnchor2.target = "_blank";
            titleOfUrlAnchor2.href = whichArray[i].url2;
            controlPanelDetails.append(titleOfUrlAnchor2);

            //-//

            let titleOfUrl2 = ce("span");
            titleOfUrl2.innerHTML = "Link 2";
            titleOfUrlAnchor2.append(titleOfUrl2);

            //-//

            subDiv.append(ce('hr'));

            //-//

            let titleOfLanguage = ce("span");
            titleOfLanguage.style.color = "rgb(180, 180, 180)";
            titleOfLanguage.innerHTML = whichArray[i].language;
            subDiv.append(titleOfLanguage);

            //-//

            subDiv.append(ce('hr'));

            //-//

            let titleOfCategory = ce("span");
            titleOfCategory.style.color = "rgb(255, 0, 255)";
            titleOfCategory.innerHTML = whichArray[i].category;
            subDiv.append(titleOfCategory);

            //-//

            subDiv.append(ce('hr'));

            //-//

            let titleOfFunction = ce("div");
            titleOfFunction.style.fontSize = 30 + "px";
            titleOfFunction.style.color = "rgb(0, 255, 255)";
            titleOfFunction.innerHTML = whichArray[i].name;
            subDiv.append(titleOfFunction);

            //-//

            subDiv.append(ce('hr'));

            //-//

            let titleOfDescription= ce("span");
            titleOfDescription.style.color = "rgb(0, 190, 220)";
            titleOfDescription.innerHTML = whichArray[i].description;
            subDiv.append(titleOfDescription);

            //-//

            subDiv.append(ce('hr'));

            //-//

            let syntax = ce("span");
            syntax.style.color = "rgb(180, 180, 180)";
            syntax.innerHTML = whichArray[i].syntax;
            subDiv.append(syntax);

            //-//

            subDiv.append(ce('hr'));

            //-//

            let useage = ce("span");
            useage.innerHTML = whichArray[i].useage;
            subDiv.append(useage);

            //-//

            subDiv.append(ce('hr'));

            //-//

            let returnValue = ce("span");
            returnValue.style.color = "rgb(150, 100, 200)";
            returnValue.innerHTML = whichArray[i].type;
            subDiv.append(returnValue);

            //-//

            subDiv.append(ce('hr'));
        }
    }
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

