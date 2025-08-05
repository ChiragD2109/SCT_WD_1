// Wait for the page to fully load
window.addEventListener("load", () => {
  const loading = document.getElementById("loading");
  loading.style.display = "none";
});

// Scroll-based style change
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
