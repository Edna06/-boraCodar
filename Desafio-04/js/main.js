export const input = document.querySelector('#input')
export const button = document.querySelector('#button')

import { verify } from './verifyInput.js'
import { createMessage } from './createChat.js'



input.addEventListener('keypress', () => {
  verify()
})

button.addEventListener('click', () => {} )

// const addChat = (document.querySelector('ul').innerHTML =
  
// )