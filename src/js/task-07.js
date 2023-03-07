const fontSizeControlInput = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
fontSizeControlInput.addEventListener("input", handleInputChange)
function handleInputChange(event){
    text.style.fontSize = `${fontSizeControlInput.value}px`;
}