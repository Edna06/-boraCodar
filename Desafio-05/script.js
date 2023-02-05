const input = document.querySelector('.result_display p');
const clear = document.querySelector('button.clear');
const cancelEntry = document.querySelector('button.cancel_entry');
const equalButton = document.querySelector('button.symbol_equal');



function insert(num) {
  var numberDisplay = input.innerHTML;
  input.innerHTML = numberDisplay + num;
}

// function clear all
clear.addEventListener('click', () => (input.innerHTML = ''));

// function cancel entry
cancelEntry.addEventListener('click', () => {
  var result = input.innerHTML;
  input.innerHTML = result.substring(0, result.length - 1);
});

// function calculate
equalButton.addEventListener('click', () => {
  var calculate = input.innerHTML;

  if(calculate){
    input.innerHTML = eval(calculate)
  }
})
