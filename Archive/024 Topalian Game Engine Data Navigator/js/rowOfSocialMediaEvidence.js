//Dedicated to God the Father

//All Rights Reserved Christopher Topalian Copyright 2020-2021

//rowOfSocialMediaEvidence.js

function rowOfSocialMediaEvidence(theX, theY, sizeX, sizeY, whichArray, criteria1)
{
    let counter = 0;

    theX -= sizeX;

    //This code below allows us to create an id to be used for location data by our menu.
    let idForPosition = document.createElement("div");
    idForPosition.style.position = "absolute";
    idForPosition.style.left = theX +'px';
    idForPosition.style.top = theY -22 + 'px'; 
    idForPosition.id = "socialMediaId";
    document.body.append(idForPosition);

            //used with socialMediaEvidence Array    
    for(let i = 0; i < whichArray.length; i++)
    {
        //alert(whichArray[i].date.substring(6,10));
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
            if(whichArray[i].date.substring(6,10) == 2020)

            //filter for MULTIPLE YEARS
            //if(whichArray[i].date.substring(6,10) == 2019 || whichArray[i].date.substring(6,10) == 2020)

            //filter for MONTH and YEAR
            //if(whichArray[i].date.substring(0,2) == 2 && whichArray[i].date.substring(6,10) == 2020)

            //You can replace the if statement below,
            //with one of the options above.
            //if(whichArray) //shows all items
            {
                if(whichArray[i].probability >= 50)
                {
                    //columns across
                    theX = theX + sizeX + 10;

                    //TYPE OF ELEMENT TO CREATE
                    let theDiv = document.createElement("div");
            
                    //POSITION
                    theDiv.style.position = "absolute";
                    theDiv.style.left = theX +'px';
                    theDiv.style.top = theY +'px';

                    //SIZE
                    theDiv.style.width = sizeX +'px';
                    theDiv.style.height = sizeY + 'px';

                    //PADDING
                    //theDiv.style.padding="0px 5px 0px 5px";

                    //LAYER
                    theDiv.style.zIndex = "1";

                    //BORDER
                    //theDiv.style.border = "solid 2px rgba(100,100,255,1.0)";
                    theDiv.style.borderStyle = "solid";
                    theDiv.style.borderWidth = "2px";
                    theDiv.style.borderColor = "rgba(100,100,255,1.0)";

                    //BACKGROUND COLOR
                    //theDiv.style.background = "white";

                    //FONT
                    theDiv.style.fontFamily = "arial";
                    theDiv.style.fontWeight = "bold";
                    theDiv.style.fontSize = "medium";
                    theDiv.style.color ="white";
                    theDiv.style.textAlign = "center";
                    
                    theDiv.setAttribute("class", "divBackground");

                    //theDiv.id = whichArray[i].id;

                    //theDiv.id = Math.floor(357000 + Math.random() * 9770000);

                    //Add one to the counter variable
                    counter += 1;

                    //ID
                    theDiv.id = "SocialMediaEvidence" + counter;

                    theDiv.innerHTML += "Social Media Evidence Rating <hr class='hrCompact'>";
        
                    theDiv.innerHTML += '<button onclick="printOnlyDiv(\''+theDiv.id+'\');" class="ourButton">Print</button><br>';

                    theDiv.innerHTML += whichArray[i].title + "<br>";
            
                    theDiv.innerHTML += whichArray[i].date + "<br>";
            
                    theDiv.innerHTML += whichArray[i].info + "<br>";

                    theDiv.innerHTML += "Probability Rating: " + whichArray[i].probability + "%" + "<br>";

                    theDiv.innerHTML+='<a href=\''+whichArray[i].url+'\' target="_blank">Link</a><br>';

                    theDiv.innerHTML += '<img src= \''+whichArray[i].image+'\' class="theImage">';

                    document.body.append(theDiv);
                }
            }
        }
    }
}

//--------------------------------------------------//

