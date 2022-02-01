import './style.css'
import * as THREE from './three/Three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75, window.innerWidth / window.innerHeight, 0.1, 1000
);

const renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector('#background'),
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

// Box
const meTexture = new THREE.TextureLoader().load('me.jpg');
const cube = new THREE.Mesh(
  new THREE.BoxGeometry(20, 20, 20, 20),
  new THREE.MeshStandardMaterial({ map: meTexture }));
scene.add(cube);

// Light 
const pointLight = new THREE.PointLight(0xFFFFFF);
pointLight.position.set(20, 5, 15);
scene.add(pointLight);

// Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.minDistance = 30;
controls.maxDistance = 100;

// Background
scene.background = new THREE.TextureLoader().load('bg.jpg');

let controlsUsed = false;
let oX = camera.position.x,
    oY = camera.position.y,
    oZ = camera.position.z;

function animate() {
  requestAnimationFrame(animate);
  if (!controlsUsed)
    cube.rotateY(-0.002);
  if (!controlsUsed &&
      oX != camera.position.x ||
      oY != camera.position.y ||
      oZ != camera.position.z)
      controlsUsed = true;
  pointLight.position.set(camera.position.x, camera.position.y, camera.position.z);
  controls.update();
  renderer.render(scene, camera);
}

animate();