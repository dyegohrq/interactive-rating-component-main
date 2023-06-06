const mainContainer = document.querySelector(".main-container")
const thankContainer = document.querySelector(".thank-container")
const submitButton = document.getElementById("submit-button")
const rateButton = document.getElementById("rate-button")

submitButton.addEventListener("click", () => {
    mainContainer.style.display = "none"
    thankContainer.classList.remove("hidden")

    
})

rateButton.addEventListener("click", () => {
    mainContainer.style.display = "block"
    thankContainer.classList.add("hidden")
})


















