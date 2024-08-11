// makeVideo.js

function makeVideo(whichVideoId)
{
    let videoId = whichVideoId;

    let youTubeVideo = ce("iframe");
    youTubeVideo.style.position = "absolute";
    youTubeVideo.style.left = positionGet(activePlayer).x;
    youTubeVideo.style.top = positionGet(activePlayer).y;
    youTubeVideo.width = '560';
    youTubeVideo.height = '315';
    youTubeVideo.src = `https://www.youtube.com/embed/${videoId}`;
    youTubeVideo.frameBorder = '0';
    youTubeVideo.allowFullscreen = true;
    ba(youTubeVideo);
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

