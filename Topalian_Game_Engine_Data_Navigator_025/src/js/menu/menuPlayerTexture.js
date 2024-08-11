// menuPlayerTexture.js

let textureArray =
[
    {
        name: "Default",
        textureOffline: "None",
        textureOnline: "None"
    },
    {
        name: "Concrete 1",
        textureOffline: "src/media/textures/concrete1.jpg",
        textureOnline: "https://collegeofscripting.weebly.com/uploads/6/4/4/8/64482293/concrete1.jpg"
    },
    {
        name: "Wood 1",
        textureOffline: "./src/media/textures/wood1.jpg",
        textureOnline: "https://collegeofscripting.weebly.com/uploads/6/4/4/8/64482293/wood1.jpg"
    },
    {
        name: "Zebra 1",
        textureOffline: "src/media/textures/zebra1.jpg",
        textureOnline: "https://collegeofscripting.weebly.com/uploads/6/4/4/8/64482293/zebra1.jpg"
    },
    {
        name: "Boxing Glove",
        textureOffline: "src/media/textures/boxingglove.png",
        textureOnline: "https://collegeofscripting.weebly.com/uploads/6/4/4/8/64482293/boxingglove.png"
    },
    {
        name: "Jane",
        textureOffline: "src/media/textures/jane.png",
        textureOnline: "https://collegeofscripting.weebly.com/uploads/6/4/4/8/64482293/jane.png"
    }
];

function menuPlayerTexture()
{
    audioPlay("sfx_blip_001", 1.0);

    if (ge("menuTexturePlayer"))
    {
        removeElement("menuTexturePlayer");
    }

    //-//

    let theMenu = ce("div");
    theMenu.id = "menuTexturePlayer"; 
    theMenu.className = "divStyle001";
    theMenu.style.position = "absolute";
    theMenu.style.left = ourPlayer.x + 100 + 'px';
    theMenu.style.top = ourPlayer.y - 50 + 'px';
    theMenu.style.width = 400 + 'px';
    theMenu.style.height = 205 + 'px';
    ba(theMenu);

    //-//

    let closeButton = ce("button");
    closeButton.onclick = function()
    {
        removeElement("menuTexturePlayer");
    };
    closeButton.className = "ourButton";
    closeButton.style.marginBottom = "-4px";
    closeButton.textContent = "X";
    theMenu.append(closeButton);

    //-//

    theMenu.append(ce('hr'));

    //-//

    let theTitle = ce("span");
    theTitle.style.color = "rgb(255, 255, 255)";
    theTitle.textContent = "TEXTURE OPTIONS";
    theMenu.append(theTitle);

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
                ge(activePlayer).style.backgroundImage = 'url('+textureArray[z].textureOnline+')';
            }
            else if (online == false)
            {
                ge(activePlayer).style.backgroundImage = 'url('+textureArray[z].textureOffline+')';
            }
            updatePlayer();
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

