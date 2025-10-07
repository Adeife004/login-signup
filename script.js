let formsWrapper = document.getElementById("formsWrapper");
let goToLogin = document.getElementById("goToLogin");
let goToSignup = document.getElementById("goToSignup");

goToLogin.addEventListener("click", () => {
    formsWrapper.classList.add("slide-active");
});

goToSignup.addEventListener("click", () => {
    formsWrapper.classList.remove("slide-active");
});