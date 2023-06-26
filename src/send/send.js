const dark = document.getElementById('dark-mode-rectangle');
const button = document.getElementsByClassName('button');
const bottom = document.getElementsByClassName('bottom-text');
const rectangle = document.getElementById('dark-mode-rectangle');
const darkText = document.getElementById('dark-mode');
const header = document.getElementById('header');
const body = document.getElementById('body')
const bodyText = document.getElementById('body-text')
const bodyInput = document.getElementById('body-text-fr')
const subjectText = document.getElementById('subject-text')
const subjectInput = document.getElementById('subject')
const fromText = document.getElementById('from-text')
const fromInput = document.getElementById('from')
const sendMessage = document.getElementById('send')
const hamburger = document.getElementById("hamburger");
const hamburgerLines = document.getElementsByClassName("lines");
const noel = document.getElementById("noel")
const menu = document.getElementById("menu");
const hider = document.getElementById("hider");
const backgroundCover = document.getElementById("background-cover")
const homeButton = document.getElementById("home-inactive")
const aboutButton = document.getElementById("about-mobile")
const resumeButton = document.getElementById("resume")
const sendMessageButton = document.getElementById("sendmessage-filled")

dark.addEventListener('click', darkMode);

function darkMode() {
  if (body.style.backgroundColor === 'rgb(17, 17, 17)') {

    const isDarkMode = body.style.backgroundColor === 'white';
    localStorage.setItem('darkMode', isDarkMode);

    body.style.backgroundColor = 'white'
    rectangle.style.background = 'rgba(0, 0, 0, 0.404)';
    rectangle.style.width = '91px';
    bodyText.style.color = 'black'
    bodyInput.setAttribute('id', 'body-text-fr')
    fromText.style.color = 'black'
    fromInput.setAttribute('id', 'from')
    subjectText.style.color = 'black'
    subjectInput.setAttribute('id', 'subject')

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

    for (let i = 0; i < hamburgerLines.length; i++) {
      hamburgerLines[i].style.backgroundColor = "black";
    }
    noel.style.color = "black";
    menu.style.backgroundColor = 'white';
    menu.style.borderTop = '1px solid #C7C7C7'
    backgroundCover.style.backgroundColor = 'white'
    darkText.innerHTML = "dark mode";
    homeButton.style.color = "#6F6F6F";
    homeButton.style.backgroundColor = "#EAEAEA";
    aboutButton.style.color = "#6F6F6F"
    aboutButton.style.backgroundColor = "#EAEAEA"
    resumeButton.style.color = "#6F6F6F"
    resumeButton.style.backgroundColor = "#EAEAEA"
    sendMessageButton.style.color = "white"
    sendMessageButton.style.backgroundColor = "#0038FF"
  } else {

    const isDarkMode = body.style.backgroundColor === 'white';
    localStorage.setItem('darkMode', isDarkMode);

    body.style.backgroundColor = '#111111'
    rectangle.style.background = 'rgba(255, 255, 255, 0.204)';
    rectangle.style.width = '103px';
    bodyText.style.color = '#AEAEAE'
    bodyInput.setAttribute('id', 'body-dark')
    fromText.style.color = '#AEAEAE'
    fromInput.setAttribute('id', 'from-dark')
    subjectText.style.color = '#AEAEAE'
    subjectInput.setAttribute('id', 'subject-dark')

    for (let i = 0; i < button.length; i++) {
      button[i].style.color = '#959595';
      button[i].style.borderColor = '#959595';
    }

    for (let i = 0; i < bottom.length; i++) {
      bottom[i].style.color = '#959595';
    }

    darkText.style.color = 'white';
    darkText.innerHTML = 'light mode';

    header.style.color = 'white';
    for (let i = 0; i < hamburgerLines.length; i++) {
      hamburgerLines[i].style.backgroundColor = "white";
    }
    noel.style.color = "white"
    menu.style.backgroundColor = 'rgb(17, 17, 17)';
    menu.style.borderTop = '1px solid #383838'
    backgroundCover.style.backgroundColor = 'rgb(17, 17, 17)'
    homeButton.style.color = "#8C8C8C";
    homeButton.style.backgroundColor = "#202020";
    aboutButton.style.color = "#8C8C8C"
    aboutButton.style.backgroundColor = "#202020"
    resumeButton.style.color = "#8C8C8C"
    resumeButton.style.backgroundColor = "#202020"
    sendMessageButton.style.color = "white"
    sendMessageButton.style.backgroundColor = "#0038FF"
  }
}

