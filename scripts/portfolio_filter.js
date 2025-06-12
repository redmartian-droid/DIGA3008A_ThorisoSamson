// Select and filter content functionality
const filterButtons = document.querySelectorAll(".filter-buttons button");
const filterableContent = document.querySelectorAll(
  ".filterable-content .portfolio-item"
);

// Define filter function
const filterContent = (e) => {
  // Remove active class from currently active button
  document.querySelector(".filter-buttons .active")?.classList.remove("active");
  // Add active class to clicked button
  e.target.classList.add("active");

  const filterName = e.target.dataset.name;

  // Show or hide items based on the filter
  filterableContent.forEach((portfolioItem) => {
    if (filterName === "all" || portfolioItem.dataset.name === filterName) {
      portfolioItem.classList.remove("hide");
    } else {
      portfolioItem.classList.add("hide");
    }
  });
};

// Show all content on initial load
document.addEventListener("DOMContentLoaded", () => {
  filterableContent.forEach((portfolioItem) => {
    portfolioItem.classList.remove("hide");
  });
});

// Add click event listener to filter buttons
filterButtons.forEach((button) =>
  button.addEventListener("click", filterContent)
);
