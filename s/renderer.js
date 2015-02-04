if ( Detector.webgl && !(Mobile.isMobile)) {
  window.addEventListener("load", function() {
    init();
    animate();
  }, false);
}
var rendercanvas, outerDiv;
var camera, scene, renderer;
var uniforms, clock;
var timeScale = 1.0;

var shaders = [worleyShader, flowShader, fbmShader];

function init() {
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
  var material = new THREE.ShaderMaterial( {
    uniforms: uniforms,
    vertexShader: vertexShader,
    fragmentShader: shaders[Math.floor(shaders.length * Math.random())]
  } );
  var mesh = new THREE.Mesh( geometry, material );
  scene.add( mesh );
  renderer = new THREE.WebGLRenderer({canvas: rendercanvas});
  renderer.setPixelRatio( window.devicePixelRatio );
  onWindowResize();
  window.addEventListener( 'resize', onWindowResize, false );
  clock = new THREE.Clock()
}
function onWindowResize( event ) {
  rendercanvas.width = outerDiv.offsetWidth;
  rendercanvas.height = outerDiv.offsetHeight;
  renderer.setSize( outerDiv.offsetWidth, outerDiv.offsetHeight );
  uniforms.scale.value = 1.0 / window.devicePixelRatio;
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
