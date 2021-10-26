//Dedicated to God the Father

//All Rights Reserved Christopher Topalian Copyright 2020-2021

//rowOfCollegeBooks.js

function rowOfCollegeBooks(theX, theY, sizeX, sizeY, whichArray)
{
    let counter = 0;

    theX -= sizeX;

    //This code below allows us to create an id to be used for location data by our menu.
    let idForPosition = document.createElement("div");
    idForPosition.style.position = "absolute";
    idForPosition.style.left = theX +'px';
    idForPosition.style.top = theY -22 + 'px'; 
    idForPosition.id = "collegeBooksId";
    document.body.append(idForPosition);

            //used with collegeBooks Array
    for(let i = 0; i < whichArray.length; i++)
    {
        //columns across
        theX = theX + sizeX + 10;

        //TYPE OF ELEMENT TO CREATE
        let theDiv = document.createElement("div");
            
        //theDiv.id = whichArray[i].id;

        //theDiv.id = Math.floor(457000 + Math.random() * 9870000);

        //Add one to the counter variable
        counter += 1;

        //ID
        theDiv.id = "CollegeBooks" + counter;

        //POSITION
        theDiv.style.position = "absolute";
        theDiv.style.left = theX +'px';
        theDiv.style.top = theY +'px';

        //SIZE
        theDiv.style.width = sizeX +'px';
        theDiv.style.height = sizeY + 'px';

        //LAYER
        theDiv.style.zIndex = "1";

        //BORDER
        //theDiv.style.border = "solid 2px rgba(100,100,255,1.0)";
        theDiv.style.borderStyle = "solid";
        theDiv.style.borderWidth = "2px";
        theDiv.style.borderColor = "rgba(100,100,255,1.0)";

        //BACKGROUND COLOR
        //theDiv.style.background="white";

        //FONT
        theDiv.style.fontFamily = "arial";
        theDiv.style.fontWeight = "normal";
        theDiv.style.fontSize = "medium";
        theDiv.style.color = "black";
        theDiv.style.textAlign = "center";

        theDiv.setAttribute("class", "divBackground");

        //"+criteria+"
        
        theDiv.innerHTML += '<span style="color:white; font-weight:bold">College Books</span><hr class="hrCompact">';

        theDiv.innerHTML += '<button onclick="printOnlyDiv(\''+theDiv.id+'\');" class="ourButton">Print</button><br>';

        theDiv.innerHTML += whichArray[i].name + "<br>";
            
        theDiv.innerHTML+='<a href=\''+whichArray[i].url+'\' target="_blank">Link</a><br>';

        theDiv.innerHTML += '<img src= \''+whichArray[i].image+'\' class="theImage">';

        document.body.append(theDiv);
    }
}

//--------------------------------------------------//

