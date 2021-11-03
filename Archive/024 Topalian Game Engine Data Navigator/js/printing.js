//Dedicated to God the Father

//All Rights Reserved Christopher Topalian Copyright 2020-2021

//printing.js

function printOnlyDiv(whichDiv) 
{
    playSound("blipQuiet1", 1.0);

    let mywindow = window.open('', 'PRINT', 'height=800,width=1000 top=50, left=100');

    mywindow.document.write('<style>img{width:75%;</style></head><body>');

    mywindow.document.write('<h4>' + document.title  + '</h4>');

    mywindow.document.write(document.getElementById(whichDiv).innerHTML);
    
    mywindow.print();
    //mywindow.close();
} 

function printTextArea(whichTextArea) 
{
    playSound("blipQuiet1", 1.0);

    let mywindow = window.open('', 'PRINT', 'height=800,width=1000 top=50, left=100');

    mywindow.document.write('<style>img{width:75%;</style></head><body>');

    mywindow.document.write('<h4>' + document.title  + '</h4>');

    mywindow.document.write(document.getElementById(whichTextArea).value);
    
    mywindow.print();
    //mywindow.close();
}

//--------------------------------------------------//

