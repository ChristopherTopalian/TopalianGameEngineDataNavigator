//Dedicated to God the Father

//All Rights Reserved Christopher Topalian Copyright 2020-2021

//sound.js

/*
    PLAY SONG and use a Toggle Button system for activating and stopping the song
*/

let songFlag  = 0;

let songVolume = 0.3;

let songChosenId;

let songActive = 0;

//function playSong(whichSongId, theVolume)
function playSong(whichSongId)
{
    let song = document.getElementById(whichSongId);

    song.volume = songVolume;

    songChosenId = song.id + "Button";

    console.log(songChosenId);

    //Color the button of the song chosen
    document.getElementById(songChosenId).style.background="rgb(128,128,128)";

    //console.log(song.id);
    
    if(songFlag == 0)
    {
        song.play();

        song.volume= songVolume;

        songFlag = 1;

        //example
        //playSong("emotionalBlockbuster2Song", 1.0);
    }
    else if(songFlag == 1)
    {
        //Color the chosen song's Button back to its default color
        document.getElementById(songChosenId).style.background="rgb(0, 77, 129)";
        
        let song = document.getElementById(whichSongId);
        song.pause();

        songFlag = 0;

        //example
        //stopSound("emotionalBlockbuster2Song");
    }
}

/* PLAYS specified SOUND FILE */
function playSound(whichSongId, theVolume)
{
    let song = document.getElementById(whichSongId);
    song.play();
    song.volume = theVolume;

    //example
    //playSound("blip", 1.0);
}

/* STOPS specified SOUND FILE */
function stopSound(whichSongId)
{
    let song = document.getElementById(whichSongId);
    song.pause();

    //example
    //stopSound("blip");
}

function volumeSet(theVolume)
{
    songVolume = theVolume;
}

function enterButtonSound()
{
    playSound("blipQuiet1", 1.0);
}

/* 
    Song Menu Div that is Created
    when Songs Button is clicked 
*/
function songChoicesMenu()
{
    playSound("blipQuiet2", 1.0);

    //TYPE OF ELEMENT TO CREATE
    let songDiv = document.createElement("div");

    //POSITION
    songDiv.style.position = "absolute";
    songDiv.style.left = ourPlayer.x + 100 +'px';
    songDiv.style.top = ourPlayer.y - 150 +'px';
    //songDiv.style.left = theX + 'px';
    //songDiv.style.top = theY +'px';

    //SIZE
    songDiv.style.width = 300 +'px';
    songDiv.style.height = 434 +'px';

    //LAYER
    songDiv.style.zIndex = "998";

    //BACKGROUND COLOR
    songDiv.style.background = "rgb(0,0,0)";

    //BORDER
    songDiv.style.border = "solid 5px";
    songDiv.style.borderRadius= "10px";
    songDiv.style.borderColor = "rgb(255,255,255)";

    //FONT
    songDiv.style.fontFamily = "arial";
    songDiv.style.fontWeight = "normal";
    songDiv.style.fontSize = "medium";
    songDiv.style.color = "white";
    songDiv.style.textAlign = "center";
    
    //songDiv.setAttribute("class", "divBackground");

    //songDiv.id = whichArray[i].id;

    //songDiv.id = Math.floor(350000 + Math.random() * 9750000);

    //ID
    songDiv.id = "songMenu"

    //Remove Button
    songDiv.innerHTML += '<button onclick=removeElement(\''+songDiv.id+'\'); class="ourButton" style="margin-bottom: -1px">X</button><hr class=\'hrCompact\'>'; 

    //WE BUILD THE MENU USING innerHTML
                        
    songDiv.innerHTML+= '<span><b>VOLUME</b></span><hr class="hrCompact">';

    songDiv.innerHTML += '<button onclick=volumeSet(\'0.01\'); class="ourButton">1</button>'; 

    songDiv.innerHTML += '<button onclick=volumeSet(\'0.05\'); class="ourButton">2</button>';

    songDiv.innerHTML += '<button onclick=volumeSet(\'0.09\'); class="ourButton">3</button>'; 

    songDiv.innerHTML += '<button onclick=volumeSet(\'0.12\'); class="ourButton">4</button>';

    songDiv.innerHTML += '<button onclick=volumeSet(\'0.2\'); class="ourButton">5</button>';

    songDiv.innerHTML += '<button onclick=volumeSet(\'0.4\'); class="ourButton">6</button>';

    songDiv.innerHTML += '<button onclick=volumeSet(\'0.6\'); class="ourButton">7</button>';

    songDiv.innerHTML += '<button onclick=volumeSet(\'0.8\'); class="ourButton">8</button>';

    songDiv.innerHTML += '<button onclick=volumeSet(\'0.9\'); class="ourButton">9</button>'; 

    songDiv.innerHTML += '<button onclick=volumeSet(\'1.0\'); class="ourButton">10</button><hr class=\'hrCompact\'>';

    songDiv.innerHTML+= '<span><b>SONGS</b></span><hr class="hrCompact">';

    for(let z = 0; z < songsArray.length; z++)
    {
        songDiv.innerHTML+= '<button onclick="playSong(\''+songsArray[z].theId+'\');" class=\'ourButton\' id=\''+songsArray[z].theId+'Button\'>\''+songsArray[z].name+'\'</button><hr class="hrCompact">';
    }
                    
    /*
        If the Song Menu Div already exists, then remove it and create a new Song Menu wherever the Player is
    */
    if(document.getElementById("songMenu"))
    {
        removeElement("songMenu");
        
        document.body.append(songDiv);
    }
    else
    {
        document.body.append(songDiv);
    }

    if(songFlag ==1)
    {
        //Color the button of the song chosen
        document.getElementById(songChosenId).style.background="rgb(128,128,128)";
    }
    if(songFlag == 0)
    {
        //Color the button of the song chosen
        document.getElementById(songChosenId).style.background="rgb(0, 77, 129)";
    }
}

