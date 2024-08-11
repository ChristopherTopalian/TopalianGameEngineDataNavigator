// copyIt.js

function copyIt(whichId)
{
    let copyText = ge(whichId);
    copyText.select();
    copyText.setSelectionRange(0, 1000000);
    document.execCommand("copy");
}

// We can copy the Text Area easily
// by clicking the Copy button

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

