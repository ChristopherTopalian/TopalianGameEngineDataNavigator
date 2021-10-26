//Dedicated to God the Father

//All Rights Reserved Christopher Topalian Copyright 2020-2021

//rowOfVideos.js

/*  
    Adds videos to the page.
    The videos must allow embed.
    On youtube, we copy the url in the Address Bar   
    for example https://www.youtube.com/watch?v=Q4tPG-cwiWE    
    then we just replace watch?v= with embed/      
    for example  https://www.youtube.com/embed/Q4tPG-cwiWE
*/

function rowOfVideos(theX, theY, sizeX, sizeY, whichArray, criteria)
{
    let counter = 0;

    theX -= sizeX;

    //This code below allows us to create an id to be used for location data by our menu.
    let idForPosition = document.createElement("div");
    idForPosition.style.position = "absolute";
    idForPosition.style.left = theX +'px';
    idForPosition.style.top = theY -22 + 'px'; 
    idForPosition.id = "videoEvidenceId";
    document.body.append(idForPosition);

                    //used with videoEvidence array
    for(let i = 0; i < whichArray.length; i++)
    {
        if(whichArray[i].description == criteria)
        {
            //columns across
            theX = theX + sizeX;

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
                let createCategoryTitle = document.createElement("div");

                //POSITION
                createCategoryTitle.style.position = "absolute";
                createCategoryTitle.style.left = theX +'px';
                createCategoryTitle.style.top = theY -100 + 'px';

                //SIZE
                createCategoryTitle.style.width = sizeX +'px';

                //LAYER
                createCategoryTitle.style.zIndex = "10";

                //BORDER
                createCategoryTitle.style.border = "solid 2px rgba(100,100,255,1.0)";

                //BACKGROUND COLOR
                createCategoryTitle.style.background = "black";

                //FONT
                createCategoryTitle.style.fontFamily = "arial";
                createCategoryTitle.style.fontWeight = "bold";
                createCategoryTitle.style.fontSize = "medium";
                createCategoryTitle.style.color = "white";
                createCategoryTitle.style.textAlign = "center";

                createCategoryTitle.innerHTML = whichArray[i].title + "<br>" + "upload date " + ''+ whichArray[i].date+'' + "<br>" + ''+ whichArray[i].url+'' + "<br>" + '<a href=\''+ whichArray[i].url + '\' target="_blank">Link</a><br>' + '<b style="color:aqua">\''+criteria+'' + "</b>";

                //ID
                createCategoryTitle.id = Math.floor(300000 + Math.random() * 9700000);

                //TYPE OF ELEMENT TO CREATE
                let printButton = document.createElement("div");

                //POSITION
                printButton.style.position = "absolute";
                printButton.style.left = theX +'px';
                printButton.style.top = theY -25 + 'px';

                //LAYER
                printButton.style.zIndex = "10";

                //FONT
                printButton.style.color = "white";
            
                printButton.innerHTML += '<button onclick="printOnlyDiv(\''+createCategoryTitle.id+'\');" class="ourButton">Print</button><br>';

                //TYPE OF ELEMENT TO CREATE
                let makeVideo = document.createElement("iframe");

                //SOURCE
                makeVideo.src = whichArray[i].url;

                //POSITION
                makeVideo.style.position = "absolute";
                makeVideo.style.left = theX +'px';
                makeVideo.style.top = theY + 'px';

                //SIZE
                makeVideo.style.width = sizeX +'px';
                makeVideo.style.height = sizeY +'px';

                //LAYER
                makeVideo.style.zIndex = "1";

                //BACKGROUND COLOR
                makeVideo.style.background = "black";

                //BORDER
                makeVideo.style.border = "solid 2px rgba(100,100,255,1.0)";

                //FONT
                makeVideo.style.fontFamily = "arial";
                makeVideo.style.fontWeight = "bold";
                makeVideo.style.fontSize = "xx-large";
                makeVideo.style.color ="aqua";
                makeVideo.style.textAlign = "center";

                //makeVideo.setAttribute("class", ''+criteria+'');

                document.body.append(createCategoryTitle);
                document.body.append(makeVideo);
                document.body.append(printButton);
            }
        }
    }
}

//--------------------------------------------------//

