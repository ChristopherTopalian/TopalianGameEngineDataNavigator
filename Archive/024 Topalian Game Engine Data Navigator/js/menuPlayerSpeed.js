//Dedicated to God the Father

//All Rights Reserved Christopher Topalian Copyright 2020-2021

//menuPlayerSpeed.js

function menuPlayerSpeed()
{
    playSound("blipQuiet2", 1.0);

    //TYPE OF ELEMENT TO CREATE
    let theMenu = document.createElement("div");

    //POSITION
    theMenu.style.position = "absolute";
    theMenu.style.left = ourPlayer.x + 100 +'px';
    theMenu.style.top = ourPlayer.y - 50 + 'px';

    //SIZE
    theMenu.style.width = 400 +'px';
    theMenu.style.height = 173 +'px';

    //PADDING effects size
    theMenu.style.paddingLeft = "20px";
    theMenu.style.paddingRight = "20px";
    theMenu.style.paddingTop = "4px";

    //LAYER
    theMenu.style.zIndex = "998";

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
    theMenu.innerHTML += '<button onclick=removeElement("menuSpeedPlayer");keyboardControlOn(); class="ourButton" style="margin-bottom: -4px">X</button>';   

    //We Build the menu using innerHTML
    theMenu.innerHTML+= '<div><hr><span style="color:rgb(255, 255, 255)">SPEED OPTIONS</span><hr>';    

    theMenu.innerHTML+= '<button onclick="speedPlayer(\'1\')" class=\'ourButton\'>1</button></div>';

    theMenu.innerHTML+= '<button onclick="speedPlayer(\'2\')" class=\'ourButton\'>2</button></div>';

    theMenu.innerHTML+= '<button onclick="speedPlayer(\'3\')" class=\'ourButton\'>3</button></div>';

    theMenu.innerHTML+= '<button onclick="speedPlayer(\'4\')" class=\'ourButton\'>4</button></div>';

    theMenu.innerHTML+= '<button onclick="speedPlayer(\'5\')" class=\'ourButton\'>5</button></div>';

    theMenu.innerHTML+= '<button onclick="speedPlayer(\'6\')" class=\'ourButton\'>6</button></div>';

    theMenu.innerHTML+= '<button onclick="speedPlayer(\'7\')" class=\'ourButton\'>7</button></div>';

    theMenu.innerHTML+= '<button onclick="speedPlayer(\'8\')" class=\'ourButton\'>8</button></div>';

    theMenu.innerHTML+= '<button onclick="speedPlayer(\'9\')" class=\'ourButton\'>9</button></div>';

    theMenu.innerHTML+= '<button onclick="speedPlayer(\'0\')" class=\'ourButton\'>10</button></div>';

    theMenu.innerHTML+= '<button onclick="customSpeed();" class=\'ourButton\'>Custom</button>';

    //ID
    theMenu.innerHTML += '<hr>';

    theMenu.innerHTML+= 'SPEED &nbsp<textarea id="textSpeed" class=\'textInput\' onkeydown="keyboardControlOff();"></textarea><br>';

    theMenu.innerHTML+= '<button onclick="customSpeedFromTextInput();keyboardControlOn();enterButtonSound();" class=\'ourButton\'>Enter</button>';

    //ID
    theMenu.id = "menuSpeedPlayer"; 
    
    /* 
        If the player menu already exists, remove it, and create a new player menu wherever the player is
    */
    if(document.getElementById("menuSpeedPlayer"))
    {
        removeElement("menuSpeedPlayer");
        
        document.body.append(theMenu);
    }
    else
    {
        document.body.append(theMenu);
    }
}

function speedPlayer(theSpeed)
{
    playSound("blipQuiet1", 1.0);
    if(theSpeed == '1')
    {
        //speed of player
        ourPlayer.speedMultiplier=1;
    }
    if(theSpeed == '2')
    {
        //speed of player
        ourPlayer.speedMultiplier=2;
    }
    if(theSpeed == 'grey' || theSpeed =='gray')
    {
        //speed of player
        ourPlayer.speedMultiplier=3;
    }
    if(theSpeed == '3')
    {
        //speed of player
        ourPlayer.speedMultiplier=3;
    }
    if(theSpeed == '4')
    {
        //speed of player
        ourPlayer.speedMultiplier=4;
    }
    if(theSpeed == '5')
    {
        //speed of player
        ourPlayer.speedMultiplier=5;
    }
    if(theSpeed == '6')
    {
        //speed of player
        ourPlayer.speedMultiplier=6;
    }
    if(theSpeed == '7')
    {
        //speed of player
        ourPlayer.speedMultiplier=7;
    }
    if(theSpeed == '8')
    {
        //speed of player
        ourPlayer.speedMultiplier=8;
    }
    if(theSpeed == '9')
    {
        //speed of player
        ourPlayer.speedMultiplier=9;
    }
    if(theSpeed == '0')
    {
        //speed of player
        ourPlayer.speedMultiplier=10;
    }
    document.getElementById("textSpeed").value = ourPlayer.speedMultiplier;

    ourPlayer.playerId.innerHTML = '<br><br><br><br>Speed<br>' + ourPlayer.speedMultiplier;

    //update playerArray to show the changed value
    updatePlayer();
}

function customSpeed()
{
    let theSpeed = prompt("Enter Speed 1 to 1000 etc")

    //speed of player
    ourPlayer.speedMultiplier=theSpeed;

    if(theSpeed == '' || theSpeed == null)
    {
        ourPlayer.speedMultiplier=10;
    }

    document.getElementById("textSpeed").value = ourPlayer.speedMultiplier;

    ourPlayer.playerId.innerHTML = '<br><br><br><br>Speed<br>' + ourPlayer.speedMultiplier;

    //update playerArray to show the changed value
    updatePlayer();
}

function customSpeedFromTextInput()
{
    let theSpeed = document.getElementById("textSpeed").value;

    ourPlayer.speedMultiplier = theSpeed;

    ourPlayer.playerId.innerHTML = '<br><br><br><br>Speed<br>' + ourPlayer.speedMultiplier;

    //ourPlayer.playerId.innerHTML = theSpeed;

    //console.log(theSpeed);

    //update playerArray to show the changed value
    updatePlayer();
}

//--------------------------------------------------//

