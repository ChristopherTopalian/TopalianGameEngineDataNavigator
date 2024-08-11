// rowOfCollegeBooks.js

function rowOfCollegeBooks(theX, theY, sizeX, sizeY, whichArray)
{
    let counter = 0;

    //-//

    let mainDiv = ce("div");
    mainDiv.id = "collegeBooksSection";
    mainDiv.className = "";
    mainDiv.title = "rowOfCollegeBooks(theX, theY, sizeX, sizeY, whichArray)";
    mainDiv.style.position = "absolute";
    mainDiv.style.left = theX;
    mainDiv.style.top = theY;
    mainDiv.style.display = "flex";
    mainDiv.style.flexDirection = "row";
    mainDiv.style.gap = 75 + "px";
    mainDiv.style.overflow = "hidden";
    mainDiv.style.overflowY = "scroll";
    ba(mainDiv);

    //-//

    // used with collegeBooks Array
    for (let x = 0; x < whichArray.length; x++)
    {
        counter += 1;

        let subDiv = ce("div");
        subDiv.className = "divBackground";
        subDiv.id = "CollegeBooks" + counter;
        subDiv.style.width = sizeX + 'px';
        subDiv.style.height = sizeY + 'px';
        subDiv.style.borderStyle = "solid";
        subDiv.style.borderWidth = "2px";
        subDiv.style.borderColor = "rgba(100, 100, 255, 1.0)";
        subDiv.style.zIndex = "1";
        subDiv.style.fontFamily = "arial";
        subDiv.style.fontWeight = "normal";
        subDiv.style.fontSize = "medium";
        subDiv.style.textAlign = "center";
        subDiv.style.color = "black";

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

        let theTitle = ce("div");
        theTitle.style.color = "rgb(255, 255, 255)";
        theTitle.innerHTML = "College Books";
        theTitle.innerHTML += whichArray[x].name;
        subDiv.append(theTitle);

        //-//

        let theBreakBelowTitle = ce("hr");
        theBreakBelowTitle.className = "hrCompact";
        subDiv.append(theBreakBelowTitle);
        
        //-//

        let theLink = ce("a");
        theLink.target = "_blank";
        theLink.href = whichArray[x].url;
        theLink.innerHTML = "";
        subDiv.append(theLink);

        //-//

        let theTexture = ce("img"); 
        theTexture.className = "theImage";
        theTexture.src = whichArray[x].image;
        theLink.append(theTexture);
    }
}

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

