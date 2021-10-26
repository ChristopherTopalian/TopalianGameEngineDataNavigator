//Dedicated to God the Father

//All Rights Reserved Christopher Topalian Copyright 2020-2021

//rowOfWebsitesOrVideos.js

/*Makes iframes in a row to add content to our level
    can be used to display Websites or Videos 
    the websites must allow iframe 
    the videos must allow embed
*/
function rowOfWebsitesOrVideos(theX, theY, sizeX, sizeY, whichArray, criteria1)
{
    let counter = 0;

    theX -= sizeX;
                //used with videoEvidence array
    for(let i = 0; i < whichArray.length; i++)
    {
        //columns across
        theX = theX + sizeX;

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
                let videoCategoryTitle = document.createElement("div");

                //POSITION
                videoCategoryTitle.style.position = "absolute";
                videoCategoryTitle.style.left = theX +'px';
                videoCategoryTitle.style.top = theY -100 + 'px';

                //SIZE
                videoCategoryTitle.style.width = sizeX +'px';

                //LAYER
                videoCategoryTitle.style.zIndex = "10";

                //BACKGROUND COLOR
                videoCategoryTitle.style.background = "black";

                //BORDER
                videoCategoryTitle.style.border = "solid 2px rgba(100,100,255,1.0)";

                //FONT
                videoCategoryTitle.style.fontFamily = "arial";
                videoCategoryTitle.style.fontWeight = "bold";
                videoCategoryTitle.style.fontSize = "medium";
                videoCategoryTitle.style.color = "white";
                videoCategoryTitle.style.textAlign = "center";             

                videoCategoryTitle.innerHTML = '<b style="color:yellow">\''+criteria1+'' + "</b><br>" + whichArray[i].title + "  " + "<br> " + "upload date " + ''+whichArray[i].date+'' + "<br>" + ''+whichArray[i].url+'' + "<br>" + '<a href=\''+whichArray[i].url+'\' target="_blank">Link</a><br>';

                //ID
                videoCategoryTitle.id = Math.floor(200000 + Math.random() * 998000);

                //TYPE OF ELEMENT TO CREATE
                let makeFrame = document.createElement("iframe");

                //SOURCE
                makeFrame.src = whichArray[i].url;
            
                //POSITION
                makeFrame.style.position = "absolute";
                makeFrame.style.left = theX +'px';
                makeFrame.style.top = theY + 'px';

                //SIZE
                makeFrame.style.width = sizeX +'px';
                makeFrame.style.height = sizeY +'px';

                //LAYER
                makeFrame.style.zIndex = "1";

                //BORDER
                makeFrame.style.border = "solid 2px rgba(100,100,255,1.0)";

                //BACKGROUND COLOR
                makeFrame.style.background = "black";

                //FONT
                makeFrame.style.fontFamily = "arial";
                makeFrame.style.fontWeight = "bold";
                makeFrame.style.fontSize = "xx-large";
                makeFrame.style.color ="white";
                makeFrame.style.textAlign = "center";
                
                //ID
                //makeFrame.id = whichArray[i].id;

                //TYPE OF ELEMENT TO CREATE
                let thePrintButton = document.createElement("div");

                //POSITION
                thePrintButton.style.position = "absolute";
                thePrintButton.style.left = theX + 2 +'px';
                thePrintButton.style.top = theY -15 + 'px';

                //FONT
                thePrintButton.style.color = "white";

                //LAYER
                thePrintButton.style.zIndex = "10";
            
                thePrintButton.innerHTML += '<button onclick="printOnlyDiv(\''+videoCategoryTitle.id+'\');" class="ourButton">Print</button><br>';

                document.body.append(videoCategoryTitle);
                document.body.append(makeFrame);
                document.body.append(thePrintButton);
            }
        }
    }
}

//--------------------------------------------------//

