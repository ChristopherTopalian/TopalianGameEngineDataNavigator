// sound.js

// PLAY SONG and use a Toggle Button system for activating and stopping the songs

let songFlag  = 0;

let songVolume = 0.3;

let songChosenId;

let songActive = 0;

function loadSounds(whichArray)
{
    for (let x = 0; x < whichArray.length; x++)
    {
        let theSound = ce('audio');

        if (online == false)
        {
            theSound.src = whichArray[x].soundFileOffline;
        }
        else
        {
            theSound.src = whichArray[x].soundFileOnline;
        }

        theSound.id = whichArray[x].name;
        theSound.loop = false;
        theSound.volume = 1.0;
        ba(theSound);
    }
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

