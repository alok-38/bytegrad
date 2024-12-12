const mainEl = document.querySelector('main');
const h1El = document.querySelector('h1');
let spanEl = document.querySelector('span');
const resetBtn = document.querySelector('.counter__reset-button');
// Select both buttons by their class names
const buttons = document.querySelectorAll('.counter__button');
let h1TextContent = h1El.textContent;  // Original h1 text
const incrementButton = document.querySelector('.counter__button--increase');
const decrementButton = document.querySelector('.counter__button--decrease');

let count = 0;

const incrementAndDecrement = (event) => {
    const button = event.target.closest('button');


    // Handle increment button
    if (button.dataset.action === 'increment') {
        ++count;
        if (count === 5) {
            h1El.textContent = "Count limit reached! Please subscribe.";
            h1El.style.width = "100%";
            incrementButton.disabled = true;
            incrementButton.blur();
        } else {
            h1El.textContent = h1TextContent; // Reset to original text when below 5
            incrementButton.disabled = false; // Enable increment button if count is less than 5
        }
    }

    // Handle decrement button
    else if (button.dataset.action === 'decrement') {
        --count;
        if (count < 5) {
            h1El.textContent = h1TextContent; // Restore original text when count is less than 5
            incrementButton.disabled = false; // Re-enable increment button when count is less than 5
        }
    }

    // Update the counter display
    spanEl.textContent = count;

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
    if (count === 5 || count === 4 || count === 3 || count === 2 || count === 1 || count === 0) {
        incrementButton.disabled = false;
        decrementButton.disabled = true;
        spanEl.textContent = count;
    } else if (count === 0) {
        decrementButton.disabled = true;
    }
    

    // Reset h1 text content when count is reset to 0
    h1El.textContent = h1TextContent; // Restore original h1 text
    h1El.style.width = ""; // Reset any style modifications
};

buttons.forEach(button => {
    button.addEventListener('click', incrementAndDecrement);
});

resetBtn.addEventListener('click', resetCounter);
