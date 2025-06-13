function showTab(tabName) {
  // Get all tab content elements
  const tabContents = document.querySelectorAll(".tab-content");
  // Get all tab button elements
  const tabButtons = document.querySelectorAll(".tab");

  // Hide all tab content
  tabContents.forEach((content) => {
    content.classList.remove("active");
  });

  // Remove active class from all tab buttons
  tabButtons.forEach((button) => {
    button.classList.remove("active");
  });

  // Show the selected tab content
  const selectedTab = document.getElementById(tabName);
  if (selectedTab) {
    selectedTab.classList.add("active");
  }

  // Add active class to the clicked button
  const clickedButton = e.target;
  if (clickedButton) {
    clickedButton.classList.add("active");
  }
}
