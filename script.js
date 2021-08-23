const menuBars = document.querySelector("#menu-bars");
const overlay = document.querySelector("#overlay");
const nav1 = document.querySelector("#nav1");
const nav2 = document.querySelector("#nav2");
const nav3 = document.querySelector("#nav3");
const nav4 = document.querySelector("#nav4");
const nav5 = document.querySelector("#nav5");

// Nav toggler
const toggleNav = () => {
  // Toggle: Menu Bars Open/CLosed
  menuBars.classList.toggle("change");
  // Toggle: Menu Active
  overlay.classList.toggle("overlay-active");
  if (overlay.classList.contains("overlay-active")) {
    // Animate In the Overlay
    overlay.classList.add("overlay-slide-right");
  } else {
    // Animate Out the Overlay
    overlay.classList.add("overlay-slide-left");
  }
};

// Add event listeners
menuBars.addEventListener("click", toggleNav);
nav1.addEventListener("click", toggleNav);
nav2.addEventListener("click", toggleNav);
nav3.addEventListener("click", toggleNav);
nav4.addEventListener("click", toggleNav);
nav5.addEventListener("click", toggleNav);
