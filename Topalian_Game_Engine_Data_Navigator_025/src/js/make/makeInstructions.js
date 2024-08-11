// makeInstructions.js

function makeInstructions()
{
    if (ge('instructions'))
    {
        removeElement('instructions');
    }

    audioPlay("sfx_blip_001", 1.0);

    //-//

    let mainDiv = ce("div");
    mainDiv.id = "instructions";
    mainDiv.title = "makeInstructions();";
    mainDiv.style.position = "absolute";
    mainDiv.style.left = ourPlayer.x + 100 + 'px';
    mainDiv.style.top = ourPlayer.y - 20 + 'px';
    mainDiv.style.width = 400 + 'px';
    mainDiv.style.height = 200 + 'px';
    mainDiv.style.display = "flex";
    mainDiv.style.flexDirection = "column";
    ba(mainDiv);

    //-//

    let subDiv = ce("div");
    mainDiv.append(subDiv);

    //-//

    let closeButton = ce("button");
    closeButton.className = "ourButton";
    closeButton.textContent = "X";
    closeButton.onclick = function()
    {
        removeElement("instructions");
    };
    subDiv.append(closeButton);

    //-//

    subDiv.append(ce('hr'));

    //-//

    let dedication = ce("div");
    dedication.textContent = "Dedicated to God the Father";
    subDiv.append(dedication);

    //-//

    let hrUnderDedication = ce('hr');
    hrUnderDedication.style.marginBottom = '10px';
    subDiv.append(hrUnderDedication);

    //-//

    let instruction1 = ce("div");
    instruction1.textContent = "W is Up, S is Down, A is Left, D is Right";
    subDiv.append(instruction1);

    //-//

    subDiv.append(ce("br"));

    //-//

    let instruction2 = ce("div");
    instruction2.textContent = "Numbers 1 to 9 Changes Speed";
    subDiv.append(instruction2);

    //-//

    subDiv.append(ce("br"));

    //-//

    let instruction3 = ce("div");
    instruction3.textContent = "0 - + BackSpace Home End for FASTER SPEEDS";
    subDiv.append(instruction3);

    //-//

    subDiv.append(ce("br"));

    //-//

    let instruction4 = ce("div");
    instruction4.textContent = "Z for Player Menu or Double Click on Player for Player Menu";
    subDiv.append(instruction4);

    //-//

    subDiv.append(ce("br"));

    //-//

    let instruction5 = ce("div");
    instruction5.textContent = "X to start Mouse Position Mode";
    subDiv.append(instruction5);

    //-//

    subDiv.append(ce("br"));

    //-//

    let instruction6 = ce("div");
    instruction6.textContent = "Left Click to find Mouse Position";
    subDiv.append(instruction6);

    //-//

    subDiv.append(ce("br"));

    //-//

    let instruction7 = ce("div");
    instruction7.textContent = "V to end Mouse Position mode";
    subDiv.append(instruction7);

    //-//

    subDiv.append(ce("br"));

    //-//

    let instruction8 = ce("div");
    instruction8.textContent = "B for Structure Mode";
    subDiv.append(instruction8);

    //-//

    subDiv.append(ce("br"));

    //-//

    let instruction9 = ce("div");
    instruction9.textContent = "Left Click to Place a Structure";
    subDiv.append(instruction9);

    //-//

    subDiv.append(ce("br"));

    //-//

    let instruction10 = ce("div");
    instruction10.textContent = "ESC to Exit Structure Mode";
    subDiv.append(instruction10);

    //-//

    subDiv.append(ce("br"));

    //-//

    let instruction11 = ce("div");
    instruction11.textContent = "Left Click any Structure to EDIT that Structure";
    subDiv.append(instruction11);

    //-//

    subDiv.append(ce("br"));

    //-//

    let instruction12 = ce("div");
    instruction12.textContent = "Delete to Remove Structures";
    subDiv.append(instruction12);

    //-//

    subDiv.append(ce("br"));

    //-//

    let instruction13 = ce("div");
    instruction13.textContent = "J to Create a Structures GoTo Menu";
    subDiv.append(instruction13);

    //-//

    subDiv.append(ce("br"));

    //-//

    let instruction14 = ce("div");
    instruction14.textContent = "Load Button to Load Structures Data";
    subDiv.append(instruction14);

    //-//

    subDiv.append(ce("br"));

    //-//

    let instruction15 = ce("div");
    instruction15.textContent = "P for Color Player Menu";
    subDiv.append(instruction15);

    //-//

    subDiv.append(ce("br"));

    //-//

    let instruction16 = ce("div");
    instruction16.textContent = "T for Texture Player Menu";
    subDiv.append(instruction16);

    //-//

    subDiv.append(ce("br"));

    //-//

    let instruction17 = ce("div");
    instruction17.textContent = "O for Player Opacity Menu";
    subDiv.append(instruction17);

    //-//

    subDiv.append(ce("br"));

    //-//

    let instruction18 = ce("div");
    instruction18.textContent = "N for Transparent, M for Solid";
    subDiv.append(instruction18);

    //-//

    subDiv.append(ce("br"));

    //-//

    let instruction19 = ce("div");
    instruction19.textContent = "G for Clearing Player Text";
    subDiv.append(instruction19);

    //-//

    subDiv.append(ce("br"));

    //-//

    let instruction20 = ce("div");
    instruction20.textContent = "Control + F to Search, then Left Click to Travel to Search Result";
    subDiv.append(instruction20);

    //-//

    subDiv.append(ce("br"));

    //-//

    let linkToCode = ce("a");
    linkToCode.href = "https://github.com/ChristopherTopalian/TopalianGameEngineDataNavigator";
    linkToCode.target = "_blank";
    linkToCode.textContent = "Christopher Topalian Data Navigator Code Here";
    subDiv.append(linkToCode);
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

