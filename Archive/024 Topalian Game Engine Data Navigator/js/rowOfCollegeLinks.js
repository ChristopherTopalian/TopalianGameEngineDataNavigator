//Dedicated to God the Father

//All Rights Reserved Christopher Topalian Copyright 2020-2021

//rowOfCollegeLinks.js

function rowOfCollegeLinks(theX, theY, sizeX, sizeY, whichArray)
{
    let counter = 0;

    theX -= sizeX;

    //This code below allows us to create an id to be used for location data by our menu.
    let idForPosition = document.createElement("div");
    idForPosition.style.position = "absolute";
    idForPosition.style.left = theX +'px';
    idForPosition.style.top = theY -22 + 'px'; 
    idForPosition.id = "collegeLinksId";
    document.body.append(idForPosition);

            //used with collegeLinks Array
    for(let i = 0; i < whichArray.length; i++)
    {
        //columns across
        theX = theX + sizeX + 14;

        //TYPE OF ELEMENT TO CREATE
        let theDiv = document.createElement("div");
            
        //theDiv.id = whichArray[i].id;

        //theDiv.id = Math.floor(456000 + Math.random() * 9770000);

        //Add one to the counter variable
        counter += 1;

        //ID
        theDiv.id = "CollegeLinks" + counter; 

        //POSITION
        theDiv.style.position = "absolute";
        theDiv.style.left = theX +'px';
        theDiv.style.top = theY +'px';

        //SIZE
        theDiv.style.width = sizeX +'px';
        theDiv.style.height = sizeY + 'px';

        //LAYER
        theDiv.style.zIndex ="1";

        //BORDER
        //theDiv.style.border = "solid 2px rgba(100,100,255,1.0)";
        theDiv.style.borderStyle = "solid";
        theDiv.style.borderWidth = "2px";
        theDiv.style.borderColor = "rgba(100,100,255,1.0)";

        //BACKGROUND COLOR
        //theDiv.style.background="white";

        //FONT
        theDiv.style.fontFamily = "arial";
        theDiv.style.fontWeight = "bold";
        theDiv.style.fontSize = "medium";
        theDiv.style.color = "aqua";
        theDiv.style.textAlign = "center";

        theDiv.setAttribute("class", "divBackground");

        //"+criteria+"
        
        theDiv.innerHTML += '<span style="color:white">College Links<hr class="hrCompact"></span>';

        //Print Feature
        //theDiv.innerHTML += '<button onclick="printOnlyDiv(\''+theDiv.id+'\');">print</button><br>';

        theDiv.innerHTML += whichArray[i].name + "<br>";
            
        theDiv.innerHTML+='<a href=\''+whichArray[i].url+'\' target="_blank">Link</a><br>';

        document.body.append(theDiv);
    }
}

//--------------------------------------------------//

