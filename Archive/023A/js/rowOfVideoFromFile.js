//Dedicated to God the Father

//All Rights Reserved Christopher Topalian Copyright 2020-2021

//rowOfVideoFromFile.js 

//Makes a Row of Video or Audio files, of mp3 or mp4 format

//video and/or audio files MUST BE placed in the audio, video folders,

//or, alternatively, you can define url2 as an internet address.

//If you are using the folder option, define url2 as null in your data. That way it will use the title as the src for the file.

function makeVideosUsingVideoFile(theX, theY, sizeX, sizeY, whichArray, criteria1, criteria2)
{
    let counter = 0;

    theX -= sizeX;
            //used with ourVideoFiles array  
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
                let theCategoriesTitle = document.createElement("div");

                //POSITION
                theCategoriesTitle.style.position = "absolute";
                theCategoriesTitle.style.left = theX +'px';
                theCategoriesTitle.style.top = theY -150 + 'px';

                //SIZE
                theCategoriesTitle.style.width = sizeX +'px';

                //LAYER
                theCategoriesTitle.style.zIndex = "10";

                //BACKGROUND COLOR
                theCategoriesTitle.style.background = "black";

                //BORDER
                theCategoriesTitle.style.border = "solid 2px rgba(100,100,255,1.0)";

                //FONT
                theCategoriesTitle.style.fontFamily = "arial";
                theCategoriesTitle.style.fontWeight = "bold";
                theCategoriesTitle.style.fontSize = "medium";
                theCategoriesTitle.style.color = "white";
                theCategoriesTitle.style.textAlign = "center";

                theCategoriesTitle.innerHTML='<b style="color:yellow">\''+criteria1+'' + "</b>" + "  -   " + '<b style="color:aqua">\''+criteria2+'' + "</b><br>" + whichArray[i].title + "<br>" + "upload date " + ''+whichArray[i].date+'' + "<br>" + ''+whichArray[i].url+'' + "<br>" +'<a href=\''+whichArray[i].url+'\' target="_blank">Link</a><br>'+ "Start Time " + whichArray[i].starttime + "&nbsp &nbsp" + " End Time " + whichArray[i].endtime + "<br>";

                //ID
                theCategoriesTitle.id = Math.floor(300000 + Math.random() * 9700000);

                //Add one to the counter variable
                //counter += 1;

                //ID
                //theCategoriesTitle.id = "VideoFromFile" + counter;

                //TYPE OF ELEMENT TO CREATE
                let thePrintButtonHere = document.createElement("div");

                //POSITION
                thePrintButtonHere.style.position = "absolute";
                thePrintButtonHere.style.left = theX +'px';
                thePrintButtonHere.style.top = theY -25 + 'px';

                //LAYER
                thePrintButtonHere.style.zIndex = "10";

                //FONT
                thePrintButtonHere.style.color = "white";
            
                thePrintButtonHere.innerHTML += '<button onclick="printOnlyDiv(\''+theCategoriesTitle.id+'\');" class="ourButton">Print</button><br>';

                //TYPE OF ELEMENT TO CREATE
                let theVideoHere = document.createElement("video");
                
                //theVideoHere.setAttribute("class", ''+criteria+'');

                theVideoHere.setAttribute("controls", '');

                /*If url2 is the word "null",
                //then it will use the video folder as the source
                //else, if the url2 is defined, then it will use url2
                */
                if(whichArray[i].url2 == "null")
                {
                    if(whichArray[i].kind=="video")
                    {
                        //referencing the video folder
                        theVideoHere.src = "video/" + whichArray[i].title + "." + whichArray[i].type;
                    }
                    if(whichArray[i].kind=="audio")
                    {
                        //referencing the audio folder
                        theVideoHere.src = "audio/" + whichArray[i].title + "." + whichArray[i].type;
                    }
                }
                else  //else if url2 is defined, then use url2 as source
                {
                    if(whichArray[i].kind=="video")
                    {
                        //referencing the url of the video online
                        theVideoHere.src = whichArray[i].url2;
                    }
                    if(whichArray[i].kind=="audio")
                    {
                        //referencing the url of the audio online
                        theVideoHere.src = whichArray[i].url2;
                    }
                }
                
                theVideoHere.currentTime = secondsFromTimeCode(whichArray[i].starttime);

                //POSITION
                theVideoHere.style.position = "absolute";
                theVideoHere.style.left = theX +'px';
                theVideoHere.style.top = theY + 'px';

                //SIZE
                theVideoHere.style.width = sizeX +'px';
                theVideoHere.style.height = sizeY +'px';

                //LAYER
                theVideoHere.style.zIndex = "1";

                //BACKGROUND COLOR
                theVideoHere.style.background = "black";

                //BORDER
                theVideoHere.style.border = "solid 2px rgba(100,100,255,1.0)";

                //FONT
                theVideoHere.style.fontFamily = "arial";
                theVideoHere.style.fontWeight = "bold";
                theVideoHere.style.fontSize = "xx-large";
                theVideoHere.style.color = "aqua";
                theVideoHere.style.textAlign = "center";

                //ID
                theVideoHere.id = Math.floor(300000 + Math.random() * 9700000);

                //TYPE OF ELEMENT TO CREATE
                let continuePlay100 = document.createElement("div");

                //POSITION
                continuePlay100.style.position = "absolute";
                continuePlay100.style.left = theX +'px';
                continuePlay100.style.top = theY +75 + 'px';

                //LAYER
                continuePlay100.style.zIndex = "15";

                continuePlay100.innerHTML += '<button onclick="playVideo(\''+theVideoHere.id+'\', \''+ourVideoFiles[i].starttime+'\',\''+ourVideoFiles[i].endtime+'\',1.0,1)" class="ourButton">&#11208;100</button><br>';

                //TYPE OF ELEMENT TO CREATE
                let continuePlay50 = document.createElement("div");

                //POSITION
                continuePlay50.style.position = "absolute";
                continuePlay50.style.left = theX +'px';
                continuePlay50.style.top = theY +100 + 'px';

                //LAYER
                continuePlay50.style.zIndex = "15";

                continuePlay50.innerHTML += '<button onclick="playVideo(\''+theVideoHere.id+'\', \''+ourVideoFiles[i].starttime+'\',\''+ourVideoFiles[i].endtime+'\',0.5,1)" class="ourButton">&#11208;50</button><br>';

                //TYPE OF ELEMENT TO CREATE
                let continuePlay25 = document.createElement("div");

                //POSITION
                continuePlay25.style.position = "absolute";
                continuePlay25.style.left = theX +'px';
                continuePlay25.style.top = theY +125 + 'px';

                //LAYER
                continuePlay25.style.zIndex ="15";

                continuePlay25.innerHTML += '<button onclick="playVideo(\''+theVideoHere.id+'\', \''+ourVideoFiles[i].starttime+'\',\''+ourVideoFiles[i].endtime+'\',0.25,1)" class="ourButton">&#11208;25</button><br>';

                //TYPE OF ELEMENT TO CREATE
                let continuePlay10 = document.createElement("div");

                //POSITION
                continuePlay10.style.position = "absolute";
                continuePlay10.style.left = theX +'px';
                continuePlay10.style.top = theY +150 + 'px';

                //LAYER
                continuePlay10.style.zIndex = "15";

                continuePlay10.innerHTML += '<button onclick="playVideo(\''+theVideoHere.id+'\', \''+ourVideoFiles[i].starttime+'\',\''+ourVideoFiles[i].endtime+'\',0.10,1)" class="ourButton">&#11208;10</button><br>';

                //TYPE OF ELEMENT TO CREATE
                let playButton100 = document.createElement("div");

                //POSITION
                playButton100.style.position = "absolute";
                playButton100.style.left = theX +'px';
                playButton100.style.top = theY +200 + 'px';

                //LAYER
                playButton100.style.zIndex = "15";

                playButton100.innerHTML += '<button onclick="playVideo(\''+theVideoHere.id+'\', \''+ourVideoFiles[i].starttime+'\',\''+ourVideoFiles[i].endtime+'\',1.0, 0)" class="ourButton">&#9684;100</button><br>';

                //TYPE OF ELEMENT TO CREATE
                let playButton50 = document.createElement("div");

                //POSITION
                playButton50.style.position = "absolute";
                playButton50.style.left = theX +'px';
                playButton50.style.top = theY +225 + 'px';

                //LAYER
                playButton50.style.zIndex = "15";

                playButton50.innerHTML += '<button onclick="playVideo(\''+theVideoHere.id+'\', \''+ourVideoFiles[i].starttime+'\',\''+ourVideoFiles[i].endtime+'\',0.5, 0)" class="ourButton">&#9684;50</button><br>';

                //TYPE OF ELEMENT TO CREATE
                let playButton25 = document.createElement("div");
                
                //POSITION
                playButton25.style.position = "absolute";
                playButton25.style.left = theX +'px';
                playButton25.style.top = theY +250 + 'px';

                //LAYER
                playButton25.style.zIndex = "15";

                playButton25.innerHTML += '<button onclick="playVideo(\''+theVideoHere.id+'\', \''+ourVideoFiles[i].starttime+'\',\''+ourVideoFiles[i].endtime+'\',0.25, 0)" class="ourButton">&#9684;25</button><br>';

                //TYPE OF ELEMENT TO CREATE
                let playButton10 = document.createElement("div");

                //POSITION
                playButton10.style.position = "absolute";
                playButton10.style.left = theX +'px';
                playButton10.style.top = theY +275 + 'px';

                //LAYER
                playButton10.style.zIndex = "15";

                playButton10.innerHTML += '<button onclick="playVideo(\''+theVideoHere.id+'\', \''+ourVideoFiles[i].starttime+'\',\''+ourVideoFiles[i].endtime+'\',0.10, 0)" class="ourButton">&#9684;10</button><br>';
                
                document.body.append(theCategoriesTitle);
                document.body.append(theVideoHere);
                document.body.append(thePrintButtonHere);
                document.body.append(continuePlay100);
                document.body.append(continuePlay50);
                document.body.append(continuePlay25);
                document.body.append(continuePlay10);
                document.body.append(playButton100);
                document.body.append(playButton50);
                document.body.append(playButton25);
                document.body.append(playButton10);
            }
        }
    }
}   

