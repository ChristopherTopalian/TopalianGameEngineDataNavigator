// menuStructureColor.js

let theColorID;

function menuStructureColor(theStructureId)
{
    audioPlay("sfx_blip_001", 1.0);  

    theColorID = ge(theStructureId);

    if (ge('menuColorStructure'))
    {
        removeElement('menuColorStructure');
    }

    let theMenu = ce("div");  
    theMenu.id = "menuColorStructure";
    theMenu.className = "divStyle001";
    theMenu.style.position = "absolute";
    theMenu.style.left = ourPlayer.x + 100 + 'px';
    theMenu.style.top = ourPlayer.y - 75 + 'px';
    theMenu.style.width = 400 + 'px';
    theMenu.style.height = 225 + 'px';
    ba(theMenu);

    //-//

    let closeButton = ce("button");
    closeButton.onclick = function()
    {
        removeElement("menuColorStructure");
        keyboardControlOn();
    };
    closeButton.className = "ourButton";
    closeButton.style.marginBottom = "-4px";
    closeButton.textContent = "X";
    theMenu.append(closeButton);

    //-//

    theMenu.append(ce('hr'));

    //-//

    let theTitle = ce("span");
    theTitle.style.color = "rgb(255, 255, 255)";
    theTitle.textContent = "COLOR STRUCTURE";
    theMenu.append(theTitle);

    //-//

    theMenu.append(ce('hr'));

    //-//

    let redLabel = ce("span");
    redLabel.textContent = "R ";
    theMenu.append(redLabel);

    //-//

    let redInput = ce("textarea");
    redInput.id = "theRed";
    redInput.className = "textInput";
    redInput.onkeydown = function()
    {
        keyboardControlOff();
    };
    theMenu.append(redInput);

    //-//

    let greenLabel = ce("span");
    greenLabel.textContent = "G ";
    theMenu.append(greenLabel);

    //-//

    let greenInput = ce("textarea");
    greenInput.id = "theGreen";
    greenInput.className = "textInput";
    greenInput.onkeydown = function()
    {
        keyboardControlOff();
    };
    theMenu.append(greenInput);

    //-//

    let blueLabel = ce("span");
    blueLabel.textContent = "B ";
    theMenu.append(blueLabel);

    //-//

    let blueInput = ce("textarea");
    blueInput.id = "theBlue";
    blueInput.className = "textInput";
    blueInput.onkeydown = function()
    {
        keyboardControlOff();
    };
    theMenu.append(blueInput);

    //-//

    let enterButton = ce("button");
    enterButton.onclick = function()
    {
        customStructureColorFromTextInput();
        keyboardControlOn();
        enterButtonSound();
    };
    enterButton.className = "ourButton";
    enterButton.textContent = "Enter";
    theMenu.append(enterButton);

    //-//

    theMenu.append(ce('hr'));

    //-//

    for (let z = 0; z < colorChoices.length; z++)
    {
        let colorChoiceButton = ce("button");
        colorChoiceButton.textContent = colorChoices[z].name;
        colorChoiceButton.className = 'ourButton';
        colorChoiceButton.onclick = function()
        {
            ge(theStructureId).style.backgroundColor = "rgb("+colorChoices[z].color+")";

            // split color value to array of rgb
            let rgbValues = colorChoices[z].color.split(',');

            ge("theRed").value = rgbValues[0].trim(); 
            ge("theGreen").value = rgbValues[1].trim();
            ge("theBlue").value = rgbValues[2].trim();

            updateStructures(theStructureId);
        };
        theMenu.append(colorChoiceButton);
    }

    //-//

    let customButton = ce("button");
    customButton.onclick = function()
    {
        customStructureColor();
    };
    customButton.className = "ourButton";
    customButton.textContent = "Custom";
    theMenu.append(customButton);
}

function customStructureColor()
{
    let theColor = prompt("Enter RGB as 255,255,255")

    let theColorFormatted = 'rgb('+theColor+')';

    // color of structure
    theColorID.style.backgroundColor = theColorFormatted;

    let colorSeparated = theColor.split(',');

    // fill in the textarea, to show the value of our choice
    ge("theRed").value = colorSeparated[0];
    ge("theGreen").value = colorSeparated[1];
    ge("theBlue").value = colorSeparated[2];

    // update structuresArray to show changed value
    updateStructures(theStructureId);
}

// Read the 3 Textarea, for the red, green, blue values of our structure
// Set the color on our player
function customStructureColorFromTextInput()
{
    let r = ge("theRed").value;
    let g = ge("theGreen").value;
    let b = ge("theBlue").value;

    theColorID.style.backgroundColor= "rgb("+r+", "+g+", "+b+")";

    // update structuresArray to show changed value
    updateStructures(theStructureId);
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

