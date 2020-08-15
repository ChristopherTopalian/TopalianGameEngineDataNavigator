//Dedicated to God the Father
//All Rights Reserved Christopher Topalian Copyright 2020
//THIS IS THE DATA (CONTENT) that we are using for the Topalian Game Engine Data Navigator
    
let theNews = 
[
    { headline: "Bill Gates Met With Jeffrey Epstein Many Times, Despite His Past", date: "Oct 12 2019 00:00:00 AM", month: "10", day: "12", year: "2019", url: "https://www.nytimes.com/2019/10/12/business/jeffrey-epstein-bill-gates.html", tag: "news" },

    { headline: "CDC Finds Another 5,000+ NYC Deaths in March and April With Potential COVID-19 Links", date: "May 11 2020 00:00:00 AM", month: "05", day: "11", year: "2020", url: "https://www.nbcnewyork.com/news/local/cdc-finds-another-5000-nyc-deaths-in-march-and-april-with-potential-covid-19-links/2411670/", tag: "news" },
    
    { headline: "Ghislaine Maxwell was 'a faithful lapdog' to Jeffrey Epstein, wanted to marry him, royal cousin claims", date: "Jul 06 2020 00:00:00 AM", month: "07", day: "06", year: "2020", url: "https://www.foxnews.com/entertainment/ghislaine-maxwell-jeffrey-epstein-christina-oxenberg-prince-andrew", tag: "news" },
    
    { headline: "Twitter cracks down on QAnon, will ban thousands of accounts", date: "Jul 21 2020 00:00:00 AM", month: "07", day: "21", year: "2020", url: "https://fortune.com/2020/07/21/twitter-qanon-accounts-banned-crackdown/", tag: "news" }
];  

    //To play an embedded video with a Start and End Time
    //add this to the end of the url  ?start=5&end=125
    //for example
    //https://www.youtube.com/embed/YOVpxpQhJB4?start=5&end=268
    //or
    //you can choose to set only the start time   ?start=5
    //for example
    //https://www.youtube.com/embed/YOVpxpQhJB4?start=5
    //or
    //you can choose to set only the end time   ?end=5

let videoEvidence = 
[   
    { title: "Event 201 Pandemic Exercise: Highlights Reel", date: "11/04/2019", month: "November", day: "04", year: "2019", url: "https://www.youtube.com/embed/AoLw-Q8X174", tag: "youtubeVideo", description: "exercise" },

    { title: "Video footage shows massive explosion in Tianjin, China", date: "08/12/2015", month: "August", day: "12", year: "2015", url: "https://www.youtube.com/embed/qARRLogg38k", tag: "youtubeVideo", description: "important" },
    
    { title: "Najaf , Iraq explosion video", date: "08/06/2020", month: "August", day: "06", year: "2020", url: "https://www.youtube.com/embed/YARLD34YiAY", tag: "youtubeVideo", description: "important" },
    
    { title: "Explosions and Fires in the Last 24 hours China France Iraq North Korea Lebanon", date: "08/06/2020", month: "August", day: "06", year: "2020", url: "https://www.youtube.com/embed/gdktIE3Fd9U", tag: "youtubeVideo", description: "important" },
    
    { title: "Ajman Fire Break Out 10 Different Camera Angles: Massive Fire in Ajman Market, United Arab Emirates", date: "08/05/2020", month: "August", day: "05", year: "2020", url: "https://www.youtube.com/embed/OeN3FPOy5Ms", tag: "youtubeVideo", description: "important" },
    
    { title: "Beirut - Lebanon Explosion 14 Different Camera Angles: Footages of Massive Blast", date: "08/04/2020", month: "August", day: "04", year: "2020", url: "https://www.youtube.com/embed/CtuQEhTVxyw", tag: "youtubeVideo", description: "important" },
    
    { title: "China blasts amateur footage: Dozens killed after huge explosion at Tianjin Port", date: "08/03/2015", month: "August", day: "03", year: "2015", url: "https://www.youtube.com/embed/vN9t3_R0WQI", tag: "youtubeVideo", description: "important" },
    
    { title: "Worst Abortion law in the World is NZ", date: "07/18/2020", month: "July", day: "18", year: "2020", url: "https://www.youtube.com/embed/gXbn0y0oDf4", tag: "youtubeVideo", description: "important" },
    
    { title: "Put far away these Masks, they are bad for your health", date: "06/27/2020", month: "June", day: "27", year: "2020", url: "https://www.youtube.com/embed/J1ijcuCKuoI", tag: "youtubeVideo", description: "mask" },
    
    { title: "Lets see if these masks hold in coughing using vaping", date: "06/21/2020", month: "June", day: "21", year: "2020", url: "https://www.youtube.com/embed/zJ6k1RHE4QA?start=113", tag: "youtubeVideo", description: "mask" },
    
    { title: "PG&E Pleads Guilty To 84 Counts Of Manslaughter In 2018 Camp Fire That Devastated Paradise", date: "06/16/2020", month: "June", day: "16", year: "2020", url: "https://www.youtube.com/embed/cXutCOBPuzA", tag: "youtubeVideo", description: "important" },
    
    { title: "Dr. Fauci Predicted a Pandemic Under Trump in 2017 NowThis", date: "05/18/2020", month: "May", day: "18", year: "2020", url: "https://www.youtube.com/embed/puqaaeLnEww", tag: "youtubeVideo", description: "exercise" },
    
    { title: "Pompeo admits Outbreak is live exercise, Trump says should have let us know.", date: "04/11/2020", month: "April", day: "11", year: "2020", url: "https://www.youtube.com/embed/vv650lRNYwI", tag: "youtubeVideo", description: "exercise" },
    
    { title: "Tyson Fury Cheated with 40+ Behind the Head Hits on Wilder", date: "03/14/2020", month: "March", day: "14", year: "2020", url: "https://www.youtube.com/embed/W2kQHmK9BMc?start=5&end=268", tag: "youtubeVideo", description: "important" },
    
    { title: "Deontay Wilder Blinded by LED Light!", date: "03/09/2020", month: "March", day: "09", year: "2020", url: "https://www.youtube.com/embed/YOVpxpQhJB4", tag: "youtubeVideo", description: "important" },
    
    { title: "March 2020: Dr. Anthony Fauci talks with Dr Jon LaPook about Covid-19", date: "03/08/2020", month: "March", day: "08", year: "2020", url: "https://www.youtube.com/embed/PRa6t_e7dgI?start=33", tag: "youtubeVideo", description: "mask" }
];

