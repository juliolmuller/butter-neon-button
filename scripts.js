
// Append a button to the DOM
const button = document.createElement('button')

button.innerHTML = 'Click Me'
button.setAttribute('type', 'button')
button.classList.add('btn-neon')
document.body.append(button)

// Define events to the button
button.addEventListener('click', () => {
  button.classList.toggle('active')
})
