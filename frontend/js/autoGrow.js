function autoGrow(element) {
  element.style.height = "30px";
  element.style.height = element.scrollHeight + "px";

  if (element.value === "") {
    element.style.height = "30px";
  }
}
