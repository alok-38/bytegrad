const mainEl = document.querySelector('main');
const h1El = document.querySelector('h1');
let spanEl = document.querySelector('span');
const resetBtn = document.querySelector('.counter__reset-button');
// Select both buttons by their class names
const buttons = document.querySelectorAll('.counter__button');

// Initialize count
let count = 0;

// Function to update the count
const updateCount = () => {
    spanEl.textContent = count;
}

// Update the displayed count
updateCount();