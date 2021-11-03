//Dedicated to God the Father

//All Rights Reserved Christopher Topalian Copyright 2020-2021

//messageLine.js

/*
    Make a Message Box with a message of the Section name
*/
function makeLine(theYPos, sector, ourMessage)
{
    //TYPE OF ELEMENT TO CREATE
    let makeLine = document.createElement("div");

    //POSITION
    makeLine.style.position = "absolute";
    makeLine.style.left = 0 +'px';
    makeLine.style.top = theYPos + 'px';

    //SIZE
    makeLine.style.width = 1000 +'px';
    makeLine.style.height = 25 +'px';

    //PADDING
    makeLine.style.paddingLeft = "20px";
    makeLine.style.paddingRight = "20px";
    makeLine.style.paddingTop = "4px";

    //LAYER
    makeLine.style.zIndex = "1000";

    //BACKGROUND COLOR
    makeLine.style.background = "black";

    //BORDER
    //makeLine.style.border = "solid 2px rgba(100,100,255,1.0)";
    makeLine.style.borderStyle = "solid";
    makeLine.style.borderWidth = "2px";
    makeLine.style.borderColor = "rgba(100,100,255,1.0)";

    //FONT
    makeLine.style.fontFamily = "arial";
    makeLine.style.fontWeight = "bold";
    makeLine.style.fontSize = "large";
    makeLine.style.color = "white";
    makeLine.style.textAlign = "center";

    makeLine.innerHTML = ourMessage;

    //ID
    makeLine.id = "sector" + sector;

    document.body.append(makeLine);
}

//--------------------------------------------------//

