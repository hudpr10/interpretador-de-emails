import { finishLoading } from "./loading.js";

const classification = document.querySelector(".classification-text");
const explanation = document.querySelector(".explanation-text");
const reply = document.querySelector(".reply-text");
const cards = document.querySelectorAll(".card");

function generateCardsAfterEmailConclusion(
  classificationValue,
  explanationValue,
  replyValue
) {
  if (classificationValue === "Improdutivo") {
    for (let i = 0; i < cards.length; i++) {
      cards[i].classList.add("card-unproductive");
    }
  }

  classification.innerHTML = classificationValue;
  explanation.innerHTML = explanationValue;
  reply.innerHTML = replyValue;

  finishLoading();
}

export default generateCardsAfterEmailConclusion;
