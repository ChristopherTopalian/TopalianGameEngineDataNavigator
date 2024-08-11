// rowOfCollegeLinks.js

function rowOfCollegeLinks(theX, theY, whichArray, sizeX)
{
    let counter = 0;

    let mainDiv = ce("div");
    mainDiv.id = "collegeLinksId";
    mainDiv.title = "rowOfCollegeLinks(theX, theY, whichArray)";
    mainDiv.style.position = "absolute";
    mainDiv.style.left = theX + "px";
    mainDiv.style.top = theY + "px";
    mainDiv.style.width = '200px';
    mainDiv.style.display = "flex";
    mainDiv.style.flexDirection = "row";
    mainDiv.style.gap = "75px";
    ba(mainDiv);

    //-//

    for (let x = 0; x < whichArray.length; x++) {
        counter += 1;

        let subDiv = ce("div");
        subDiv.id = "CollegeLinks" + counter;
        subDiv.className = "divBackground";
        subDiv.style.padding = "10px";
        subDiv.style.width = sizeX + 'px';
        subDiv.style.zIndex = 1;
        subDiv.style.borderStyle = "solid";
        subDiv.style.borderWidth = "2px";
        subDiv.style.borderColor = "rgba(100, 100, 255, 1.0)";
        subDiv.style.fontFamily = "arial";
        subDiv.style.fontWeight = "bold";
        subDiv.style.fontSize = "medium";
        subDiv.style.color = "aqua";
        subDiv.style.textAlign = "center";
        mainDiv.append(subDiv);

        //-//

        let theLink = ce("a");
        theLink.href = whichArray[x].url;
        theLink.target = "_blank";
        theLink.innerHTML = whichArray[x].name;
        subDiv.append(theLink);
    }
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

