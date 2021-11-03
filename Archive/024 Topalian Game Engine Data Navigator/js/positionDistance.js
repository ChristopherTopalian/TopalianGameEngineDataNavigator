//Dedicated to God the Father

//All Rights Reserved Christopher Topalian Copyright 2020-2021

//positionDistance.js

function getDistanceX(obj1, obj2)
{
    let obj1Position = positionGet(obj1).x;

    let obj2Position = positionGet(obj2).x

    let distanceX;

    if(obj1Position > obj2Position)
    {
        distanceX = obj1Position - obj2Position;
    }
    else if(obj1Position < obj2Position)
    {
        distanceX = obj2Position - obj1Position;
    }

    //console.log(distanceX);

    document.getElementById('thePlayer').innerHTML = distanceX;

    return distanceX;
}

function getDistanceY(obj1, obj2)
{
    let obj1Position = positionGet(obj1).y;

    let obj2Position = positionGet(obj2).y

    let distanceY;

    if(obj1Position > obj2Position)
    {
        distanceY = obj1Position - obj2Position;
    }
    else if(obj1Position < obj2Position)
    {
        distanceY = obj2Position - obj1Position;
    }

    console.log(distanceY);
    document.getElementById('thePlayer').innerHTML = distanceY;

    return distanceY;
}

function getDistanceXY(obj1, obj2)
{
    let obj1PositionX = positionGet(obj1).x;
    let obj2PositionX = positionGet(obj2).x;

    let obj1PositionY = positionGet(obj1).y;
    let obj2PositionY = positionGet(obj2).y

    let distanceX;
    let distanceY;

    if(obj1PositionX > obj2PositionX)
    {
        distanceX = obj1PositionX - obj2PositionX;
    }
    else if(obj1PositionX < obj2PositionX)
    {
        distanceX = obj2PositionX - obj1PositionX;
    }

    if(obj1PositionY > obj2PositionY)
    {
        distanceY = obj1PositionY - obj2PositionY;
    }
    else if(obj1PositionY < obj2PositionY)
    {
        distanceY = obj2PositionY - obj1PositionY;
    }

    document.getElementById('thePlayer').innerHTML = '<br><br><br><br>' + obj2 + '<br>' + "X " + distanceX + "<br>" + "Y " + distanceY;
}

function keepGettingX(obj1, obj2)
{
    let ourTimer = setInterval(function(){ getDistanceX(obj1, obj2);}, 1000);
}

function keepGettingY(obj1, obj2)
{
    let ourTimer = setInterval(function(){ getDistanceY(obj1, obj2);}, 1000);
}

function keepGettingXY(obj1, obj2)
{
    let ourTimer = setInterval(function(){ getDistanceXY(obj1, obj2);}, 1000);
}

let ourTimer;
function keepGettingXYCustom()
{
    let obj1 = "thePlayer";

    let obj2 = document.getElementById("idToFindDistance").value;

    //clear any previous searches
    if (ourTimer)
    {
        clearInterval(ourTimer);
    }

    ourTimer = setInterval(function(){ getDistanceXY(obj1, obj2);}, 1000);
}

function removeTimer(whichTimer)
{
    clearInterval(whichTimer);

    ourPlayer.playerId.innerHTML = '';
}

//let ourTimer = setInterval(function(){ getDistanceY('thePlayer', 'STRUCTURE1');}, 1000);

//examples

//getDistanceX('thePlayer', 'target1');

//getDistanceY('thePlayer', 'target1');

//--------------------------------------------------//

