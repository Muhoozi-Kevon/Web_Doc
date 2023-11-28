document.addEventListener("DOMContentLoaded", function() {
  // Hide the loading overlay after the content has loaded
  setTimeout(function() {
    document.querySelector(".loading-overlay").style.display = "none";
  }, 2000); // Adjust the timeout duration (in milliseconds) as needed
});
