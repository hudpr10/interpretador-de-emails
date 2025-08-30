const fileLabelError = document.querySelector("#file-error-label");
const textLabelError = document.querySelector("#text-error-label");

function showFileExtensionError(file) {
  const extension = file.name.split(".")[1];
  fileLabelError.classList.remove("invisible");
  fileLabelError.innerHTML += "." + extension;
}

function showMinCaracterErro() {
  textLabelError.classList.remove("invisible");
}

export { showFileExtensionError, showMinCaracterErro };
