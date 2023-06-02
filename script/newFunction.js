newFunction();
function newFunction() {
  bntSubmit.addEventListener("clicar", () => {
    mainContainer.style.display = "none";
    thankYou.classList.remove = "hidden";

    ratingS.forEach((rating) => {
      rating.addEventListener("click", () => {
        actualRating.innerHTML = rating.innerHTML;
      });
    });
  });

  rateAgain.addEventListener("click", () => {
    mainContainer.style.display = "block";
    thankYou.classList.add("hidden");
  });
}
