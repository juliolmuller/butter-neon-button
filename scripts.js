// Pick random neon color
const colors = ['blue', 'cyan', 'green', 'orange', 'pink', 'purple', 'red']
const randomColor = colors[Math.floor(Math.random() * colors.length)]
document.documentElement.style.setProperty('--neon-on', `var(--neon-${randomColor})`)

// Append a button to the DOM
const button = document.createElement('button')

button.innerHTML = 'Turn Me Off'
button.setAttribute('type', 'button')
button.classList.add('btn-neon')
button.classList.add('active')
document.body.append(button)

button.addEventListener('mouseover', onMouseOver)
button.addEventListener('click', onClick)
button.addEventListener('focus', onFocus)
button.addEventListener('blur', onBlur)

// Define measures getters
const DOM = {
  get buttonHeight() {
    return button.clientHeight
  },
  get buttonWidth() {
    return button.clientWidth
  },
  get viewportHeight() {
    return document.body.clientHeight
  },
  get viewportWidth() {
    return document.body.clientWidth
  },
  get minX() {
    return this.buttonHeight + (this.buttonWidth * 0.5)
  },
  get maxX() {
    return this.viewportWidth - this.minX
  },
  get minY() {
    return this.buttonHeight * 1.5
  },
  get maxY() {
    return this.viewportHeight - this.minY
  },
  get minDistance() {
    return this.maxDistance * 0.2 // 20%
  },
  get maxDistance() {
    return getDistance([this.minX, this.minY], [this.maxX, this.maxY])
  },
}

// Make button run away if it's off and user hovers it
function onMouseOver(event) {
  const isActive = button.classList.contains('active')
  const posX = event.x
  const posY = event.y

  while (!isActive) {
    const newX = genRandomX()
    const newY = genRandomY()
    const distance = getDistance([posX, posY], [newX, newY])

    if (distance >= DOM.minDistance && distance <= DOM.maxDistance) {
      button.style.left = `${newX}px`
      button.style.top = `${newY}px`
      button.blur()
      break
    }
  }
}

// Toggle 'active' class when it is clicked (via mouse or keyboard)
function onClick(event) {
  const isActive = button.classList.contains('active')

  if (isActive) {
    button.classList.remove('active')
    button.innerHTML = 'Turn Me Off'

    // check if event was triggered by mouse click
    if (event.screenX || event.screenY)
      onMouseOver(event)
  } else {
    button.classList.add('active')
    button.innerHTML = 'Turn Me On'
  }

  button.blur()
}

// blink when button is focused
let intervalKey;

function onFocus() {
  const isActive = button.classList.contains('active')

  if (!isActive) {
    intervalKey = setInterval(() => {
      button.classList.add('active')
      setTimeout(() => button.classList.remove('active'), 80)
    }, 900)
  }
}

function onBlur() {
  clearInterval(intervalKey)
}

/**
 * Measure the distance between 2 points in a Cartesian plane
 * @param {[number, number]} param1 Tuple with coordinates (x & y) of point 1
 * @param {[number, number]} param2 Tuple with coordinates (x & y) of point 2
 * @return {number}
 */
function getDistance([x1, y1], [x2, y2]) {
  const triangleSide1 = x1 - x2
  const triangleSide2 = y1 - y2
  const triangleAreasSum = Math.pow(triangleSide1, 2) + Math.pow(triangleSide2, 2)
  const hypotenuse = Math.sqrt(triangleAreasSum)
  const integer = Math.round(hypotenuse)

  return integer
}

/**
 * Generate a random position in X axis between the min and max delimited space
 * of viewport width.
 * @return {number}
 */
function genRandomX() {
  const random = Math.random()
  const allowedRange = DOM.maxX - DOM.minX
  const integer = Math.round(random * allowedRange)

  return DOM.minX + integer
}

/**
 * Generate a random position in Y axis between the min and max delimited space
 * of viewport height.
 * @return {number}
 */
function genRandomY() {
  const random = Math.random()
  const allowedRange = DOM.maxY - DOM.minY
  const integer = Math.round(random * allowedRange)

  return DOM.minY + integer
}
