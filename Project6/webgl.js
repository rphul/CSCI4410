var socket = new WebSocket('ws://www.cs.mtsu.edu:5929');
var canvas, image, image2, renderer, scene, camera, mesh1, mesh2;
window.addEventListener("load", initiate);

//socket.send("hi");

/*socket.onopen = function () {
	socket.send("hi");
};
/*socket.onmessage = function(e) {
	console.log(e.data);}*/

function initiate() {
	canvas = document.getElementById("canvas");
	var image = document.createElement("img");
	image.src = "crate.jpg";
	var image2 = document.createElement("img");
	image2.src = "dice1.jpg";
	
	
	var width = 100;
	var height = 100;

	renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: true});
	renderer.setClearColor(0xFFFFFF);
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
	camera.position.set(0, 0, 150);
	var light = new THREE.SpotLight(0xFFFFFF, 1);
	light.position.set(0, 100, 250);
	scene.add(light);
	
	image.addEventListener("load", function () {
		
		var geometry = new THREE.BoxGeometry(50, 50, 50);
		var texture1 = new THREE.Texture(image);
		texture1.needsUpdate = true;
		var material1 = new THREE.MeshPhongMaterial({map: texture1});
		mesh1 = new THREE.Mesh(geometry, material1);
		//mesh1.size = 100;
		scene.add(mesh1);
			
		renderer.render(scene, camera);
	});
		
		
	image2.addEventListener("load", function() {
		var geometry = new THREE.BoxGeometry(50, 50, 50);
		var texture2 = new THREE.Texture(image2);
		texture2.needsUpdate = true;
		var material2 = new THREE.MeshPhongMaterial({map: texture2});
		mesh2 = new THREE.Mesh(geometry, material2);
		//mesh2.x += 150;
		scene.add(mesh2);
		
		renderer.render(scene, camera);
		
	});
	
	renderer.render(scene, camera);
}

/*var movement = {
  up: false,
  down: false,
  left: false,
  right: false
}*/
document.addEventListener('keydown', function(event) {
	console.log("move event reached");
	console.log("keycode received");
	console.log(event.keyCode);
	/*switch (event.keyCode) {
	case 65: // A
	movement.left = true;
	break;
	case 87: // W
	movement.up = true;
	break;
	case 68: // D
	movement.right = true;
	break;
	case 83: // S
	movement.down = true;
	break;
	}*/
	var keyCode = event.keyCode;
	socket.send(event.keyCode);
	
});


socket.onmessage = function (event) {
		var ySpeed = 1;
		var xSpeed = 1;
		console.log("socket id received");
		console.log(event.data);
		var rce = event.data;
		var data  = rce.split(',');
		//console.log(parse(event.data[0]));
		//console.log(event.data[1]);
		var id = parseInt(data[0]);
		var keyCode = parseInt(data[1]);
		if (event.data[0] == 0)
		{
			if (keyCode == 87) {
			mesh1.position.y += ySpeed;
			} else if (keyCode == 83) {
			mesh1.position.y -= ySpeed;
			} else if (keyCode == 65) {
			mesh1.position.x -= xSpeed;
			} else if (keyCode == 68) {
			mesh1.position.x += xSpeed;
			} else if (keyCode == 32) {
			mesh1.position.set(0, 0, 0);
			} else if (keyCode == 88) {
			mesh1.rotation.x += 0.1;
			} else if (keyCode == 89) {
			mesh1.rotation.y += 0.1;
			} else if (keyCode == 69) {
			mesh1.rotation.z += 0.1;
			} else if (keyCode == 67) {
			mesh1.rotation.z -= 0.1;
			}
			
			renderer.render(scene, camera);
		}
		else
		{
			if (keyCode == 87) {
			mesh2.position.y += ySpeed;
			} else if (keyCode == 83) {
			mesh2.position.y -= ySpeed;
			} else if (keyCode == 65) {
			mesh2.position.x -= xSpeed;
			} else if (keyCode == 68) {
			mesh2.position.x += xSpeed;
			} else if (keyCode == 32) {
			mesh2.position.set(0, 0, 0);
			} else if (keyCode == 88) {
			mesh2.rotation.x += 0.1;
			} else if (keyCode == 89) {
			mesh2.rotation.y += 0.1;
			} else if (keyCode == 69) {
			mesh2.rotation.z += 0.1;
			}
			else if (keyCode == 67) {
			mesh2.rotation.z -= 0.1;
			}
			renderer.render(scene, camera);
			
			//move(1,event.keyCode);
		}
	}
/*document.addEventListener('keyup', function(event) {
	switch (event.keyCode) {
	case 65: // A
	movement.left = false;
	break;
	case 87: // W
	movement.up = false;
	break;
	case 68: // D
	movement.right = false;
	break;
	case 83: // S
	movement.down = false;
	break;
	}
});*/

/*function move(int a, int b)
{
	var xSpeed = 1;
	var ySpeed = 1;
	console.log("move event reached");
	//var keyCode = event.which;
	var mesh;
	if (a == 0)
	{
		mesh = mesh1;
	}
	else
	{
		mesh = mesh2;
	}
	var keyCode = b;
	console.log("keycode received");
	console.log(keyCode);
    if (keyCode == 87) {
        mesh.position.y += ySpeed;
    } else if (keyCode == 83) {
        mesh.position.y -= ySpeed;
    } else if (keyCode == 65) {
        mesh.position.x -= xSpeed;
    } else if (keyCode == 68) {
        mesh.position.x += xSpeed;
    } else if (keyCode == 32) {
        mesh.position.set(0, 0, 0);
    } else if (keyCode == 88) {
	    mesh.rotation.x += 0.1;
    } else if (keyCode == 89) {
	    mesh.rotation.y += 0.1;
    } else if (keyCode == 90) {
	    mesh.rotation.z += 0.1;
    }
    //renderer.render(scene, camera);
}*/

/*socket.send('new player');
setInterval(function() {
  socket.send('movement', movement);
}, 1000 / 60);*/


/*socket.on('state', function(players) {
	console.log(players);
	context.clearRect(0, 0, 800, 600);
	context.fillStyle = 'green';
	for (var id in players) {
		var player = players[id];
		context.beginPath();
		context.arc(player.x, player.y, 10, 0, 2 * Math.PI);
		context.fill();
	}
	/*var i = 0;
	for (var id in players) {
	var player = players[id];
	var width = canvas.width;
	var height = canvas.height;*/

	/*renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: true});
	renderer.setClearColor(0xFFFFFF);
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
	camera.position.set(0, 0, 150);
	var texture = new THREE.Texture(image);
	var geometry = new THREE.BoxGeometry(50, 50, 50);
	/*if (i == 0)
	{
		var texture = new THREE.Texture(image);
	}
	else if (i == 1)
	{
		var texture = new THREE.Texture(image2);  
	}
	else
	{
		var texture = new THREE.Texture(image);
	}*/
	/*texture.needsUpdate = true;
	var material = new THREE.MeshPhongMaterial({map: texture});
	mesh = new THREE.Mesh(geometry, material);
	scene.add(mesh);

	var light = new THREE.SpotLight(0xFFFFFF, 1);
	light.position.set(0, 100, 250);
	scene.add(light);*/

	/*renderer.render(scene, camera);*/

	//i++;
	  
	
//});