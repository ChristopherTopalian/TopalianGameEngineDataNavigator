// menuPlayerName.js

function menuPlayerName(whichId)
{
    audioPlay("sfx_blip_001", 1.0);

    // if menu exists, remove it, and then create a new menu wherever the player is
    if (ge("menuNamePlayer"))
    {
        removeElement("menuNamePlayer");
    }

    //-//

    let theMenu = ce("div");
    theMenu.id = "menuNamePlayer";
    theMenu.className = "divStyle001";
    theMenu.title = "menuPlayerName(whichId);";
    theMenu.style.position = "absolute";
    theMenu.style.left = ourPlayer.x + 150 + 'px';
    theMenu.style.top = ourPlayer.y + 'px';
    theMenu.style.width = '250px';
    theMenu.style.height = '155px';
    ba(theMenu);

    //-//

    let closeButton = ce("button");
    closeButton.textContent = "X";
    closeButton.className = "ourButton";
    closeButton.style.marginBottom = "-4px";
    closeButton.onclick = function()
    {
        removeElement("menuNamePlayer");
        keyboardControlOn();
    };
    theMenu.append(closeButton);

    //-//

    let hr = ce("hr");
    hr.style.height = "1px";
    hr.style.border = "none";
    hr.style.backgroundColor = "rgb(50, 50, 50)";
    hr.style.color = "rgb(50, 50, 50)";
    theMenu.append(hr);

    //-//

    let titleSpan = ce("span");
    titleSpan.textContent = "NAME OF PLAYER";
    titleSpan.style.color = "rgb(255, 255, 255)";
    theMenu.append(titleSpan);

    //-//

    theMenu.append(ce('br'));

    //-//

    let nameLabel = ce('div');
    nameLabel.textContent = "Name ";
    theMenu.append(nameLabel);

    //-//

    let nameTextArea = ce("textarea");
    nameTextArea.id = "thePlayerName";
    nameTextArea.className = "textInput";
    nameTextArea.onkeydown = function()
    {
        keyboardControlOff();
    };
    theMenu.append(nameTextArea);

    //-//

    theMenu.append(ce('br'));

    //-//

    let enterButton = ce("button");
    enterButton.textContent = "Enter";
    enterButton.className = "ourButton";
    enterButton.onclick = function()
    {
        customPlayerNameFromTextInput();
        keyboardControlOn();
        enterButtonSound();
    };
    theMenu.append(enterButton);

    //-//

    let hr2 = ce("hr");
    hr2.className = "hrCompact";
    theMenu.append(hr2);

    //-//

    let customButton = ce("button");
    customButton.textContent = "Custom";
    customButton.className = "ourButton";
    customButton.onclick = customPlayerName;
    theMenu.append(customButton);
}

function customPlayerName()
{
    let theName = prompt("Enter Name")

    // name of Player
    ge(activePlayer).style.innerHTML = theName;

    // update textarea, to show name entered
    ge("thePlayerName").value = theName;

    playerArray[0].name = theName;

    ge(activePlayer).innerHTML = theName;

    showPlayerData();

    ge("ourPlayerName").innerHTML = '<hr class = "hrCompact">' + theName + '<hr class = "hrCompact">';
}

// Read the 3 Textarea, for the Name value of our Player
// Set the Name on our Player

function customPlayerNameFromTextInput()
{
    let theName = ge("thePlayerName").value;

    ge(activePlayer).style.innerHTML= theName;

    playerArray[0].name = theName;

    ge(activePlayer).innerHTML = theName;

    showPlayerData();
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

