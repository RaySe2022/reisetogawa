console.log("hyperlink.js is running");

// Rest of your code...

// Get a reference to the span element
var project = document.getElementById("project_one");

// Define the URL you want to navigate to
var link = "project_hology.html";

// Add a click event listener to the span
project.addEventListener("click", function() {
    // Navigate to the specified URL when the span is clicked
    console.log("clicked");
    window.location.href = "project_hology.html";
});


