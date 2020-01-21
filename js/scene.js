let THREE = require("three");


function create3DBox(geo, color, x) {
  const geometry = new THREE.BoxGeometry(geo[0], geo[1], geo[2]);
  const material = new THREE.MeshPhongMaterial({color});
  const cube = new THREE.Mesh(geometry, material);
  // scene.add(cube);
  cube.position.x = x;
  return cube;
}

const canvas = document.querySelector("#c");

// Create scene and camera
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 3;

// Create renderer
let renderer = new THREE.WebGLRenderer({canvas: canvas});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create light source
const lightColor = 0xFFFFFF;
const lightIntensity = 1;
const light = new THREE.DirectionalLight(lightColor, lightIntensity);
light.position.set(-1, 2, 4);
scene.add(light);

let geometry = new THREE.BoxGeometry(1, 1, 1);
let material = new THREE.MeshBasicMaterial({ color: 0x00aaff, wireframe: true });
let cube = new THREE.Mesh(geometry, material);
scene.add(cube);

let geometry1 = new THREE.BoxGeometry(1, 1, 1);
let material1 = new THREE.MeshPhongMaterial({ color: 0x00aaff });
let cube1 = new THREE.Mesh(geometry1, material1);
scene.add(cube1);

scene.add(create3DBox([1, 1, 1], "#ff00aa", 1.4));





// Function to animate 3D objects.
function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  cube.rotation.z += 0.01;
  cube.position.y = 1.5;
  cube1.rotation.x -= 0.01;
  cube1.rotation.y -= 0.01;
  cube1.rotation.z -= 0.01;

  renderer.render(scene, camera);
}

animate();

