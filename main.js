import * as THREE from 'https://unpkg.com/three@0.127.0/build/three.module.js';
import { OrbitControls } from 'https://unpkg.com/three@0.127.0/examples/jsm/controls/OrbitControls.js';
import { STLLoader } from 'https://unpkg.com/three@0.127.0/examples/jsm/loaders/STLLoader.js';
import { AsciiEffect } from 'https://unpkg.com/browse/three@0.127.0/examples/jsm/effects/AsciiEffect.js';

// DECLARE / CREATE VARIABLES

const modelStl = new URL('./model.stl', import.meta.url).href
const container = document.getElementById('container');
const clock = new THREE.Clock();
let rotateModel = false;
let controls;
const myMesh = new THREE.Mesh();
const scene = new THREE.Scene();
scene.background = new THREE.Color(0, 0, 0);

// LIGHTING
const pointLight1 = new THREE.PointLight(0xffffff, 1);
pointLight1.position.set(1000, 500, 100);
scene.add(pointLight1);

const pointLight2 = new THREE.PointLight(0xffffff, 0.5);
pointLight2.position.set(-500, 100, -300);
scene.add(pointLight2);

// MATERIALS

const stlLoader = new STLLoader();
const material = new THREE.MeshStandardMaterial();
material.flatShading = true;
material.side = THREE.DoubleSide;

// VIEWPORT

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
};

//VIEWPORT AND CAMERA

const camera = new THREE.PerspectiveCamera(25, sizes.width / sizes.height, 5, 2500);
const renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(sizes.width, sizes.height);

//EFFECT

let effect;
let characters = ' .:-+*=%@#';
const effectSize = { amount: 0.205 };
let backgroundColor = 'white';
let ASCIIColor = 'black';

function createEffect() {
  effect = new AsciiEffect(renderer, characters, { invert: true, resolution: effectSize.amount });
  effect.setSize(sizes.width, sizes.height);
  effect.domElement.style.color = ASCIIColor;
  effect.domElement.style.backgroundColor = backgroundColor;
}

createEffect();

// HTML POINTERS

const dark = document.getElementById("dark-mode-rectangle");
const buttonAct = document.getElementById('button-active');
const button = document.getElementsByClassName('button');
const bottom = document.getElementsByClassName('bottom-text');
const rectangle = document.getElementById('dark-mode-rectangle');
const darkText = document.getElementById('dark-mode');

dark.addEventListener("click", darkMode);

// DARK MODE FUNCTION

function darkMode() {
  if (effect.domElement.style.color === 'white') {
    effect.domElement.style.color = 'black';
    effect.domElement.style.backgroundColor = 'white';
    rectangle.style.background = "rgba(0, 0, 0, 0.404)";
    rectangle.style.width = "91px";
    buttonAct.style.backgroundColor = "black";
    buttonAct.style.color = "white";
    buttonAct.style.borderColor = "black";

    for (let i = 0; i < button.length; i++) {
      button[i].style.color = "black";
      button[i].style.borderColor = "black";
    }

    for (let i = 0; i < bottom.length; i++) {
      bottom[i].style.color = "black";
    }
    darkText.style.color = "black";
    darkText.innerHTML = "dark mode";
  } else {
    effect.domElement.style.color = 'white';
    effect.domElement.style.backgroundColor = 'black';
    rectangle.style.background = "rgba(255, 255, 255, 0.204)";
    rectangle.style.width = "103px";
    buttonAct.style.backgroundColor = "white";
    buttonAct.style.color = "black";
    buttonAct.style.borderColor = "white";

    for (let i = 0; i < button.length; i++) {
      button[i].style.color = "white";
      button[i].style.borderColor = "white";
    }

    for (let i = 0; i < bottom.length; i++) {
      bottom[i].style.color = "white";
    }
    darkText.style.color = "white";
    darkText.innerHTML = "light mode";
  }
}

container.appendChild(effect.domElement);

// STL LOADER

stlLoader.load(
  modelStl,
  function (geometry) {
    myMesh.material = material;
    myMesh.geometry = geometry;

    var tempGeometry = new THREE.Mesh(geometry, material);
    myMesh.position.copy(tempGeometry.position);

    geometry.computeVertexNormals();
    myMesh.geometry.center();

    myMesh.rotation.x = -90 * Math.PI / 20;
    myMesh.rotation.z = 20;

    myMesh.geometry.computeBoundingBox();

    camera.position.x = 300;
    camera.position.y = 0;
    camera.position.z = 500;

    scene.add(myMesh);

    controls = new OrbitControls(camera, effect.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.03;
    controls.screenSpacePanning = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 2;

    function tick() {
      if (rotateModel === true) {
        const elapsedTime = clock.getElapsedTime();
        myMesh.rotation.z = elapsedTime / 3;
        render();
        window.requestAnimationFrame(tick);
      } else {
        render();
        window.requestAnimationFrame(tick);
      }
    }

    function render() {
      effect.render(scene, camera);
    }

    tick();
  }
);


// ANIMATE FUNCTION

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

animate();

window.addEventListener('resize', onWindowResize)

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  effect.setSize(window.innerWidth, window.innerHeight);
}
