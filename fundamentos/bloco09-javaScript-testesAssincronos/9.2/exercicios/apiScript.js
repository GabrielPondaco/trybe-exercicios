// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';
const fetchJoke = () => {
  const body = document.querySelector('body');
  const p = document.createElement('p');
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => p.innerHTML = data.joke)
    .then(() => body.appendChild(p));
};

window.onload = () => fetchJoke();