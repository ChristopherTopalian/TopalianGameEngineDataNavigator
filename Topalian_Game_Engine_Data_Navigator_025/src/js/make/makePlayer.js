// makePlayer.js

function makePlayer()
{
    let player = ce("div");
    player.id = "thePlayer";
    player.style.position = 'absolute';
    player.style.left = ourPlayer.x;
    player.style.top = ourPlayer.y;
    player.style.backgroundSize = 'cover';
    player.style.backgroundPosition = 'center center';
    player.style.backgroundRepeat = 'no-repeat';
    player.style.objectFit = 'cover';
    player.style.zIndex = '2000';
    player.ondblclick = function()
    {
        menuPlayer();
    };
    player.onclick = function()
    {
        keyboardControlOn();
    };
    ba(player);
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

