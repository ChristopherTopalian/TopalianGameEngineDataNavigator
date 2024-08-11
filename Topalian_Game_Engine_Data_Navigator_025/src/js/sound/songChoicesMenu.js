// songChoicesMenu.js

// song Menu Div that is Created when Songs Button is clicked 

function songChoicesMenu()
{
    audioPlay("sfx_blip_001", 1.0);

    //-//

    if (ge("songMenu"))
    {
        removeElement("songMenu");
    }

    //-//

    let songDiv = ce("div");
    songDiv.id = "songMenu";
    songDiv.style.position = "absolute";
    songDiv.style.left = ourPlayer.x + 150 + 'px';
    songDiv.style.top = ourPlayer.y + 'px';
    songDiv.style.width = "300px";
    songDiv.style.height = "434px";
    songDiv.style.zIndex = "998";
    songDiv.style.background = "rgb(0,0,0)";
    songDiv.style.border = "solid 5px rgb(255,255,255)";
    songDiv.style.borderRadius = "10px";
    songDiv.style.fontFamily = "arial";
    songDiv.style.fontWeight = "normal";
    songDiv.style.fontSize = "medium";
    songDiv.style.color = "white";
    songDiv.style.textAlign = "center";
    songDiv.style.overflowY = "scroll";
    ba(songDiv);

    //-//

    let closeButton = ce("button");
    closeButton.className = "ourButton";
    closeButton.style.marginBottom = "-1px";
    closeButton.textContent = "X";
    closeButton.onclick = function()
    {
        removeElement(songDiv.id);
    };
    songDiv.append(closeButton);

    //-//

    songDiv.append(ce('hr'));

    //-//

    let volumeTitle = ce("span");
    volumeTitle.innerHTML = "<b> VOLUME </b>";
    songDiv.append(volumeTitle);

    //-//

    songDiv.append(ce('hr'));

    //-//

    for (let i = 1; i <= 10; i++)
    {
        let volumeButton = ce("button");
        volumeButton.className = "ourButton";
        volumeButton.textContent = i;
        volumeButton.onclick = function()
        {
            volumeSet((i / 10).toString());
        };
        songDiv.append(volumeButton);
    }

    //-//

    songDiv.append(ce('hr'));

    //-//

    let songsTitle = ce("span");
    songsTitle.innerHTML = "<b> SONGS </b>";
    songDiv.append(songsTitle);

    //-//

    songDiv.append(ce('hr'));

    //-//

    for (let z = 0; z < songsArray.length; z++) {
        let songButton = ce("button");
        songButton.className = "ourButton";
        songButton.id = songsArray[z].name + "Button";
        songButton.textContent = songsArray[z].name;
        songButton.onclick = function()
        {
            playSong(songsArray[z].name);
        };
        songDiv.append(songButton);
    }

    if (songFlag == 1)
    {
        // color button of song chosen
        ge(songChosenId).style.background = "rgb(128, 128, 128)";
    }

    if (songFlag == 0)
    {
        // color button of song chosen
        ge(songChosenId).style.background = "rgb(0, 77, 129)";
    }
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

