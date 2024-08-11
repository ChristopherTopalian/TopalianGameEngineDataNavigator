// makeInterface.js

function makeInterface()
{
    // mainContainer
    let mainContainer = ce('div');
    mainContainer.id = 'mainContainer';
    mainContainer.style.display = 'flex';
    mainContainer.style.flexDirection = 'column';
    ba(mainContainer)

    //-//

    // appTitle
    let appTitle = ce('div');
    appTitle.id = 'appTitle';
    appTitle.textContent = 'Topalian Spreadsheet To Javascript Converter';
    mainContainer.append(appTitle);

    //-//

    let instructionsDiv = ce('div');
    instructionsDiv.id = 'instructions';
    instructionsDiv.textContent = 'Paste Data Into the Text Area Below';
    instructionsDiv.style.marginBottom = '5px';
    mainContainer.append(instructionsDiv);

    //-//

    let hrOverInput = ce('hr');
    hrOverInput.style.width = '100%';
    mainContainer.append(hrOverInput);

    //-//

    let inputDiv = ce('textarea');
    inputDiv.id = 'pasteDataHere';
    inputDiv.placeholder = 'Paste Here';
    inputDiv.oninput = function()
    {
        processSpreadsheetData();
    };
    mainContainer.append(inputDiv);

    //-//

    let hrUnderInput = ce('hr');
    hrUnderInput.style.width = '100%';
    mainContainer.append(hrUnderInput);

    //-//

    let outputDiv = ce('textarea');
    outputDiv.id = 'displayData';
    outputDiv.style.marginBottom = '7px';
    mainContainer.append(outputDiv);

    //-//

    let copyButton = ce('button');
    copyButton.id = 'copyButton';
    copyButton.onclick = function()
    {
        copyIt();
    };
    copyButton.textContent = 'Copy';
    mainContainer.append(copyButton);
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
