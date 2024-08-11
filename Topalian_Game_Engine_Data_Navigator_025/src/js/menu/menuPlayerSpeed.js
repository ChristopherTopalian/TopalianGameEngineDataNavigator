//menuPlayerSpeed.js

function menuPlayerSpeed()
{
    audioPlay("sfx_blip_001", 1.0);

    // if player menu already exists
    // remove it and create a new one
    if (ge("menuSpeedPlayer"))
    {
        removeElement("menuSpeedPlayer");
    }

    //-//

    let theMenu = ce("div");
    theMenu.id = "menuSpeedPlayer";
    theMenu.className = "divStyle001";
    theMenu.style.position = "absolute";
    theMenu.style.left = ourPlayer.x + 100 + 'px';
    theMenu.style.top = ourPlayer.y - 50 + 'px';
    theMenu.style.width = 400 + 'px';
    theMenu.style.height = 205 + 'px';
    ba(theMenu);

    //-//

    let closeButton = ce("button");
    closeButton.onclick = function()
    {
        removeElement("menuSpeedPlayer");
        keyboardControlOn();
    };
    closeButton.className = "ourButton";
    closeButton.style.marginBottom = "-4px";
    closeButton.textContent = "X";
    theMenu.append(closeButton);

    //-//

    theMenu.append(ce('hr'));

    //-//

    let title = ce("span");
    title.style.color = "rgb(255, 255, 255)";
    title.textContent = "SPEED OPTIONS";
    theMenu.append(title);

    //-//

    theMenu.append(ce('hr'));

    //-//

    let speedValues = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    ];

    for (let z = 0; z < speedValues.length; z++)
    {
        let speedButton = ce("button");
        speedButton.textContent = speedValues[z];
        speedButton.className = 'ourButton';
        speedButton.onclick = function()
        {
            ourPlayer.speedMultiplier = speedValues[z];

            ge("textSpeed").value = speedValues[z];

            updatePlayer();
        };
        theMenu.append(speedButton);
    }

    //-//

    let customButton = ce("button");
    customButton.onclick = customSpeed;
    customButton.className = "ourButton";
    customButton.textContent = "Custom";
    theMenu.append(customButton);

    //-//

    theMenu.append(ce('hr'));

    //-//

    let speedLabel = ce("div");
    speedLabel.textContent = "SPEED ";
    let speedInput = ce("textarea");
    speedInput.id = "textSpeed";
    speedInput.className = "textInput";
    speedInput.onkeydown = keyboardControlOff;
    speedLabel.append(speedInput);
    theMenu.append(speedLabel);

    //-//

    let enterButton = ce("button");
    enterButton.onclick = function()
    {
        customSpeedFromTextInput();
        keyboardControlOn();
        enterButtonSound();
    };
    enterButton.className = "ourButton";
    enterButton.textContent = "Enter";
    theMenu.append(enterButton);
}

function customSpeed()
{
    let theSpeed = prompt("Enter Speed 1 to 1000 etc")

    ourPlayer.speedMultiplier = theSpeed;

    if (theSpeed == '' || theSpeed == null)
    {
        ourPlayer.speedMultiplier = 10;
    }

    ge("textSpeed").value = ourPlayer.speedMultiplier;

    ge('infoDiv').innerHTML = 'Speed: ' + ourPlayer.speedMultiplier;

    // update playerArray to show changed value
    updatePlayer();
}

function customSpeedFromTextInput()
{
    let theSpeed = ge("textSpeed").value;

    ourPlayer.speedMultiplier = theSpeed;

    ge('infoDiv').innerHTML = 'Speed: ' + ourPlayer.speedMultiplier;

    // update playerArray to show changed value
    updatePlayer();
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

