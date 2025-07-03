const loginButton = document.querySelector(".log-in-text");
console.log(loginButton);
const loginForm = document.querySelector("#log-in-form");
const signupForm = document.querySelector("#sign-up-form");

loginButton.addEventListener('click', () => {
  loginForm.style.display = "block";
  signupForm.style.display = "none";
});

