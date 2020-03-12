function initiate() {
	var start = document.getElementById("start");
	start.addEventListener("click",fire);
}
function fire() {
	var s = document.getElementById("size");
	var d = document.getElementById("darts");
	var size;
	var darts;
	if ((s.value != "") && (d.value != "")){
		size = parseInt(s.value);
		darts = parseInt(d.value);
		console.log(size);
		var element = document.getElementById("canvas");
		element.width = size;
		element.height = size;
		var canvas = element.getContext("2d");
		var audio = new Audio("gunshot.wav");
		audio.play();
		canvas.beginPath();
		canvas.fillStyle = "#FF0000";
		canvas.strokeRect(0,0, size, size);
		canvas.fillRect(0, 0, size, size);
		
		canvas.beginPath();
		canvas.fillStyle = "#FFFF33";
		canvas.arc((size/2), (size/2), (size/2), 0, Math.PI * 2, false);
		
		canvas.fill();
		//canvas.fillStyle = "#FF0000";
		//canvas.fillRect(0, 0, size, size);
		
		var center = size/2;
		var radius = size/2;
		
		var ccount = 0;
		var scount = 0;
		
		
		var a;
		var b;
		for(var i=0;i<darts;i++){
			canvas.beginPath();
			a = Math.floor(Math.random()*(size)+1);
			b = Math.floor(Math.random()*(size)+1);
			var n = pointInCircle(a, b, center, center, radius);
			if (n == true)
			{
				canvas.fillStyle = "red";
				canvas.strokeStyle = "red";
				ccount += 1;
			}
			else if (n == false)
			{
				canvas.fillStyle = "#FFFF33";
				canvas.strokeStyle = "#FFFF33";
				scount += 1;
			}
			/*canvas.fillStyle = "red";
			canvas.strokeStyle = "red";*/
			canvas.arc(a, b, (size/(size/2)), 0, Math.PI * 2, false);
			canvas.fill();
		}
		//scount -= ccount;
		var p = (ccount/(scount+ccount))*4;
		var total = document.getElementById("scorearea");
		total.innerHTML = "<p>" + p + "</p>";
	}
	else
	{
		alert("Please enter a size and the number of darts to be thrown for the canvas");
	}
}

function pointInCircle(x, y, cx, cy, radius) {
  var distancesquared = ((x - cx) * (x - cx)) + ((y - cy) * (y - cy));
  return (distancesquared <= (radius * radius));
}
window.addEventListener("load", initiate);