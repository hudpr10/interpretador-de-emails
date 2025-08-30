const cards = document.querySelectorAll(".card");
const notification = document.querySelector(".notification");
let timeout = "";

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", () => {
    clearTimeout(timeout);
    const textToCopy = cards[i].childNodes[3].textContent;
    navigator.clipboard.writeText(textToCopy);

    notification.style.opacity = 1;
    timeout = setTimeout(hideNotification, 3000);
  });
}

function hideNotification() {
  notification.style.opacity = 0;
}
