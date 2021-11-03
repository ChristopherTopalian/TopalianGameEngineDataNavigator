//Dedicated to God the Father

//All Rights Reserved Christopher Topalian Copyright 2020-2021

//rowOfNotes.js

/*
    Creates a Row to display NOTES from our data file
*/

function rowOfNotes(theX, theY, sizeX, sizeY, whichArray, criteria1)
{
    let counter = 0;

    theX -= sizeX;

    //This code below allows us to create an id to be used for location data by our menu.
    let idForPosition = document.createElement("div");
    idForPosition.style.position = "absolute";
    idForPosition.style.left = theX +'px';
    idForPosition.style.top = theY -22 + 'px'; 
    idForPosition.id = "notesId";
    document.body.append(idForPosition);

                    //used with theNotes array
    for(let i = 0; i < whichArray.length; i++)
    {
        //columns across
        theX = theX + sizeX + 10;

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
                let theDiv = document.createElement("div");

                //POSITION
                theDiv.style.position = "absolute";
                theDiv.style.left = theX + 'px';
                theDiv.style.top = theY +'px';

                //LAYER
                theDiv.style.zIndex = "1";

                //BORDER
                //theDiv.style.border = "solid 2px rgba(0,0,100,1.0)";
                theDiv.style.borderStyle = "solid";
                theDiv.style.borderWidth = "2px";
                theDiv.style.borderColor = "rgba(100,100,255,1.0)";

                //BACKGROUND
                //theDiv.style.background = "grey";

                //FONT
                theDiv.style.fontFamily = "arial";
                theDiv.style.fontWeight = "normal";
                theDiv.style.fontSize = "medium";
                theDiv.style.color = "white";
                theDiv.style.textAlign = "center";

                //SIZE
                theDiv.style.width = sizeX +'px';
                theDiv.style.height = sizeY +'px';

                theDiv.setAttribute("class", "divBackground"); 
                //"+criteria+"

                //notesRow.id = whichArray[i].id;

                //theDiv.id = Math.floor(350000 + Math.random() * 9750000);

                //Add one to the counter variable
                counter += 1;

                //ID
                theDiv.id = "Notes" + counter;

                theDiv.innerHTML = "Notes Row<hr class='hrCompact'>";

                theDiv.innerHTML += '<button onclick="printOnlyDiv(\''+theDiv.id+'\');" class="ourButton">Print</button><br>';
        
                theDiv.innerHTML+= whichArray[i].date + "<br>";

                theDiv.innerHTML+= whichArray[i].number + "<br>";

                theDiv.innerHTML += whichArray[i].note + "<br>";

                document.body.append(theDiv);
            }
        }
    }
}

//--------------------------------------------------//