let evidence = 
[
    { title: "Wuhan China manufactured Adrenochrome", date: "jul 17 2018 00:00:00 AM", month: "7", day: "17", year: "2018", url: "https://www.ncbi.nlm.nih.gov/pcsubstance/?term=%223B+Scientific+(Wuhan)+Corp%22%5BSourceName%5D+AND+%22Adrenochrome%22", info: "They have made Adrenochrome in Wuhan China for a long time.", image: "https://collegeofscripting.weebly.com/uploads/6/4/4/8/64482293/wuhan-adrenochrome-002_orig.png", tag: "fact" },

    { title: "Digital Immunity Proof", date: "mar 25 2020 00:00:00 AM", month: "3", day: "25", year: "2020", url: "https://youtu.be/QFlNPE-H3u8", info: "Mass vaccination followed by Digital Immunity Proof", image: "https://collegeofscripting.weebly.com/uploads/6/4/4/8/64482293/bill-gates-digital-immunity-proof_orig.png", tag: "fact" },
    
    { title: "Bill Clinton visited Jeffrey Epstein’s private island, unsealed court documents suggest", date: "jul 31 2020 00:00:00 AM", month: "7", day: "31", year: "2020", url: "https://www.foxnews.com/us/bill-clinton-visited-jeffrey-epsteins-private-island-unsealed-court-documents-suggest", info: "Witness stated that Bill Clinton Visited Jeffrey Epstein's island", image: "https://pbs.twimg.com/media/EeN7Qo5X0AAhLyJ?format=png&name=900x900", tag: "fact" }
];

let socialMediaEvidence =
[  
    { title: "Bill Clinton reported by witness to be present with Epstein on Epstein island.", date: "jul 31 2020 02:05:00 AM", month: "7", day: "31", year: "2020", url: "https://twitter.com/ISCResearch/status/1289079824439554048", info: "Witness Testimony", image: "https://pbs.twimg.com/media/EeO7QzFXoAA8Jlo?format=jpg&name=900x900", tag: "epstein", probability: 100 },

    { title: "When did Donald Trump flirt with you? He didnt.", date: "jul 31 2020 02:12:00 AM", month: "7", day: "31", year: "2020", url: "https://twitter.com/ISCResearch/status/1289081444686614528", info: "testimony", image: "https://pbs.twimg.com/media/EeO8vRRWoAAI9MO?format=jpg&name=small", tag: "epstein", probability: 100 },
    
    { title: "Save the Children", date: "aug 01 2020 12:04:00 AM", month: "8", day: "1", year: "2020", url: "https://twitter.com/i/status/1289411729265393664", info: "HUMANITY IS ALIVE", image: "https://collegeofscripting.weebly.com/uploads/6/4/4/8/64482293/save_orig.jpg", tag: "epstein", probability: 100 },
    
    { title: "Thousands of protesters against German coronavirus restrictions converge in Berlin", date: "aug 01 2020 08:31:00 AM", month: "8", day: "1", year: "2020", url: "https://twitter.com/AP/status/1289539152258662402", info: "German People unite for freedom", image: "https://collegeofscripting.weebly.com/uploads/6/4/4/8/64482293/germanprotest_orig.jpg", tag: "freedom", probability: 100 },
    
    { title: "MIT Technology Review @techreview", date: "jul 31 2020 02:55:00 PM", month: "7", day: "31", year: "2020", url: "https://twitter.com/techreview/status/1289273594761994241", info: "The pandemic has rapidly grown the presence of QAnon and the spread of its conspiracy theories. If we stand any hope of stopping it, online platforms must do much more than fact checks and account bans.", image: "https://collegeofscripting.weebly.com/uploads/6/4/4/8/64482293/mit_orig.jpg", tag: "censorship", probability: 100 }
];
   

