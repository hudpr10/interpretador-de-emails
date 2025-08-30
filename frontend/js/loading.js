const loadingContainer = document.querySelector(".loading-container");
const formContainer = document.querySelector(".form-container");
const anwserContainer = document.querySelector(".anwser-container");

function setLoading() {
  loadingContainer.classList.remove("invisible");
  formContainer.classList.add("invisible");
}

function finishLoading() {
  loadingContainer.classList.add("invisible");
  anwserContainer.classList.remove("invisible");
}

export { setLoading, finishLoading };
