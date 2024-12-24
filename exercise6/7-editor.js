/*
Look at editor.png, you should create a text editor similar to that.

- The first button removes the last letter when clicked.
- The second button deletes the entire text when clicked.
- The third button bolds the text when clicked.
- The fourth button italicizes the text when clicked.
*/

const firstBtn = document.getElementById("firstBtn");
const secondBtn = document.getElementById("secondBtn");
const thirdBtn = document.getElementById("thirdBtn");
const fourthBtn = document.getElementById("fourthBtn");

firstBtn.addEventListener("click",  () => {
  textArea.value = textArea.value.slice(0, -1);
});

secondBtn.addEventListener("click", () => {
  textArea.value = "";
});

thirdBtn.addEventListener("click", () => {
  textArea.style.fontWeight = "bold";
});

fourthBtn.addEventListener("click", () => {
  textArea.style.fontStyle = "italic";
});
