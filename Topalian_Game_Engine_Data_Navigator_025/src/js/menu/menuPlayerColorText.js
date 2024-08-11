// menuPlayerColorText.js

function menuPlayerColorText()
{
    audioPlay("sfx_blip_001", 1.0);

    //-//

    if (ge("menuColorPlayerText"))
    {
        removeElement("menuColorPlayerText");
    }

    //-//

    let theMenu = ce("div");
    theMenu.id = "menuColorPlayerText";
    theMenu.className = "divStyle001";
    theMenu.style.position = "absolute";
    theMenu.style.left = ourPlayer.x + 100 + 'px';
    theMenu.style.top = ourPlayer.y - 75 + 'px';
    theMenu.style.width = '400px';
    theMenu.style.height = '255px';
    ba(theMenu);

    //-//

    let closeButton = ce("button");
    closeButton.className = "ourButton";
    closeButton.style.marginBottom = "-4px";
    closeButton.textContent = "X";
    closeButton.onclick = function()
    {
        removeElement("menuColorPlayerText");
        keyboardControlOn();
    };
    theMenu.append(closeButton);

    //-//

    let containerDiv = ce("div");
    theMenu.append(containerDiv);

    //-//

    containerDiv.append(ce('hr'));

    //-//

    let titleSpan = ce("span");
    titleSpan.style.color = "rgb(255, 255, 255)";
    titleSpan.textContent = "COLOR TEXT";
    containerDiv.append(titleSpan);
    containerDiv.append(ce("br"));

    //-//

    let redLabel = ce('div');
    redLabel.textContent = "Red ";
    containerDiv.append(redLabel);

    //-//

    let redTextArea = ce("textarea");
    redTextArea.id = "theRedFont";
    redTextArea.className = 'textInput';
    redTextArea.onkeydown = function()
    {
        keyboardControlOff();
    };
    containerDiv.append(redTextArea);

    //-//

    containerDiv.append(ce("br"));

    //-//

    let greenLabel = ce('div');
    greenLabel.textContent = "Green ";
    containerDiv.append(greenLabel);

    //-//

    let greenTextArea = ce("textarea");
    greenTextArea.id = "theGreenFont";
    greenTextArea.className = 'textInput';
    greenTextArea.onkeydown = function()
    {
        keyboardControlOff();
    };
    containerDiv.append(greenTextArea);

    //-//

    containerDiv.append(ce("br"));

    //-//

    let blueLabel = ce('div');
    blueLabel.textContent = "Blue ";
    containerDiv.append(blueLabel);

    //-//

    let blueTextArea = ce("textarea");
    blueTextArea.id = "theBlueFont";
    blueTextArea.className = 'textInput';
    blueTextArea.onkeydown = function()
    {
        keyboardControlOff();
    };
    containerDiv.append(blueTextArea);

    //-//

    containerDiv.append(ce("br"));

    //-//

    let enterButton = ce("button");
    enterButton.className = 'ourButton';
    enterButton.textContent = 'Enter';
    enterButton.onclick = function()
    {
        customPlayerTextColorFromTextInput();
        keyboardControlOn();
        enterButtonSound();
    };
    containerDiv.append(enterButton);

    //-//

    containerDiv.append(ce("hr"));

    //-//

    let buttonContainer = ce('div');
    buttonContainer.style.display = 'grid';
    buttonContainer.style.gridTemplateColumns = 'repeat(3, 1fr)';
    containerDiv.append(buttonContainer);

    //-//

    for (let z = 0; z < colorChoices.length; z++)
    {
        let colorChoiceButton = ce("button");
        colorChoiceButton.textContent = colorChoices[z].name;
        colorChoiceButton.className = 'ourButton';
        colorChoiceButton.onclick = function()
        {
            ge(activePlayer).style.color = "rgb("+colorChoices[z].color+")";

            // split color value to array of rgb
            let rgbValues = colorChoices[z].color.split(',');

            ge("theRedFont").value = rgbValues[0].trim(); 
            ge("theGreenFont").value = rgbValues[1].trim();
            ge("theBlueFont").value = rgbValues[2].trim();

            updatePlayer();
        };
        theMenu.append(colorChoiceButton);
    }

    //-//

    buttonContainer.append(ce("br"));

    //-//

    containerDiv.append(ce("br"));

    //-//

    let customButton = ce("button");
    customButton.className = 'ourButton';
    customButton.textContent = 'Custom';
    customButton.onclick = function()
    {
        customFontColor();
    };
    containerDiv.append(customButton);
}

function customFontColor()
{
    let theColor = prompt("Enter RGB as 255, 255, 255")

    let theColorFormatted = 'rgb('+theColor+')';

    // color of text on player object
    ge(activePlayer).style.color = theColorFormatted;

    let colorSeparated = theColor.split(',');

    // fill in the textarea, to show the value of our choice
    ge("theRedFont").value = colorSeparated[0];
    ge("theGreenFont").value = colorSeparated[1];
    ge("theBlueFont").value = colorSeparated[2];

    // update playerArray to show changed value
    updatePlayer();
}

// Read the 3 Textarea, for the red, green, blue values of our player text color
// Set the text color of our player
function customPlayerTextColorFromTextInput()
{
    let r = ge("theRedFont").value;
    let g = ge("theGreenFont").value;
    let b = ge("theBlueFont").value;

    ge(activePlayer).style.color= "rgb("+r+","+g+","+b+")";

    // fill textarea, show value of choice
    ge("theRedFont").value = r;
    ge("theGreenFont").value = g;
    ge("theBlueFont").value = b;

    // update playerArray to show changed value
    updatePlayer();
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

