//Dedicated to God the Father

//All Rights Reserved Christopher Topalian Copyright 2020-2021

//structuresMenu.js

function structuresMenu()
{
    playSound("blipQuiet2", 1.0);

    ourPlayer.playerId.innerHTML = "<br><br><br><br>B to Create Structure";

    //TYPE OF ELEMENT TO CREATE
    let structureDiv = document.createElement("div");

    //POSITION
    structureDiv.style.position = "absolute";
    structureDiv.style.left = ourPlayer.x + 100 +'px';
    structureDiv.style.top = ourPlayer.y - 150 +'px';

    //SIZE
    structureDiv.style.width = 300 +'px';
    structureDiv.style.height = 420 +'px';

    //LAYER
    structureDiv.style.zIndex = "1003";

    //BORDER
    structureDiv.style.border = "solid 5px";
    structureDiv.style.borderRadius = "10px";
    structureDiv.style.borderColor = "rgb(255,255,255)";

    //BACKGROUND COLOR
    structureDiv.style.background = "rgb(0,0,0)";

    //FONT
    structureDiv.style.fontFamily = "arial";
    structureDiv.style.fontWeight = "normal";
    structureDiv.style.fontSize = "medium";
    structureDiv.style.color = "white";
    structureDiv.style.textAlign = "center";

    //structureDiv.setAttribute("class", "divBackground");  
    //"+criteria+"

    //structureDiv.id = whichArray[i].id;

    //structureDiv.id = Math.floor(350000 + Math.random() * 9750000);

    //ID
    structureDiv.id = "structuresMenu"

    //Remove Button
    structureDiv.innerHTML += '<button onclick=removeElement(\''+structureDiv.id+'\') class="ourButton" style="margin-bottom: -4px">X</button>';

    //WE BUILD THE MENU USING innerHTML
    structureDiv.innerHTML += '<div><hr><span style="color:rgb(255, 255, 255)"><b>STRUCTURE OPTIONS</b></span><hr>';

    structureDiv.innerHTML += '<b>Letter B</b> to Start Structure Mode <hr>';

    structureDiv.innerHTML += '<b>Left Click</b> to Place a Structure <hr>';

    structureDiv.innerHTML += '<b>Shift + 1</b> to GoTo 1st Structure <hr>';

    structureDiv.innerHTML += '<b>Shift + 2</b> to GoTo 2nd Structure  etc<hr class="hrCompact">';

    structureDiv.innerHTML += '<b>Letter J</b><br>  Creates a Row Menu<br>to GoTo Any Structure<hr class="hrCompact">';

    structureDiv.innerHTML += '<b>Left Click any Structure</b><br>to EDIT that Structure <hr class="hrCompact">';

    //keep, for using button option later
    //structureDiv.innerHTML+= '<button onclick="structuresRemoveAll();" class=\'ourButton\'>Remove All Structures</button><br>';

    structureDiv.innerHTML += '<b>Delete Button</b> <br>Removes All Structures<hr class="hrCompact">';

    structureDiv.innerHTML += '<b>Esc Button</b> to End Structure Mode<hr>';
                    
    /*
        If the Structures Menu Div already exists, then remove it and create a new Structures Menu Div wherever the player is located
    */
    if(document.getElementById("structuresMenu"))
    {
        removeElement("structuresMenu");
            
        document.body.append(structureDiv);
    }
    else
    {
        document.body.append(structureDiv);
    }
}

//--------------------------------------------------//

