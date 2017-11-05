let number = prompt("Please enter a number: ");

number = parseFloat(number);

const outputElement = document.querySelector('#output');

outputElement.innerHTML = "Square of " + number + " is " + number * number;

