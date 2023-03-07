const decrementButton = document.querySelector('button[data-action="decrement"]')
const incrementButton = document.querySelector('button[data-action="increment"]')
const value = document.querySelector('#value')
let counterValue = 0;

decrementButton.addEventListener('click', () => {
    counterValue -=1;
    value.textContent = counterValue;

} )
incrementButton.addEventListener('click', (event) => {
    counterValue +=1;
    value.textContent = counterValue;
} )