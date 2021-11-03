//Dedicated to God the Father

//All Rights Reserved Christopher Topalian Copyright 2020-2021

//menuStructurePositionSet.js

let thePositionSetID;

let worldPositionId;

let numberOnlyStructure;

function menuStructurePositionSet(theStructureId)
{
    thePositionSetID = document.getElementById(theStructureId);

    worldPositionId = theStructureId;

    playSound("blipQuiet2", 1.0);

    //remove the text to find the digits only
    //which number in the array, based on id number - 1
    // \d find digit
    numberOnlyStructure = worldPositionId.replace(/\D/g,'') - 1;

    //TYPE OF ELEMENT TO CREATE
    let theMenu = document.createElement("div");

    //POSITION
    theMenu.style.position = "absolute";
    theMenu.style.left = ourPlayer.x + 100 +'px';
    theMenu.style.top = ourPlayer.y - 80 + 'px';

    //SIZE
    theMenu.style.width = 400 +'px';
    theMenu.style.height = 235 +'px';

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
    theMenu.innerHTML += '<button onclick=removeElement("menuPositionStructureSet");keyboardControlOn(); class="ourButton" style="margin-bottom: -4px">X</button>';   

    //We Build the menu using innerHTML
    theMenu.innerHTML+= '<div><hr><span style="color:rgb(255, 255, 255)">STRUCTURE POSITION OPTIONS</span><hr>';    

    theMenu.innerHTML+= '<button onclick="structureMoves(\'1\')" class=\'ourButton\'>1</button></div>';

    theMenu.innerHTML+= '<button onclick="structureMoves(\'2\')" class=\'ourButton\'>2</button></div>';

    theMenu.innerHTML+= '<button onclick="structureMoves(\'3\')" class=\'ourButton\'>3</button></div>';

    theMenu.innerHTML+= '<button onclick="structureMoves(\'4\')" class=\'ourButton\'>4</button></div>';

    theMenu.innerHTML+= '<button onclick="structureMoves(\'5\')" class=\'ourButton\'>5</button></div>';

    theMenu.innerHTML+= '<button onclick="structureMoves(\'6\')" class=\'ourButton\'>6</button></div>';

    theMenu.innerHTML+= '<button onclick="structureMoves(\'7\')" class=\'ourButton\'>7</button></div>';

    theMenu.innerHTML+= '<button onclick="structureMoves(\'8\')" class=\'ourButton\'>8</button></div>';

    theMenu.innerHTML+= '<button onclick="structureMoves(\'9\')" class=\'ourButton\'>9</button></div>';

    theMenu.innerHTML+= '<button onclick="structureMoves(\'0\')" class=\'ourButton\'>10</button></div><hr>';

    theMenu.innerHTML+= '<button onclick="customPositionStructure();" class=\'ourButton\'>Custom Structure Position</button><hr>';

    theMenu.innerHTML+= 'X POS &nbsp<textarea id="customPosX" class=\'textInput\' onkeydown="keyboardControlOff();"></textarea><br>';

    theMenu.innerHTML+= 'Y POS &nbsp<textarea id="customPosY" class=\'textInput\' onkeydown="keyboardControlOff();"></textarea><br>';

    theMenu.innerHTML+= '<button onclick="customPositionStructureText();keyboardControlOn();enterButtonSound();" class=\'ourButton\'>Enter</button><br>';

    //ID
    theMenu.id = "menuPositionStructureSet"; 
    
    /* 
        If the menu already exists, remove it, and create a new menu wherever the player is
    */
    if(document.getElementById("menuPositionStructureSet"))
    {
        removeElement("menuPositionStructureSet");
        
        document.body.append(theMenu);
    }
    else
    {
        document.body.append(theMenu);
    }
}

