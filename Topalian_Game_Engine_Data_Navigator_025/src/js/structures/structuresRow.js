// structuresRow.js

/*
By Pressing the J button, the player creates a menu that is populated with entries from each Structure made.
The player can then click on any of the entries to be taken to the location of that Structure.
The Structures GoTo Menu can also be opened from the playerMenu, by clicking on the GoTo button.
*/

function structuresRow(theX, theY, sizeX, sizeY, whichArray)
{
    if (ge("structureRowMainDiv"))
    {
        removeElement("structureRowMainDiv");
    }

    //-//

    let mainDiv = ce("div");
    mainDiv.id = "structureRowMainDiv";
    mainDiv.title = "structuresRow(theX, theY, sizeX, sizeY, whichArray)";
    mainDiv.style.position = "absolute";
    mainDiv.style.left = theX + "px";
    mainDiv.style.top = theY + "px";
    mainDiv.style.display = "flex";
    mainDiv.style.flexDirection = "row";
    mainDiv.style.gap = "15px";
    ba(mainDiv);

    //-//

    let closeButton = ce("button");
    closeButton.id = "closeButton";
    closeButton.className = "ourButton";
    closeButton.textContent = "X";
    closeButton.onclick = function()
    {
        ge("structureRowMainDiv").remove();
    };
    mainDiv.append(closeButton);

    //-//

    for (let i = 0; i < whichArray.length; i++) {
        if (whichArray)
        {
            let theTextArea = ce("div");
            theTextArea.style.width = sizeX + 10 + 'px';
            theTextArea.style.height = sizeY + 5 + 'px';
            theTextArea.style.zIndex = "998";
            theTextArea.style.border = "solid 2px";
            theTextArea.style.borderColor = "rgba(0,255,255,1.0)";
            theTextArea.style.background = "rgb(0,0,0)";
            theTextArea.style.fontFamily = "arial";
            theTextArea.style.fontWeight = "normal";
            theTextArea.style.fontSize = "medium";
            theTextArea.style.color = "white";
            theTextArea.style.textAlign = "center";
            theTextArea.style.overflowY = "scroll";
            theTextArea.style.resize = "none";
            theTextArea.setAttribute("readonly", "true");

            //-//

            let goToButton = ce("button");
            goToButton.className = "ourButton";
            goToButton.textContent = "GoTo";
            goToButton.onclick = function()
            {
                structuresGoTo(whichArray[i].id);
            };
            theTextArea.append(goToButton);

            //-//

            theTextArea.append(ce("br"));

            //-//

            let nameText = ce("div");
            nameText.innerHTML = "Name<br><b>" + whichArray[i].name + "</b><br>";
            theTextArea.append(nameText);

            //-//

            let idText = ce("div");
            idText.innerHTML = "ID<br><b>" + whichArray[i].id + "</b><br>";
            theTextArea.append(idText);

            //-//

            let posXText = ce("div");
            posXText.textContent = "X Pos " + whichArray[i].posX + "<br>";
            theTextArea.append(posXText);

            //-//

            let posYText = ce("div");
            posYText.textContent = "Y Pos " + whichArray[i].posY + "<br>";
            theTextArea.append(posYText);

            //-//

            let sizeXText = ce("div");
            sizeXText.textContent = "X Size " + whichArray[i].sizeX + "<br>";
            theTextArea.append(sizeXText);

            //-//

            let sizeYText = ce("div");
            sizeYText.textContent = "Y Size " + whichArray[i].sizeY + "<br>";
            theTextArea.append(sizeYText);
            mainDiv.append(theTextArea);
        }
    }
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

