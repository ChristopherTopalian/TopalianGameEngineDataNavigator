// makeInfoDiv.js

function makeInfoDiv()
{
    let infoDiv = ce('div');
    infoDiv.id = 'infoDiv';
    infoDiv.className = 'divStyle001';
    infoDiv.title = 'makeInfoDiv()';
    infoDiv.innerHTML = 'Info';
    infoDiv.style.position = 'fixed';
    infoDiv.style.right = '0px';
    infoDiv.style.bottom = '10px';
    infoDiv.style.zIndex = 1000;
    infoDiv.style.fontSize = '15px';
    infoDiv.style.textShadow = '1px 1px rgb(0, 0, 0)';
    infoDiv.style.transition = `transform 0.5s ease`;
    ba(infoDiv);
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

