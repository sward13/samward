
  // Look for .hamburger
  var hamburger = document.querySelector(".hamburger");
  var menuoverlay = document.querySelector(".menu-overlay");
  // On click
  hamburger.addEventListener("click", function() {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    menuoverlay.classList.toggle("is-active");
    // Do something else, like open/close menu
  });
