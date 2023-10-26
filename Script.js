const buttons = document.querySelectorAll('#buttons');

// Add click event listeners to each button
buttons.forEach(button => {
  button.addEventListener("click", function(event) {
    buttonClickHandler(event.target.textContent);
  });
});

// Function to handle button click
function buttonClickHandler(buttonText) {
  alert(buttonText + " was clicked!");
}