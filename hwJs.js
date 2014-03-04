//Debugging
console.log("Debugging");

var demoButton = document.getElementById("demoButton");
demoButton.onclick = myFunction;

var cartoonButton = document.getElementById("cartoonButton");
cartoonButton.onclick = myFunction2;

var tryItButton = document.getElementById("tryButton");
tryItButton.onclick = myFunction3;

var colorButton = document.getElementById("colorButton");
colorButton.onclick = myFunction4;

//tryItButton.click(myFunction3);

//Variable
function myFunction()
{
	//String
	var carname = "Volvo";
	document.getElementById("demo").innerHTML = carname;
}

function myFunction2()
{
	//Array
	var cartoonName = ["Snoopy", "Charlie Brown", "Patty", "Violet"];
	document.getElementById("cartoon").innerHTML = cartoonName[0];
}

//Function
function myFunction3()
{
	//Float
	document.getElementById("round").innerHTML=Math.round(2.5);
}

//Function returning alerts
//Logic
function myFunction4()
{
	if (document.getElementById("borderColor").style.borderColor == "red")
	{
		document.getElementById("borderColor").style.borderColor = "aquamarine";
	}
	else {
		document.getElementById("borderColor").style.borderColor = "red";
	}
	alert ("success")
}

