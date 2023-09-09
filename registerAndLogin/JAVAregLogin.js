const $btnSignIn= document.querySelector('.sign-in-btn'),
      $btnSignUp = document.querySelector('.sign-up-btn'),  
      $signUp = document.querySelector('.sign-up'),
      $signIn  = document.querySelector('.sign-in');

let formRegistro = document.getElementById("formRegistro")
let formLogin = document.getElementById("formLogin")

formRegistro.addEventListener("submit", (event) => {
    event.preventDefault();
})

formLogin.addEventListener("submit", (event) => {
    event.preventDefault();
})

document.addEventListener('click', e => {
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active')
    }
});