//Dedicated to God the Father

//All Rights Reserved Christopher Topalian Copyright 2020-2021

//messageStart.js

//Wherever the Player is located, put this message upon start
function messageStart()
{
    playSound("blipQuiet2", 1.0);

    //TYPE OF ELEMENT TO CREATE
    let startingText = document.createElement("div");

    //POSITION
    startingText.style.position = "absolute";
    startingText.style.left = ourPlayer.x + 100 +'px';
    startingText.style.top = ourPlayer.y - 150 + 'px';

    //SIZE
    startingText.style.width = 450 +'px';
    startingText.style.height = 722 +'px';

    //PADDING
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

    //BACKGROUND COLOR
    startingText.style.background = "black";

    //BORDER
    //startingText.style.border = "solid 2px rgba(100,100,255,1.0)";
    startingText.style.borderStyle = "solid";
    startingText.style.borderWidth = "2px";
    startingText.style.borderColor = "rgba(100,100,255,1.0)";
    startingText.style.borderRadius= "10px";

    //FONT
    startingText.style.textAlign = "center";
    
    //REMOVE BUTTON
    startingText.innerHTML+= '<button onclick=removeElement("instructions"); class="ourButton">X</button></div>';

    //We Build our message using innerHTML
    startingText.innerHTML+= '<div><hr class="hrCompact"><span style="font-family:exo,corbel,arial;font-size:23pt;font-weight:900">Dedicated to God the Father</span><hr class="hrCompact">';

    startingText.innerHTML+= '<span style="color:rgb(30, 175, 255); margin-bottom: 3px;font-size:12.8pt;font-family:exo,corbel,arial">College of Scripting Music & Science</span><hr class ="hrCompact"><span style="color:rgb(126, 203, 255);line-height:19px">TOPALIAN GAME ENGINE<br>DATA NAVIGATOR</span><hr class="hrCompact"></span>';

    startingText.innerHTML+= '<span style="line-height:20px; font-size:12.5pt"><b>W</b> is Up, <b>S</b> is Down, <b>A</b> is Left, <b>D</b> is Right <br><b>Numbers 1 to 9</b> Changes Speed<br><b>0 - + BackSpace Home End</b> for FASTER SPEEDS<hr class="hrCompact">';

    startingText.innerHTML+= '<span style="line-height:20px; font-size:12.5pt"><b>Z</b> for Player Menu or<br><b>Double Click on Player</b> for Player Menu<hr class="hrCompact">';

    startingText.innerHTML+= '<span style="line-height:20px; font-size:12.5pt"><b>X</b> to start Mouse Position Mode<br><b>Left Click</b> to find Mouse Position<br><b>V</b> to end Mouse Position mode<hr class="hrCompact">';

    startingText.innerHTML+= '<span style="line-height:20px; font-size:12.5pt"><b>B</b> for Structure Mode<br><b>Left Click</b> to Place a Structure<br><b>ESC</b> to Exit Structure Mode<br><b>Left Click any Structure</b> to<br> EDIT that Structure <br><b>Delete</b> to Remove Structures<br><b>J</b> to Create a Structures GoTo Menu<br><b>Load Button</b> to Load Structures Data<hr class="hrCompact">';

    startingText.innerHTML+= '<span style="line-height:20px; font-size:12.5pt"><b>P</b> for Color Player Menu<br><b>T</b> for Texture Player Menu<br><b>O</b> for Player Opacity Menu<br><b>N</b> for Transparent, <b>M</b> for Solid<br><b>G</b> for Clearing Player Text <hr class="hrCompact">';

    startingText.innerHTML+= '<span style="line-height:20px; font-size:12.5pt"><b>Control + F</b> to Search, then<br><b>Left Click</b> to Travel to Search Result<hr class="hrCompact">Chrome Browser Loads the FASTEST <br></div>';
    
    startingText.innerHTML+= '<a href="https://github.com/ChristopherTopalian/TopalianGameEngineDataNavigator" target="_blank">Christopher Topalian Data Navigator Code Here</a>';

    //ID
    startingText.id = "instructions";

    //startingText.innerHTML += '<button onclick=removeElement("instructions"); class="ourButton">Remove</button>';

    /* 
        If the player menu already exists, remove it, and create a new player menu wherever the player is
    */
    if(document.getElementById("instructions"))
    {
        removeElement("instructions");
        
        document.body.append(startingText);
    }
    else
    {
        document.body.append(startingText);
    }
}

//--------------------------------------------------//

