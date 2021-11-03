//Dedicated to God the Father

//All Rights Reserved Christopher Topalian Copyright 2020-2021

//menuStructureDistance.js

let theDistanceID;

function menuStructureDistance(theStructureId)
{
    theDistanceID = theStructureId;

    playSound("blipQuiet2", 1.0); 

    //TYPE OF ELEMENT TO CREATE
    let theMenu = document.createElement("div");

    //POSITION
    theMenu.style.position = "absolute";
    theMenu.style.left = ourPlayer.x + 100 +'px';
    theMenu.style.top = ourPlayer.y - 50 + 'px';

    //SIZE
    theMenu.style.width = 400 +'px';
    theMenu.style.height = 160 +'px';

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
    theMenu.style.borderRadius = "10px";

    //FONT
    theMenu.style.fontFamily = "arial";
    theMenu.style.fontWeight = "bold";
    theMenu.style.fontSize = "large";
    theMenu.style.color = "white";
    theMenu.style.textAlign = "center";

    //REMOVE MENU button
    //we remove the menu
    //we turn keyboard controls back on
    theMenu.innerHTML += '<button onclick=removeElement("menuPositionDistanceStructure");keyboardControlOn(); class="ourButton" style="margin-bottom: -4px">X</button>';   

    //We Build the menu using innerHTML
    theMenu.innerHTML+= '<div><hr><span style="color:rgb(255, 255, 255)">Distance</span><hr>';

    //we turn shortcuts off a moment, so we can type in the textarea
    theMenu.innerHTML+= 'Id of Object &nbsp<textarea id="idToFindDistance" class=\'textInput\' onkeydown="keyboardControlOff();"></textarea><br>';

    //we turn shortcuts back on, so we can use our menus again easy
    theMenu.innerHTML+= '<button onclick="keepGettingXYStructureCustom();keyboardControlOn();enterButtonSound();" class=\'ourButton\'>Enter</button><br>';

    theMenu.innerHTML+= '<hr class="hrCompact"><button onclick="removeTimer(ourDistanceTimer);" class=\'ourButton\'>Cancel</button><br>';

    //ID
    theMenu.id = "menuPositionDistanceStructure"; 
    
    /* 
        If the player menu already exists, remove it, and create a new player menu wherever the player is
    */
    if(document.getElementById("menuPositionDistanceStructure"))
    {
        removeElement("menuPositionDistanceStructure");
        
        document.body.append(theMenu);
    }
    else
    {
        document.body.append(theMenu);
    }
}

let ourDistanceTimer;
function keepGettingXYStructureCustom()
{
    let obj1 = theDistanceID;

    let obj2 = document.getElementById("idToFindDistance").value;

    //clear any previous searches
    if (ourDistanceTimer)
    {
        clearInterval(ourTimer);
    }

    ourDistanceTimer = setInterval(function(){ getDistanceXY(obj1, obj2);}, 1000);
}
//--------------------------------------------------//