let songsArray =
[
    {
        name: "Emotional Blockbuster 2",
        theId: "EmotionalBlockbuster2",
        theLocation: "./song/Emotional Blockbuster 2.mp3",
        theURL: "https://64482293-555277121853380144.preview.editmysite.com/uploads/6/4/4/8/64482293/emotional_blockbuster_2.mp3"
    },
    {
        name: "Video Game Blockbuster",
        theId: "VideoGameBlockbuster",
        theLocation: "./song/Video Game Blockbuster.mp3",
        theURL: "https://64482293-555277121853380144.preview.editmysite.com/uploads/6/4/4/8/64482293/video_game_blockbuster.mp3"
    },
    {
        name: "Ice and Snow",
        theId: "iceAndSnow",
        theLocation: "./song/Ice and Snow.mp3",
        theURL: "https://collegeofscripting.weebly.com/uploads/6/4/4/8/64482293/ice_and_snow.mp3"
    },
    {
        name: "Kings Trailer",
        theId: "kingsTrailer",
        theLocation: "./song/Kings Trailer.mp3",
        theURL: "https://collegeofscripting.weebly.com/uploads/6/4/4/8/64482293/kings_trailer.mp3"
    },
    {
        name: "Lonely Mountain",
        theId: "lonelyMontain",
        theLocation: "./song/Lonely Mountain.mp3",
        theURL: "https://collegeofscripting.weebly.com/uploads/6/4/4/8/64482293/lonely_mountain.mp3"
    },
    {
        name: "Parhelion",
        theId: "parehelion",
        theLocation: "./song/Parhelion.mp3",
        theURL: "https://collegeofscripting.weebly.com/uploads/6/4/4/8/64482293/parhelion.mp3"
    },
    {
        name: "Night Vigil",
        theId: "nightVigil",
        theLocation: "./song/Night Vigil.mp3",
        theURL: "https://collegeofscripting.weebly.com/uploads/6/4/4/8/64482293/night_vigil.mp3"
    },
    {
        name: "The Abyss",
        theId: "theAbyss",
        theLocation: "./song/The Abyss.mp3",
        theURL: "https://collegeofscripting.weebly.com/uploads/6/4/4/8/64482293/the_abyss.mp3"
    },
    {
        name: "Burt's Requiem",
        theId: "burtsRequiem",
        theLocation: "./song/Burt's Requiem.mp3",
        theURL: "https://collegeofscripting.weebly.com/uploads/6/4/4/8/64482293/burts_requiem.mp3"
    },
    {
        name: "Horizon Flare",
        theId: "horizonFlare",
        theLocation: "./song/Horizon Flare.mp3",
        theURL: "https://collegeofscripting.weebly.com/uploads/6/4/4/8/64482293/horizon_flare.mp3"
    },
    {
        name: "Motions",
        theId: "motions",
        theLocation: "./song/Motions.mp3",
        theURL: "https://collegeofscripting.weebly.com/uploads/6/4/4/8/64482293/motions.mp3"
    }
];

