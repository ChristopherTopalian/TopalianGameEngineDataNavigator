// shortcuts.js

function ge(whichId)
{
    let result = document.getElementById(whichId);
    return result;
}

function ce(whichType)
{
    let result = document.createElement(whichType);
    return result;
}

function ba(whichElement)
{
    let result = document.body.append(whichElement);
    return result;
}

function ct(whichText)
{
    let result = document.createTextNode(whichText);
    return result;
}

function textClear(whichId)
{
    ge(whichId).innerHTML = '';
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

