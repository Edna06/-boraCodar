import {input, button} from './main.js'

export function verify() {
  var inputValue = input.value
  var inputLength = inputValue.length

  if (inputLength > 0) {
    button.classList.add('active')
  } else {
    button.classList.remove('active')
  }
}
