const menuBars = document.querySelector("#menu-bars");
const overlay = document.querySelector("#overlay");
const nav1 = document.querySelector("#nav-1");
const nav2 = document.querySelector("#nav-2");
const nav3 = document.querySelector("#nav-3");
const nav4 = document.querySelector("#nav-4");
const nav5 = document.querySelector("#nav-5");
const navItems = [nav1, nav2, nav3, nav4, nav5];

// Control NAvigation Animation
const navAnimation = (direction1, direction2) => {
  navItems.forEach((nav, i) => {
    nav.classList.replace(
      `slide-${direction1}-${i + 1}, slide-${direction2}-${i + 1}`
    );
  });
};

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
    navAnimation("out", "in");
  } else {
    // Animate Out the Overlay
    overlay.classList.remove("overlay-slide-right");
    overlay.classList.add("overlay-slide-left");
    // Animate out the nav items
    navAnimation("in", "out");
  }
};

// Add event listeners
menuBars.addEventListener("click", toggleNav);
navItems.forEach((nav) => {
  nav.addEventListener("click", toggleNav);
});
