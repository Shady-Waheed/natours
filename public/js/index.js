import '@babel/polyfill';
import { displayMap } from './maptiler';
import { login } from './login';
// DOM Element
const mapBox = document.getElementById('map');
const loginForm = document.querySelector('.form');

// Delegation
if (mapBox) {
  displayMap(locations);
}
if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    e.preventDefault();
    login(email, password);
  });
}
