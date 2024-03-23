// console.log(window.location.pathname); // too see which page we are in as .html

const global = {
  currentPage: window.location.pathname,
};

// console.log(global.currentPage);

async function displayPopularMovies() {
  const { results } = await fetchAPIData("movie/popular"); // if you put {} around results you can get arrays seperated as in {}s
  results.forEach((movie) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
      <a href="movie-details.html?id=${movie.id}">
      ${
        movie.poster_path
          ? `<img
            src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
            class="card-img-top"
            alt="${movie.title}"
          />`
          : `<img
            src="images/no-image.jpg"
            class="card-img-top"
            alt="Movie Title"
          />`
      }
      
      </a>
      <div class="card-body">
        <h5 class="card-title">${movie.title}</h5>
        <p class="card-text">
          <small class="text-muted">Release: ${movie.release_date}</small>
        </p>
      </div>
      `;
  });

  document.querySelector("#popular-movies").appendChild(div);
}

// Fetch data from TMDB API
async function fetchAPIData(endpoint) {
  const API_KEY = "3f6aee75fcb14b83b975444f5a9b4513";
  const API_URL = "https://api.themoviedb.org/3/";

  const response = await fetch(
    `${API_URL}${endpoint}?api_key=${API_KEY}&language=en-US`
  );

  const data = await response.json();

  return data;
}

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
      displayPopularMovies();
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
