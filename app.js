
// USER STORY:
// As a user, I want to be able to select numbers so that I can perform operations with them.
// As a user, I want to be able to add two numbers together.
// As a user, I want to be able to subtract one number from another.
// As a user, I want to be able to multiply two numbers together.
// As a user, I want to be able to divide one number by another.
// As a user, I want to be able to see the output of the mathematical operation.
// As a user, I want to be able to clear all operations and start from 0.

/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator')
const calculator = document.querySelector('#calculator');
const display = document.querySelector('.display');

/*-------------------------------- Variables --------------------------------*/

let currentInput = '';

/*------------------------ Cached Element References ------------------------*/


/*----------------------------- Event Listeners -----------------------------*/



calculator.addEventListener('click', (event) => {

  console.log(event.target.innerText);
})




//   // Example
//   if (event.target.classList.contains('number')) {
//     return 'number';
//   }
  // // Example
  // else if (event.target.innerText === '*') {
  //   return number * number;
  // }
  // else if (event.target.innerText === "/") {
  //   return number / number;
  // }
  // else if (event.target.innerText === "+") {
  //   return number + number;
  // }
// })

/*-------------------------------- Functions --------------------------------*/

function numberDisplay (number) {
  buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const number = button.innerText;
        if (currentInput += number) {
          display.innerText = currentInput
        } else {
          clear()
        }
    }) 
  }) 
};



function calculate () {
  operators.forEach((operator) => {
//    if button.innerText = "+" {
//      return current input + 
    })
  
}




function clear() {
  currentInput = '';
}
