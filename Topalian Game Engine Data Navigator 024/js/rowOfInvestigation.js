//Dedicated to God the Father

//All Rights Reserved Christopher Topalian Copyright 2020-2021

//rowOfInvestigation.js

function sortInvestigation(theY, direction) 
{
    let whichArray = petitoGabrielleInvestigation;

    if(direction == "up")
    {
        whichArray.sort(function(a,b){return new Date(a.date) - new Date(b.date);});
    }
    else if(direction =="down")
    {
        whichArray.sort(function(b,a){return new Date(a.date) - new Date(b.date);});
    }
    rowOfInvestigation(100, theY, 400, 400, whichArray, "note");
}

function removeRow()
{
    let name = "Investigation";

    let counter = 0;

    for(x = 0; x < petitoGabrielleInvestigation.length; x++)
    {
        counter += 1;

        removeElement(name + counter);
    }
    removeElement("theIdOfButtons");
}

function rowOfInvestigation(theX, theY, sizeX, sizeY, whichArray, criteria1)
{ 
    let counter = 0;

    theX -= sizeX;

    let theButtons = document.createElement("div");

    //POSITION
    theButtons.style.position = "absolute";
    theButtons.style.left = 18 + 'px';
    theButtons.style.top = theY + 'px'; 

    //LAYER
    theButtons.style.zIndex = "15"; 

    //FONT
    theButtons.style.fontFamily = "arial";
    theButtons.style.fontWeight = "normal";
    theButtons.style.fontSize = "medium";
    theButtons.style.color = "white";
    theButtons.style.textAlign = "right";

    //ID
    theButtons.id = "theIdOfButtons";

    //CONTENT
    theButtons.innerHTML += '<button onclick="sortInvestigation(\''+theY+'\', \'up\');removeRow();" class="ourButton">Ascending</button><br><br>';

    theButtons.innerHTML += '<button onclick="sortInvestigation(\''+theY+'\', \'down\');removeRow();" class="ourButton">Descending</button><br><br>';

    theButtons.innerHTML += '<button onclick="removeRow();" class="ourButton">Remove Row</button><br>';

    //ADD TO THE PAGE
    document.body.append(theButtons);

    for(let i = 0; i < whichArray.length; i++)
    {
        //columns across
        theX = theX + sizeX + 25;

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
                theDiv.style.left = theX +'px';
                theDiv.style.top = theY -35 + 'px';

                //SIZE
                theDiv.style.width = sizeX +'px';
                theDiv.style.height = sizeY +'px';

                //LAYER
                theDiv.style.zIndex = "10";

                //BACKGROUND COLOR
                theDiv.style.background = "black";

                //BORDER
                //theDiv.style.border = "solid 2px rgba(100,100,255,1.0)";
                theDiv.style.borderStyle = "solid";
                theDiv.style.borderWidth = "2px";
                theDiv.style.borderColor = "rgba(100,100,255,1.0)";

                //PADDING
                theDiv.style.paddingTop = "8px";
                theDiv.style.paddingBottom = "8px";
                theDiv.style.paddingLeft = "8px";
                theDiv.style.paddingRight = "8px";

                //FONT
                theDiv.style.fontFamily = "arial";
                theDiv.style.fontWeight = "bold";
                theDiv.style.fontSize = "medium";
                theDiv.style.color = "white";
                theDiv.style.textAlign = "center";

                //Add one to the counter variable
                counter += 1;

                //ID
                theDiv.id = "Investigation" + counter;           

                //theDiv.innerHTML = whichArray[i].date;
                 theDiv.innerHTML += '<button onclick="printOnlyDiv(\''+theDiv.id+'\');" style="z-index:20;" class="ourButton">Print</button><hr class ="hrCompact">';

                theDiv.innerHTML += whichArray[i].date + "<hr class='hrCompact'>";

                theDiv.innerHTML += '<span style="color:aqua; font-weight:bold">\''+whichArray[i].summary+'\'</span><br>';

                //Show the Number. This is useful for manual ordering
                //theDiv.innerHTML += whichArray[i].number + "<br>";

                theDiv.innerHTML += "<hr class='hrCompact'>";

                theDiv.innerHTML += whichArray[i].note;

                theDiv.innerHTML += "<hr class='hrCompact'>";

                theDiv.innerHTML += '<span style="color:aqua">' + '<a href=\''+whichArray[i].newsArticleOne+'\' target="_blank">\''+whichArray[i].newsArticleOne+'\'</a></span>';

                theDiv.innerHTML += "<hr>";

                document.body.append(theDiv);
            }
        }
    }
}

//--------------------------------------------------//