function secondsFromTimeCode(fullTimeCode)
{
    if(!fullTimeCode) fullTimeCode = '00:00:00';
    let theStringSeconds = fullTimeCode;
    let splitValue = theStringSeconds.split(":");

    let secondsOnly = parseInt(splitValue[2]);
    let secondsFromMinutes = parseInt(splitValue[1]) * 60;
    let secondsFromHours = parseInt(splitValue[0]) * 3600;

    let calculatedSeconds = secondsFromHours + secondsFromMinutes + secondsOnly;
    //now seconds variable is an array, 1:2:3

    return calculatedSeconds;
}

let endTimeEntered;
let ourVideoHere;

function playVideo(elementid, starttime, endtime, videoSpeed, continueOption)
{
    starttime = secondsFromTimeCode(starttime);
    endtime = secondsFromTimeCode(endtime);

    ourVideoHere = document.getElementById(elementid);

    ourVideoHere.playbackRate = videoSpeed;

    ourVideoHere.addEventListener("timeupdate",pauseVideo);

    if(continueOption == 1)
    {
        ourVideoHere.removeEventListener("timeupdate",pauseVideo);
    }
    ourVideoHere.currentTime = starttime;
    ourVideoHere.play(); 
    endTimeEntered = endtime;
}

function pauseVideo()
{
    if (ourVideoHere.currentTime >= endTimeEntered)
    {
        ourVideoHere.pause();
    }
}

//--------------------------------------------------//

