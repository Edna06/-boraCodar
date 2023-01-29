// create chat 
export function createMessage(classUserAndDate, user, date, classMessage,message) {
  return `
  <li>
  <div class="${classUserAndDate}">
    <p>
      ${user} - ${date}
    </p>
  </div>
  
  <div class="${classMessage}">
    <p>
      ${message}
    </p>
  </div>
</li>
  `
}