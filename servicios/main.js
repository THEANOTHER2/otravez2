const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});

// about container
ScrollReveal().reveal(".conocenos-carousel", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".conocenos-text-content .conocenos-subtitle", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".conocenos-text-content .conocenos-title", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".conocenos-text-content .conocenos-description", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".conocenos-action-button", {
  ...scrollRevealOption,
  delay: 2000,
});

// room container
ScrollReveal().reveal(".room__card", {
  ...scrollRevealOption,
  interval: 500,
});

// service container
ScrollReveal().reveal(".service__list li", {
  ...scrollRevealOption,
  interval: 500,
  origin: "right",
});
