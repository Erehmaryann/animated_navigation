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
    overlay.classList.remove("overlay-slide-left");
    overlay.classList.add("overlay-slide-right");
    // Animate In the Nav Items
    nav1.classList.remove("slide-out-1");
    nav1.classList.add("slide-in-1");
    nav2.classList.remove("slide-out-2");
    nav2.classList.add("slide-in-2");
    nav3.classList.remove("slide-out-3");
    nav3.classList.add("slide-in-3");
    nav4.classList.remove("slide-out-4");
    nav4.classList.add("slide-in-4");
    nav5.classList.remove("slide-out-5");
    nav5.classList.add("slide-in-5");
  } else {
    // Animate Out the Overlay
    overlay.classList.remove("overlay-slide-right");
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
