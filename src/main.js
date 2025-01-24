// import * as THREE from 'three';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// const controls = new OrbitControls(camera, renderer.domElement);
// // const loader = new GLTFLoader();

// // const geometry = new THREE.BoxGeometry(1, 1, 1);
// // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// // const cube = new THREE.Mesh(geometry, material);
// // scene.add(cube);

// // Add Lighting
// const light = new THREE.DirectionalLight(0xffffff, 1);
// light.position.set(10, 10, 10).normalize();
// scene.add(light);

// // GLTFLoader to load 3D model
// const loader = new GLTFLoader();
// loader.load(
//     // 'models/your-model.gltf', // Path to your 3D model file
//     '/shiba.glb', // Path to your 3D model file
//     function (gltf) {
//         const model = gltf.scene; // Access the model's scene
//         model.scale.set(1, 1, 1); // Scale the model if needed
//         model.position.set(0, 0, 0); // Position the model in the scene
//         scene.add(model); // Add the model to the scene
//     },
//     function (xhr) {
//         console.log((xhr.loaded / xhr.total) * 100 + '% loaded'); // Log progress
//     },
//     function (error) {
//         console.error('An error occurred while loading the model:', error);
//     }
// );

// camera.position.z = 5;

// function animate() {
//     light.rotation.x += 0.01;
//     light.rotation.y += 0.01;
//     renderer.render(scene, camera);
// }
// renderer.setAnimationLoop(animate);

import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// Scene and Camera Setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // Smooth rotation when user drags
controls.dampingFactor = 0.05; // Damping factor for smoothness
controls.enableZoom = true; // Allow zooming with the mouse scroll

// Add Lighting
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(10, 10, 10).normalize();
scene.add(light);

// GLTFLoader to load 3D model
const loader = new GLTFLoader();
let model; // Variable to store the loaded model

loader.load(
    '/shiba.glb', // Path to your 3D model file
    function (gltf) {
        model = gltf.scene; // Access the model's scene
        model.scale.set(2, 2, 2); // Scale the model if needed
        model.position.set(0, 0, 0); // Position the model in the scene
        scene.add(model); // Add the model to the scene
    },
    function (xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded'); // Log progress
    },
    function (error) {
        console.error('An error occurred while loading the model:', error);
    }
);

camera.position.z = 5;

// Animation Loop
function animate() {
    requestAnimationFrame(animate);

    if (model) {
        // Rotate the model on its Y-axis (self-rotation)
        // model.rotation.y += 0.01;
    }

    // Update controls for smooth rotation
    controls.update();

    // Render the scene
    renderer.render(scene, camera);
}

animate();
