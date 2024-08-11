// makeEngineTitle.js

function makeEngineTitle()
{
    let gameEngineTitle = ce("div");
    gameEngineTitle.id = "gameEngineTitle";
    gameEngineTitle.className = "glowRed";
    gameEngineTitle.innerHTML = "Topalian Game Engine Data Navigator";
    gameEngineTitle.style.transition = `opacity 5.5s ease`;
    gameEngineTitle.style.opacity = 0;
    gameEngineTitle.style.whiteSpace = 'nowrap';
    setTimeout(function()
    {
        gameEngineTitle.style.opacity = 1.0; 
    }, 4000);
    ba(gameEngineTitle);
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

