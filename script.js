const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const audioPlayer = document.getElementById('audioPlayer');
yesBtn.addEventListener("click", () => {
  question.innerHTML = "To cung yeu cau nhiuuu hí hí 😘";
  gif.src =
    "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmp3aWNlNDFjam1iN2NrdjZ5cnJmMnR0b21kN281YTE3bXpiNXVuYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l4pTdcifPZLpDjL1e/giphy.gif";
  audioPlayer.play();
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
