//Dedicated to God the Father

//All Rights Reserved Christopher Topalian Copyright 2020-2021

//rowOfLanguage.js

function rowOfLanguage(theX, theY, sizeX, sizeY, whichArray, criteria1, criteria2)
{
    theX -= sizeX;

    let counter = 0;

    //This code below allows us to create an id to be used for location data by our menu.
    let idForPosition = document.createElement("div");
    idForPosition.style.position = "absolute";
    idForPosition.style.left = theX +'px';
    idForPosition.style.top = theY -22 + 'px'; 
    idForPosition.id = "scriptingIdCategory";
    document.body.append(idForPosition);

        //used with lindenLanguage array
        //used with javascriptLanguage array
    for(let i = 0; i < whichArray.length; i++)
    {
        if(whichArray[i].category == criteria1 && whichArray[i].tag == criteria2)
        {
            //columns across
            theX = theX + sizeX + 30;
            
            //TYPE OF ELEMENT TO CREATE
            let theDiv = document.createElement("div");

            //POSITION
            theDiv.style.position = "absolute";
            theDiv.style.left = theX +'px';
            theDiv.style.top = theY +25 + 'px';

            //SIZE
            theDiv.style.width = sizeX +'px';
            theDiv.style.height = sizeY +'px';

            //PADDING
            //theDiv.style.paddingTop = "1px";
            theDiv.style.paddingLeft = "10px";
            theDiv.style.paddingRight = "10px";

            //LAYER
            theDiv.style.zIndex = "100";

            //BORDER
            //theDiv.style.border = "solid 2px rgba(100,100,255,1.0)";
            theDiv.style.borderStyle = "solid";
            theDiv.style.borderWidth = "2px";
            theDiv.style.borderColor = "rgba(100,100,255,1.0)";

            //BACKGROUND COLOR
            theDiv.style.background = "black";

            //FONT
            theDiv.style.fontFamily = "arial";
            theDiv.style.fontWeight = "normal";
            theDiv.style.fontSize = "normal";
            theDiv.style.color = "white";
            theDiv.style.textAlign = "left";

           // theDiv.setAttribute("class", "divBackground"); 
            //"+criteria+"

            //theDiv.id = whichArray[i].id;

            //theDiv.id = Math.floor(351000 + Math.random() * 9710000);

            //Add one to the counter variable
            counter += 1;

            //ID
            theDiv.id = "JavaScriptCategories_" + whichArray[i].category + counter;

            theDiv.innerHTML+= '<hr class=\'hrCompact\'><center><span style="font-size:14pt; line-height:15pt">' + whichArray[i].language + "<hr class=\'hrCompact\'>" + "<b style='color:aqua'>" + whichArray[i].category + "<br>" + "<b style='color:yellow'><hr class=\'hrCompact\'>" + whichArray[i].name + "</b></span></center>";

            theDiv.innerHTML += '<hr><button onclick="printOnlyDiv(\''+theDiv.id+'\');" class="ourButton">Print</button> &nbsp &nbsp';

            theDiv.innerHTML+= "<span style=' font-weight:bold'>URL: </span>";

            theDiv.innerHTML+='<a href=\''+whichArray[i].url+'\' target="_blank">Link</a> &nbsp &nbsp';

            theDiv.innerHTML+= "<span style=' font-weight:bold'>URL2: </span>";

            theDiv.innerHTML+='<a href=\''+whichArray[i].url2+'\' target="_blank">Link 2</a><br><hr>';

            theDiv.innerHTML+= '<span style=" font-weight:bold;color:rgb(180,180,180);">Name of Function:<br>';

            theDiv.innerHTML += '<span style=" font-weight:bold">'+whichArray[i].name+'</span><br><hr>';

            theDiv.innerHTML+= '<span style=" font-weight:bold;color:rgb(180,180,180);">Description:</span><br>'
            ;
            theDiv.innerHTML+= whichArray[i].description + "<hr>";

            theDiv.innerHTML+= '<span style=" font-weight:bold;color:rgb(180,180,180);">Syntax:</span><br>';
            theDiv.innerHTML += whichArray[i].syntax + "<br><hr>";

            theDiv.innerHTML+= '<span style=" font-weight:bold;color:rgb(180,180,180);">Useage:</span><br>';
            theDiv.innerHTML+= whichArray[i].useage + "<br><hr>";

            theDiv.innerHTML+= '<span style=" font-weight:bold;color:rgb(180,180,180);">Return Value Type:</span><br>';
            theDiv.innerHTML+= whichArray[i].type + "<br><hr>";

            //KEEP Delete Button, Implement later with Array splice
            //theDiv.innerHTML += '<hr><button onclick="deleteThisRecord(\''+theDiv.id+'\');" class="ourButton">Delete</button><br><hr>';

            document.body.append(theDiv);
        }
    }
}

//--------------------------------------------------//

