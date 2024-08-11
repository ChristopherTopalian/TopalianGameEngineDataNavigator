// menuStructureTexture.js

function menuStructureTexture(theStructureId)
{
    audioPlay("sfx_blip_001", 1.0);

    //-//

    if (ge("menuTextureStructure"))
    {
        removeElement("menuTextureStructure");
    }

    //-//

    let theMenu = ce("div");
    theMenu.id = "menuTextureStructure";
    theMenu.className = "divStyle001";
    theMenu.style.position = "absolute";
    theMenu.style.left = ourPlayer.x + 100 + 'px';
    theMenu.style.top = ourPlayer.y - 50 + 'px';
    theMenu.style.width = 400 + 'px';
    theMenu.style.height = 170 + 'px';
    ba(theMenu);

    //-//

    let closeButton = ce("button");
    closeButton.className = "ourButton";
    closeButton.style.marginBottom = "-4px";
    closeButton.textContent = " X ";
    closeButton.onclick = function()
    {
        removeElement("menuTextureStructure");
    };
    theMenu.append(closeButton);

    //-//

    theMenu.append(ce('hr'));

    //-//

    let textureOptionsLabel = ce("span");
    textureOptionsLabel.style.color = "rgb(255, 255, 255)";
    textureOptionsLabel.textContent = "TEXTURE OPTIONS";
    theMenu.append(textureOptionsLabel);

    //-//

    theMenu.append(ce('hr'));

    //-//

    for (let z = 0; z < textureArray.length; z++)
    {
        let textureButton = ce("button");
        textureButton.onclick = function()
        {
            if (online == true)
            {
                ge(theStructureId).style.backgroundImage = 'url('+textureArray[z].textureOnline+')';
            }
            else if (online == false)
            {
                ge(theStructureId).style.backgroundImage = 'url('+textureArray[z].textureOffline+')';
            }
            updateStructures(theStructureId);
        };
        textureButton.className = "ourButton";
        textureButton.textContent = textureArray[z].name;
        theMenu.append(textureButton);

        //-//

        theMenu.append(ce('br'));
    }
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

