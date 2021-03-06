const board = document.querySelector('#board')
const SQUARES_NUMBER = 500
const colors =
    ['lime', 'green', 'aqua', '#3fbfb0', '#70f20c', '#0cc8f2',
        '#0c92f2', '#0cf2f2', '#0cf2c8', '#0cf278', '#0cf259']
for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => {
        setColor(square)
    })
    square.addEventListener('mouseleave', removeColor)

    board.append(square)
}

function setColor(element) {
    const newColor = getColor()
    element.style.backgroundColor = newColor
    element.style.boxShadow = `0 0 2px ${newColor},0 0 10px ${newColor}`
    /*e.style.border='2px #f6fa02 solid'*/
    element.style.border = `2px ${getColor(-1)} solid`
}

function removeColor(event) {
    const element = event.target
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
    element.style.borderColor = ' #1d1d1d'
}

function getColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}