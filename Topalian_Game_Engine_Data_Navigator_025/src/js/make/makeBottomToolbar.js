// makeBottomToolbar.js

function activateBuildMode()
{
    setTimeout(function()
    {
        window.addEventListener("click", structuresCreate, false);
    }, 500);
}

let bottomToolbarArray =
[
    {
        name: "Build",
        functionName: `activateBuildMode();`
    },
    {
        name: "Player",
        functionName: `menuPlayer()`,
    },
    {
        name: "GoTo",
        functionName: `structuresRow(ourPlayer.x, ourPlayer.y, 125, 200, structuresArray);`,
    },
    {
        name: "MouseOn",
        functionName: `mouseOn()`,
    },
    {
        name: "MouseOff",
        functionName: `mouseOff()`,
    }
];

function makeBottomToolbar(whichArray)
{
    let theDetails = ce('details');
    theDetails.setAttribute('open', '');
    theDetails.style.position = 'fixed';
    theDetails.style.left = '2px';
    theDetails.style.bottom = '0px';
    theDetails.style.zIndex = '900000000000';
    theDetails.style.color = 'rgb(100, 100, 100)';
    ba(theDetails);

    //-//

    let theSummary = ce('summary');
    theSummary.innerHTML = '';
    theDetails.append(theSummary);

    //-//

    let toolBarMainDiv = ce("div");
    toolBarMainDiv.id = "toolBarMainDiv";
    toolBarMainDiv.title = "makeBottomToolbar();";
    theDetails.append(toolBarMainDiv);

    //-//

    let toolBarSubDiv = ce("div");
    toolBarSubDiv.id = "toolBarSubDiv";
    toolBarSubDiv.style.display = ' flex';
    toolBarSubDiv.style.justifyContent = ' space-around';
    toolBarSubDiv.style.color = 'white';
    toolBarMainDiv.append(toolBarSubDiv);

    //-//

    for (let x = 0; x < whichArray.length; x++) {
        let theButton = ce("button");
        theButton.id = whichArray[x].name;
        theButton.className = "ourButton";
        theButton.style.backgroundColor = "rgb(0, 0, 0)";
        theButton.style.color = "rgb(100, 100, 100)";
        theButton.innerHTML = whichArray[x].name;

        theButton.onclick = function()
        {
            eval(' ' + whichArray[x].functionName + ' ');
        };

        toolBarSubDiv.append(theButton);
    }
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

