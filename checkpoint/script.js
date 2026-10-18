"use strict";

const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");
const portraitImage = document.querySelector(".portrait img");
const portraitFallback = document.querySelector(".portrait-fallback");
const currentYear = document.querySelector("#current-year");

if (currentYear) {
  currentYear.textContent = String(new Date().getFullYear());
}

function closeMenu() {
  if (!menuToggle || !siteNav) {
    return;
  }

  menuToggle.setAttribute("aria-expanded", "false");
  siteNav.classList.remove("is-open");
}

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    siteNav.classList.toggle("is-open", !isExpanded);
  });

  siteNav.addEventListener("click", (event) => {
    if (event.target instanceof Element && event.target.closest("a")) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });
}

function showPortraitFallback() {
  if (!portraitImage || !portraitFallback) {
    return;
  }

  portraitImage.hidden = true;
  portraitFallback.classList.add("is-visible");
}

if (portraitImage && portraitFallback) {
  portraitImage.addEventListener("error", showPortraitFallback);

  if (portraitImage.complete && portraitImage.naturalWidth === 0) {
    showPortraitFallback();
  }
}
