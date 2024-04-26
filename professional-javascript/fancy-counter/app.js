const elements = {
	h1: document.querySelector('.counter__title'),
	span: document.querySelector('.counter__value'),
	resetButton: document.querySelector('.counter__reset-button'),
	decreaseButton: document.querySelector('.counter__button--decrease'),
	increaseButton: document.querySelector('.counter__button--increase')
};

let count = 0;
const initialH1Text = elements.h1.textContent;

const updateButtonState = () => {
	elements.decreaseButton.disabled = count === 0;
	elements.increaseButton.disabled = count === 5;
};

const updateCounter = () => {
	elements.span.textContent = count;
	if (count === 5) {
		elements.h1.innerHTML = 'Limit! Buy <b>Pro</b> for >5';
		elements.increaseButton.disabled = true;
	} else if (count === 4) {
		elements.h1.innerHTML = initialH1Text;
	}
	updateButtonState();
};

const decreaseCount = () => {
	if (count > 0) {
		count -= 1;
		updateCounter();
	}
};

const resetCount = () => {
	count = 0;
	elements.h1.innerHTML = initialH1Text;
	updateCounter();
	updateButtonState();
};

const increaseCount = () => {
	if (count < 5) {
		count += 1;
		updateCounter();
	}
};

const handleKeyDown = (event) => {
	if (event.key === ' ' || event.key === 'ArrowUp') {
		increaseCount();
	} else if (event.key === 'ArrowDown') {
		decreaseCount();
	} else if (event.key === 'Escape') {
		resetCount();
	}
	updateButtonState();
};

document.addEventListener('keydown', handleKeyDown);
elements.decreaseButton.addEventListener('click', decreaseCount);
elements.resetButton.addEventListener('click', resetCount);
elements.increaseButton.addEventListener('click', increaseCount);
