// rowOfLanguageShowAll.js

function rowOfLanguageShowAll(theX, theY, sizeX, sizeY, whichArray, criteria1, criteria2) {
    let counter = 0;

    //-//

    let mainDiv = ce("div");
    mainDiv.id = "scriptingSection";
    mainDiv.style.position = "absolute";
    mainDiv.title = "rowOfLanguageShowAll(theX, theY, sizeX, sizeY, whichArray, criteria1, criteria2)";
    mainDiv.style.position = 'absolute';
    mainDiv.style.top = theY + "px";
    mainDiv.style.left = theX + "px";
    mainDiv.style.display = "flex";
    mainDiv.style.flexDirection = "row";
    mainDiv.style.gap = "75px";
    ba(mainDiv);

    //-//

    for (let i = 0; i < whichArray.length; i++) {
        if (whichArray[i].tag == criteria1 && whichArray[i].language == criteria2)
        {
            counter += 1;

            //-//

            let theDiv = ce("div");
            theDiv.id = "JavaScriptAll" + counter;
            theDiv.className = "divStyle001";
            theDiv.style.width = sizeX + "px";
            theDiv.style.height = sizeY + "px";

            //-//

            theDiv.append(ce("hr"));

            //-//

            let span = ce("span");
            span.style.fontSize = "14pt";
            span.style.lineHeight = "15pt";
            span.textContent = whichArray[i].language;
            theDiv.append(span);

            //-//

            theDiv.append(ce("hr"));

            //-//

            let boldAqua = ce("b");
            boldAqua.style.color = "aqua";
            boldAqua.textContent = whichArray[i].category;
            theDiv.append(boldAqua);

            //-//

            theDiv.append(ce("hr"));

            //-//

            let boldYellow = ce("b");
            boldYellow.style.color = "yellow";
            boldYellow.textContent = whichArray[i].name;
            theDiv.append(boldYellow);

            //-//

            theDiv.append(ce("hr"));

            //-//

            let printButton = ce("button");
            printButton.className = "ourButton";
            printButton.style.marginRight = '10px';
            printButton.textContent = "Print";
            printButton.onclick = function()
            {
                printOnlyDiv(theDiv.id);
            };
            theDiv.append(printButton);

            //-//

            let urlLabel = ce("span");
            urlLabel.style.fontWeight = "bold";
            urlLabel.textContent = "URL: ";
            theDiv.append(urlLabel);

            //-//

            let urlLink = ce("a");
            urlLink.href = whichArray[i].url;
            urlLink.target = "_blank";
            urlLink.textContent = "Link";
            theDiv.append(urlLink);

            //-//

            let url2Label = ce("span");
            url2Label.style.fontWeight = "bold";
            url2Label.textContent = "URL2: ";
            theDiv.append(url2Label);

            //-//

            let url2Link = ce("a");
            url2Link.href = whichArray[i].url2;
            url2Link.target = "_blank";
            url2Link.textContent = "Link 2";
            theDiv.append(url2Link);

            //-//

            theDiv.append(ce("hr"));

            //-//

            let functionNameLabel = ce("span");
            functionNameLabel.style.fontWeight = "bold";
            functionNameLabel.style.color = "rgb(180, 180, 180)";
            functionNameLabel.innerHTML = "Name of Function: <br>";
            theDiv.append(functionNameLabel);

            //-//

            let functionName = ce("span");
            functionName.style.fontWeight = "bold";
            functionName.textContent = whichArray[i].name;
            theDiv.append(functionName);

            //-//

            theDiv.append(ce("hr"));

            //-//

            let descriptionLabel = ce("span");
            descriptionLabel.style.fontWeight = "bold";
            descriptionLabel.style.color = "rgb(180, 180, 180)";
            descriptionLabel.textContent = "Description: ";
            theDiv.append(descriptionLabel);

            //-//

            let description = ce("div");
            description.innerHTML = whichArray[i].description;
            theDiv.append(description);

            //-//

            theDiv.append(ce("hr"));

            //-//

            let syntaxLabel = ce("span");
            syntaxLabel.style.fontWeight = "bold";
            syntaxLabel.style.color = "rgb(180, 180, 180)";
            syntaxLabel.textContent = "Syntax: ";
            theDiv.append(syntaxLabel);

            //-//

            let syntax = ce("div");
            syntax.innerHTML = whichArray[i].syntax;
            theDiv.append(syntax);

            //-//

            theDiv.append(ce("hr"));

            //-//

            let usageLabel = ce("span");
            usageLabel.style.fontWeight = "bold";
            usageLabel.style.color = "rgb(180, 180, 180)";
            usageLabel.textContent = "Usage: ";
            theDiv.append(usageLabel);

            //-//

            let usage = ce("div");
            usage.innerHTML = whichArray[i].useage;
            theDiv.append(usage);

            //-//

            theDiv.append(ce("hr"));

            //-//

            let returnTypeLabel = ce("span");
            returnTypeLabel.style.fontWeight = "bold";
            returnTypeLabel.style.color = "rgb(180, 180, 180)";
            returnTypeLabel.textContent = "Return Value Type: ";
            theDiv.append(returnTypeLabel);

            //-//

            let returnType = ce("div");
            returnType.innerHTML = whichArray[i].type;
            theDiv.append(returnType);

            //-//

            theDiv.append(ce("hr"));

            //-//

            let deleteButton = ce("button");
            deleteButton.className = "ourButton";
            deleteButton.textContent = "Delete";
            deleteButton.onclick = function()
            {
                deleteThisRecord(theDiv.id);
            };
            theDiv.append(deleteButton);

            //-//

            theDiv.append(ce("hr"));

            //-//

            mainDiv.append(theDiv);
        }
    }
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

