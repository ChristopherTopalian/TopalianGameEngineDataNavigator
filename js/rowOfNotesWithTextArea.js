//Dedicated to God the Father

//All Rights Reserved Christopher Topalian Copyright 2020-2021

//rowOfNotesWithTextArea.js

function rowOfNotesWithTextArea(theX, theY, sizeX, sizeY, whichArray, criteria1)
{
    let counter = 0;

    theX -= sizeX;

    //This code below allows us to create an id to be used for location data by our menu.
    let idForPosition = document.createElement("div");
    idForPosition.style.position = "absolute";
    idForPosition.style.left = theX +'px';
    idForPosition.style.top = theY -22 + 'px'; 
    idForPosition.id = "notesWithTextAreaId";
    document.body.append(idForPosition);

            //used with theNotes array
    for(let i = 0; i < whichArray.length; i++)
    {
        //columns across
        theX = theX + sizeX - 23;

        if(whichArray[i].tag == criteria1)
        {
            //filter for a MONTH, meaning, SHOW ONLY 1 month
            //if(whichArray[i].date.substring(0,2) == 3)

            //filter for Multiple MONTHS
            //if(whichArray[i].date.substring(0,2) == 8 || whichArray[i].date.substring(0,2) == 9) 

            //filter for a DATE
            //if(whichArray[i].date.substring(0,10) == "02/29/2018")

            //filter for a Multiple DATES
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
                let theTextArea = document.createElement("textarea");

                //POSITION
                theTextArea.style.position = "absolute";
                theTextArea.style.left = theX + 17 +'px';
                theTextArea.style.top = theY + 30 +'px';

                //SIZE
                theTextArea.style.width = sizeX - 30 +'px';
                theTextArea.style.height = sizeY - 50 +'px';

                //LAYER
                theTextArea.style.zIndex = "1";

                //BORDER
                //theTextArea.style.border = "solid 2px rgba(0,50,200,1.0)";
                theTextArea.style.borderStyle = "solid";
                theTextArea.style.borderWidth = "2px";
                theTextArea.style.borderColor = "rgba(0,50,200,1.0)";

                //BACKGROUND COLOR
                //theTextArea.style.background = "grey";

                //FONT
                theTextArea.style.fontFamily = "arial";
                theTextArea.style.fontWeight = "bold";
                theTextArea.style.fontSize = "medium";
                theTextArea.style.color = "white";
                theTextArea.style.textAlign = "center";
                
                theTextArea.resize = "none";

                theTextArea.setAttribute("readonly", "true"); 

                theTextArea.setAttribute("class", "divBackground"); 
                //"+criteria+"

                theTextArea.value = "Notes Row with Text Area Scrolling" + "\n";

                theTextArea.value += whichArray[i].date + "\n";
                theTextArea.value += whichArray[i].number + "\n";
                theTextArea.value += whichArray[i].note + "\n";

                //theTextArea.id = Math.floor(350000 + Math.random() * 9750000);

                //Add one to the counter variable
                counter += 1;

                //ID
                theTextArea.id = "NotesWithTextArea" + counter;

                //TYPE OF ELEMENT TO CREATE
                let printButton = document.createElement("div");

                //POSITION
                printButton.style.position = "absolute";
                printButton.style.left = theX + 15 +'px';
                printButton.style.top = theY + 7 + 'px';

                //FONT
                printButton.style.color = "white";

                //APPEARANCE
                printButton.style.zIndex = "10";
            
                printButton.innerHTML += '<button onclick="printTextArea(\''+theTextArea.id+'\');" class="ourButton">Print</button><br>';
                
                document.body.append(printButton);
                document.body.append(theTextArea);
            }
        }
    }
}

//--------------------------------------------------//

