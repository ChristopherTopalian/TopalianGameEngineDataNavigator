//Dedicated to God the Father

//All Rights Reserved Christopher Topalian Copyright 2020-2021

//menuStructureName.js

let worldNameId;

let theNameID;

let theNumberOnlyHere;

function menuStructureName(theStructureId)
{
    theNameID = document.getElementById(theStructureId);

    worldNameId = theStructureId;

    //remove the text to find the digits only
    //which number in the array, based on id number - 1
                                            // \d find digit
    theNumberOnlyHere = theStructureId.replace(/\D/g,'') - 1;

    //console.log(theNumberOnlyHere + " check it out");

    playSound("blipQuiet2", 1.0);  

    //TYPE OF ELEMENT TO CREATE
    let theMenu = document.createElement("div");  

    //POSITION
    theMenu.style.position = "absolute";
    theMenu.style.left = ourPlayer.x + 100 +'px';
    theMenu.style.top = ourPlayer.y - 35 + 'px';

    //SIZE
    theMenu.style.width = 440 +'px';
    theMenu.style.height = 137 +'px';

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

    //ID
    theMenu.id = "menuNameStructure";

    //REMOVE MENU button
    theMenu.innerHTML += '<button onclick=removeElement("menuNameStructure");keyboardControlOn(); class="ourButton" style="margin-bottom: -4px">X</button>';

    //We Build the menu using innerHTML
    theMenu.innerHTML+= '<div><hr><span style="color:rgb(255, 255, 255)">Name of Structure</span><br>';   

    theMenu.innerHTML+= 'Name &nbsp<textarea id="theStructureName" class=\'textInput\' onkeydown="keyboardControlOff();"></textarea><br>';

    theMenu.innerHTML+= '<button onclick="customStructureNameFromTextInput();keyboardControlOn();enterButtonSound();" class=\'ourButton\'>Enter</button><hr class = "hrCompact">';

    theMenu.innerHTML+= '<button onclick="customStructureName();" class=\'ourButton\'>Custom</button><br>';
    
    /* 
        If the menu already exists, remove it, and create a new menu wherever the player is
    */

    if(document.getElementById("menuNameStructure"))
    {
        removeElement("menuNameStructure");
        
        document.body.append(theMenu);
    }
    else
    {
        document.body.append(theMenu);
    }
}

function customStructureName()
{
    let theName = prompt("Enter Name")

    //Name of structure
    //theNameID.style.innerHTML=theName;

    //fill in the textarea, to show the value of our choice
    document.getElementById("theStructureName").value = theName;

    structuresArray[theNumberOnlyHere].name = theName;

    //Show the name of the structure and also the position data
     theNameID.innerHTML = worldNameId + "<br>" + structuresArray[theNumberOnlyHere].name + "<br>" + positionGet(worldNameId).x.toFixed(0) + "<br>" + positionGet(worldNameId).y.toFixed(0);

    showStructureData();
}

//Read the Textarea, for the Name value of our structure
//Set the Name on our structure
function customStructureNameFromTextInput()
{
    let theName = document.getElementById("theStructureName").value;
  
    //theNameID.style.innerHTML= theName;

    structuresArray[theNumberOnlyHere].name = theName;

    //Show the name of the structure and also the position data
     theNameID.innerHTML = worldNameId + "<br>" + structuresArray[theNumberOnlyHere].name + "<br>" + positionGet(worldNameId).x.toFixed(0) + "<br>" + positionGet(worldNameId).y.toFixed(0);

    document.getElementById("structureNameText").innerHTML = '<div style="font-size:15px">' + structuresArray[theNumberOnlyHere].name + '</div>';

    showStructureData();
}

//--------------------------------------------------//

