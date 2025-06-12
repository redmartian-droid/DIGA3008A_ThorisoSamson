// Select and filter content functionality
const filterButtons = document.querySelectorAll(".filter-buttons button");
const filterableContent = document.querySelectorAll(
  ".filterable-content .h-entry"
);

// Define filter function
const filterContent = (e) => {
  // Remove active class from currently active button
  document.querySelector(".active").classList.remove("active");
  // Add active class to clicked button
  e.target.classList.add("active");

  // Hide all content first
  filterableContent.forEach((hEntry) => {
    hEntry.classList.add("hide");

    // Check if the content matches the filter
    if (hEntry.dataset.name === e.target.dataset.name) {
      hEntry.classList.remove("hide");
    }
  });
};

// Hide all content except the first essay on initial load
document.addEventListener("DOMContentLoaded", () => {
  filterableContent.forEach((hEntry) => {
    if (hEntry.dataset.name !== "essay-1") {
      hEntry.classList.add("hide");
    }
  });
});

// Add click event listener to filter buttons
filterButtons.forEach((button) =>
  button.addEventListener("click", filterContent)
);
