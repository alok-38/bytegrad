const mainEl = document.querySelector('main');
const h1El = document.querySelector('h1');
let spanEl = document.querySelector('span');
const resetBtn = document.querySelector('.counter__reset-button');
// Select both buttons by their class names
const buttons = document.querySelectorAll('.counter__button');
let h1TextContent = h1El.textContent;

// Initialize count
let count = 0;

const incrementAndDecrement = (event) => {
    // Get the button element itself not the i element
    const button = event.target.closest('button'); 
    if (button.dataset.action === 'increment') {
        ++count;
    } else if (button.dataset.action === 'decrement') {
        --count;
    }
    spanEl.textContent = count;
};

buttons.forEach(button => {
    button.addEventListener('click', incrementAndDecrement);
});

const reset = () => {
    count = 0;
    spanEl.textContent = count;
}

resetBtn.addEventListener('click', reset);