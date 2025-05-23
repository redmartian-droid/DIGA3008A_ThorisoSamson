// Menu toggle functionality
function toggleMobileMenu(menu) {
  menu.classList.toggle("open");
}

// Back to top button functionality
const backToTopBtn = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Highlight my current page's link in navbar by adding 'nav-current' class
document.addEventListener("DOMContentLoaded", () => {
  const currentPath = window.location.pathname.replace(/\/$/, ""); // remove trailing slash
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
    const linkPath = new URL(link.href).pathname.replace(/\/$/, "");
    if (linkPath === currentPath) {
      link.classList.add("nav-current"); // I can't really figure out why this is not working aside from in my index.html file
    }
  });
});
