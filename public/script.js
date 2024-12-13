const socket = io();

const messages = document.getElementById('messages');
const form = document.getElementById('form');
const input = document.getElementById('input');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (input.value) {
    socket.emit('chat message', input.value);
    input.value = '';
  }
});

socket.on('chat message', (msg) => {
  const item = document.createElement('li');
  item.textContent = msg;
  messages.appendChild(item);
  window.scrollTo(0, document.body.scrollHeight);
});

// Select the body element
const body = document.body;

// Function to generate a random color
function randomColor() {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}

// Function to change the background gradient
function changeBackgroundGradient() {
    const color1 = randomColor();
    const color2 = randomColor();
    const angle = Math.floor(Math.random() * 360);

    body.style.background = `linear-gradient(${angle}deg, ${color1}, ${color2})`;
}

// Automatically change the gradient every 5 seconds
setInterval(changeBackgroundGradient, 5000);

// Trigger the first gradient change immediately
changeBackgroundGradient();

// Select the body element
const body = document.body;

// Function to generate a random color
function randomColor() {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}

// Function to change the background gradient
function changeBackgroundGradient() {
    const color1 = randomColor();
    const color2 = randomColor();
    const angle = Math.floor(Math.random() * 360);

    body.style.background = `linear-gradient(${angle}deg, ${color1}, ${color2})`;
}

// Automatically change the gradient every 5 seconds
setInterval(changeBackgroundGradient, 5000);

// Trigger the first gradient change immediately
changeBackgroundGradient();