let theNotes =
[
    { note: "Here is a simple Note.", number: 1, tag: "note" },

    { note: "Here is the second note.", number: 2, tag: "note" },
    
    { note: "Here is the third note.", number: 3, tag: "note" },
    
    { note: "Here is the fourth note.", number: 4, tag: "note" }
];

let lindenLanguage = 
[
    { name: "llAbs", description: "Tells you the absolute value of any integer number", syntax: "llAbs(integer number);", useage: "llAbs(-3);", url: "http://wiki.secondlife.com/wiki/LlAbs", type: "returns an integer", tag: "function", category: "math", language: "Linden" },

    { name: "llAcos", description: "Tells you the ArcCosine of a number", syntax: "llAcos(float number);", useage: "llAcos(0.7);", url: "http://wiki.secondlife.com/wiki/LlAcos", type: "returns a float, in radians", tag: "function", category: "math", language: "Linden" }
];

let javascriptLanguage = 
[
    { name: "concat()", description: "Join two or more Arrays", syntax: "array1.concat(array2, array3);", useage: "var combinedArray = theNotes.concat(theNews, evidence);", url: "https://www.w3schools.com/jsref/jsref_concat_array.asp", type: "returns an array object", tag: "function", category: "array", language: "JavaScript" },

    { name: "copyWithin()", description: "Copies array entries to another position in array and replaces the existing", syntax: "array.copyWithin(target, start, end);", useage: "theNotes.copyWithin(2, 0, 2);", url: "https://www.w3schools.com/jsref/jsref_copywithin.asp", type: "returns an array", tag: "function", category: "array", language: "JavaScript" }   
];

let collegeLinks = 
[
    { name: "Javascript", url: "https://collegeofscripting.weebly.com/javascript.html" },

    { name: "JavaScript Game Design", url: "https://collegeofscripting.weebly.com/javascript-game-design.html" },
    
    { name: "JavaScript Bookmarklets", url: "https://collegeofscripting.weebly.com/bookmarklets.html" },
    
    { name: "LSL Scripting Book", url: "https://collegeofscripting.weebly.com/lsl-scripting-book.html" },
    
    { name: "Logical Boolean System of A.I.", url: "https://collegeofscripting.weebly.com/logic-boolean-system.html" },
    
    { name: "Health Science", url: "https://collegeofscripting.weebly.com/health-science.html" },
    
    { name: "Solar Science", url: "https://collegeofscripting.weebly.com/solar-science.html" },
    
    { name: "Flat Earth Science", url: "https://collegeofscripting.weebly.com/flat-earth-science.html" },
    
    { name: "Why NO Video of Mars on Mars?", url: "https://collegeofscripting.weebly.com/mars---why-is-there-no-photographic-video-of-mars-on-mars.html" },
    
    { name: "Computing", url: "https://collegeofscripting.weebly.com/computing.html" },
    
    { name: "Papercliptronics", url: "https://papercliptronics.weebly.com/" },
    
    { name: "Video Investigator", url: "https://videoinvestigator.weebly.com/" }
];

let collegeImages =
[
    { name: "JavaScript Bookmarklet Advanced Programming", image: "https://images-na.ssl-images-amazon.com/images/I/51lot64KYcL._SX384_BO1,204,203,200_.jpg", url: "https://www.amazon.com/JavaScript-Bookmarklet-Advanced-Programming-Interfaces/dp/B088JFN2BL" },

    { name: "JavaScript Video Investigator", image: "https://m.media-amazon.com/images/I/51EeQ4sNVnL._SY346_.jpg", url: "https://www.amazon.com/CREATING-JAVASCRIPT-APPLICATIONS-Video-Investigator/dp/B088N5G5GV" },
    
    { name: "JavaScript Missing Persons Database", image: "https://m.media-amazon.com/images/I/519eyD-37lL.jpg", url: "https://www.amazon.com/CREATING-JAVASCRIPT-APPLICATIONS-Missing-Database/dp/B088N4XYDY" },
    
    { name: "True Artificial Intelligence", image: "https://m.media-amazon.com/images/I/414nBuW6oaL._SY346_.jpg", url: "https://www.amazon.com/dp/B08975HFJK" },
    
    { name: "LSL Book", image: "https://images-na.ssl-images-amazon.com/images/I/41YE35agtNL._SY498_BO1,204,203,200_.jpg", url: "https://www.amazon.com/LSL-Scripting-Book-Computer-Programming/dp/B084DG7ZFD/ref=sr_1_fkmr0_1?keywords=lsl+scripting&qid=1582049598&sr=8-1-fkmr0" },
    
    { name: "Papercliptronics", image: "https://m.media-amazon.com/images/I/51cdZyRYXVL._SX260_.jpg", url: "https://www.amazon.com/Papercliptronics-Homemade-Electronic-Circuits-Paperclips/dp/1658209303/ref=sr_1_2?keywords=papercliptronics&qid=1582048776&sr=8-2" }
];
