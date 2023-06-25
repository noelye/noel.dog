import * as THREE from 'https://unpkg.com/browse/three@0.153.0/';
import { OrbitControls } from 'https://unpkg.com/browse/three@0.153.0/examples/jsm/controls/OrbitControls.js';
import { STLLoader } from 'https://unpkg.com/browse/three@0.153.0/examples/jsm/loaders/STLLoader.js';
import { AsciiEffect } from './AsciiEffect.js'
// DECLARE / CREATE VARIABLES

const modelStl = new URL('./model.stl', import.meta.url).href
const container = document.getElementById('container');
const clock = new THREE.Clock();
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

const camera = new THREE.PerspectiveCamera(25, sizes.width / sizes.height, 5, 10000);
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
  effect.setSize(sizes.width, sizes.height - 10);
  effect.domElement.style.color = ASCIIColor;
  effect.domElement.style.backgroundColor = backgroundColor;
}

createEffect();

// HTML POINTERS

const bodyDom = document.getElementById("bodydom")
const dark = document.getElementById("dark-mode-rectangle");
const buttonAct = document.getElementById('button-active');
const button = document.getElementsByClassName('button');
const bottom = document.getElementsByClassName('bottom-text');
const rectangle = document.getElementById('dark-mode-rectangle');
const darkText = document.getElementById('dark-mode');
const hamburger = document.getElementById("hamburger");
const hamburgerLines = document.getElementsByClassName("lines");
const noel = document.getElementById("noel")
const menu = document.getElementById("menu");
const hider = document.getElementById("hider");
const backgroundCover = document.getElementById("background-cover")
const homeButton = document.getElementById("home")
const aboutButton = document.getElementById("about-mobile")
const resumeButton = document.getElementById("resume")
const sendMessageButton = document.getElementById("sendmessage")

dark.addEventListener("click", darkMode);

// DARK MODE FUNCTION

function darkMode() {
  if (effect.domElement.style.color === 'white') {

    const isDarkMode = effect.domElement.style.color === 'black';
    localStorage.setItem('darkMode', isDarkMode);

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
    for (let i = 0; i < hamburgerLines.length; i++) {
      hamburgerLines[i].style.backgroundColor = "black";
    }
    noel.style.color = "black";
    menu.style.backgroundColor = 'white';
    menu.style.borderTop = '1px solid #C7C7C7'
    backgroundCover.style.backgroundColor = 'white'
    darkText.innerHTML = "dark mode";
    homeButton.style.color = "white";
    homeButton.style.backgroundColor = "black";
    aboutButton.style.color = "#6F6F6F"
    aboutButton.style.backgroundColor = "#EAEAEA"
    resumeButton.style.color = "#6F6F6F"
    resumeButton.style.backgroundColor = "#EAEAEA"
    sendMessageButton.style.color = "#0038FF"
    sendMessageButton.style.backgroundColor = "#DDE0FF"
    bodyDom.style.backgroundColor = 'white'

  } else {
    effect.domElement.style.color = 'white';

    const isDarkMode = effect.domElement.style.color === 'white';
    localStorage.setItem('darkMode', isDarkMode);

    effect.domElement.style.backgroundColor = 'black';
    rectangle.style.background = "rgba(255, 255, 255, 0.204)";
    rectangle.style.width = "103px";
    buttonAct.style.backgroundColor = "white";
    buttonAct.style.color = "black";
    buttonAct.style.borderColor = "white";
    bodyDom.style.backgroundColor = 'black'

    for (let i = 0; i < button.length; i++) {
      button[i].style.color = "white";
      button[i].style.borderColor = "white";
    }

    for (let i = 0; i < bottom.length; i++) {
      bottom[i].style.color = "white";
    }

    darkText.style.color = "white";
    darkText.innerHTML = "light mode";

    for (let i = 0; i < hamburgerLines.length; i++) {
      hamburgerLines[i].style.backgroundColor = "white";
    }
    noel.style.color = "white"
    menu.style.backgroundColor = 'black';
    menu.style.borderTop = '1px solid #383838'
    backgroundCover.style.backgroundColor = 'black'
    homeButton.style.color = "black";
    homeButton.style.backgroundColor = "white";
    aboutButton.style.color = "#8C8C8C"
    aboutButton.style.backgroundColor = "#101010"
    resumeButton.style.color = "#8C8C8C"
    resumeButton.style.backgroundColor = "#101010"
    sendMessageButton.style.color = "#0038FF"
    sendMessageButton.style.backgroundColor = "#0C0D12"
  }
}

