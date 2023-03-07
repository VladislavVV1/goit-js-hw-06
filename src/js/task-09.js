function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const colorChangeButton = document.querySelector(".change-color");
const backgroundColorValueOutput = document.querySelector(".color");

colorChangeButton.addEventListener("click", handleButtonClick);
function handleButtonClick(){
  const backgroundColorValue = getRandomHexColor();
  document.body.style.backgroundColor = backgroundColorValue;
  backgroundColorValueOutput.textContent = backgroundColorValue;
};
