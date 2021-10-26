//Dedicated to God the Father

//All Rights Reserved Christopher Topalian Copyright 2020-2021

//positionSizeSet.js

/*
      PLACE OBJECTS IN SCENE, Position and Size
*/

// Set the Position and Size of an array of elements
//This function is NOT currently being used in the game engine
function positionSizeSet(whichArray)  
{
      for(let i = 0; i < whichArray.length; i++)
      {
            //if(whichArray[i].kind == "box" || whichArray[i].kind =="tile")

            if(whichArray)
            {
                  let theElement = document.getElementById(whichArray[i].id);

                  theElement.style.position = "absolute";

                  //POSITION
                  theElement.style.left = whichArray[i].xPos +'px';

                  theElement.style.top = whichArray[i].yPos +'px';

                  //SIZE
                  theElement.style.width = whichArray[i].width +'px';

                  theElement.style.height = whichArray[i].height +'px';
            }
      }
}

//--------------------------------------------------//

