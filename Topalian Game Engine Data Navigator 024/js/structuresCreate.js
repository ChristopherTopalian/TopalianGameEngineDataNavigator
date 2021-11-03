//Dedicated to God the Father

//All Rights Reserved Christopher Topalian Copyright 2020-2021

//structuresCreate.js

/*
CREATE a STRUCTURE: 
After the Letter B on the keyboard is pressed, or the Create Button is Left Clicked in the Player Menu, it activates Structure Create Mode, which allows us to place structures in the world using the Left Mouse Button.
Esc Button is used to deactivate Structure Mode.
*/

let structuresArray = [ ];

let structureId = 1;

function structuresCreate(theEvent, theX, theY)
{
    playSound("blipQuiet1", 1.0);

    theX = theEvent.pageX;
    theY = theEvent.pageY;

    let sizeX = 110;
    let sizeY = 45;
    let colorFill = "black";  //rgb(0,0,0)
    let colorText = "white";
    let structureOpacity = 1.0;

    let theTexture = "Default";

    //TYPE OF ELEMENT TO CREATE
    let ourStructure = document.createElement("div");

    //POSITION
    ourStructure.style.position = "absolute";

    //For a Center Position System, use this way below
    //We minus the structures size divided by itself.
    //This way we place structures according to their center, instead of their top left corner.
    ourStructure.style.left = theX - (sizeX / 2) +'px';

    ourStructure.style.top = theY - (sizeY / 2) + 'px'; 

    /*
    //For a Top Left Coordinate System, use this way below
        ourStructure.style.left = theX +'px';
        ourStructure.style.top = theY + 'px'; 
    */

    //ourStructure.id = "STRUCTURE" + structureId;

    //SIZE
    ourStructure.style.width = sizeX +'px';

    ourStructure.style.height = sizeY +'px';

    //ID
    ourStructure.id = "STRUCTURE" + (structureId + structuresArray.length);

    //ourStructure.setAttribute('onclick', 'structuresGetInfo(\''+ourStructure.id+'\');');

    //Open the Structure Edit Menu for the clicked structure
    ourStructure.setAttribute('onclick', 'menuStructureEdit(\''+ourStructure.id+'\');');

    //when clicked activate two functions
    //ourStructure.setAttribute('onclick', 'menuStructureEdit(\''+ourStructure.id+'\');structuresGetInfo(\''+ourStructure.id+'\');');
    
    //LAYER
    ourStructure.style.zIndex = "1002";

    //BORDER
    ourStructure.style.border = "solid 2px rgba(100,100,255,1.0)";

    //BACKGROUND
    ourStructure.style.background = colorFill;

    //OPACITY
    ourStructure.style.opacity = structureOpacity;

    //ourStructure.style.backgroundImage='url("https://collegeofscripting.weebly.com/uploads/6/4/4/8/64482293/wood1.jpg")';

    //BACKGROUND IMAGE
    ourStructure.style.backgroundImage= theTexture;

    //PADDING
    //ourStructure.style.paddingTop = "2px";

    //FONT
    ourStructure.style.fontFamily = "arial";
    ourStructure.style.fontWeight = "bold";
    ourStructure.style.fontSize = "medium";
    ourStructure.style.color = colorText;
    ourStructure.style.textAlign = "center";

    //SHOW the ID, X, and Y, on the STRUCTURE
    ourStructure.innerHTML = ourStructure.id + "<br>" + "Name" + "<br>" +  theX + ", " + theY;

    //structuresArray[structureId].name

    //let structureAttributes = 
    let structureAttributes = 
    {
        //name: ourStructure.id,   //name
        name: "Name",   //name
        id: ourStructure.id,            //id
        posX: theX,                        //posX
        posY: theY,                         //posY
        sizeX: sizeX,                      //sizeX
        sizeY: sizeY,                      //sizeY
        colorFill: colorFill,            //fill color
        colorText: colorText,       //text color
        opacity: structureOpacity,  //opacity
        texture: theTexture          //texture
    };

    //add the new structure's name, id, posX, posY, sizeX, and sizeY to our structuresArray
    structuresArray.push(structureAttributes); 

    console.log(JSON.stringify(structuresArray));

    document.body.append(ourStructure);

    showStructureData();
}

function buttonCreatePressed()
{
    //playSound("blipQuiet1", 0.1);

    ourPlayer.playerId.style.backgroundColor = "rgb(100, 75, 255)"; 

    ourPlayer.playerId.innerHTML = "<br><br><br><br>STRUC- <br>TURE<br> MODE<br>ON";

    //document.getElementById("createButton").click();

    //setTimeout is used to ensure that the structure is not created prior to the user choosing where to place it, after pressing the create button
    setTimeout(function(){ addListen('click', structuresCreate); }, 1000); 

   // addListen('click', structuresCreate);
}
//--------------------------------------------------//

