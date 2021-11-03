//Dedicated to God the Father

//All Rights Reserved Christopher Topalian Copyright 2020-2021

//recordDelete.js

function deleteThisRecord(whichDiv)
{
	let warningDelete = confirm("DELETE ONLY This Record?");

	if (warningDelete == true)
	{
		document.getElementById(whichDiv).outerHTML = "";
	}
	else if(warningDelete == false)
	{
		alert("Canceled");
		return;
	}
}

//--------------------------------------------------//

