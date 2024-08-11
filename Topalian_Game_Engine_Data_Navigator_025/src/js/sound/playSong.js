// playSong.js

function playSong(whichSongId)
{
    let song = ge(whichSongId);
    song.volume = songVolume;
    songChosenId = song.id + "Button";
    console.log(songChosenId);

    // color button of song chosen
    ge(songChosenId).style.background = "rgb(128,128,128)";

    // console.log(song.id);

    if (songFlag == 0)
    {
        song.volume= songVolume;
        song.play();
        songFlag = 1;
    }

    else if (songFlag == 1)
    {
        // color chosen song's Button back to its default color
        ge(songChosenId).style.background = "rgb(0, 77, 129)";

        let song = ge(whichSongId);
        song.pause();
        songFlag = 0;
    }
}

//--//

// example
// playSong("emotionalBlockbuster2Song", 1.0);

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

