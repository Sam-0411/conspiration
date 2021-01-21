const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var material, texture, geometry, mesh;
// ---

var img = new Image();
img.src = '../image/globe.jpg';

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

texture = new THREE.Texture(canvas);
material = new THREE.MeshBasicMaterial({ map: texture });
geometry = new THREE.SphereGeometry( 1 , 100, 100);
mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );

canvas.width = canvas.height = img.width;


function changeCanvas() {
	console.log(img.width)
	ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
	
}

camera.position.z = 2;
var v = 0.1;
const animate = function () {
	requestAnimationFrame( animate );

    changeCanvas();
	texture.needsUpdate = true;

	
	if (keyState[40]) mesh.rotation.x += v;
	if (keyState[38]) mesh.rotation.x -= v;
	if (keyState[37]) mesh.rotation.y -= v;
	if (keyState[39]) mesh.rotation.y += v;
	
	renderer.render( scene, camera );
};



// resize canvas
window.addEventListener('resize', () => {
	renderer.setSize(window.innerWidth,window.innerHeight);
	camera.aspect = window.innerWidth / window.innerHeight;
  
	camera.updateProjectionMatrix();
})

  var keyState = [];
  document.addEventListener(
	  'keydown',
	  (event)=>{
		  keyState[event.keyCode || event.which] = true;
	  }
  );
  document.addEventListener(
	  'keyup',
	  (event)=>{
		  keyState[event.keyCode || event.which] = false;
	  }
  );

  animate();