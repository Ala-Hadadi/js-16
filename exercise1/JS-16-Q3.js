// ? Qustion-3:Write a code to close message box when close button clicked :
// hint: watch help.mp4
//! answer

const box = document.querySelector(".message");
const buttonC = document.querySelector(".ri-close-line");

buttonC.addEventListener("click", function () {
  box.style.display = "none";
});
