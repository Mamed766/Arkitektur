const hamburger = document.querySelector(".hamburger");
const navi = document.querySelector(".container__navi--grid__second");

hamburger.addEventListener("click", () => {
  navi.classList.toggle("active");
});
