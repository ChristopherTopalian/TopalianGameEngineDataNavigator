// keyboardControl.js

// used when a person is done with a textarea
function keyboardControlOn()
{
    controlFlag = 1;
}

// used when person is typing in a textarea
function keyboardControlOff()
{
    controlFlag = 0;
}

function hideShow(whichId)
{
    ge(whichId).style.transform = 'translate(-50px, 0px)';

    setTimeout(function()
    {
        ge(whichId).style.transform = 'translate(0px, 0px)';
    }, 1000);
}

function theControls(e)
{
    if (controlFlag ==1)
    {
        // Letter z
        if (e.keyCode == 90)
        {
            // open player menu
            menuPlayer();
        }

        // Letter x
        if (e.keyCode == 88)
        {
            // listen for mouse clicks
            window.addEventListener("click", mousePos, false);

            ge('infoDivPlayer').innerHTML = "Left Click for <br>Mouse Position";
        }

        // Letter v
        if (e.keyCode == 86)
        {
            // remove listen for mouse clicks
            window.removeEventListener("click", mousePos, false);

            ge('infoDivPlayer').innerHTML = '';
        }
    
        // SPEED

        // tilda
        if(e.keyCode == 192)
        {
            ourPlayer.speedMultiplier = 0.5;

            ge('infoDivPlayer').innerHTML = "Speed Tilda";

            hideShow('infoDivPlayer');
        }

        // number 1, or numpad 1
        if (e.keyCode == 49 || e.keyCode == 97)
        {
            ourPlayer.speedMultiplier = 1;

            ge('infoDivPlayer').innerHTML = "Speed 1";

            hideShow('infoDivPlayer');
        }

        // number 2
        if (e.keyCode == 50 || e.keyCode == 98)
        {
            ourPlayer.speedMultiplier = 2;

            ge('infoDivPlayer').innerHTML = "Speed 2";

            hideShow('infoDivPlayer');
        }

        // number 3
        if (e.keyCode == 51 || e.keyCode == 99)
        {
            ourPlayer.speedMultiplier = 5;

            ge('infoDivPlayer').innerHTML = "Speed 3";

            hideShow('infoDivPlayer');
        }

        //number 4
        if (e.keyCode == 52 || e.keyCode == 100)
        {
            ourPlayer.speedMultiplier = 10;
            ge('infoDivPlayer').innerHTML = "Speed 4";

            hideShow('infoDivPlayer');
        }

        // number 5
        if (e.keyCode == 53 || e.keyCode == 101)
        {
            ourPlayer.speedMultiplier = 15;
            ge('infoDivPlayer').innerHTML = "Speed 5";

            hideShow('infoDivPlayer');
        }

        // number 6
        if (e.keyCode == 54  || e.keyCode == 102)
        {
            ourPlayer.speedMultiplier = 20;
            ge('infoDivPlayer').innerHTML = "Speed 6";

            hideShow('infoDivPlayer');
        }

        // number 7
        if (e.keyCode == 55 || e.keyCode == 103)
        {
            ourPlayer.speedMultiplier = 25;
            ge('infoDivPlayer').innerHTML = "Speed 7";

            hideShow('infoDivPlayer');
        }

        // number 8
        if (e.keyCode == 56 || e.keyCode == 104)
        {
            ourPlayer.speedMultiplier = 30;
            ge('infoDivPlayer').innerHTML = "Speed 8";

            hideShow('infoDivPlayer');
        }

        // number 9
        if (e.keyCode == 57 || e.keyCode == 105)
        {
            ourPlayer.speedMultiplier = 40;
            ge('infoDivPlayer').innerHTML = "Speed 9";

            hideShow('infoDivPlayer');
        }

        // number 0
        if (e.keyCode == 48 || e.keyCode == 96)
        {
            ourPlayer.speedMultiplier = 50;
            ge('infoDivPlayer').innerHTML = "Speed 0";

            hideShow('infoDivPlayer');
        }

        // dash
        if (e.keyCode == 173)
        {
            ourPlayer.speedMultiplier = 100;
            ge('infoDivPlayer').innerHTML = "Speed -";

            hideShow('infoDivPlayer');
        }

        // +
        if (e.keyCode == 61)
        {
            ourPlayer.speedMultiplier = 200;
            ge('infoDivPlayer').innerHTML = "Speed +";

            hideShow('infoDivPlayer');
        }

        // Back Space button
        if (e.keyCode == 8)
        {
            ourPlayer.speedMultiplier = 400;
            ge('infoDivPlayer').innerHTML = "Speed Backspace";

            hideShow('infoDivPlayer');
        }

        // Insert Button
        if (e.keyCode == 45)
        {
            ourPlayer.speedMultiplier = 600;
            ge('infoDivPlayer').innerHTML = "Speed Insert";

            hideShow('infoDivPlayer');
        }

        // Home Button
        if (e.keyCode == 36)
        {
            ourPlayer.speedMultiplier = 800;
            ge('infoDivPlayer').innerHTML = "Speed Home";

            hideShow('infoDivPlayer');
        }

        // PageUp Button
        if (e.keyCode == 33)
        {
            ourPlayer.speedMultiplier = 1600;
            ge('infoDivPlayer').innerHTML = "Speed PageUp";

            hideShow('infoDivPlayer');
        }

        //-//

        // Letter b to add Structure
        if (e.keyCode == 66)
        {
            audioPlay("sfx_blip_001", 1.0);

            ge('infoDivPlayer').innerHTML = "STRUC- <br>TURE<br> MODE<br>ON";

            // when left clicked, make a structure at the location of the mouse arrow
            window.addEventListener("click", structuresCreate, false);
        }

        // Esc Button to exit Structure mode
        // escape button
        if (e.keyCode == 27)
        {
            audioPlay("sfx_blip_001", 1.0);

            ge('infoDivPlayer').innerHTML = "STRUC- <br>TURE<br> MODE<br>OFF";

            // Remove the event listener, that listens for mouse clicks. This deactivates structure creation mode
            window.removeEventListener("click", structuresCreate); 
        }

        // letter j
        if (e.keyCode == 74)
        {
            // theX, theY, sizeX, sizeY, whichArray
            structuresRow(ourPlayer.x, ourPlayer.y, 125, 200, structuresArray);

            audioPlay("sfx_blip_001", 1.0);
        }

        // Delete Button
        if (e.keyCode == 46)
        {
            // audioPlay("sfx_blip_001", 1.0);

            // we move the structures row offscreen, as a simple way of clearing the screen of the row.
            structuresRow(-1000, -1000, 10, 10, structuresArray)

            structuresRemoveAll();

            ge('infoDivPlayer').innerHTML = "Removed <br>All<br> Struc-<br>tures";
        }

        // STRUCTURE MODE

        // Shift + 1 brings you to structure 1
        if(event.getModifierState("Shift") && e.keyCode == 49) 
        {
            audioPlay("sfx_blip_001", 1.0);

            // get the position
            let newPosition = positionGet(structuresArray[0].id);

            // update player position
            ourPlayer.x = newPosition.x;
            ourPlayer.y = newPosition.y;

            movePlayer(activePlayer);
        }

        // Shift + 2 brings you to structure 2
        if(event.getModifierState("Shift") && e.keyCode == 50) 
        {
            audioPlay("sfx_blip_001", 1.0);

            // get the position
            let newPosition = positionGet(structuresArray[1].id);

            // update player position
            ourPlayer.x = newPosition.x;
            ourPlayer.y = newPosition.y;

            movePlayer(activePlayer);
        }

        // Shift + 3 brings you to structure 3
        if(event.getModifierState("Shift") && e.keyCode == 51) 
        {
            audioPlay("sfx_blip_001", 1.0);

            // get the position
            let newPosition = positionGet(structuresArray[2].id);

            // update player position
            ourPlayer.x = newPosition.x;
            ourPlayer.y = newPosition.y;

            movePlayer(activePlayer);
        }

        // Shift + 4 brings you to structure 4
        if (event.getModifierState("Shift") && e.keyCode == 52) 
        {
            audioPlay("sfx_blip_001", 1.0);

            // get the position
            let newPosition = positionGet(structuresArray[3].id);

            // update player position
            ourPlayer.x = newPosition.x;
            ourPlayer.y = newPosition.y;

            movePlayer(activePlayer);
        }

        // Shift + 5 brings you to structure 5
        if (event.getModifierState("Shift") && e.keyCode == 53) 
        {
            audioPlay("sfx_blip_001", 1.0);

            // get the position
            let newPosition = positionGet(structuresArray[4].id);

            // update player position
            ourPlayer.x = newPosition.x;
            ourPlayer.y = newPosition.y;

            movePlayer(activePlayer);
        }

        // Shift + 6 brings you to structure 6
        if (event.getModifierState("Shift") && e.keyCode == 54) 
        {
            audioPlay("sfx_blip_001", 1.0);

            // get the position
            let newPosition = positionGet(structuresArray[5].id);

            // update player position
            ourPlayer.x = newPosition.x;
            ourPlayer.y = newPosition.y;

            movePlayer(activePlayer);
        }

        // Shift + 7 brings you to structure 7
        if(event.getModifierState("Shift") && e.keyCode == 55) 
        {
            audioPlay("sfx_blip_001", 1.0);

            // get the position
            let newPosition = positionGet(structuresArray[6].id);

            // update player position
            ourPlayer.x = newPosition.x;
            ourPlayer.y = newPosition.y;

            movePlayer(activePlayer);
        }

        // Shift + 8 brings you to structure 8
        if(event.getModifierState("Shift") && e.keyCode == 56) 
        {
            audioPlay("sfx_blip_001", 1.0);

            // get the position
            let newPosition = positionGet(structuresArray[7].id);

            // update player position
            ourPlayer.x = newPosition.x;
            ourPlayer.y = newPosition.y;

            movePlayer(activePlayer);
        }

        // Shift + 9 brings you to structure 9
        if (event.getModifierState("Shift") && e.keyCode == 57) 
        {
            audioPlay("sfx_blip_001", 1.0);

            // get the position
            let newPosition = positionGet(structuresArray[8].id);

            // update player position
            ourPlayer.x = newPosition.x;
            ourPlayer.y = newPosition.y;

            movePlayer(activePlayer);
        }

        // Shift + 0 brings you to structure 10
        if (event.getModifierState("Shift") && e.keyCode == 48) 
        {
            audioPlay("sfx_blip_001", 1.0);

            // get the position
            let newPosition = positionGet(structuresArray[9].id);

            // update player position
            ourPlayer.x = newPosition.x;
            ourPlayer.y = newPosition.y;

            movePlayer(activePlayer);
        }

        // if Control + F is pressed make cameraFlag 0
        if (event.getModifierState("Control") && e.keyCode == 70)
        {
            cameraFlag = 0;
        }

        // TRANSPARENCY

        // Letter m
        if (e.keyCode == 77)
        {
            ge(activePlayer).style.opacity = "1.0";
        }

        // Letter n
        if (e.keyCode == 78)
        {
            ge(activePlayer).style.opacity = "0.2";

            ge('infoDivPlayer').innerHTML= "";
        }

        // Letter p for player color
        if (e.keyCode == 80)
        {
            menuPlayerColor();

            audioPlay("sfx_blip_001", 1.0);
        }

        // Letter t for player texture
        if (e.keyCode == 84)
        {
            menuPlayerTexture();
            audioPlay("sfx_blip_001", 1.0);
        }

        // Letter o for player opacity
        if (e.keyCode == 79)
        {
            menuPlayerOpacity();
            audioPlay("sfx_blip_001", 1.0);
        }

        // Letter g clears player text
        if (e.keyCode == 71)
        {
            ge('infoDivPlayer').innerHTML = "";
            menuPlayer();
        }
    }

    let theKeyCode = e.keyCode || e.which;

    if (e.type === 'keydown')
    {
        keyboard[theKeyCode] = true;
    }
    else if (e.type === 'keyup')
    {
        keyboard[theKeyCode] = false;
    }
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

