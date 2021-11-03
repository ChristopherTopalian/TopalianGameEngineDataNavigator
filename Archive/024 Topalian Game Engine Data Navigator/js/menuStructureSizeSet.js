//Dedicated to God the Father

//All Rights Reserved Christopher Topalian Copyright 2020-2021

//menuStructureSizeSet.js

let theSizeSetID;

let worldSizeId;

function menuStructureSizeSet(theStructureId)
{
    //theSizeSetID = theStructureId;

    theSizeSetID = document.getElementById(theStructureId);

    worldSizeId = theStructureId;

    //remove the text to find the digits only
    //which number in the array, based on id number - 1
    // \d find digit
    numberOnlyStructure = worldSizeId.replace(/\D/g,'') - 1;

    playSound("blipQuiet2", 1.0);
  
    //TYPE OF ELEMENT TO CREATE
    let theMenu = document.createElement("div");

    //POSITION
    theMenu.style.position = "absolute";
    theMenu.style.left = ourPlayer.x + 100 +'px';
    theMenu.style.top = ourPlayer.y - 50 + 'px';

    //SIZE
    theMenu.style.width = 400 +'px';
    theMenu.style.height = 165 +'px';

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
    theMenu.innerHTML += '<button onclick=removeElement("menuSizeStructureSet");keyboardControlOn(); class="ourButton" style="margin-bottom: -4px">X</button>';   

    //We Build the menu using innerHTML
    theMenu.innerHTML+= '<div><hr><span style="color:rgb(255, 255, 255)">SET STRUCTURE SIZE</span><hr class="hrCompact">';

    theMenu.innerHTML+= '<button onclick="structureSizeSetDefault();" class=\'ourButton\'>Default</button><br>';

    theMenu.innerHTML+= 'X SIZE &nbsp<textarea id="customSizeX" class=\'textInput\' onkeydown="keyboardControlOff();"></textarea><br>';

    theMenu.innerHTML+= 'Y SIZE &nbsp<textarea id="customSizeY" class=\'textInput\' onkeydown="keyboardControlOff();"></textarea><br>';

    theMenu.innerHTML+= '<button onclick="structureSizeSet();keyboardControlOn();enterButtonSound();" class=\'ourButton\'>Enter</button><br>';

    //ID
    theMenu.id = "menuSizeStructureSet"; 
    
    /* 
        If the menu already exists, remove it, and create a new menu wherever the player is
    */
    if(document.getElementById("menuSizeStructureSet"))
    {
        removeElement("menuSizeStructureSet");
        
        document.body.append(theMenu);
    }
    else
    {
        document.body.append(theMenu);
    }
}

function structureSizeSet()
{
    let theSizeX;

    let theSizeY;

    theSizeX = document.getElementById('customSizeX').value;

    theSizeY = document.getElementById('customSizeY').value;

    //theSizeSetID.innerHTML = theSizeX + "<br>" + theSizeY + "<br>";

    //update the innerHTML of the structure
    theSizeSetID.innerHTML = structuresArray[numberOnlyStructure].id + "<br>" + structuresArray[numberOnlyStructure].name + "<br>" + "Position" + "<br>" + structuresArray[numberOnlyStructure].posX + "<br>" + structuresArray[numberOnlyStructure].posY + "<br>" + "Size" + "<br>" + theSizeX + "<br>" + theSizeY;

    theSizeSetID.style.width = theSizeX;
    theSizeSetID.style.height = theSizeY;

    //update structuresArray to show the changed value
    updateStructures(worldSizeId);
}

function structureSizeSetDefault()
{
    let theSizeX = 114;

    let theSizeY = 70;

    document.getElementById('customSizeX').value = theSizeX;

    document.getElementById('customSizeY').value = theSizeY;

    //theSizeSetID.innerHTML = theSizeX + "<br>" + theSizeY + "<br>";

    //update the innerHTML of the structure
    theSizeSetID.innerHTML = structuresArray[numberOnlyStructure].id + "<br>" + structuresArray[numberOnlyStructure].name + "<br>" + "Position" + "<br>" + structuresArray[numberOnlyStructure].posX + "<br>" + structuresArray[numberOnlyStructure].posY + "<br>" + "Size" + "<br>" + theSizeX + "<br>" + theSizeY;

    theSizeSetID.style.width = theSizeX;
    theSizeSetID.style.height = theSizeY;

    //update structuresArray to show the changed value
    updateStructures(worldSizeId);
}
//--------------------------------------------------//

