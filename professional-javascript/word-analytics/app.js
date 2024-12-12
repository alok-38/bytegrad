const textareaEl = document.querySelector('.textarea');
const wordSpanEl = document.querySelector('.stat__number--words');
const charSpanEl = document.querySelector('.stat__number--characters');
const twitterSpanEl = document.querySelector('.stat__number--twitter');
const facebookSpanEl = document.querySelector('.stat__number--facebook');

const textAnalytics = () => {
    const textInput = textareaEl.value;
    console.log(textInput);
}

textareaEl.addEventListener('input', textAnalytics);