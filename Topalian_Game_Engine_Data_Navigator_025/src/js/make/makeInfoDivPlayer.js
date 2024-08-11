// makeInfoDivPlayer.js

function makeInfoDivPlayer()
{
    let infoDivPlayer = ce('div');
    infoDivPlayer.id = 'infoDivPlayer';
    infoDivPlayer.className = 'divStyle001';
    infoDivPlayer.title = 'makeInfoDivPlayer()';
    infoDivPlayer.style.position = 'fixed';
    infoDivPlayer.style.right = '0px';
    infoDivPlayer.style.bottom = '60px';
    infoDivPlayer.style.zIndex = 1000;
    infoDivPlayer.style.fontSize = '15px';
    infoDivPlayer.style.textShadow = '1px 1px rgb(0, 0, 0)';
    infoDivPlayer.style.transition = `transform 0.5s ease`;
    infoDivPlayer.innerHTML = 'infoDivPlayer';
    ba(infoDivPlayer);
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

