// structuresMenu.js

function structuresMenu()
{
    audioPlay("sfx_blip_001", 1.0);

    if (ge("structuresMenu"))
    {
        removeElement("structuresMenu");
    }

    ge('infoDiv').innerHTML = "B to Create Structure";

    //-//

    let structureDiv = ce("div");
    structureDiv.id = "structuresMenu";
    structureDiv.style.position = "absolute";
    structureDiv.style.left = ourPlayer.x + 100 + 'px';
    structureDiv.style.top = ourPlayer.y + 'px';
    structureDiv.style.width = "300px";
    structureDiv.style.height = "200px";
    structureDiv.style.paddingLeft = '5px';
    structureDiv.style.paddingRight = '5px';
    structureDiv.style.zIndex = "1003";
    structureDiv.style.border = "solid 5px";
    structureDiv.style.borderRadius = "10px";
    structureDiv.style.borderColor = "rgb(255, 255, 255)";
    structureDiv.style.background = "rgb(0, 0, 0)";
    structureDiv.style.fontFamily = "arial";
    structureDiv.style.fontWeight = "normal";
    structureDiv.style.fontSize = "medium";
    structureDiv.style.color = "white";
    structureDiv.style.textAlign = "center";
    structureDiv.style.overflowY = 'scroll';
    structureDiv.style.resize = 'both';
    ba(structureDiv);

    //-//

    let closeButton = ce("button");
    closeButton.className = "ourButton";
    closeButton.style.marginBottom = "-4px";
    closeButton.textContent = "X";
    closeButton.onclick = function()
    {
        removeElement(structureDiv.id);
    };
    structureDiv.append(closeButton);

    //-//

    structureDiv.append(ce('hr'));

    //-//

    let titleSpan = ce("span");
    titleSpan.style.color = "rgb(255, 255, 255)";
    titleSpan.innerHTML = "<b> STRUCTURE OPTIONS </b>";
    structureDiv.append(titleSpan);

    //-//

    let startStructureSpan = ce("span");
    startStructureSpan.innerHTML = "<b> Letter B </b> to Start Structure Mode";
    structureDiv.append(startStructureSpan);

    //-//

    let placeStructureSpan = ce("span");
    placeStructureSpan.innerHTML = "<b> Left Click </b> to Place a Structure";
    structureDiv.append(placeStructureSpan);

    //-//

    let gotoStructureSpan = ce("span");
    gotoStructureSpan.innerHTML = "<b> Shift + 1 </b> to GoTo 1st Structure";
    structureDiv.append(gotoStructureSpan);

    //-//

    let gotoSecondStructureSpan = ce("span");
    gotoSecondStructureSpan.innerHTML = "<b> Shift + 2 </b> to GoTo 2nd Structure etc";
    structureDiv.append(gotoSecondStructureSpan);

    //-//

    let rowMenuSpan = ce("span");
    rowMenuSpan.innerHTML = "<b> Letter J </b><br> Creates a Row Menu<br>to GoTo Any Structure";
    structureDiv.append(rowMenuSpan);

    //-//

    let editStructureSpan = ce("span");
    editStructureSpan.innerHTML = "<b> Left Click any Structure </b><br>to EDIT that Structure";
    structureDiv.append(editStructureSpan);

    //-//

    let deleteStructureSpan = ce("span");
    deleteStructureSpan.innerHTML = "<b> Delete Button </b><br>Removes All Structures";
    structureDiv.append(deleteStructureSpan);

    //-//

    let endStructureModeSpan = ce("span");
    endStructureModeSpan.innerHTML = "<b> Esc Button </b> to End Structure Mode";
    structureDiv.append(endStructureModeSpan);
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

