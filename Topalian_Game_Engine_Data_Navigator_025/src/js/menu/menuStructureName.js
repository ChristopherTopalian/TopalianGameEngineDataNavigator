// menuStructureName.js

let worldNameId;

let theNameID;

let theNumberOnlyHere;

function menuStructureName(theStructureId)
{
    theNameID = ge(theStructureId);

    worldNameId = theStructureId;

    // remove the text to find the digits only
    // which number in the array, based on id number - 1
    // \d find digit
    theNumberOnlyHere = theStructureId.replace(/\D/g,'') - 1;

    // console.log(theNumberOnlyHere + " check it out");

    audioPlay("sfx_blip_001", 1.0);  

    //-//

    if (ge("menuNameStructure"))
    {
        removeElement("menuNameStructure");
    }

    let theMenu = ce("div");
    theMenu.id = "menuNameStructure";
    theMenu.className = "divStyle001";
    theMenu.style.position = "absolute";
    theMenu.style.left = ourPlayer.x + 100 +'px';
    theMenu.style.top = ourPlayer.y - 35 + 'px';
    theMenu.style.width = 440 +'px';
    theMenu.style.height = 137 +'px';
    ba(theMenu);

    //-//

    let closeButton = ce("button");
    closeButton.onclick = function()
    {
        removeElement("menuNameStructure");
        keyboardControlOn();
    };
    closeButton.className = "ourButton";
    closeButton.style.marginBottom = "5px";
    closeButton.textContent = "X";
    theMenu.append(closeButton);

    //-//

    let nameLabel = ce('div');
    nameLabel.id = 'nameLabel';
    nameLabel.textContent = 'Name of Structure';
    theMenu.append(nameLabel);

    //-//

    let textInputName = ce('textarea');
    textInputName.id = 'theStructureName';
    textInputName.className = 'textInput';
    textInputName.onkeydown = function()
    {
        keyboardControlOff();
    };
    theMenu.append(textInputName);

    //-//

    let enterButton = ce("button");
    enterButton.onclick = function()
    {
        customStructureNameFromTextInput();
        keyboardControlOn();
        enterButtonSound();
    };
    enterButton.className = "ourButton";
    enterButton.textContent = "Enter";
    theMenu.append(enterButton);
}

// Read Textarea, for Name value of our structure
// Set the Name on our structure
function customStructureNameFromTextInput()
{
    let theName = ge("theStructureName").value;
  
    // theNameID.style.innerHTML = theName;

    structuresArray[theNumberOnlyHere].name = theName;

    // Show the name of the structure and also the position data
     theNameID.innerHTML = worldNameId + "<br>" + structuresArray[theNumberOnlyHere].name + "<br>" + positionGet(worldNameId).x.toFixed(0) + "<br>" + positionGet(worldNameId).y.toFixed(0);

    ge("structureNameText").innerHTML = '<div style = "font-size: 15px">' + structuresArray[theNumberOnlyHere].name + '</div>';

    showStructureData();
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

