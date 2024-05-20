// Get references to the HTML elements
const textBox = document.getElementById("textBox");
const toKilometres = document.getElementById("toKilometres");
const toMiles = document.getElementById("toMiles");
const result = document.getElementById("result");
let dist;  // Variable to store the distance value

// Function to convert distance based on selected unit

function convert() {
    if (toMiles.checked) {    
        dist = Number(textBox.value);  
        dist = dist * 5 / 8;  // Convert kilometres to miles
        result.textContent = dist.toFixed(2) + " Miles";  

    } else if (toKilometres.checked) {
        dist = Number(textBox.value); 
        dist = dist * 8 / 5;  // Convert miles to kilometres
        result.textContent = dist.toFixed(2) + " km"; 

    } else {
        // If no conversion option is selected
        result.textContent = "Select a unit now";  // Prompt to select a unit
    }
}