function checkDarkMode() {
  const isDarkMode = localStorage.getItem('darkMode');
  if (isDarkMode === 'true') {
    
    effect.domElement.style.color = 'white';

    const isDarkMode = effect.domElement.style.color === 'white';
    localStorage.setItem('darkMode', isDarkMode);

    effect.domElement.style.backgroundColor = 'black';
    rectangle.style.background = "rgba(255, 255, 255, 0.204)";
    rectangle.style.width = "103px";
    buttonAct.style.backgroundColor = "white";
    buttonAct.style.color = "black";
    buttonAct.style.borderColor = "white";
    bodyDom.style.backgroundColor = 'black'

    for (let i = 0; i < button.length; i++) {
      button[i].style.color = "white";
      button[i].style.borderColor = "white";
    }

    for (let i = 0; i < bottom.length; i++) {
      bottom[i].style.color = "white";
    }

    darkText.style.color = "white";
    darkText.innerHTML = "light mode";

    for (let i = 0; i < hamburgerLines.length; i++) {
      hamburgerLines[i].style.backgroundColor = "white";
    }
    noel.style.color = "white"
    menu.style.backgroundColor = 'black';
    menu.style.borderTop = '1px solid #383838'
    backgroundCover.style.backgroundColor = 'black'
    homeButton.style.color = "black";
    homeButton.style.backgroundColor = "white";
    aboutButton.style.color = "#8C8C8C"
    aboutButton.style.backgroundColor = "#101010"
    resumeButton.style.color = "#8C8C8C"
    resumeButton.style.backgroundColor = "#101010"
    sendMessageButton.style.color = "#0038FF"
    sendMessageButton.style.backgroundColor = "#0C0D12"

  }
  else {
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
    for (let i = 0; i < hamburgerLines.length; i++) {
      hamburgerLines[i].style.backgroundColor = "black";
    }
    noel.style.color = "black";
    menu.style.backgroundColor = 'white';
    menu.style.borderTop = '1px solid #C7C7C7'
    backgroundCover.style.backgroundColor = 'white'
    darkText.innerHTML = "dark mode";
    homeButton.style.color = "white";
    homeButton.style.backgroundColor = "black";
    aboutButton.style.color = "#6F6F6F"
    aboutButton.style.backgroundColor = "#EAEAEA"
    resumeButton.style.color = "#6F6F6F"
    resumeButton.style.backgroundColor = "#EAEAEA"
    sendMessageButton.style.color = "#0038FF"
    sendMessageButton.style.backgroundColor = "#DDE0FF"
    bodyDom.style.backgroundColor = 'white'

  }
}

checkDarkMode();

hamburger.addEventListener("touchstart", () => {
    if (menu.classList.contains("active") == true) {
        hamburger.classList.toggle("active");
        hamburger.classList.toggle("inactive");
        menu.classList.toggle("active")
        backgroundCover.classList.toggle("inactive")
        backgroundCover.classList.toggle("active")
        menu.classList.toggle("inactive")
        hider.classList.toggle("active");
        hider.classList.toggle("inactive");
    } else {
        hamburger.classList.remove("inactive");
        hamburger.classList.toggle("active");
        menu.classList.remove("inactive");
        menu.classList.toggle("active");
        backgroundCover.classList.remove("inactive");
        backgroundCover.classList.toggle("active");
        hider.classList.remove("inactive");
        hider.classList.toggle("active");
    }
});


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

    controls = new OrbitControls( camera, effect.domElement );
    controls.enableDamping = true;
    controls.dampingFactor = 0.03;
    controls.screenSpacePanning = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 2;
    const elapsedTime = clock.getElapsedTime();
    myMesh.rotation.z = elapsedTime / 3; 
  
  });


// ANIMATE FUNCTION

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  effect.render(scene, camera);
}

animate();

function onWindowResize() {
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  renderer.setSize(sizes.width, sizes.height);
  effect.setSize(sizes.width, sizes.height);
}


window.addEventListener('resize', onWindowResize)

