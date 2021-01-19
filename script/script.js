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

const animate = function () {
	requestAnimationFrame( animate );

    changeCanvas();
	texture.needsUpdate = true;
	mesh.rotation.x+=0.01;
	mesh.rotation.y+=0.01;
	
	renderer.render( scene, camera );
};

animate();

// resize canvas
window.addEventListener('resize', () => {
	renderer.setSize(window.innerWidth,window.innerHeight);
	camera.aspect = window.innerWidth / window.innerHeight;
  
	camera.updateProjectionMatrix();
  })