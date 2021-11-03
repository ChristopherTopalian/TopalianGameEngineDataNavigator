//Dedicated to God the Father

//All Rights Reserved Christopher Topalian Copyright 2020-2021

//menuSearch.js

function menuSearch()
{
    playSound("blipQuiet2", 1.0);

    //TYPE OF ELEMENT TO CREATE
    let theDiv = document.createElement("div");

    //POSITION
    theDiv.style.position = "absolute";
    theDiv.style.left = ourPlayer.x + 100 +'px';
    theDiv.style.top = ourPlayer.y - 55 +'px';

    //SIZE
    theDiv.style.width = 300 +'px';
    theDiv.style.height = 180 +'px';

    //LAYER
    theDiv.style.zIndex = "1003";

    //BORDER
    theDiv.style.borderStyle = "solid";
    theDiv.style.borderWidth = "2px";
    theDiv.style.borderColor = "rgba(255,255,255,1.0)";
    theDiv.style.borderRadius = "10px";

    //BACKGROUND COLOR
    theDiv.style.background = "rgb(0,0,0)";

    //FONT
    theDiv.style.fontFamily = "arial";
    theDiv.style.fontWeight = "normal";
    theDiv.style.fontSize = "medium";
    theDiv.style.color = "white";
    theDiv.style.textAlign = "center";

    //theDiv.setAttribute("class", "divBackground");  
    //"+criteria+"

    //ID
    theDiv.id = "menuSearchId"

    //Remove Button
     theDiv.innerHTML += '<button onclick=removeElement(\''+theDiv.id+'\') class="ourButton" style="margin-bottom: -4px">X</button>';

    //WE BUILD THE MENU USING innerHTML
    theDiv.innerHTML += '<div><hr><span style="color:rgb(255, 255, 255)"><b>SEARCH</b></span><hr>';

    theDiv.innerHTML += '<b>Control + F</b> to Search for Word or Phrase<hr>';

    theDiv.innerHTML += '<b>Left Click</b> to Place Player Near Found Word or Phrase';
                    
    /*
        If the Structures Menu Div already exists, then remove it and create a new Structures Menu Div wherever the player is located
    */
    if(document.getElementById("menuSearchId"))
    {
        removeElement("menuSearchId");
            
        document.body.append(theDiv);
    }
    else
    {
        document.body.append(theDiv);
    }
}

//--------------------------------------------------//

