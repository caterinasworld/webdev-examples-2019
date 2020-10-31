// whenever the user click the 'copy' button, copy the user input to the output area

// option #1
// fetch JavaScript objects representing specific elements in the DOM
let userInput = document.querySelector('#input');
let copy = document.querySelector('#copy')
let output =  document.querySelector('#output');

// add an event listener on the target element
copy.addEventListener('click', handleClick);

// callback function to handle event
function handleClick(event) {
    output.textContent = userInput.value;
}

// option #2
// document.getElementById('copy').onclick = () => {

//     let userInput = document.getElementById('input');
//     let output =  document.getElementById('output');

//     output.textContent = userInput.value;
// };

// option #3
// document.getElementById('copy').onclick = () => {

//     document.getElementById('output').textContent = document.getElementById('input').value;
// };