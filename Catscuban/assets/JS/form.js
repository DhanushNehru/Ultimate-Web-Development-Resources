const container = document.querySelector(".form-container");
const password_field = document.querySelectorAll(".password");
const signup = document.querySelector(".signup-link");
const login = document.querySelector(".login-link");
const btn = document.querySelector("#show");
const close_btn_one = document.querySelector(".close");
const close_btn_two = document.querySelector(".close_two");



// Form transition
signup.addEventListener("click", () => {
    container.classList.add("active");
});

login.addEventListener("click", () => {
    container.classList.remove("active");
});


//Form working

btn.addEventListener("click", function()
{
    container.classList.add("view");
});

close_btn_one.addEventListener("click", function()
{
    container.classList.remove("view");
});

close_btn_two.addEventListener("click", function()
{
    container.classList.remove("view");
});




