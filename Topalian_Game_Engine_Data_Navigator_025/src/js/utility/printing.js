// printing.js

function printOnlyDiv(whichDiv) 
{
    audioPlay("sfx_blip_001", 1.0);

    let mywindow = window.open('', 'PRINT', 'height = 800, width = 1000 top = 50, left = 100');

    mywindow.document.write('<style>img{width: 75%;</style></head><body>');

    mywindow.document.write('<h4>' + document.title  + '</h4>');

    mywindow.document.write(ge(whichDiv).innerHTML);
    
    mywindow.print();

    // mywindow.close();
} 

function printTextArea(whichTextArea) 
{
    audioPlay("sfx_blip_001", 1.0);

    let mywindow = window.open('', 'PRINT', 'height = 800, width = 1000 top = 50, left = 100');

    mywindow.document.write('<style>img{width: 75%;</style></head><body>');

    mywindow.document.write('<h4>' + document.title  + '</h4>');

    mywindow.document.write(ge(whichTextArea).value);

    mywindow.print();

    // mywindow.close();
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

