function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Add an event listener for the scroll event
window.addEventListener("scroll", function () {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  // Check if the menu is open
  if (menu.classList.contains("open")) {
    // Close the menu
    menu.classList.remove("open");
    icon.classList.remove("open");
  }
});

