// makeLogo.js

function makeLogo()
{
    let mainDiv = ce("div");
    mainDiv.id = "mainDiv";
    mainDiv.className = "divStyle001";
    mainDiv.title = "makeLogo();";
    mainDiv.style.position = "absolute";
    mainDiv.style.left = "900px";
    mainDiv.style.top = "20px";
    mainDiv.style.width = "420px";
    mainDiv.style.height = "155px";
    mainDiv.style.borderRadius = "10px";
    ba(mainDiv);

    //-//

    let dedication = ce("div");
    dedication.style.fontFamily = "Arial";
    dedication.style.fontSize = "16pt";
    dedication.textContent = "Dedicated to God the Father";
    mainDiv.append(dedication);

    //-//

    mainDiv.append(ce('hr'));

    //-//

    let appTitle = ce("div");
    appTitle.style.color = "rgb(126, 203, 255)";
    appTitle.innerHTML = "TOPALIAN GAME ENGINE<br>DATA NAVIGATOR";
    mainDiv.append(appTitle);

    //-//

    let brUnderAppTitle = ce('br');
    brUnderAppTitle.style.lineHeight = '7px';
    mainDiv.append(brUnderAppTitle);

    //-//

    let credit = ce("div");
    credit.style.fontFamily = "arial";
    credit.style.fontStyle = "normal";
    credit.style.lineHeight = "20px";
    credit.textContent = "by Christopher Topalian";
    mainDiv.append(credit);

    //-//

    let brUnderCredit = ce('br');
    brUnderCredit.style.lineHeight = '7px';
    mainDiv.append(brUnderCredit);

    //-//

    let appLink = ce("a");
    appLink.href = "https://github.com/ChristopherTopalian/TopalianGameEngineDataNavigator";
    appLink.target = "_blank";
    appLink.textContent = "GitHub.com/ChristopherTopalian";
    mainDiv.append(appLink);
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

