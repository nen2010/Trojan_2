let messageIndex = 0;

const messages = [
  "Are you sure? 🥺",
  "Think again 😢",
  "Pleaseee 😭",
  "My heart 💔",
  "Don't do this 😳",
  "Say yes already 😤",
  "You love me 😏"
];

function handleNoClick() {
  const noButton = document.querySelector(".no-button");
  const yesButton = document.querySelector(".yes-button");

  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;

  const currentSize = parseFloat(
    window.getComputedStyle(yesButton).fontSize
  );

  yesButton.style.fontSize = `${currentSize * 1.25}px`;
}

function handleYesClick() {
  window.location.href = "yes_page.html";
}
