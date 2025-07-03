/**
 * Toggles visibility between the login and sign-up forms
 * when the corresponding text links are clicked.
 */


const loginText = document.querySelector(".log-in-text");
const loginForm = document.querySelector("#log-in-form");
const signupText = document.querySelector(".sign-up-text");
const signupForm = document.querySelector("#sign-up-form");

loginText.addEventListener('click', () => {
  loginForm.style.display = "flex";
  signupForm.style.display = "none";
});

signupText.addEventListener('click', () => {
  loginForm.style.display = "none";
  signupForm.style.display = "flex";
});

