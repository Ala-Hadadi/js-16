// ? Qustion-4:Write a code that changes the background color of the stars when we click on them.
// hint: watch help.mp4
//! answer
const stars = document.querySelectorAll(".rating-box .stars i");

stars.forEach((star) => {
  star.addEventListener("click", function () {
    if (star.style.color === "orange") {
      star.style.color = "#e6e6e6";
    } else {
      star.style.color = "orange";
    }
  });
});