//Buttons move the structure
function structureMoves(theLocation)
{
    playSound("blipQuiet2", 1.0);

    if(theLocation == '1')
    {
        //x location of the structure
        thePositionSetID.x=100;

        //y location of the structure
        thePositionSetID.y=100;
    }
    if(theLocation == '2')
    {
        //x location of the structure
        thePositionSetID.x=100;

        //y location of the structure
        thePositionSetID.y=200;
    }
    if(theLocation == '3')
    {
        //x location of the structure
        thePositionSetID.x=100;

        //y location of the structure
        thePositionSetID.y=300;
    }
    if(theLocation == '4')
    {
        //x location of the structure
        thePositionSetID.x=100;

        //y location of the structure
        thePositionSetID.y=400;
    }
    if(theLocation == '5')
    {
        //x location of the structure
        thePositionSetID.x=100;

        //y location of the structure
        thePositionSetID.y=500;
    }
    if(theLocation == '6')
    {
        //x location of the structure
        thePositionSetID.x=100;

        //y location of the structure
        thePositionSetID.y=600;
    }
    if(theLocation == '7')
    {
        //x location of the structure
        thePositionSetID.x=100;

        //y location of the structure
        thePositionSetID.y=700;
    }
    if(theLocation == '8')
    {
        //x location of the structure
        thePositionSetID.x=100;

        //y location of the structure
        thePositionSetID.y=800;
    }
    if(theLocation == '9')
    {
        //x location of the structure
        thePositionSetID.x=100;

        //y location of the structure
        thePositionSetID.y=900;
    }
    if(theLocation == '0')
    {
        //x location of the structure
        thePositionSetID.x=100;

        //y location of the structure
        thePositionSetID.y=1000;
    }

    //move the structure
    thePositionSetID.style.left = thePositionSetID.x + 'px';

    thePositionSetID.style.top = thePositionSetID.y + 'px';

    //update the structuresArray posX and posY
    structuresArray[numberOnlyStructure].posX = thePositionSetID.x;

    structuresArray[numberOnlyStructure].posY = thePositionSetID.y;

    //update the innerHTML of the structure
    //show the structure id, name, posX, and posY
    thePositionSetID.innerHTML = structuresArray[numberOnlyStructure].id + "<br>" + structuresArray[numberOnlyStructure].name + "<br>" + structuresArray[numberOnlyStructure].posX + "<br>" + structuresArray[numberOnlyStructure].posY;

    //update the textArea of the posX and posY
    document.getElementById("customPosX").value = structuresArray[numberOnlyStructure].posX;

    document.getElementById("customPosY").value = structuresArray[numberOnlyStructure].posY;

    //update structuresArray to show the changed value
    updateStructures(worldPositionId);
}

function customPositionStructure()
{
    let playerX = prompt("Enter X Position");
    let playerY = prompt("Enter Y Position");

    //If person doesn't input a value, then keep the player where they are
    if(playerX == '' || playerY == '')
    {
        thePositionSetID.x = thePositionSetID.x;
        thePositionSetID.y = thePositionSetID.y;
        return;
    }

    //x location of the structure
    thePositionSetID.x= parseInt(playerX);

    //y location of the structure
    thePositionSetID.y= parseInt(playerY);

    //if person did answer Y position, move structure
    if(playerY != '')
    {
        //movePlayer();
        thePositionSetID.style.left = thePositionSetID.x + 'px';
        thePositionSetID.style.top = thePositionSetID.y + 'px';
    }

    //update the structuresArray posX and posY
    structuresArray[numberOnlyStructure].posX = thePositionSetID.x;

    structuresArray[numberOnlyStructure].posY = thePositionSetID.y;

    //update the innerHTML of the structure
    //show the structure id, name, posX, and posY
    thePositionSetID.innerHTML = structuresArray[numberOnlyStructure].id + "<br>" + structuresArray[numberOnlyStructure].name + "<br>" + structuresArray[numberOnlyStructure].posX + "<br>" + structuresArray[numberOnlyStructure].posY;

    //update the textArea of the posX and posY
    document.getElementById("customPosX").value = structuresArray[numberOnlyStructure].posX;

    document.getElementById("customPosY").value = structuresArray[numberOnlyStructure].posY;

    //update structuresArray to show the changed value
    updateStructures(worldPositionId);
}

function customPositionStructureText()
{
    let playerX = document.getElementById("customPosX").value;

    let playerY = document.getElementById("customPosY").value;

    //If person doesn't input a value, then keep person where they are
    if(playerY == '')
    {
        thePositionSetID.x = thePositionSetID.x;
        thePositionSetID.y = thePositionSetID.y;
        return;
    }

    //x location of the structure
    thePositionSetID.x= parseInt(playerX);

    //y location of the structure
    thePositionSetID.y= parseInt(playerY);

    //if person did answer Y position, move structure
    if(playerY != '')
    {
        //movePlayer();
        thePositionSetID.style.left = thePositionSetID.x + 'px';
        thePositionSetID.style.top = thePositionSetID.y + 'px';
    }

    //update the structuresArray posX and posY
    structuresArray[numberOnlyStructure].posX = thePositionSetID.x;

    structuresArray[numberOnlyStructure].posY = thePositionSetID.y;

    //update the innerHTML of the structure
    //show the structure id, name, posX, and posY
    thePositionSetID.innerHTML = structuresArray[numberOnlyStructure].id + "<br>" + structuresArray[numberOnlyStructure].name + "<br>" + structuresArray[numberOnlyStructure].posX + "<br>" + structuresArray[numberOnlyStructure].posY;

    //update the textArea of the posX and posY
    document.getElementById("customPosX").value = structuresArray[numberOnlyStructure].posX;

    document.getElementById("customPosY").value = structuresArray[numberOnlyStructure].posY;

    //update structuresArray to show the changed value
    updateStructures(worldPositionId);
}

//--------------------------------------------------//