let soundsArray =
[
    {
        name: "Blip Sound",
        theId: "blipSound",
        theLocation: "./sound/blipQuiet2.mp3",
        theURL: "https://64482293-555277121853380144.preview.editmysite.com/uploads/6/4/4/8/64482293/blip.mp4"
    },
    {
        name: "Pop Sound",
        theId: "popSound",
        theLocation: "./sound/popSound.mp3",
        theURL: "https://64482293-555277121853380144.preview.editmysite.com/uploads/6/4/4/8/64482293/pop_sound.mp4"
    },
    {
        name: "Blip Sound1",
        theId: "blipPhaser",
        theLocation: "./sound/blipPhaser.mp3",
        theURL: "https://collegeofscripting.weebly.com/uploads/6/4/4/8/64482293/blipphaser.mp3"
    },
    {
        name: "Blip Sound2",
        theId: "blipSoundDeep",
        theLocation: "./sound/blipDeep.mp3",
        theURL: "https://collegeofscripting.weebly.com/uploads/6/4/4/8/64482293/blipdeep.mp3"
    },
    {
        name: "Blip Quiet",
        theId: "blipQuiet1",
        theLocation: "./sound/blipQuiet1.mp3",
        //theURL: "none"  //if no url file, set value of none
        theURL: "https://collegeofscripting.weebly.com/uploads/6/4/4/8/64482293/blipquiet1.mp3"
    },
    {
        name: "Blip Quiet2",
        theId: "blipQuiet2",
        theLocation: "./sound/blipQuiet2.mp3",
        //theURL: "none"  //if no url file, set value of none
        theURL: "https://collegeofscripting.weebly.com/uploads/6/4/4/8/64482293/blipquiet2.mp3"
    },
    {
        name: "Blip Quiet3",
        theId: "blipQuiet3",
        theLocation: "./sound/blipQuiet3.mp3",
        //theURL: "none"  //if no url file, set value of none
        theURL: "https://collegeofscripting.weebly.com/uploads/6/4/4/8/64482293/blipquiet3.mp3"
    }
];

function loadSounds()
{
    let theX = 20;
    let theY = 20;

    for(let x =  0; x < soundsArray.length; x++)
    {
        let ourSound = document.createElement("audio");

        //POSITION
        ourSound.style.position = "absolute";
        ourSound.style.left = theX + 'px';
        ourSound.style.top = theY +'px';

        //ATTRIBUTES
        ourSound.setAttribute('type', 'audio/mpeg');

        ourSound.setAttribute('controls', 'controls');

        ourSound.setAttribute('preload', 'preload');

        //If URL is specified, use it for the sound source, but
        //if URL is equal to none, then use theLocation as the source

        //if the location of the file is on a server, we use theURL as the source
        if(soundsArray[x].theURL != "none")
        {
            ourSound.setAttribute('src', soundsArray[x].theURL);
        }
        else
        {
            //if the location of the file is in our folder, then we use theLocation as the source
            ourSound.setAttribute('src', soundsArray[x].theLocation);
        }

        ourSound.setAttribute('id', soundsArray[x].theId);

        //APPEARANCE
        //do not show the element on the page
        ourSound.style.display = 'none';

        //ADD to the page
        document.body.append(ourSound);
    }
}

function loadSongs()
{
    let theX = 20;
    let theY = 20;

    for(let x =  0; x < songsArray.length; x++)
    {
        //TYPE OF ELEMENT TO CREATE
        let ourSound = document.createElement("audio");

        //POSITION
        ourSound.style.position = "absolute";
        ourSound.style.left = theX + 'px';
        ourSound.style.top = theY +'px';

        //ATTRIBUTES
        ourSound.setAttribute('type', 'audio/mpeg');

        ourSound.setAttribute('controls', 'controls');

        ourSound.setAttribute('loop', 'loop');

        ourSound.setAttribute('preload', 'preload');

        //If URL is specified, use it for the song source, but
        //if URL is equal to none, then use theLocation as the source

        //if the location of the file is on a server, we use theURL as the source
        if(songsArray[x].theURL != "none")
        {
            ourSound.setAttribute('src', songsArray[x].theURL);
        }
        else
        {
            //if the location of the file is in our folder, then we use theLocation as the source
            ourSound.setAttribute('src', songsArray[x].theLocation);
        }

        ourSound.setAttribute('id', songsArray[x].theId);

        //APPEARANCE
        //do not show the element on the page
        ourSound.style.display = 'none';

        //ADD to page
        document.body.append(ourSound);
    }
}

//--------------------------------------------------//

