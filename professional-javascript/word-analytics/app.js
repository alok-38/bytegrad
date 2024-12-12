const textareaEl = document.querySelector('.textarea');
const wordSpanEl = document.querySelector('.stat__number--words');
const charSpanEl = document.querySelector('.stat__number--characters');
const twitterSpanEl = document.querySelector('.stat__number--twitter');
const facebookSpanEl = document.querySelector('.stat__number--facebook');

// Function to count words
function countWords(textInput) {
    // Split the text into words by spaces and filter out any empty strings
    const words = textInput.trim().split(/\s+/);
    console.log("Word count:", words.filter(word => word.length > 0).length);
}

function textAnalytics() {
    const textInput = textareaEl.value;  // Get the current value from the textarea
    countWords(textInput);  // Pass the value to the countWords function
}

// Add an event listener to count words as the user types
textareaEl.addEventListener('input', textAnalytics);
