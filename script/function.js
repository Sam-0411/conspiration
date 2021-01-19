// keyboard detection
var keycode;
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

// clic detection
var clic = -1;
document.onmousedown = function(event) {
  clic = event.button;
}



// get random number
function Random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
}

// get distance between two vecteur 3
function distanceVector( v1, v2 ){
  var dx = v1.x - v2.x;
  var dy = v1.y - v2.y;
  var dz = v1.z - v2.z;

  return Math.sqrt( dx * dx + dy * dy + dz * dz );
}