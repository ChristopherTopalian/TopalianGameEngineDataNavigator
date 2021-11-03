//Dedicated to God the Father

//All Rights Reserved Christopher Topalian Copyright 2020-2021

//rowOfVideosWithDetails.js

//uses videoDetailsWindow
//The endTime is kept, for when we later add an offline option, for the possibility that a video might be taken offline, or made unable to embed, but also if the person simply prefers the offline version.

function makeVideosOnlineStartEndTIMECODE(theX, theY, sizeX, sizeY, whichArray, criteria1, criteria2)
{
    let counter = 0;

    theX -= sizeX;

    let startTime;
    let endTime;

            //used with bdaBoxingComments array   
    for(let i = 0; i < whichArray.length; i++)
    {
        startTime = secondsFromTimeCode(whichArray[i].startTime);
        endTime = secondsFromTimeCode(whichArray[i].endTime);

        //console.log(startTime + " and " + endTime);

        if(whichArray[i].name == criteria1 && whichArray[i].description == criteria2)
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
                createCategoriesTitle.style.top = theY -145 + 'px';

                //SIZE
                createCategoriesTitle.style.width = sizeX +'px';
                //createCategoriesTitle.style.height= 400 +'px';

                //PADDING
                createCategoriesTitle.style.paddingTop = 4 +'px';
                createCategoriesTitle.style.paddingBottom = 4 +'px';

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

                createCategoriesTitle.innerHTML = '<b style="color:aqua">\''+whichArray[i].title+'' + "</b><br>" + "upload date " + ''+whichArray[i].date+'' + "<br>" +'<a href=\''+ whichArray[i].url + "\?start=" + startTime + "&end=" + endTime + '\' target="_blank">Link</a><br>'+
                ''+whichArray[i].url + "\?start=" + startTime + "&end=" + endTime + "<br>" + ''+whichArray[i].startTime+''+ " to "+ ''+whichArray[i].endTime+'' + "<br>" + '<b style="color:yellow">\''+criteria1+'' +" " +criteria2+'';

                //ID
                createCategoriesTitle.id = Math.floor(300000 + Math.random() * 9700000);

                //TYPE OF ELEMENT TO CREATE
                let printButtonHere = document.createElement("div");

                //POSITION
                printButtonHere.style.position = "absolute";
                printButtonHere.style.left = theX + 2 +'px';
                printButtonHere.style.top = theY -38 + 'px';

                //FONT
                printButtonHere.style.color = "white";

                //LAYER
                printButtonHere.style.zIndex = "10";

                printButtonHere.innerHTML += '<button onclick="printOnlyDiv(\''+createCategoriesTitle.id+'\');" class="ourButton">Print</button><br>';

                //TYPE OF ELEMENT TO CREATE
                let detailsButton = document.createElement("div");

                //POSITION
                detailsButton.style.position = "absolute";
                detailsButton.style.left = theX + 2 +'px';
                detailsButton.style.top = theY -63 + 'px';

                //LAYER
                detailsButton.style.zIndex = "10";

                //FONT
                detailsButton.style.color = "white";
                
                detailsButton.innerHTML +='<button onclick="videoDetailsWindow(\''+whichArray[i].words+'\');" class="ourButton">Details</button><br>';

                //TYPE OF ELEMENT TO CREATE
                let makeVideoHere = document.createElement("iframe");

                //ID
                makeVideoHere.id = Math.floor(350000 + Math.random() * 9750000);

                //SOURCE
                makeVideoHere.src = whichArray[i].url + "?start=" + startTime + "&?end=" + endTime;

                //CURRENT TIME
                makeVideoHere.currentTime = whichArray[i].url + "?start=" + startTime + "&?end=" + endTime;

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
                reloadVideoButton.style.left = theX + 2 +'px';
                reloadVideoButton.style.top = theY -13 + 'px';

                //APPEARANCE
                reloadVideoButton.style.zIndex = "15";

                reloadVideoButton.innerHTML += '<button class="ourButton" onclick=reloadOurVideo(\"'+makeVideoHere.id+'\")>Reload</button>';

                document.body.append(createCategoriesTitle);
                document.body.append(makeVideoHere);
                document.body.append(detailsButton);
                document.body.append(printButtonHere);
                document.body.append(reloadVideoButton);
            }
        }
    }
}

function videoSpeed(videoId) 
{
    //commented code in this section is kept for the purpose of designing a new feature
    //document.querySelector(".html5-video-container video").playbackRate = 2.0
    // videoId = "movie_player";
    //document.querySelector('video').playbackRate=0.5;
    //document.getElementById(videoId).playbackRate=0.5;
    let thisVideo = document.getElementById(videoId);
    //let ourVideoHere = document.getElementById(videoId);
    console.log(thisVideo.currentTime);
    //thisVideo.playVideo();
    //console.log(thisVideo.playbackRate);
    //ourVideoHere.playbackRate = videoSpeed;
    //ourVideoHere.currentTime = starttime;
    // ourVideoHere.play(); 
}

