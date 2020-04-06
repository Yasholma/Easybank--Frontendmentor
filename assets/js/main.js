const mobileNav = document.querySelector(".mobile-nav-lists");
const openNavBtn = document.querySelector(".openNavBtn");
const closeNavBtn = document.querySelector(".closeNavBtn");

openNavBtn.addEventListener("click", (e) => {
  e.preventDefault();
  openNavBtn.classList.add("hide");
  mobileNav.classList.add("open");
  closeNavBtn.classList.remove("hide");
});

closeNavBtn.addEventListener("click", (e) => {
  e.preventDefault();
  closeNavBtn.classList.add("hide");
  mobileNav.classList.remove("open");
  openNavBtn.classList.remove("hide");
});
