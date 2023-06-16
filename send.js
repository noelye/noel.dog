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




dark.addEventListener('click', darkMode);

function darkMode() {
  if (body.style.backgroundColor === 'rgb(17, 17, 17)') {
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
  } else {
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
  }
}
