/*
  Name: Ozzy Birge
  File Name: script.js
  Date: June 19, 2026
*/

// Hamburger menu function
function hamburger() {
  var menuLinks = document.getElementById("menu-links");

  if (menuLinks.style.display === "block") {
    menuLinks.style.display = "none";
  } else {
    menuLinks.style.display = "block";
  }
}
