
// USER STORY:
// As a user, I want to be able to select numbers so that I can perform operations with them.
// As a user, I want to be able to add two numbers together.
// As a user, I want to be able to subtract one number from another.
// As a user, I want to be able to multiply two numbers together.
// As a user, I want to be able to divide one number by another.
// As a user, I want to be able to see the output of the mathematical operation.
// As a user, I want to be able to clear all operations and start from 0.

/*-------------------------------- Constants --------------------------------*/


/*-------------------------------- Variables --------------------------------*/

let currentInput = '';
let numA = null;
let numB = null
let operator = null;

/*------------------------ Cached Element References ------------------------*/

//const buttons = document.querySelectorAll('.button');
//const operators = document.querySelectorAll('.operator')
const calculator = document.querySelector('#calculator');
const display = document.querySelector('.display');

// buttons.addEventListener('click', () => {
//   console.log('you clicked me!')
// })

/*----------------------------- Event Listeners -----------------------------*/

calculator.addEventListener('click', (event) => {
  const input = event.target;
  
  if (input.classList.contains('number')) {
    currentInput += input.innerText;
    display.textContent = currentInput;
  }

  if (input.classList.contains('operator')) {
    const clicked = input.innerText;

    if (clicked === 'C') {
      render();
      return;
    }

    if (!operator && currentInput !== '') {
      numA = Number(currentInput)
      operator = clicked;
      currentInput = ''; // no visible input for operator
    }
  }

  if (input.classList.contains('equals')) {
    if (operator && currentInput !== '') {
      numB = Number(currentInput)
      let result = 0;

      if (operator === '+') {
        result = numA + numB;
      } else if (operator === '-') {
        result = numA - numB;
      } else if (operator === '*') {
        result = numA * numB;
      } else if (operator === '/') {
        result = numA / numB;
      }

      display.textContent = result;
      currentInput = result.toString();
      numA = null;
      numB = null;
      operator = null;
    }
  }
})
 // if (operator === "=") {
  //   let numB = Number(currentInput);
  //   let result = 0; }
/*-------------------------------- Functions --------------------------------*/

function render() { //clears everything/ reset
  currentInput = '';
  numA = null;
  numB = null;
  operator = null;
  display.textContent=" ";
}



























// button.addEventListener('click', (event) => {
//   const number = button.innerText;
//   (currentInput += number) 
//   display.innerText = currentInput
// })



//   console.log(event.target.innerText);
// })



//   // Example
//   if event.target.innerText contains a number
//     return the number
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
  // the last operator is 'C' which is a render button back to reset/0
// })



//function numberDisplay (number) {
//   buttons.forEach((button) => {
    
//         // } else {
//         //   clear()
//         // }
//     })
//   }



// function calculate () {
//   operators.forEach((operator) => {
// //    if button.innerText = "+" {
// //      return current input + 
//     })
  
// }




// function clear() {
//   currentInput = '';
// }
