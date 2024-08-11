// menuPlayerColor.js

function menuPlayerColor()
{
    audioPlay("sfx_blip_001", 1.0);

    //-//

    if (ge('menuColorPlayer'))
    {
        removeElement('menuColorPlayer');
    }

    //-//

    let theMenu = ce("div");
    theMenu.id = "menuColorPlayer";
    theMenu.className = "divStyle001";
    theMenu.style.position = "absolute";
    theMenu.style.left = ourPlayer.x + 150 +'px';
    theMenu.style.top = ourPlayer.y + 'px';
    theMenu.style.width = 200 + 'px';
    theMenu.style.height = 250 + 'px';
    ba(theMenu);

    //-//

    let closeButton = ce('button');
    closeButton.textContent = 'X';
    closeButton.className = 'ourButton';
    closeButton.onclick = function()
    {
        removeElement('menuColorPlayer');
        keyboardControlOn();
    };
    theMenu.append(closeButton);

    //-//

    theMenu.append(ce('hr'));

    //-//

    let colorPlayerText = ce("span");
    colorPlayerText.textContent = "Color Player";
    theMenu.append(colorPlayerText);

    //-//

    theMenu.append(ce('br'));

    //-//

    let redTextArea = ce("textarea");
    redTextArea.id = "theRed";
    redTextArea.className = "textInput";
    redTextArea.onkeydown = function()
    {
        keyboardControlOff();
    };

    //-//

    // colorRText
    let colorRText = ce("span");
    colorRText.textContent = "R";
    colorRText.style.marginRight = "5px";
    theMenu.append(colorRText);
    theMenu.append(redTextArea);

    //-//

    theMenu.append(ce('br'));

    //-//

    // colorGText
    let colorGText = ce("span");
    colorGText.textContent = "G";
    colorGText.style.marginRight = "5px";
    theMenu.append(colorGText);

    //-//
    
    let greenTextArea = ce("textarea");
    greenTextArea.id = "theGreen";
    greenTextArea.className = "textInput";
    greenTextArea.onkeydown = function()
    {
        keyboardControlOff();
    };
    theMenu.append(greenTextArea);

    //-//

    theMenu.append(ce('br'));

    //-//

    // colorBText
    let colorBText = ce("span");
    colorBText.textContent = "B";
    colorBText.style.marginRight = "5px";
    theMenu.append(colorBText);

    //-//

    let blueTextArea = ce("textarea");
    blueTextArea.id = "theBlue";
    blueTextArea.className = "textInput";
    blueTextArea.onkeydown = function()
    {
        keyboardControlOff();
    };
    theMenu.append(blueTextArea);

    //-//

    theMenu.append(ce('br'));

    //-//

    let enterButton = ce("button");
    enterButton.textContent = "Enter";
    enterButton.className = "ourButton";
    enterButton.onclick = function()
    {
        // remove texture
        ge(activePlayer).style.backgroundImage = 'none';

        // color player
        ge(activePlayer).style.backgroundColor = `rgb(
            ${ ge("theRed").value },
            ${ ge("theGreen").value },
            ${ ge("theBlue").value }
        )`;

        keyboardControlOn();
        enterButtonSound();
    };
    theMenu.append(enterButton);

    //-//

    let buttonContainer = ce('div');
    buttonContainer.style.display = 'grid';
    buttonContainer.style.gridTemplateColumns = 'repeat(3, 1fr)';
    buttonContainer.style.gap = '0.5px';
    theMenu.append(buttonContainer);

    //-//

    for (let z = 0; z < colorChoices.length; z++)
    {
        let colorChoiceButton = ce("button");
        colorChoiceButton.textContent = colorChoices[z].name;
        colorChoiceButton.className = 'ourButton';
        colorChoiceButton.onclick = function()
        {
            ge(activePlayer).style.backgroundColor = "rgb("+colorChoices[z].color+")";

            // split color value to array of rgb
            let rgbValues = colorChoices[z].color.split(',');

            ge("theRed").value = rgbValues[0].trim(); 
            ge("theGreen").value = rgbValues[1].trim();
            ge("theBlue").value = rgbValues[2].trim();

            updatePlayer();
        };
        theMenu.append(colorChoiceButton);
    }

    //-//

    buttonContainer.append(ce("br"));

    //-//

    let customColorButton = ce("button");
    customColorButton.textContent = "Custom";
    customColorButton.className = "ourButton";
    customColorButton.onclick = function()
    {
        customColor();
    };
    theMenu.append(customColorButton);

    //-//

    showPlayerData();
}

function customColor()
{
    audioPlay("sfx_blip_001", 1.0);

    // color is only applied if NO texture is on the player
    ge(activePlayer).style.backgroundImage = 'none';

    let whichColor = prompt("Enter RGB as 255,255,255")

    let theColorFormatted = 'rgb('+whichColor+')';

    // color of player
    ge(activePlayer).style.backgroundColor = theColorFormatted;

    let colorSeparated = whichColor.split(',');

    // fill in textarea, show value of choice
    ge("theRed").value = colorSeparated[0];
    ge("theGreen").value = colorSeparated[1];
    ge("theBlue").value = colorSeparated[2];

    // update playerArray to show changed value
    updatePlayer();
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