//This function shows all the videos of the boxing debate section, uses videoDetailsWindow
function makeVideosOnlineStartEndTIMECODEShowAll(theX, theY, sizeX, sizeY, whichArray, criteria1)
{
    theX -= sizeX;

    let startTime;
    let endTime;

            //used with bdaBoxingComments array   
    for(let i = 0; i < whichArray.length; i++)
    {
        startTime = secondsFromTimeCode(whichArray[i].startTime);
        endTime = secondsFromTimeCode(whichArray[i].endTime);

        //console.log(startTime + " and " + endTime);

        //if(whichArray[i].name == criteria1 && whichArray[i].description == criteria2)
        if(whichArray[i].tag == criteria1) //SHOW ALL VIDEOS
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
                let makeVideoHere = document.createElement("iframe");

                makeVideoHere.id = Math.floor(350000 + Math.random() * 9750000);

                makeVideoHere.src = whichArray[i].url + "?start=" + startTime + "&?end=" + endTime;

                makeVideoHere.currentTime = whichArray[i].url + "?start=" + startTime + "&?end=" + endTime;

                //POSITION
                makeVideoHere.style.position = "absolute";
                makeVideoHere.style.left = theX +'px';
                makeVideoHere.style.top = theY + 'px';

                //SIZE
                makeVideoHere.style.width = sizeX +'px';
                makeVideoHere.style.height = sizeY +'px';

                //APPEARANCE
                makeVideoHere.style.zIndex = "1";
                makeVideoHere.style.background = "black";
                makeVideoHere.style.border = "solid 2px rgba(100,100,255,1.0)";

                //FONT
                makeVideoHere.style.fontFamily = "arial";
                makeVideoHere.style.fontWeight = "bold";
                makeVideoHere.style.fontSize = "xx-large";
                makeVideoHere.style.color = "aqua";
                makeVideoHere.style.textAlign = "center";

                //TYPE OF ELEMENT TO CREATE
                let createCategoriesTitle = document.createElement("div");

                //POSITION
                createCategoriesTitle.style.position = "absolute";
                createCategoriesTitle.style.left = theX +'px';
                createCategoriesTitle.style.top = theY -195 + 'px';

                //SIZE
                createCategoriesTitle.style.width = sizeX +'px';
                //createCategoriesTitle.style.height= 400 +'px';

                createCategoriesTitle.style.paddingTop = 4 +'px';
                createCategoriesTitle.style.paddingBottom = 4 +'px';

                //APPEARANCE
                createCategoriesTitle.style.zIndex = "10";
                createCategoriesTitle.style.background = "black";
                createCategoriesTitle.style.border = "solid 2px rgba(100,100,255,1.0)";

                //FONT
                createCategoriesTitle.style.fontFamily = "arial";
                createCategoriesTitle.style.fontWeight = "bold";
                createCategoriesTitle.style.fontSize = "medium";
                createCategoriesTitle.style.color = "white";
                createCategoriesTitle.style.textAlign = "center";

                createCategoriesTitle.id = Math.floor(300000 + Math.random() * 9700000);

                createCategoriesTitle.innerHTML= '<b style="color:aqua">\''+whichArray[i].title+'' + "</b><br>" + "upload date " + ''+whichArray[i].date+'' + "<br>" +'<a href=\''+ whichArray[i].url + "\?start=" + startTime + "&end=" + endTime + '\' target="_blank">Link</a><br>'+
                ''+whichArray[i].url + "\?start=" + startTime + "&end=" + endTime + "<br>" + ''+whichArray[i].startTime+''+ " to "+ ''+whichArray[i].endTime+'' + "<br>" + '<button onclick="videoDetailsWindow(\''+whichArray[i].words+'\');" class="ourButton">Details</button>'+ '<button class="ourButton" onclick="reloadOurVideo(\''+makeVideoHere.id+'\');">Reload</button>' +'<button onclick="printOnlyDiv(\''+createCategoriesTitle.id+'\');" class="ourButton">Print</button><br>' + '<b style="color:aqua">\''+whichArray[i].name+'' + "<br>" +'<b style="color:yellow">\''+whichArray[i].description+'';

                document.body.append(createCategoriesTitle);
                document.body.append(makeVideoHere);
            }
        }
    }
}

function videoDetailsWindow(theDetails) 
{ 
    let mywindow;

    mywindow = window.open('', 'DETAILS', 'height=315,width=350 top=205, left=250');

    mywindow.document.write('<style>img{width:75%;</style></head><body>');

    mywindow.document.write('<h4>' + document.title  + '</h4>');

    //mywindow.document.write(document.getElementById(whichDiv).innerHTML);

    mywindow.document.write(theDetails);
    //mywindow.print();
    //mywindow.close();            
}

//--------------------------------------------------//

