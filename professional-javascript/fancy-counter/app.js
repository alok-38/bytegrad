const h1Element = document.querySelector('.counter__title');
const spanElement = document.querySelector('.counter__value');
const resetButton = document.querySelector('.counter__reset-button');
const decreaseButton = document.querySelector('.counter__button--decrease');
const increaseButton = document.querySelector('.counter__button--increase');

// Global variable
let count = 0;
// Initial display
spanElement.textContent = count;

const decreaseCount = () => {
	count -= 1;
	count = parseInt(count); // Parse count to an integer
	if (count === 0) {
		spanElement.textContent = count;
		return;
	}
	spanElement.textContent = count;
}

const resetCount = () => {
	count = 0;
	spanElement.textContent = count;
}

const increaseCount = () => {
	count += 1;
	count = parseInt(count); // Parse count to an integer
	spanElement.textContent = count;
}

decreaseButton.addEventListener('click', decreaseCount);
resetButton.addEventListener('click', resetCount);
increaseButton.addEventListener('click', increaseCount);
