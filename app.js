let mainNav = document.querySelector(".mainNav");
let buttom = document.querySelector(".btn");
let cambioColor = document.querySelector("#cambioColor");

window.addEventListener("scroll", (e) => {
  let scroll = Math.floor(window.scrollY);

  if (scroll > 100) {
    mainNav.classList.add("navActive");
    buttom.classList.add("botonActive");
    mainNav.classList.remove("bg-dark");

    cambioColor.classList.add("color-show");
  } else {
    mainNav.classList.remove("navActive");
    buttom.classList.remove("botonActive");
    mainNav.classList.add("bg-dark");

    cambioColor.classList.remove("color-show");
  }
});
