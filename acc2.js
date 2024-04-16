const strelki = document.querySelectorAll(".fa-arrow-down");
const questions = document.querySelectorAll(".savol");
const answers = document.querySelectorAll(".answer");

questions.forEach((question, i) => {
  question.addEventListener("click", (item) => {
    strelki[i].classList.toggle("strelka-active");
    answers[i].classList.toggle("active");
    removeOpen(i);
  });
});

function removeOpen(index1) {
  questions.forEach((item2, index2) => {
    if (index1 != index2) {
      answers[index2].classList.remove("active");
      strelki[index2].classList.remove("strelka-active");
    }
  });
}
