/*
  Name: Ozzy Birge
  Date: 2026-06-19
  File: script.js
*/

function enableHamburgerMenu() {
  var menuButton = document.getElementById("menu-toggle");
  var navList = document.getElementById("main-nav-list");

  if (!menuButton || !navList) {
    return;
  }

  menuButton.addEventListener("click", function () {
    var isOpen = navList.classList.toggle("show");
    menuButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth >= 640) {
      navList.classList.remove("show");
      menuButton.setAttribute("aria-expanded", "false");
    }
  });
}

document.addEventListener("DOMContentLoaded", enableHamburgerMenu);
