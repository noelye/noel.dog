import * as THREE from 'https://unpkg.com/three@0.127.0/build/three.module.js';

const container = document.getElementById('container');


let material;
let stars = [];

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 10;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);

function addSphere(starColor) {
  for (let z = -1000; z < 1000; z += 10) {
    const geometry = new THREE.SphereGeometry(0.5, 150, 16);
    material = new THREE.MeshBasicMaterial({ color: starColor });
    const sphere = new THREE.Mesh(geometry, material);

    sphere.position.x = Math.random() * 2000 - 500;
    sphere.position.y = Math.random() * 2000 - 500;
    sphere.position.z = z;

    sphere.scale.x = sphere.scale.y = 2;

    scene.add(sphere);
    stars.push(sphere);
  }
}

function animateStars() {
  for (let i = 0; i < stars.length; i++) {
    const star = stars[i];
    star.position.z += i / 50;
    if (star.position.z > 1000) star.position.z -= 2000;
  }
}

let backgroundColor = 'white';
scene.background = new THREE.Color(backgroundColor);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  animateStars();
}

window.addEventListener('resize', onWindowResize);

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

let oldx = 0;
let oldy = 0;

window.onmousemove = function (ev) {
  const changex = ev.x - oldx;
  const changey = ev.y - oldy;
  camera.position.x += changex / 10;
  camera.position.y -= changey / 10;
  oldx = ev.x;
  oldy = ev.y;
};

addSphere('black');
animate();

// DARK MODE FUNCTION
const dark = document.getElementById('dark-mode-rectangle');
const buttonAct = document.getElementById('button-active');
const button = document.getElementsByClassName('button');
const bottom = document.getElementsByClassName('bottom-text');
const rectangle = document.getElementById('dark-mode-rectangle');
const darkText = document.getElementById('dark-mode');
const header = document.getElementById('header');
const text = document.getElementById('text');
const footer = document.getElementById('footer');
const message = document.getElementById('button-message');
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

dark.addEventListener('click', darkMode);

function darkMode() {
  if (scene.background.r === 0) {
    addSphere('black')
    scene.background.setColorName('white');
    rectangle.style.background = 'rgba(0, 0, 0, 0.404)';
    rectangle.style.width = '91px';
    buttonAct.style.backgroundColor = 'black';
    buttonAct.style.color = 'white';
    buttonAct.style.borderColor = 'black';
    message.style.color = '#0038FF'
    message.style.borderColor = '#0038FF'

    for (let i = 0; i < button.length; i++) {
      button[i].style.color = 'black';
      button[i].style.borderColor = 'black';
    }

    for (let i = 0; i < bottom.length; i++) {
      bottom[i].style.color = 'black';
    }

    darkText.style.color = 'black';
    darkText.innerHTML = 'dark mode';

    header.style.color = 'black';
    text.style.color = '#323232';
    footer.style.color = 'black';
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
  } else {
    scene.background.setColorName('black');
    addSphere('white')
    rectangle.style.background = 'rgba(255, 255, 255, 0.204)';
    rectangle.style.width = '103px';
    buttonAct.style.backgroundColor = 'white';
    buttonAct.style.color = 'black';
    buttonAct.style.borderColor = 'white';
    message.style.color = '#466cf5'
    message.style.borderColor = '#466cf5'

    for (let i = 0; i < button.length; i++) {
      button[i].style.color = 'white';
      button[i].style.borderColor = 'white';
    }

    for (let i = 0; i < bottom.length; i++) {
      bottom[i].style.color = 'white';
    }

    darkText.style.color = 'white';
    darkText.innerHTML = 'light mode';

    header.style.color = 'white';
    text.style.color = '#C7C7C7';
    footer.style.color = 'white';

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

hamburger.addEventListener("click", () => {
  if (menu.classList.contains("active") == true) {
      menu.classList.toggle("active")
      backgroundCover.classList.toggle("inactive")
      backgroundCover.classList.toggle("active")
      menu.classList.toggle("inactive")
      hamburger.classList.toggle("active");
      hider.classList.toggle("active");
      hider.classList.toggle("inactive");
  } else {
      menu.classList.remove("inactive");
      menu.classList.toggle("active");
      backgroundCover.classList.remove("inactive");
      backgroundCover.classList.toggle("active");
      hamburger.classList.toggle("active");
      hider.classList.remove("inactive");
      hider.classList.toggle("active");
  }
});
