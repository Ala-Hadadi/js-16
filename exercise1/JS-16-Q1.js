// ? Question-1:Write a code that, upon clicking the heart icon (.cards__card__img__icon i), changes its color and increments the counter (#counter) displayed alongside it.
// hint: watch help.mp4
// !Answer:

const heart = document.querySelector(".cards__card__img__icon i");
const counter = document.getElementById("counter");

heart.addEventListener("click", function () {
    heart.style.color = "red";
    counter.textContent = parseInt(counter.textContent) + 1;
});
