var rendercanvas, outerDiv;
var camera, scene, renderer;
var uniforms, clock;
var timeScale = 1.0;

// var pixelRatio = window.devicePixelRatio;
var pixelRatio = 1.0;

window.addEventListener("load", function() {
  init();
  animate();
}, false);

function init() {
  shaders = [];
  if (worleyShader) {
    shaders.push(worleyShader);
  }

  if (flowShader) {
    shaders.push(flowShader);
  }

  if (fbmShader) {
    shaders.push(fbmShader);
  }

  if (shaders.length === 0 || !THREE) {
    return;
  }

  outerDiv = document.getElementsByClassName("sqs-announcement-bar-dropzone")[0];
  rendercanvas = document.createElement("canvas");
  rendercanvas.id = "render-canvas";
  rendercanvas.style.position = "absolute";
  rendercanvas.style.zIndex = -1;
  rendercanvas.style.top = 0;
  rendercanvas.style.left = 0;
  outerDiv.appendChild(rendercanvas);

  camera = new THREE.Camera();
  camera.position.z = 1;
  scene = new THREE.Scene();
  var geometry = new THREE.PlaneBufferGeometry( 2, 2 );
  uniforms = {
    time: { type: "f", value: 1.0 },
    scale: { type: "f", value: 1.0 }
  };

  var shaders = [worleyShader, flowShader, fbmShader];
  var fragmentShader = shaders[Math.floor(shaders.length * Math.random())];
  var material = new THREE.ShaderMaterial( {
    uniforms: uniforms,
    vertexShader: vertexShader,
    fragmentShader: fragmentShader
  } );
  var mesh = new THREE.Mesh( geometry, material );
  scene.add( mesh );
  renderer = new THREE.WebGLRenderer({canvas: rendercanvas});
  renderer.setPixelRatio( pixelRatio );
  onWindowResize();
  window.addEventListener( 'resize', onWindowResize, false );
  clock = new THREE.Clock();
}
function onWindowResize( event ) {
  rendercanvas.width = outerDiv.offsetWidth;
  rendercanvas.height = outerDiv.offsetHeight;
  renderer.setSize( outerDiv.offsetWidth, outerDiv.offsetHeight );
  uniforms.scale.value = 1.0 / pixelRatio;
}
function animate() {
  requestAnimationFrame( animate );
  render();
}
function render() {
  delta = clock.getDelta();
  uniforms.time.value += delta * timeScale;
  renderer.render( scene, camera );
}
