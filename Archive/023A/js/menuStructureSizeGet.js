//Dedicated to God the Father

//All Rights Reserved Christopher Topalian Copyright 2020-2021

//menuStructureSizeGet.js

let theSizeGetID;

function menuStructureSizeGet(theStructureId)
{
    theSizeGetID = theStructureId;

    playSound("blipQuiet2", 1.0); 

    //TYPE OF ELEMENT TO CREATE
    let theMenu = document.createElement("div");

    //POSITION
    theMenu.style.position = "absolute";
    theMenu.style.left = ourPlayer.x + 100 +'px';
    theMenu.style.top = ourPlayer.y - 40 + 'px';

    //SIZE
    theMenu.style.width = 400 +'px';
    theMenu.style.height = 143 +'px';

    //PADDING effects size
    theMenu.style.paddingLeft = "20px";
    theMenu.style.paddingRight = "20px";
    theMenu.style.paddingTop = "4px";

    //LAYER
    theMenu.style.zIndex = "1005";

    //BACKGROUND COLOR
    theMenu.style.background = "black";

    //BORDER
    theMenu.style.borderStyle = "solid";
    theMenu.style.borderWidth = "2px";
    theMenu.style.borderColor = "rgba(255,255,255,1.0)";
    theMenu.style.borderRadius= "10px";

    //FONT
    theMenu.style.fontFamily = "arial";
    theMenu.style.fontWeight = "bold";
    theMenu.style.fontSize = "large";
    theMenu.style.color = "white";
    theMenu.style.textAlign = "center";

    //REMOVE MENU button
    theMenu.innerHTML += '<button onclick=removeElement("menuSizeStructureGet");keyboardControlOn(); class="ourButton" style="margin-bottom: -4px">X</button>';   

    //We Build the menu using innerHTML
    theMenu.innerHTML+= '<div><hr><span style="color:rgb(255, 255, 255)">GET STRUCTURE SIZE</span><hr class="hrCompact">';

    theMenu.innerHTML+= '<button onclick="structureSizeGet(\''+theSizeGetID+'\')" class=\'ourButton\'>GET SIZE</button><br>';

    theMenu.innerHTML+= 'X Size &nbsp<textarea id="gotSizeX" class=\'textInput\' onkeydown="keyboardControlOff();"></textarea><br>';

    theMenu.innerHTML+= 'Y Size &nbsp<textarea id="gotSizeY" class=\'textInput\' onkeydown="keyboardControlOff();"></textarea>';

    //ID
    theMenu.id = "menuSizeStructureGet"; 
    
    /* 
        If the menu already exists, remove it, and create a new menu wherever the player is
    */
    if(document.getElementById("menuSizeStructureGet"))
    {
        removeElement("menuSizeStructureGet");
        
        document.body.append(theMenu);
    }
    else
    {
        document.body.append(theMenu);
    }
}

function structureSizeGet()
{
    let currentSize = sizeGet(theSizeGetID);

    document.getElementById('gotSizeX').value = currentSize.x;

    document.getElementById('gotSizeY').value = currentSize.y;

    theSizeGetID.innerHTML = currentSize.x + "<br>" + currentSize.y + "<br>";
}
//--------------------------------------------------//

