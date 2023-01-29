export const input = document.querySelector('#input')
export const button = document.querySelector('#button')

import { verify } from './verifyInput.js'
import { createMessage } from './createChat.js'

input.addEventListener('keypress', () => {
  verify()
})

const addChat = (document.querySelector('ul').innerHTML =
  createMessage(
    'personWhoSendMessageAndTime',
    'Cecilia',
    '11:30',
    'messageReceived',
    'Tive uma ideia incrível para um projeto! 😍'
  ) +
  createMessage(
    'MessageSendByMeAndTime',
    'Você',
    '11:32',
    'messageSend',
    'Sério? Me conta mais.'
  ) +
  createMessage(
    'personWhoSendMessageAndTime',
    'Cecilia',
    '11:34',
    'messageReceived',
    'E se a gente fizesse um chat moderno e responsivo em apenas uma semana?'
  ) +
  createMessage(
    'MessageSendByMeAndTime',
    'Você',
    '11:36',
    'messageSend',
    '#boraCodar! 🚀'
  ))
