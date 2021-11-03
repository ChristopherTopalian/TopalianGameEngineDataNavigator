//Dedicated to God the Father

//All Rights Reserved Christopher Topalian Copyright 2020-2021

//mousePos.js

/*
    Get the POSITION of the MOUSE ARROW
*/
function mouseOn()
{
    //playSound("blipQuiet2", 1.0);

    //listen for mouse clicks
    window.addEventListener("click", mousePos, false);
}

function mouseOff()
{
    //playSound("blipQuiet2", 1.0);

    //remove the listen for mouse clicks
    window.removeEventListener("click", mousePos, false);

    //clear the text of the player
    ourPlayer.playerId.innerHTML = ' ';
}

function mousePos(theEvent)
{
    let mouseX = theEvent.pageX;

    let mouseY = theEvent.pageY;

    let mousePos = "Mouse" + "<br>" + "X " + mouseX + "<br>"+ "Y " + mouseY;

    console.log(mousePos);

    ourPlayer.playerId.innerHTML= '<br><br><br><br>' + mousePos;

    if(cameraFlag == 0)
    {
        ourPlayer.x = mouseX;
        ourPlayer.y = mouseY;
        movePlayer();
        cameraFlag = 1;
    }
}

//--------------------------------------------------//

