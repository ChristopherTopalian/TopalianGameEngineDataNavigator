// makePlayerTextArea.js

function makePlayerTextArea()
{
    let mainDiv = ce("div");
    mainDiv.id = "mainDivPlayerTextArea";
    mainDiv.title = 'makePlayerTextArea();';
    mainDiv.style.position = "absolute";
    mainDiv.style.left = "400px";
    mainDiv.style.top = "200px";
    mainDiv.style.display = "flex";
    mainDiv.style.flexDirection = "column";
    ba(mainDiv);

    //-//

    let theTextArea = ce("textarea");
    theTextArea.id = "textAreaPlayerData";
    theTextArea.className = "divStyle001";
    theTextArea.style.width = "325px";
    theTextArea.style.height = "300px";
    theTextArea.style.zIndex = "1";
    theTextArea.style.fontSize = '17px';
    theTextArea.style.fontWeight = 'normal';
    theTextArea.style.color = 'rgb(150, 150, 150)';
    theTextArea.style.textAlign = "left";
    theTextArea.onclick = function()
    {
        showPlayerData();
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
    copyButton.textContent = "Copy";
    copyButton.onclick = function()
    {
        copyIt(theTextArea.id);
    };
    controlsDiv.append(copyButton);

    //-//

    let downloadButton = ce("button");
    downloadButton.className = "ourButton";
    downloadButton.textContent = "Download";
    downloadButton.onclick = function()
    {
        downloadPlayerData();
    };
    controlsDiv.append(downloadButton);
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

