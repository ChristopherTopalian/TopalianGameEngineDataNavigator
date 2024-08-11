// makeStructureTextArea.js

// Get All Structure Attributes
function makeStructureTextArea()
{
    let mainDiv = ce("div");
    mainDiv.id = "structureTextAreaId";
    mainDiv.title = 'makeStructureTextArea();';
    mainDiv.style.position = "absolute";
    mainDiv.style.left = "20px";
    mainDiv.style.top = "200px";
    mainDiv.style.display = "flex";
    mainDiv.style.flexDirection = "column";
    ba(mainDiv);

    //-//

    let theTextArea = ce("textarea");
    theTextArea.id = "textAreaStructureData";
    theTextArea.className = "divStyle001";
    theTextArea.style.width = "325px";
    theTextArea.style.height = "300px";
    theTextArea.style.fontSize = '17px';
    theTextArea.style.fontWeight = 'normal';
    theTextArea.style.color = 'rgb(150, 150, 150)';
    theTextArea.style.textAlign = "left";
    theTextArea.onclick = function()
    {
        showStructureData();
    };
    theTextArea.onkeydown = function()
    {
        keyboardControlOff();
    };
    theTextArea.onblur = function()
    {
        keyboardControlOn();
    };
    mainDiv.append(theTextArea);

    //-//

    let controlsDiv = ce("div");
    controlsDiv.style.display = "flex";
    controlsDiv.style.flexDirection = "row";
    mainDiv.append(controlsDiv);

    //-//

    let copyButton = ce("button");
    copyButton.className = "ourButton";
    copyButton.style.color = "rgb(255, 255, 255)";
    copyButton.textContent = "Copy";
    copyButton.onclick = function()
    {
        copyIt(theTextArea.id);
    };
    controlsDiv.append(copyButton);

    //-//

    let downloadButton = ce("button");
    downloadButton.className = "ourButton";
    downloadButton.style.color = "rgb(255, 255, 255)";
    downloadButton.style.zIndex = "10";
    downloadButton.textContent = "Download";
    downloadButton.onclick = function()
    {
        downloadStructureData();
    };
    controlsDiv.append(downloadButton);
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

