const textareaElement = document.querySelector('.textarea');
const wordsSpanElement = document.querySelector('.stat__number--words');
const charsSpanElement = document.querySelector('.stat__number--characters');
const twitterStats = document.querySelector('.stat__number--twitter');
const facebookStats = document.querySelector('.stat__number--facebook');

const updateWordCount = () => {
    const text = textareaElement.value.trim();
    // Split text into words
    const words = text.split(/\s+/);
    // Filter out single characters
    const filteredWords = words.filter(word => word.length > 1);
    // Check if there are any words remaining after filtering
    if (filteredWords.length > 0) {
        // Count the number of words
        const wordCount = filteredWords.length;
        // Update word count
        wordsSpanElement.textContent = wordCount;
    } else {
        // If no complete word is found, set word count to 0
        wordsSpanElement.textContent = 0;
    }
};

// Add event listener for input events on textarea
textareaElement.addEventListener('input', updateWordCount);

