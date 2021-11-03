//Dedicated to God the Father

//All Rights Reserved Christopher Topalian Copyright 2020-2021

//structuresRow.js

/*
By Pressing the J button, the player creates a menu that is populated with entries from each Structure made.
The player can then click on any of the entries to be taken to the location of that Structure.
The Structures GoTo Menu can also be opened from the playerMenu, by clicking on the GoTo button.
*/

function structuresRow(theX, theY, sizeX, sizeY, whichArray)
{
    theX -= sizeX;

    let idCounter = 0;

    /*
    //This code below allows us to create an id to be used for location data by our menu.
    let idForPosition = document.createElement("div");
    idForPosition.style.position = "absolute";
    idForPosition.style.left = theX +'px';
    idForPosition.style.top = theY -22 + 'px'; 
    idForPosition.id = "structuresRow";
    document.body.append(idForPosition);
    */

            //used with structuresArray
    for(let i = 0; i < whichArray.length; i++)
    {
        //columns across
        theX = theX + sizeX + 17;

        //if(whichArray[i].tag == criteria1)
        if(whichArray)
        {
            //filter for a MONTH, meaning, SHOW ONLY 1 month
            //if(whichArray[i].date.substring(0,2) == 3)

            //filter for Multiple MONTHS
            //if(whichArray[i].date.substring(0,2) == 8 || whichArray[i].date.substring(0,2) == 9) 

            //filter for a DATE
            //if(whichArray[i].date.substring(0,10) == "02/29/2018")

            //filter for Multiple DATES
            //if(whichArray[i].date.substring(0,10) == "02/29/2018" || whichArray[i].date.substring(0,10) == "02/29/2020")

            //filter for a DAY, of any month, of any year
            //if(whichArray[i].date.substring(3,5) == 2)

            //filter for a YEAR
            //if(whichArray[i].date.substring(6,10) == 2019)

            //filter for MULTIPLE YEARS
            //if(whichArray[i].date.substring(6,10) == 2019 || whichArray[i].date.substring(6,10) == 2020)

            //filter for MONTH and YEAR
            //if(whichArray[i].date.substring(0,2) == 2 && whichArray[i].date.substring(6,10) == 2020)

            //You can replace the if statement below,
            //with one of the options above.
            if(whichArray) //shows all items
            {
                //TYPE OF ELEMENT TO CREATE
                let theTextArea = document.createElement("div");

                //POSITION
                theTextArea.style.position = "absolute";
                theTextArea.style.left = theX + 80 +'px';
                theTextArea.style.top = ourPlayer.y - 55 +'px';
                //theTextArea.style.top = theY + 30 +'px';
                
                //SIZE
                theTextArea.style.width = sizeX + 10 +'px';
                theTextArea.style.height = sizeY + 5 +'px';

                //LAYER
                theTextArea.style.zIndex = "998";

                //BORDER
                theTextArea.style.border = "solid 2px";
                theTextArea.style.borderColor = " rgba(0,255,255,1.0)";

                //BACKGROUND COLOR
                theTextArea.style.background = "rgb(0,0,0)";

                //FONT
                theTextArea.style.fontFamily = "arial";
                theTextArea.style.fontWeight = "normal";
                theTextArea.style.fontSize = "medium";
                theTextArea.style.color = "white";
                theTextArea.style.textAlign = "center";

                theTextArea.resize = "none";

                theTextArea.setAttribute("readonly", "true"); 

                idCounter += 1;

                // theTextArea.id = Math.floor(350000 + Math.random() * 9750000);
                
                //ID
                theTextArea.id = idCounter;

                //theTextArea.setAttribute("class", "divBackground"); 

                //REMOVE the element
                theTextArea.innerHTML += '<button onclick="removeElement(\''+theTextArea.id+'\');" class="ourButton">X</button>';

                theTextArea.innerHTML += '<button onclick="structuresGoTo(\''+whichArray[i].id+'\');" class=\'ourButton\'>GoTo</button><br>';

                theTextArea.innerHTML += "Name<br><b>" + whichArray[i].name + "</b><br>";

                theTextArea.innerHTML += "ID<br><b>" + whichArray[i].id + "</b><br>";

                theTextArea.innerHTML += "X Pos " + whichArray[i].posX + "<br>";

                theTextArea.innerHTML += " Y Pos " + whichArray[i].posY + "<br>";

                theTextArea.innerHTML += "X Size " + whichArray[i].sizeX + "<br>";

                theTextArea.innerHTML += "Y Size " + whichArray[i].sizeY + "<br>";

                /* 
                    If the Structures Row already exists, remove it, and create a new Structures Row wherever the player is
                */
                if(document.getElementById(theTextArea.id))
                {
                    removeElement(theTextArea.id);
        
                    document.body.append(theTextArea);
                }
                else
                {
                    document.body.append(theTextArea);
                }
            }
        }
    }
}

//--------------------------------------------------//