function checkDarkMode() {
  const isDarkMode = localStorage.getItem('darkMode');
  if (isDarkMode === 'true') {

    body.style.backgroundColor = '#111111'
    rectangle.style.background = 'rgba(255, 255, 255, 0.204)';
    rectangle.style.width = '103px';
    bodyText.style.color = '#AEAEAE'
    bodyInput.setAttribute('id', 'body-dark')
    fromText.style.color = '#AEAEAE'
    fromInput.setAttribute('id', 'from-dark')
    subjectText.style.color = '#AEAEAE'
    subjectInput.setAttribute('id', 'subject-dark')

    for (let i = 0; i < button.length; i++) {
      button[i].style.color = '#959595';
      button[i].style.borderColor = '#959595';
    }

    for (let i = 0; i < bottom.length; i++) {
      bottom[i].style.color = '#959595';
    }

    darkText.style.color = 'white';
    darkText.innerHTML = 'light mode';

    header.style.color = 'white';
    for (let i = 0; i < hamburgerLines.length; i++) {
      hamburgerLines[i].style.backgroundColor = "white";
    }
    noel.style.color = "white"
    menu.style.backgroundColor = 'rgb(17, 17, 17)';
    menu.style.borderTop = '1px solid #383838'
    backgroundCover.style.backgroundColor = 'rgb(17, 17, 17)'
    homeButton.style.color = "#8C8C8C";
    homeButton.style.backgroundColor = "#202020";
    aboutButton.style.color = "#8C8C8C"
    aboutButton.style.backgroundColor = "#202020"
    resumeButton.style.color = "#8C8C8C"
    resumeButton.style.backgroundColor = "#202020"
    sendMessageButton.style.color = "white"
    sendMessageButton.style.backgroundColor = "#0038FF"

  }
  else {
    body.style.backgroundColor = 'white'
    rectangle.style.background = 'rgba(0, 0, 0, 0.404)';
    rectangle.style.width = '91px';
    bodyText.style.color = 'black'
    bodyInput.setAttribute('id', 'body-text-fr')
    fromText.style.color = 'black'
    fromInput.setAttribute('id', 'from')
    subjectText.style.color = 'black'
    subjectInput.setAttribute('id', 'subject')

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

    for (let i = 0; i < hamburgerLines.length; i++) {
      hamburgerLines[i].style.backgroundColor = "black";
    }
    noel.style.color = "black";
    menu.style.backgroundColor = 'white';
    menu.style.borderTop = '1px solid #C7C7C7'
    backgroundCover.style.backgroundColor = 'white'
    darkText.innerHTML = "dark mode";
    homeButton.style.color = "#6F6F6F";
    homeButton.style.backgroundColor = "#EAEAEA";
    aboutButton.style.color = "#6F6F6F"
    aboutButton.style.backgroundColor = "#EAEAEA"
    resumeButton.style.color = "#6F6F6F"
    resumeButton.style.backgroundColor = "#EAEAEA"
    sendMessageButton.style.color = "white"
    sendMessageButton.style.backgroundColor = "#0038FF"

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


const send = document.getElementById("send")
send.addEventListener('click', sendDiscord)

function sendDiscord() {

  let fromValue, subjectValue, bodyValue;

  if (body.style.backgroundColor == 'rgb(17, 17, 17)') {
    fromValue = document.getElementById('from-dark').value;
    subjectValue = document.getElementById('subject-dark').value;
    bodyValue = document.getElementById('body-dark').value;
  }
  else {
    fromValue = document.getElementById('from').value;
    subjectValue = document.getElementById('subject').value;
    bodyValue = document.getElementById('body-text-fr').value;
  }

  const message = {
    from: fromValue,
    subject: subjectValue,
    body: bodyValue
  };

  if (bodyValue.length > 0 && fromValue.length > 0 && subjectValue.length > 0) {
    fetch('../../api/sendMessage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ from: message.from, subject: message.subject, body: message.body }) // Include the message content in the request body
    })
    .then(response => {
      if (response.ok) {
      } else {
        alert('Failed to send message. Please try again.');
      }
    })
    .catch(error => {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again.');
    });
    sendMessage.innerHTML = 'Sent'
    sendMessage.setAttribute('id', 'message-sent')
  }
  else {
    alert("All fields must be filled to send :)")
  }
}

function animateTitle(Title = "noel.dog", delay = 50) {
  let counter = 0;
  let direction = true;

  setInterval(function() {
    counter = (direction) ? ++counter : --counter;

    if (counter === 0 || counter === Title.length) {
      direction = !direction;
    }

    document.title = (counter === 0) ? " " : Title.slice(0, counter);
  }, delay);
}

animateTitle();



