// -- manipulating HTML and CSS --
const headingEl = document.querySelector('.heading');

headingEl.innerHTML = `Hello <span class="heading--big">everyone</span>!`;

headingEl.insertAdjacentHTML('beforebegin', `Hello <span class="heading--big">everyone</span>!`);

headingEl.style.fontSize = '55px';

headingEl.classList.add('heading--big');

// -- events and functions for handling events (also called "event handlers") --

const clickHandler = () => {
	headingEl.style.color = 'red';
	//console.log('changed color');
}

headingEl.addEventListener('click', clickHandler);