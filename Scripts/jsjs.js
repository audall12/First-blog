
function one() {
	y = document.getElementById("input").value;
	document.getElementById("input").value = y + 1;
}

function two() {
	y = document.getElementById("input").value;
	document.getElementById("input").value = y + 2;
}


function three() {
	y = document.getElementById("input").value;
	document.getElementById("input").value = y + 3;
}

function four() {
	y = document.getElementById("input").value;
	document.getElementById("input").value = y + 4;
}

function five() {
	y = document.getElementById("input").value;
	document.getElementById("input").value = y + 5;
}

function six() {
	y = document.getElementById("input").value;
	document.getElementById("input").value = y + 6;
}

function seven() {
	y = document.getElementById("input").value;
	document.getElementById("input").value = y + 7;
}

function eight() {
	y = document.getElementById("input").value;
	document.getElementById("input").value = y + 8;
}

function nine() {
	y = document.getElementById("input").value;
	document.getElementById("input").value = y + 9;
}

function zero() {
	y = document.getElementById("input").value;
	document.getElementById("input").value = y + 0;
}

function plus() {
	a = document.getElementById("input").value;
	document.getElementById("input").value="";
	x = 0;
}

function minus() {
	a = document.getElementById("input").value;
	document.getElementById("input").value="";
	x = 1;
}

function multiply() {
	a = document.getElementById("input").value;
	document.getElementById("input").value="";
	x = 2;
}

function divide() {
	a = document.getElementById("input").value;
	document.getElementById("input").value="";
	x = 3;
}

function equals() {
	b = document.getElementById("input").value;
	b=Number(b);
	a=Number(a);
	if (x==0) {
		c = a + b;
		document.getElementById("input").value=c;
	}
	if (x==1) {
		c = a - b;
		document.getElementById("input").value=c;
	}
	if (x==2) {
		c = a * b;
		document.getElementById("input").value=c;
	}
	if (x==3) {
		c = a / b;
		document.getElementById("input").value=c;
	}
}

