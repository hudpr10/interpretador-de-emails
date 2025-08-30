import {
  showFileExtensionError,
  showMinCaracterErro,
} from "./showInputError.js";
import { setLoading } from "./loading.js";
import { apiPostJson, apiPostFile } from "./api.js";

// Input de Texto
const textInput = document.querySelector("#text-input");
textInput.addEventListener("input", (e) => {
  if (e.inputType === "insertLineBreak") {
    if (textInput.value.length >= 10) {
      apiPostJson(textInput.value);
      setLoading();
    } else {
      showMinCaracterErro();
    }
  }
});

const textInputButton = document.querySelector("#input-button");
textInputButton.addEventListener("click", () => {
  if (textInput.value.length >= 10) {
    apiPostJson(textInput.value);
    setLoading();
  } else {
    showMinCaracterErro();
  }
});

const archiveLabel = document.querySelector("#archive-label");
const archiveImg = document.querySelector("#archive-img");

// Input de Arquivo
const fileInput = document.querySelector("#file-input");
fileInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (file.type === "application/pdf" || file.type === "text/plain") {
    apiPostFile(file);
    setLoading();
  } else {
    archiveLabel.innerHTML = file.name;
    archiveImg.setAttribute("src", "./assets/icons/x-circle.svg");
    showFileExtensionError(file);
  }
});
