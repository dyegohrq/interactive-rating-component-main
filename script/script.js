const mainContainer = document.querySelector('.main-container')
const ThankYouContainer = document.querySelectorAll('.ThankYou')
const assessment = document.querySelectorAll('.bnt')
const submitButton = document.getElementById('submit-rating')
const rateAgain = document.getElementById('rate-again')
const ratingSpan = document.getElementById('ratingS')

submitButton.addEventListener("click", () => {
    mainContainer.style.display = "none"
    ThankYouContainer.classList.remove("hidden")
})

rateAgain.addEventListener("click")














