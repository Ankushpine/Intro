const text = document.querySelector(".first-text");

const textload = () => {
  setTimeout(() => {
    text.textContent = "Hey Every One";
  }, 0);
  setTimeout(() => {
    text.textContent = "I am Ankush Pine";
  }, 4000);
  setTimeout(() => {
    text.textContent = "I am a Full Stack Web Developer";
  }, 8000);
};

textload();

setInterval(textload, 12000);
