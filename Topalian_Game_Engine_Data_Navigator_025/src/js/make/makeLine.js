// makeLine.js

// Make a Message Box
// with a message of the Section name
function makeLine(theYPos, sector, ourMessage)
{
    let makeLine = ce("div");
    makeLine.id = "sector" + sector;
    makeLine.className = "divStyle001";
    makeLine.style.position = "absolute";
    makeLine.style.left = 0 +'px';
    makeLine.style.top = theYPos + 'px';
    makeLine.style.width = 1000 +'px';
    makeLine.style.height = 25 +'px';
    makeLine.innerHTML = ourMessage;
    ba(makeLine);
}

//-//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

