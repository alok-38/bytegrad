const mainEl = document.querySelector('main');
const h1El = document.querySelector('h1');
let spanEl = document.querySelector('span');
const resetBtn = document.querySelector('.counter__reset-button');
// Select both buttons by their class names
const buttons = document.querySelectorAll('.counter__button');
let h1TextContent = h1El.textContent;

// Initialize count
let count = 0;

// Function to update the count
const updateCountDisplay = () => {
    spanEl.textContent = count;
};

// Function to handle incrementing and decrementing
const handleCountChange = (type) => {
    if (type === 'increment') {
        // Prevent incrementing beyond 5
        if (count < 5) {
            count++;
            if (count === 5) {
                h1El.textContent = "Please subscribe to increase count!";
                h1El.style.width = "100%";
                mainEl.style.opacity = ".6";
            }
        }
    } else if (type === 'decrement') {
        if (count === 5) {
            // If count is 5, just decrement to 4
            count--;
            h1El.textContent = h1TextContent; // Reset the message when count goes below 5
            h1El.style.width = "auto"; // Reset width
            mainEl.style.opacity = "1"; // Reset opacity
        } else if (count > 0) {
            // Decrement the count normally if it's greater than 0
            count--;
        }
    }
    updateCountDisplay(); // Update the displayed count
};

// Add keydown event listener
document.addEventListener("keydown", (event) => {
    // Check if count is 5 and disable both space and up-arrow keys
    if (count === 5) {
        if (event.key === " " || event.key === "ArrowUp") {
            event.preventDefault(); // Prevent the default behavior
            return;
        }
    }

    // Space bar or up-arrow key increments (if count is less than 5)
    if ((event.key === " " || event.key === "ArrowUp") && count < 5) {
        handleCountChange('increment');
    }
    // Down-arrow key decrements
    else if (event.key === "ArrowDown") {
        handleCountChange('decrement');
    }
});

// Add event listeners for button clicks
buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        // Check the data-action attribute to decide whether to increment or decrement
        const action = event.target.closest('button').dataset.action;  // Fix: Get the correct data-action from the button
        if (action === "increment" && count < 5) {
            handleCountChange('increment');
        } else if (action === "decrement") {
            handleCountChange('decrement');
        }
    });
});

// Optional: Reset button functionality
resetBtn.addEventListener('click', () => {
    count = 0;
    h1El.textContent = h1TextContent; // Reset the message
    h1El.style.width = "auto";
    mainEl.style.opacity = "1";
    updateCountDisplay(); // Reset the count display
});
