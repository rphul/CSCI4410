var drop, worker1, worker2, worker3, worker4, databox, total;
function initiate() {
	drop = document.getElementById("dropbox");
	drop.addEventListener("dragenter", function(event) {
		event.preventDefault(); });
	drop.addEventListener("dragover", function(event) {
		event.preventDefault(); });
	drop.addEventListener("drop", dropped);
		
	start = document.getElementById("start");
	start.addEventListener("click", startPrime);
}
function startPrime(){
	total = 0;
	num1 = document.getElementById("num1");
	num2 = document.getElementById("num2");
	if ((num1.value != "") && (num2.value != "")){
		
			var ar1 = [num1.value, num2.value];
			
			worker1 = new Worker('worker.js');
			worker1.addEventListener('message', received);
			worker1.postMessage(ar1);
			console.log("posted message");}
		
		
	num3 = document.getElementById("num3");
	num4 = document.getElementById("num4");
	if ((num3.value != "") && (num4.value != "")){
		var ar2 = [num3.value, num4.value];
		
		worker1 = new Worker('worker.js');
		worker1.addEventListener('message', received);
		worker1.postMessage(ar2);
		console.log("posted message");}
		
	num5 = document.getElementById("num5");
	num6 = document.getElementById("num6");
	if ((num5.value != "") && (num6.value != "")){
		var ar3 = [num5.value, num6.value];
		
		worker1 = new Worker('worker.js');
		worker1.addEventListener('message', received);
		worker1.postMessage(ar3);
		console.log("posted message");}
		
	num7 = document.getElementById("num7");
	num8 = document.getElementById("num8");
	if ((num7.value != "") && (num8.value != "")){
		var ar4 = [num7.value, num8.value];
		
		worker1 = new Worker('worker.js');
		worker1.addEventListener('message', received);
		worker1.postMessage(ar4);
		console.log("posted message");}
	
}
function received(e){
  total += e.data;
	var totarea = document.getElementById("scorearea");
	totarea.innerHTML= total + " prime numbers in all ranges";
	
}

	
function dropped(event) {
	event.preventDefault();
	var files = event.dataTransfer.files[0];
	event.preventDefault();
	
	var form = new FormData();
	form.append("f", files);
	var xhr = new XMLHttpRequest();
	xhr.open("POST", "./cgi-bin/p4.py");
	
        xhr.send(form);
}



function fileSelected() {
	var file = document.getElementById('fileUpload').files[0];
	
	var fd = new FormData();
	fd.append("f", file);
	var xhr = new XMLHttpRequest();
	xhr.open("POST", "./cgi-bin/p4.py");
	
	xhr.send(fd);
}

window.addEventListener("load", initiate);



 
