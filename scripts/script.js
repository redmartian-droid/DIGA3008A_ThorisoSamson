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

// Highlight current page's link in navbar
document.addEventListener("DOMContentLoaded", () => {
  const currentPath = window.location.pathname.replace(/\/$/, "");
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
    const linkPath = new URL(link.href).pathname.replace(/\/$/, "");
    if (linkPath === currentPath) {
      link.classList.add("nav-current");
    }
  });
});

// Background and heading color change on scroll
const changeBackgroundColor = () => {
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;

  // Define section colors and heading styles
  const sectionStyles = [
    {
      selector: ".blogs",
      backgroundColor: "#000000",
      headingColor: "#ffffff",
    },
  ];

  let currentBackgroundColor = "#c1ff72"; // Default Background Color
  let currentHeadingColor = ""; // Default Background Heading Color

  sectionStyles.forEach(({ selector, backgroundColor, headingColor }) => {
    const section = document.querySelector(selector);
    if (section) {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (
        scrollPosition >= sectionTop - 100 &&
        scrollPosition < sectionTop + sectionHeight - 100
      ) {
        currentBackgroundColor = backgroundColor;
        currentHeadingColor = headingColor;

        // Change h2 color inside this section
        const headings = section.querySelectorAll("h2");
        headings.forEach((h2) => {
          h2.style.color = headingColor;
        });
      } else {
        // Reset h2 color
        const headings = section.querySelectorAll("h2");
        headings.forEach((h2) => {
          h2.style.color = "";
        });
      }
    }
  });

  // Apply background color
  document.body.style.backgroundColor = currentBackgroundColor;
};

// Scroll and load triggers
window.addEventListener("scroll", changeBackgroundColor);
document.addEventListener("DOMContentLoaded", changeBackgroundColor);
