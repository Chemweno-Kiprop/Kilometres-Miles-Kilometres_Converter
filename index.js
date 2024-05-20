const textBox = document.getElementById("textBox");
const toKilometres = document.getElementById("toKilometres");
const toMiles = document.getElementById("toMiles");
const result = document.getElementById("result");
let dist;

function convert() {
    if (toMiles.checked) {
        dist = Number(textBox.value);
        dist  = dist*5/8;
        result.textContent = dist.toFixed(1) + "Miles";
    } else if (toKilometres.checked) {
        dist = Number(textBox.value);
        dist = dist *8/5;
        result.textContent = dist.toFixed(2) + "km";
    } else {
        result.textContent = "Select a unit now";
    }
}
