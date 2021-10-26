//Dedicated to God the Father

//All Rights Reserved Christopher Topalian Copyright 2020-2021

//rowOfVideosOnlineStartEnd.js

//makes a row of videos, using internet url embed enabled videos, with a reload button, so that the video and/or audio can be played again from the start point.

function makeVideosOnlineStartEnd(theX, theY, sizeX, sizeY, whichArray, criteria1, criteria2)
{
    let counter = 0;

    theX -= sizeX;

            //used with videoEvidence array   
    for(let i = 0; i < whichArray.length; i++)
    {
        if(whichArray[i].tag == criteria1 && whichArray[i].description == criteria2)
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
                //columns across
                theX = theX + sizeX;

                //TYPE OF ELEMENT TO CREATE
                let createCategoriesTitle = document.createElement("div");

                //POSITION
                createCategoriesTitle.style.position = "absolute";
                createCategoriesTitle.style.left = theX +'px';
                createCategoriesTitle.style.top = theY -100 + 'px';

                //SIZE
                createCategoriesTitle.style.width = sizeX +'px';

                //LAYER
                createCategoriesTitle.style.zIndex = "10";

                //BACKGROUND COLOR
                createCategoriesTitle.style.background = "black";

                //BORDER
                createCategoriesTitle.style.border = "solid 2px rgba(100,100,255,1.0)";

                //FONT
                createCategoriesTitle.style.fontFamily = "arial";
                createCategoriesTitle.style.fontWeight = "bold";
                createCategoriesTitle.style.fontSize = "medium";
                createCategoriesTitle.style.color = "white";
                createCategoriesTitle.style.textAlign = "center";

                createCategoriesTitle.innerHTML = '<b style="color:yellow">\''+criteria1+'' + "</b>" + "  -   " + '<b style="color:aqua">\''+criteria2+'' + "</b><br>" + whichArray[i].title + "<br>" + "upload date " + ''+whichArray[i].date+'' + "<br>" + ''+whichArray[i].url+'' + "<br>" +'<a href=\''+ whichArray[i].url + '\' target="_blank">Link</a><br>';

                //ID
                createCategoriesTitle.id = Math.floor(300000 + Math.random() * 9700000);

                //TYPE OF ELEMENT TO CREATE
                let printButtonHere = document.createElement("div");

                //POSITION
                printButtonHere.style.position = "absolute";
                printButtonHere.style.left = theX + 4 +'px';
                printButtonHere.style.top = theY -45 + 'px';

                //APPEARANCE
                printButtonHere.style.color = "white";
                printButtonHere.style.zIndex = "10";
            
                printButtonHere.innerHTML += '<button onclick="printOnlyDiv(\''+createCategoriesTitle.id+'\');" class="ourButton">Print</button><br>';

                //TYPE OF ELEMENT TO CREATE
                let makeVideoHere = document.createElement("iframe");

                //ID
                makeVideoHere.id = Math.floor(350000 + Math.random() * 9750000);

                //SOURCE
                makeVideoHere.src = whichArray[i].url;

                //POSITION
                makeVideoHere.style.position = "absolute";
                makeVideoHere.style.left = theX +'px';
                makeVideoHere.style.top = theY + 'px';

                //SIZE
                makeVideoHere.style.width = sizeX +'px';
                makeVideoHere.style.height = sizeY +'px';

                //LAYER
                makeVideoHere.style.zIndex = "1";

                //BACKGROUND COLOR
                makeVideoHere.style.background = "black";

                //BORDER
                makeVideoHere.style.border = "solid 2px rgba(100,100,255,1.0)";

                //FONT
                makeVideoHere.style.fontFamily = "arial";
                makeVideoHere.style.fontWeight = "bold";
                makeVideoHere.style.fontSize = "xx-large";
                makeVideoHere.style.color = "aqua";
                makeVideoHere.style.textAlign = "center";
                
                //TYPE OF ELEMENT TO CREATE
                let reloadVideoButton = document.createElement("div");

                //POSITION
                reloadVideoButton.style.position = "absolute";
                reloadVideoButton.style.left = theX +5 +'px';
                reloadVideoButton.style.top = theY -17 + 'px';

                //LAYER
                reloadVideoButton.style.zIndex = "15";

                reloadVideoButton.innerHTML += '<button class="ourButton" onclick=reloadOurVideo(\"'+makeVideoHere.id+'\")>Reload</button>';

                document.body.append(createCategoriesTitle);
                document.body.append(makeVideoHere);
                document.body.append(printButtonHere);
                document.body.append(reloadVideoButton);
            }
        }
    }
}

function reloadOurVideo(theFrameId)
{
    document.getElementById(theFrameId).src = document.getElementById(theFrameId).src;
}

//--------------------------------------------------//

