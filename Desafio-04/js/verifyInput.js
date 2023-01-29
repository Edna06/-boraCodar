import {input, button} from './main.js'

export function verify() {
  let inputValue = input.value
  let inputLength = inputValue.length

  if (inputLength > 0) {
    button.classList.add('active')
  } else {
    button.classList.remove('active')
  }
}
