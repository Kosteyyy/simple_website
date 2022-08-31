const toggleButton = document.querySelector(".header__burger");
const nav = document.querySelector(".header__nav");
const body = document.querySelector("body");

const toggleMenu = () => {
  toggleButton.classList.toggle("active");
  nav.classList.toggle("active");
  body.classList.toggle("fixed-position");
};

toggleButton.addEventListener("click", toggleMenu);
