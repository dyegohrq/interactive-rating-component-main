const mainContainer = document.querySelector(".main-container")
const thankContainer = document.querySelector(".thank-container")
const submitButton = document.getElementById("submit-button")
const rateButton = document.getElementById("rate-button")
const ratingBnt = document.querySelectorAll(".bnt")
const actualRating = document.getElementById("rating")

submitButton.addEventListener("click", () => {
    mainContainer.style.display = "none"
    thankContainer.classList.remove("hidden")

    ratingBnt.forEach((ratings) => {
        ratings.addEventListener("click", () => {
            actualRating.innerHTML = ratings.innerHTML
        })
    })
})

 

rateButton.addEventListener("click", () => {
    mainContainer.style.display = "block"
    thankContainer.classList.add("hidden")
})


















