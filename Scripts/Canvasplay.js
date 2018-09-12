$(document).ready(function(){

	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");

	var x = 0;
	var y = 0;
	var dx = 0;
	var dy = 0;



	var Draw = function(){

		ctx.beginPath();
		ctx.arc(x, y, 2, 0, true);
		ctx.fillStyle = '#000000';
		ctx.fill();
		x += dx;
		y += dy;


		x = x % 513;
		y = y % 513;

		if (x < 0) {
			x = 512 + dx;
		};

		//if (x > 512) {
		//	x = 0 + dx;
		//};
		if (y < 0) {
			y = 512 + dy;
		};
		//if (y > 512) {
		//	y = 0 + dy;
		//};
	};

	setInterval(Draw, 16);


	$("#left").click(function(){
		dx = -1;
		dy = 0;
	});

	$("#up").click(function(){
		dy = -1;
		dx = 0;
	});

	$("#right").click(function(){
		dx = 1;
		dy = 0;
	});

	$("#down").click(function(){
		dy = 1;
		dx = 0;
	});
	


});