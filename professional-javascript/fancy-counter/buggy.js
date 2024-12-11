const mainEl = document.querySelector('main');
const h1El = document.querySelector('h1');
let spanEl = document.querySelector('span');
const resetBtn = document.querySelector('.counter__reset-button');
// Select both buttons by their class names
const buttons = document.querySelectorAll('.counter__button');
let h1TextContent = h1El.textContent;

let count = 0;

const incrementAndDecrement = (event) => {
    const button = event.target.closest('button');

    // Handle increment button
    if (button.dataset.action === 'increment') {
        ++count;
    }
    // Handle decrement button
    else if (button.dataset.action === 'decrement') {
        --count;
    }

    // Update the counter display
    spanEl.textContent = count;

    // Get the decrement button
    const decrementButton = document.querySelector('.counter__button--decrease');

    // Disable the decrement button if count is 0
    if (count === 0) {
        decrementButton.disabled = true;
        decrementButton.blur();  // Removes focus from the button
    } else {
        decrementButton.disabled = false;  // Re-enable when count is above 0
    }
};

// Reset function (resets the count to 0 and disables the decrement button)
const resetCounter = () => {
    count = 0;
    spanEl.textContent = count;

    // Disable decrement button when count is reset to 0
    const decrementButton = document.querySelector('.counter__button--decrease');
    decrementButton.disabled = true;
    decrementButton.blur();  // Removes focus from the button
};

buttons.forEach(button => {
    button.addEventListener('click', incrementAndDecrement);
});

resetBtn.addEventListener('click', resetCounter);
