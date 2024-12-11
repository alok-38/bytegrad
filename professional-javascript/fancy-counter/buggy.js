let count = 0;

const incrementAndDecrement = (event) => {
    const button = event.target.closest('button');
    if (button.dataset.action === 'increment') {
        ++count;
    } else if (button.dataset.action === 'decrement') {
        --count;
    }
    spanEl.textContent = count;
}

const reset = () => {
    count = 0;
    spanEl.textContent = count;
}

buttons.forEach(button => {
    button.addEventListener('click', incrementAndDecrement);
});

resetBtn.addEventListener('click', reset);
