// contentContainersLineCrossed.js

// load Content based on the player's position.
let sector = 1;

function wasLineCrossed(whichId)
{
    let playerElement = ge(whichId);

    // if player exists
    if (playerElement)
    {
        // player speed can be very fast, so we allow a large range of Y value to be able to trigger the event

        if (sector == 1)
        {
            if (Math.floor(positionGet(whichId).y) > yPos && Math.floor(positionGet(whichId).y) < yPos + 70)
            {
                ge('infoDiv').innerHTML = yPos + " Crossed" + '<br>' + 'Sector: ' + sector;

                // loads the content
                containerNews();

                // removes the line
                removeElement("sector1");

                // only allow content to be added one time
                sector = 2;
            }
        }

        if (sector == 2)
        {
            if (Math.floor(positionGet(whichId).y) > yPos && Math.floor(positionGet(whichId).y) < yPos + 70)
            {
                ge('infoDiv').innerHTML = yPos + ' Crossed' + '<br>' + 'Sector: ' + sector;

                containerBooks(); 
                //containerScience();

                // removes line
                removeElement("sector2");

                // only allow content to be added one time
                sector = 3;
            }
        }

        if (sector == 3)
        {
            if (Math.floor(positionGet(whichId).y) > yPos && Math.floor(positionGet(whichId).y) < yPos + 70)
            {
                ge('infoDiv').innerHTML = yPos + ' Crossed' + '<br>' + 'Sector: ' + sector;

                // loads the content
                containerScience();

                // removes the line
                removeElement("sector3");

                //only allow content to be added one time
                sector = 4;
            }
        }

        if (sector == 4)
        {
            if (Math.floor(positionGet(whichId).y) > yPos && Math.floor(positionGet(whichId).y) < yPos + 70)
            {
                ge('infoDiv').innerHTML = yPos + ' Crossed' + '<br>' + 'Sector: ' + sector;

                // loads the content
                containerNewsVideos();

                // removes the line
                removeElement("sector4");

                // only allow content to be added one time
                sector = 5;
            }
        }

        if (sector == 5)
        {
            if (Math.floor(positionGet(whichId).y) > yPos && Math.floor(positionGet(whichId).y) < yPos + 70)
            {
                ge('infoDiv').innerHTML = yPos + ' Crossed' + '<br>' + 'Sector: ' + sector;

                // loads the content
                containerBoxingVideos();

                // removes the line
                removeElement("sector5");

                // only allow content to be added one time
                sector = 6;
            }
        }

        if (sector == 6)
        {
            if (Math.floor(positionGet(whichId).y) > yPos && Math.floor(positionGet(whichId).y) < yPos + 70)
            {
                ge('infoDiv').innerHTML = yPos + ' Crossed' + '<br>' + 'Sector: ' + sector + '\n' + 
                'More Content Soon';

                // containerVi();

                // removes the line
                removeElement("sector6");

                // only allow content to be added one time
                sector = 7;
            }
        }
    }
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

