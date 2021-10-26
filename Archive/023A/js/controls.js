//Dedicated to God the Father

//All Rights Reserved Christopher Topalian Copyright 2020-2021

//controls.js

let mFlag = 0;

function mouseFlag(value)
{
    if(value == 0)
    {
        return '1';
    }
    else if(value == 1)
    {
        return '0';
    }
}

//Used when a person is done with a textarea
function keyboardControlOn()
{
    controlFlag = 1;
}

//Used when person is typing in a textarea
function keyboardControlOff()
{
    controlFlag = 0;
}

let controlFlag = 1;

function theControls(e)
{ 
    if(controlFlag ==1)
    {
        if(e.keyCode == 90) //Letter z
        {
            //open player menu
            menuPlayer();
        }

        if(e.keyCode == 88) //Letter x
        {
            //listen for mouse clicks
            window.addEventListener("click", mousePos, false);

            ourPlayer.playerId.innerHTML = "<br><br><br><br>Left Click for <br>Mouse Position";
        }

        if(e.keyCode == 86) //Letter v
        {
            //remove the listen for mouse clicks
            window.removeEventListener("click", mousePos, false);

            //clear the text of the player
            ourPlayer.playerId.innerHTML = ' ';
        }
    
        //SPEED
        if(e.keyCode == 192) //tilda
        {
            ourPlayer.speedMultiplier = 0.5;
            ourPlayer.playerId.innerHTML = "<br><br><br><br>Speed Slow";
        }
        if(e.keyCode == 49 || e.keyCode == 97) //number 1, or numpad 1
        {
            ourPlayer.speedMultiplier = 1;
            ourPlayer.playerId.innerHTML = "<br><br><br><br>Speed 1";
        }
        if(e.keyCode == 50 || e.keyCode == 98) //number 2
        {
            ourPlayer.speedMultiplier = 2;
            ourPlayer.playerId.innerHTML = "<br><br><br><br>Speed 2";
        }
        if(e.keyCode == 51 || e.keyCode == 99) //number 3
        {
            ourPlayer.speedMultiplier = 5;
            ourPlayer.playerId.innerHTML = "<br><br><br><br>Speed 5";
        }
        if(e.keyCode == 52 || e.keyCode == 100) //number 4
        {
            ourPlayer.speedMultiplier = 10;
            ourPlayer.playerId.innerHTML = "<br><br><br><br>Speed 10";
        }
        if(e.keyCode == 53 || e.keyCode == 101) //number 5
        {
            ourPlayer.speedMultiplier = 15;
            ourPlayer.playerId.innerHTML = "<br><br><br><br>Speed 15";
        }
        if(e.keyCode == 54  || e.keyCode == 102) //number 6
        {
            ourPlayer.speedMultiplier = 20;
            ourPlayer.playerId.innerHTML = "<br><br><br><br>Speed 20";
        }
        if(e.keyCode == 55 || e.keyCode == 103) //number 7
        {
            ourPlayer.speedMultiplier = 25;
            ourPlayer.playerId.innerHTML = "<br><br><br><br>Speed 25";
        }
        if(e.keyCode == 56 || e.keyCode == 104) //number 8
        {
            ourPlayer.speedMultiplier = 30;
            ourPlayer.playerId.innerHTML = "<br><br><br><br>Speed 30";
        }
        if(e.keyCode == 57 || e.keyCode == 105) //number 9
        {
            ourPlayer.speedMultiplier = 40;
            ourPlayer.playerId.innerHTML = "<br><br><br><br>Speed 40";
        }
        if(e.keyCode == 48 || e.keyCode == 96) //number 0
        {
            ourPlayer.speedMultiplier = 50;
            ourPlayer.playerId.innerHTML = "<br><br><br><br>Speed 50";
        }
        if(e.keyCode == 189)  //dash
        {
            ourPlayer.speedMultiplier = 100;
            ourPlayer.playerId.innerHTML = "<br><br><br><br>Speed 100";
        }
        if(e.keyCode == 187)  //+
        {
            ourPlayer.speedMultiplier = 200;
            ourPlayer.playerId.innerHTML = "<br><br><br><br>Speed 200";
        }
        if(e.keyCode == 8)  //Back Space button
        {
            ourPlayer.speedMultiplier = 400;
            ourPlayer.playerId.innerHTML = "<br><br><br><br>Speed 400";
        }
        if(e.keyCode == 36)  //Home Button
        {
            ourPlayer.speedMultiplier = 800;
            ourPlayer.playerId.innerHTML = "<br><br><br><br>Speed 800";
        }
        if(e.keyCode == 35)  //End Button
        {
            ourPlayer.speedMultiplier = 1600;
            ourPlayer.playerId.innerHTML = "<br><br><br><br>Speed 1600";
        }
        
        if(e.keyCode == 66)  //Letter b to add Structure
        {
            playSound("blipQuiet2", 1.0);
            
            ourPlayer.playerId.style.backgroundColor = "rgb(100, 75, 255)"; 

            ourPlayer.playerId.innerHTML = "<br><br><br><br>STRUC- <br>TURE<br> MODE<br>ON";

            //Add an event listener for mouse clicks.
            //When left clicked, make a structure at the location of the mouse arrow
            window.addEventListener("click", structuresCreate, false);
        }
        if(e.keyCode == 27)  //ESC Button to exit Structure mode
        {
            playSound("blipQuiet2", 1.0);

            ourPlayer.playerId.style.backgroundColor = "rgb(73, 100, 150)";  //dark blue

            ourPlayer.playerId.innerHTML = "<br><br><br><br>STRUC- <br>TURE<br> MODE<br>OFF";

            //Remove the event listener, that listens for mouse clicks. This deactivates structure creation mode
            window.removeEventListener("click", structuresCreate); 
        }

        if(e.keyCode == 74)  //Letter j
        {
            structuresRow(ourPlayer.x, ourPlayer.y, 125, 200, structuresArray)
            //theX, theY, sizeX, sizeY, whichArray

            //playSound("popSound", 1.0);

            //structuresColorAll();

            //ourPlayer.playerId.innerHTML = "<br><br><br><br>Colored <br>All<br> Struc-<br>tures";
        }
        if(e.keyCode == 46)  //Delete Button
        {
            //playSound("popSound", 1.0);

            //We move the structures row offscreen, as a simple way of clearing the screen of the row.
            structuresRow(-1000, -1000, 10, 10, structuresArray)

            structuresRemoveAll();

            ourPlayer.playerId.innerHTML = "<br><br><br><br>Removed <br>All<br> Struc-<br>tures";
        }

        //STRUCTURE MODE
        //Shift + 1 brings you to structure 1
        if(event.getModifierState("Shift") && e.keyCode == 49) 
        {
            //console.log(structuresArray[0].posX);
            playSound("blipQuiet2", 1.0);
            ourPlayer.x = positionGet("STRUCTURE1").x;
            ourPlayer.y = positionGet("STRUCTURE1").y;
            travelTo(ourPlayer.x, ourPlayer.y);
        }

        //Shift + 2 brings you to structure 2
        if(event.getModifierState("Shift") && e.keyCode == 50) 
        {
            //console.log(structuresArray[1].posX);
            playSound("blipQuiet2", 1.0);
            ourPlayer.x = positionGet("STRUCTURE2").x;
            ourPlayer.y = positionGet("STRUCTURE2").y;
            travelTo(ourPlayer.x, ourPlayer.y);
        }

        //Shift + 3 brings you to structure 3
        if(event.getModifierState("Shift") && e.keyCode == 51) 
        {
            //console.log(structuresArray[2].posX);
            playSound("blipQuiet2", 1.0);
            ourPlayer.x = positionGet("STRUCTURE3").x;
            ourPlayer.y = positionGet("STRUCTURE3").y;
            travelTo(ourPlayer.x, ourPlayer.y);
        }

        //Shift + 4 brings you to structure 4
        if(event.getModifierState("Shift") && e.keyCode == 52) 
        {
            //console.log(structuresArray[3].posX);
            playSound("blipQuiet2", 1.0);
            ourPlayer.x = positionGet("STRUCTURE4").x;
            ourPlayer.y = positionGet("STRUCTURE4").y;
            travelTo(ourPlayer.x, ourPlayer.y);
        }

        //Shift + 5 brings you to structure 5
        if(event.getModifierState("Shift") && e.keyCode == 53) 
        {
            //console.log(structuresArray[4].posX);
            playSound("blipQuiet2", 1.0);
            ourPlayer.x = positionGet("STRUCTURE5").x;
            ourPlayer.y = positionGet("STRUCTURE5").y;
            travelTo(ourPlayer.x, ourPlayer.y);
        }

        //Shift + 6 brings you to structure 6
        if(event.getModifierState("Shift") && e.keyCode == 54) 
        {
            //console.log(structuresArray[5].posX);
            playSound("blipQuiet2", 1.0);
            ourPlayer.x = positionGet("STRUCTURE6").x;
            ourPlayer.y = positionGet("STRUCTURE6").y;
            travelTo(ourPlayer.x, ourPlayer.y);
        }

        //Shift + 7 brings you to structure 7
        if(event.getModifierState("Shift") && e.keyCode == 55) 
        {
            //console.log(structuresArray[6].posX);
            playSound("blipQuiet2", 1.0);
            ourPlayer.x = positionGet("STRUCTURE7").x;
            ourPlayer.y = positionGet("STRUCTURE7").y;
            travelTo(ourPlayer.x, ourPlayer.y);
        }

        //Shift + 8 brings you to structure 8
        if(event.getModifierState("Shift") && e.keyCode == 56) 
        {
            //console.log(structuresArray[7].posX);
            playSound("blipQuiet2", 1.0);
            ourPlayer.x = positionGet("STRUCTURE8").x;
            ourPlayer.y = positionGet("STRUCTURE8").y;
            travelTo(ourPlayer.x, ourPlayer.y);
        }

        //Shift + 9 brings you to structure 9
        if(event.getModifierState("Shift") && e.keyCode == 57) 
        {
            //console.log(structuresArray[8].posX);
            playSound("blipQuiet2", 1.0);
            ourPlayer.x = positionGet("STRUCTURE9").x;
            ourPlayer.y = positionGet("STRUCTURE9").y;
            travelTo(ourPlayer.x, ourPlayer.y);
        }

        //Shift + 0 brings you to structure 10
        if(event.getModifierState("Shift") && e.keyCode == 48) 
        {
            //console.log(structuresArray[9].posX);
            playSound("blipQuiet2", 1.0);
            ourPlayer.x = positionGet("STRUCTURE10").x;
            ourPlayer.y = positionGet("STRUCTURE10").y;
            travelTo(ourPlayer.x, ourPlayer.y);
        }

        //if Control + F is pressed make cameraFlag 0
         if(event.getModifierState("Control") && e.keyCode == 70) // Control + letter f 
        {
            cameraFlag = 0;
        }

        //TRANSPARENCY
        if(e.keyCode == 77) //Letter m
        {
            ourPlayer.playerId.style.opacity = "1.0";
        }
        if(e.keyCode == 78) //Letter n
        {
            ourPlayer.playerId.style.opacity = "0.2";
            ourPlayer.playerId.innerHTML= "";
        }

        if(e.keyCode == 80) //Letter p for player color
        {
            menuPlayerColor();
            playSound("blipQuiet2", 1.0);
        }

        if(e.keyCode == 84) //Letter t for player texture
        {
            menuPlayerTexture();
            playSound("blipQuiet2", 1.0);
        }

        if(e.keyCode == 79) //Letter o for player opacity
        {
            menuPlayerOpacity();
            playSound("blipQuiet2", 1.0);
        }

        if(e.keyCode == 71) //Letter g clears player text
        {
            ourPlayer.playerId.innerHTML = '';
        }
    }

    //Find out which key was pressed
    let theKeyCode = e.keyCode || e.which;
    keyboard[theKeyCode] = e.type == 'keydown';
}

//--------------------------------------------------//

