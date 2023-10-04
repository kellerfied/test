// Wait for the HTML document to be fully loaded before running JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Your JavaScript code goes here
    
    // Example: Change the text of an element with the id "exampleElement"
    var exampleElement = document.getElementById('exampleElement');
    if (exampleElement) {
      exampleElement.textContent = 'Hello, World!';
    }
    
    // Add event listeners or other functionality as needed
  });
  