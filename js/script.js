// console.log(window.location.pathname); // too see which page we are in as .html

const global = {
  currentPage: window.location.pathname,
};

// console.log(global.currentPage);

// Highlight Active Link
function highlightActiveLink() {
  const link = document.querySelectorAll(".nav-link");

  switch (global.currentPage) {
    case "/":
    case "/index.html":
      link[0].classList.add("active");
      break;
    case "/shows.html":
      link[1].classList.add("active");
      break;
  }
}

// Init App
function init() {
  highlightActiveLink();
  switch (global.currentPage) {
    case "/":
    case "/index.html":
      console.log("Home");
      break;
    case "/shows.html":
      console.log("Shows");
      break;
    case "/movie-details.html":
      console.log("Movie Details");
      break;
    case "/tv-details.html":
      console.log("TV Show Details");
      break;
    case "/search.html":
      console.log("Search");
      break;
  }
}

document.addEventListener("DOMContentLoaded", init);
