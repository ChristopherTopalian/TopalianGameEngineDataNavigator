//Dedicated to God the Father

//All Rights Reserved Christopher Topalian Copyright 2020-2021

//menuStructureEdit.js

/*
    When person clicks a structure, an edit menu appears to edit that structure.
*/

function menuStructureEdit(theStructureId)
{
    playSound("blipQuiet2", 1.0);

    let structureMenuId = document.getElementById(theStructureId);

    //remove the text to find the digits only
    //which number in the array, based on id number - 1
                                            // \d find digit
    let theNumberOnlyStructure = theStructureId.replace(/\D/g,'') - 1;


    //TYPE OF ELEMENT TO CREATE
    let theMenu = document.createElement("div");

    //POSITION
    theMenu.style.position = "absolute";
                                    //lower for right
    theMenu.style.left = ourPlayer.x + 55 +'px';
    theMenu.style.top = ourPlayer.y - 127 + 'px';

    //SIZE
    theMenu.style.width = 250 +'px';
    theMenu.style.height = 408 +'px';

    //PADDING effects size
    theMenu.style.paddingLeft = "10px";
    theMenu.style.paddingRight = "10px";
    theMenu.style.paddingTop = "4px";

    //LAYER
    theMenu.style.zIndex = "1004";

    //BACKGROUND COLOR
    theMenu.style.background = "black";

    //BORDER
    theMenu.style.borderStyle = "solid";
    theMenu.style.borderWidth = "2px";
    theMenu.style.borderColor = "rgba(255,255,0,1.0)";
    theMenu.style.borderRadius= "10px";

    //FONT
    theMenu.style.fontFamily = "arial";
    theMenu.style.fontWeight = "bold";
    theMenu.style.fontSize = "large";
    theMenu.style.color = "white";
    theMenu.style.textAlign = "center";

    //REMOVE MENU button
    theMenu.innerHTML += '<button onclick=removeElement("menuStructureEdit"); class="ourButton">X</button>';

    //We Build the menu using innerHTML
    theMenu.innerHTML+= '<div><hr class="hrCompact"><span class="textCompact"><b>\''+theStructureId+'\'</b><hr class="hrCompact">';

    theMenu.innerHTML+= '<div id="structureNameText"><span class="textCompact">\''+structuresArray[theNumberOnlyStructure].name+'\'';

    theMenu.innerHTML += '<hr class="hrCompact">';

    theMenu.innerHTML+= '<span class="textCompact">NAME<br></span>';

    //'menuStructureEdit(\''+ourStructure.id+'\');

    theMenu.innerHTML+= '<button onclick="menuStructureName(\''+theStructureId+'\')" class=\'ourButton\'>NAME</button>';

    theMenu.innerHTML += '<hr class="hrCompact">';

    theMenu.innerHTML+= '<span class="textCompact">COLOR<br></span>';

    theMenu.innerHTML+= '<button onclick="menuStructureColor(\''+theStructureId+'\')" class=\'ourButton\'>COLOR</button>';

    theMenu.innerHTML+= '<button onclick="menuStructureColorText(\''+theStructureId+'\')" class=\'ourButton\'>TEXT</button>';

    theMenu.innerHTML += '<hr class="hrCompact">';

    theMenu.innerHTML+= '<span class="textCompact">TEXTURE<br></span>';

    theMenu.innerHTML+= '<button onclick="menuStructureTexture(\''+theStructureId+'\')" class=\'ourButton\'>TEXTURE</button>';

    theMenu.innerHTML += '<hr class="hrCompact">';

    theMenu.innerHTML+= '<span class="textCompact">ALPHA<br></span>';

    theMenu.innerHTML+= '<button onclick="menuStructureOpacity(\''+theStructureId+'\')" class=\'ourButton\'>OPACITY</button>';

    theMenu.innerHTML += '<hr class="hrCompact">';

    theMenu.innerHTML+= '<span class="textCompact">POSITION<br></span>';

    theMenu.innerHTML+= '<button onclick="menuStructurePositionGet(\''+theStructureId+'\')" class=\'ourButton\'>GET POS</button>';

    theMenu.innerHTML+= '<button onclick="menuStructurePositionSet(\''+theStructureId+'\')" class=\'ourButton\'>SET POS</button>';

    theMenu.innerHTML += '<hr class="hrCompact">';

    theMenu.innerHTML+= '<span class="textCompact">SIZE<br></span>';

    theMenu.innerHTML+= '<button onclick="menuStructureSizeGet(\''+theStructureId+'\')" class=\'ourButton\'>GET</button>';

    theMenu.innerHTML+= '<button onclick="menuStructureSizeSet(\''+theStructureId+'\')" class=\'ourButton\'>SET</button>';

    theMenu.innerHTML += '<hr class="hrCompact">';

    theMenu.innerHTML+= '<span class="textCompact">DISTANCE<br></span>';

    theMenu.innerHTML+= '<button onclick="menuStructureDistance(\''+theStructureId+'\')" class=\'ourButton\'>DISTANCE FINDER</button>';

    theMenu.innerHTML += '<hr class="hrCompact">';

    theMenu.innerHTML +='</div>';

    //ID
    theMenu.id = "menuStructureEdit"; 
    
    /* 
        If the menu already exists, remove it, and create a new menu wherever the player is
    */

    if(document.getElementById("menuStructureEdit"))
    {
        removeElement("menuStructureEdit");
        
        document.body.append(theMenu);

        //prevent menu from leaving the screen on the left side
        if(positionGet("menuStructureEdit").x <= 30)
        {
            theMenu.style.left = 40;
        }

        //prevent menu from leaving the screen on the top side
        if(positionGet("menuStructureEdit").y <= 200)
        {
            theMenu.style.top = 100;
        }
    }
    else
    {
        document.body.append(theMenu);
    }

    showStructureData();
}

//--------------------------------------------------//

