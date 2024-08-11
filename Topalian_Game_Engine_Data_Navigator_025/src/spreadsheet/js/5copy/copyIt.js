// copyIt.js

function copyIt()
{
    let copyText = ge("displayData");
    copyText.select();
    copyText.setSelectionRange(0, 1000000);
    document.execCommand("copy");

    alert("Successfully COPIED. \nNow PASTE it in TopalianData.js");
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian