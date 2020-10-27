// whenever the user click the 'copy' button, copy the user input to the output area

// option #1
document.querySelector('#copy').addEventListener('click', handleClick);

function handleClick(event) {

    let userInput = document.querySelector('#input');
    let output =  document.querySelector('#output');

    output.innerHTML = userInput.value;

}

// option #2
// document.getElementById('copy').onclick = () => {

//     let userInput = document.getElementById('input');
//     let output =  document.getElementById('output');

//     output.innerHTML = userInput.value;
// };

// option #3
// document.getElementById('copy').onclick = () => {

//     document.getElementById('output').innerHTML = document.getElementById('input').value;
// };