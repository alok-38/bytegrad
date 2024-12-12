const textareaEl = document.querySelector('.textarea');
const wordSpanEl = document.querySelector('.stat__number--words');
const charSpanEl = document.querySelector('.stat__number--characters');
const twitterSpanEl = document.querySelector('.stat__number--twitter');
const facebookSpanEl = document.querySelector('.stat__number--facebook');

// Function to count words
function countWords(textInput) {
    const words = textInput.trim().split(/\s+/);
    wordSpanEl.textContent = words.filter(word => word.length > 0).length;
}

// Function to count characters
function countChars(textInput) {
    const numberOfChars = textInput.length;
    charSpanEl.textContent = numberOfChars;
}

// Function to count remaining twitter chars
function countRemainingChars() {
    const currentLimit = parseInt(twitterSpanEl.textContent, 10);
    const textInput = textareaEl.value;
    const numberOfChars = textInput.length;
    const charsLeft = currentLimit - numberOfChars;
    twitterSpanEl.textContent = charsLeft;
}

// Main function to handle text analytics
function textAnalytics() {
    const textInput = textareaEl.value;
    countWords(textInput);
    countChars(textInput);
    countRemainingChars();  // Call to update remaining characters as well
}

// Add event listener to update word and character counts
textareaEl.addEventListener('input', textAnalytics);
