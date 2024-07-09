const headingElement = document.querySelector(".counter__title");
const appContainer = document.querySelector('.counter');

const spanElement = document.querySelector('.counter__value');

const resetButtonElement = document.querySelector('.counter__reset-button');

const decreaseButtonElement = document.querySelector('.counter__button--decrease');
const increaseButtonElement = document.querySelector('.counter__button--increase');

// Initial counter value
let count = 0;
let headingColor = headingElement.style.color;


const increaseCount = () => {
	count++;
	spanElement.textContent = count;
	if (count >= 5) {
		headingElement.style.color = 'red';
	}
}

increaseButtonElement.addEventListener('click', increaseCount);

const resetCount = () => {
	count = 0;
	spanElement.textContent = count;
	headingElement.style.color = headingColor;
}

resetButtonElement.addEventListener('click', resetCount);

const decreaseCount = () => {

}

decreaseButtonElement.addEventListener('click', decreaseCount);