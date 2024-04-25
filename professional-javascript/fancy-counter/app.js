const h1Element = document.querySelector('.counter__title');
const spanElement = document.querySelector('.counter__value');
const resetButton = document.querySelector('.counter__reset-button');
const decreaseButton = document.querySelector('.counter__button--decrease');
const increaseButton = document.querySelector('.counter__button--increase');

// Global variable
let count = 0;
// Initial display
spanElement.textContent = count;
// Initial h1 display
const h1ElementDisplay = h1Element.textContent;

const updateDecreaseButtonState = () => {
	decreaseButton.disabled = count === 0; // Disable if count is 0
}

const updateIncreaseButtonState = () => {
	increaseButton.disabled = count === 5; // Disable if count is 5
}

const decreaseCount = () => {
	if (count === 0) return;
	count -= 1;
	spanElement.textContent = count;
	if (count === 4) {
		h1Element.innerHTML = h1ElementDisplay;
	}
	// Update the state of the decrease button
	updateDecreaseButtonState();
	// Update the state of the increase button
	updateIncreaseButtonState();
}

const resetCount = () => {
	count = 0;
	spanElement.textContent = count;
	if (count === 0) {
		h1Element.innerHTML = h1ElementDisplay;
	}
	// Reset button states
	updateDecreaseButtonState();
	updateIncreaseButtonState();
}

const increaseCount = () => {
	if (count < 5) {
		count += 1;
		spanElement.textContent = count;
		if (count === 5) {
			h1Element.innerHTML = 'Limit! Buy <b>Pro</b> for >5';
			// Disable the increase button when count reaches 5
			increaseButton.disabled = true;
			return;
		}
	}
	// Update the state of the decrease button
	updateDecreaseButtonState();
}

// Function to handle keydown events
const handleKeyDown = (event) => {
	if (event.key === ' ' || event.key === 'ArrowUp') {
		// If space bar or up arrow key is pressed, increase count
		increaseCount();
	}
};

// Add event listener for keydown events on the document
document.addEventListener('keydown', handleKeyDown);

// Function to handle keydown (down arrow) event
const handleDownArrow = (event) => {
	if (event.key === 'ArrowDown') {
		decreaseCount();
	}
}

// Add event listener for keydown events on the document
document.addEventListener('keydown', handleDownArrow);

// Function to handle keydown events for resetting the count
const handleResetKey = (event) => {
	if (event.key === 'Escape') { // Change the key as per your preference
		resetCount();
	}
};

// Add event listener for keydown events on the document
document.addEventListener('keydown', handleResetKey);

decreaseButton.addEventListener('click', decreaseCount);
resetButton.addEventListener('click', resetCount);
increaseButton.addEventListener('click', increaseCount);
