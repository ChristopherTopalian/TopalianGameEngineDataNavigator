// menuSearch.js

function menuSearch()
{
    audioPlay("sfx_blip_001", 1.0);

    //-//

    if (ge("menuSearchId"))
    {
        removeElement("menuSearchId");
    }

    let theMenu = ce("div");
    theMenu.id = "menuSearchId";
    theMenu.className = "divStyle001";
    theMenu.style.position = "absolute";
    theMenu.style.left = ourPlayer.x + 150 + 'px';
    theMenu.style.top = ourPlayer.y + 'px';
    theMenu.style.width = 300 + 'px';
    theMenu.style.height = 180 + 'px';
    ba(theMenu);

    //-//

    let closeButton = ce("button");
    closeButton.onclick = function()
    {
        removeElement(theMenu.id);
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
    theTitle.innerHTML = "<b> SEARCH </b>";
    theMenu.append(theTitle);

    //-//

    theMenu.append(ce('hr'));

    //-//

    let instruction1 = ce("b");
    instruction1.textContent = "Control + F";
    theMenu.append(instruction1);

    //-//

    let instruction2 = ce("span");
    instruction2.textContent = " to Search for Word or Phrase";
    theMenu.append(instruction2);

    //-//

    theMenu.append(ce('hr'));

    //-//

    let instruction3 = ce("b");
    instruction3.textContent = "Left Click";
    theMenu.append(instruction3);

    //-//

    let instruction4 = ce("span");
    instruction4.textContent = " to Place Player Near Found Word or Phrase";
    theMenu.append(instruction4);
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

