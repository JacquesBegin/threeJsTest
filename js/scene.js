
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let geometry = new THREE.BoxGeometry(1, 1, 1);
let material = new THREE.MeshBasicMaterial({ color: 0x00aaff, wireframe: true });
let cube = new THREE.Mesh(geometry, material);

scene.add(cube);

let geometry1 = new THREE.BoxGeometry(1, 1, 1);
let material1 = new THREE.MeshBasicMaterial({ color: 0x00aaff, wireframe: true });
let cube1 = new THREE.Mesh(geometry1, material1);

scene.add(cube1);

camera.position.z = 3;

function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  cube1.rotation.x += 0.01;
  cube1.rotation.y -= 0.01;

  renderer.render(scene, camera);
}
animate();