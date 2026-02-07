"use strict";

const tontonGifs = [
  "doggo-corgi.gif",
  "are u sure.gif",
  "jiahao.gif",
  "dont.gif",
  "heart.gif",
  "flight.gif",
];

const title = document.querySelector(".title");
const btnContainer = document.querySelector(".buttons");
const yesBtn = document.querySelector(".btn-yes");
const noBtn = document.querySelector(".btn-no");
const img = document.querySelector(".img");

const MAX_IMAGES = 5;
let play = true;
let noCount = 0;
let noButtonSize = 1;
let yesButtonSize = 1;

yesBtn.addEventListener("click", () => {
  title.innerHTML = "Yeah! I Love You too!!                                                                                Tonfern🤍家豪 ";
  btnContainer.classList.add("hidden");
  changeImage("yes");
});

noBtn.addEventListener("click", () => {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    shrinkNoButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) play = false;
  }
});

function resizeYesButton() {
  yesButtonSize *= 1.2;
  yesBtn.style.transform = `scale(${yesButtonSize})`;
}

function shrinkNoButton() {
  noButtonSize *= 0.90;
  noBtn.style.transform = `scale(${noButtonSize})`;
}

function generateMessage(noCount) {
  const messages = [
    "No 😔",
    "Are you sure? 🥺",
    "家豪!!!!!",
    "Don't touch me 😡",
    "You're breaking my little heart 💔",
    "I will cancel my flight!!",
  ];
  return messages[Math.min(noCount, messages.length - 1)];
}

function changeImage(image) {
  img.src =
    image === "yes"
      ? "happy-heart.gif"
      : tontonGifs [image];
}

function updateNoButtonText() {
  noBtn.innerHTML = generateMessage(noCount);
}
