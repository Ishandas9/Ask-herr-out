// script.js
const askButton = document.getElementById('askButton');
const messageContainer = document.getElementById('messageContainer');
const messageElement = document.getElementById('message');

const messages = [
  "Heyy, I was wondering if you'd like to grab coffee with me sometime?",
  "Our music taste was a 98%, when can we go for Dilli Darshan to figure the rest 2% out? :P",
  "I really enjoy talking with you and was hoping we could go out to dinner together.",
  "Would you be interested in going on a date with me this weekend?",
  "I'd love to take you out to a movie if you're free this Friday night.",
  "I've been wanting to ask you out for a while now. Would you be up for it?"
];

function generateRandomMessage() {
  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
}

askButton.addEventListener('click', () => {
  const message = generateRandomMessage();
  messageElement.textContent = message;
  messageContainer.classList.remove('hidden');
});