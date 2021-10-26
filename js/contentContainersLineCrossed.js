//Dedicated to God the Father

//All Rights Reserved Christopher Topalian Copyright 2020-2021

//contentContainersLineCrossed.js

//Load Content based on the player's position.
let sector = 1;

function wasLineCrossed()
{
    //player speed can be Extremely fast, so we allow a large range of Y value to be able to trigger the event
    if(sector == 1)
    {
        if(Math.floor(positionGet("thePlayer").y) > yPos && Math.floor(positionGet("thePlayer").y) < yPos+40)
        {
            ourPlayer.playerId.innerHTML = yPos + " Crossed";

            containerNews(); //loads the content

            removeElement("sector1"); //removes the line

            sector = 2; //only allow content to be added one time
        }
    }

    if(sector == 2)
    {
        if(Math.floor(positionGet("thePlayer").y) > yPos && Math.floor(positionGet("thePlayer").y) < yPos+40)
        {
            ourPlayer.playerId.innerHTML = yPos + " Crossed";

            containerBooks(); 

            removeElement("sector2"); //removes line

            sector = 3; //only allow content to be added one time
        }
    }

    if(sector == 3)
    {
        if(Math.floor(positionGet("thePlayer").y) > yPos && Math.floor(positionGet("thePlayer").y) < yPos+40)
        {
            ourPlayer.playerId.innerHTML = yPos + " Crossed";

            containerScience(); //loads the content

            removeElement("sector3"); //removes the line

            sector = 4; //only allow content to be added one time
        }
    }

    if(sector == 4)
    {
        if(Math.floor(positionGet("thePlayer").y) > yPos && Math.floor(positionGet("thePlayer").y) < yPos+40)
        {
            ourPlayer.playerId.innerHTML = yPos + " Crossed";

            containerNewsVideos(); //loads the content

            removeElement("sector4"); //removes the line

            sector = 5; //only allow content to be added one time
        }
    }
    if(sector == 5)
    {
        if(Math.floor(positionGet("thePlayer").y) > yPos && Math.floor(positionGet("thePlayer").y) < yPos+40)
        {
            ourPlayer.playerId.innerHTML = yPos + " Crossed";

            containerBoxingVideos(); //loads the content

            removeElement("sector5"); //removes the line

            sector = 6; //only allow content to be added one time
        }
    }
}

//--------------------------------------------------//

