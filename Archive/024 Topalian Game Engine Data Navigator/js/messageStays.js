//Dedicated to God the Father

//All Rights Reserved Christopher Topalian Copyright 2020-2021

//messageStays.js

function messageStays()
{
    //TYPE OF ELEMENT TO CREATE
    let startingText = document.createElement("div");

    //POSITION
    startingText.style.position =  "absolute";
    startingText.style.left = 670 +'px';
    startingText.style.top = 230 + 'px';

    //SIZE
    startingText.style.width = 315 +'px';
    startingText.style.height = 127 +'px';

    //PADDING effects size
    startingText.style.paddingLeft = "20px";
    startingText.style.paddingRight = "20px";
    startingText.style.paddingTop = "4px";

    //LAYER
    startingText.style.zIndex = "998";

    //FONT
    startingText.style.fontFamily = "arial";
    startingText.style.fontWeight = "900";
    startingText.style.fontSize = "13pt";
    startingText.style.color = "white";
    startingText.style.textAlign = "center";

    //BACKGROUND COLOR
    startingText.style.background = "black";

    //BORDER
    //startingText.style.border = "solid 2px rgba(100,100,255,1.0)";
    startingText.style.borderStyle = "solid";
    startingText.style.borderWidth = "2px";
    startingText.style.borderColor = "rgba(100,100,255,1.0)";
    startingText.style.borderRadius= "10px";

    //We Build our message using innerHTML
    startingText.innerHTML+= '<div><span style="font-family:exo,corbel,arial;font-size:16pt">Dedicated to God the Father</span><hr class="hrCompact">';

    startingText.innerHTML+= '<span style="color:rgb(126, 203, 255);line-height:19px">TOPALIAN GAME ENGINE<br>DATA NAVIGATOR</span><br>';

    startingText.innerHTML+= '<span style="font-family:arial; font-style:normal; line-height:20px">by Christopher Topalian</span><br>';

    startingText.innerHTML+= '<a href="https://github.com/ChristopherTopalian/TopalianGameEngineDataNavigator" target="_blank">GitHub.com/ChristopherTopalian</a>';
    
    //ID
    startingText.id = "gameEngineMessageStays";

    document.body.append(startingText);
}

//--------------------------------------------------//

