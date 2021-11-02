const chosenItem = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

chosenItem.addEventListener('dragstart', dragstart)
chosenItem.addEventListener('dragend', dragend)

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', dragdrop)
}

function dragstart(event) {
    event.target.classList.add('hold') // event.target ~ this
    setTimeout(() => {
        event.target.classList.add('hide')
    }, 0)
}

function dragend(e) {
    e.target.classList.remove('hold', 'hide')// ==  e.target.className = 'item'
}

function dragover(event) {
    event.preventDefault()
}

function dragenter(ev) {
    ev.target.classList.add('hovered')
}

function dragleave(ev) {
    ev.target.classList.remove('hovered')
}

function dragdrop(ev) {
    ev.target.append(chosenItem)
    ev.target.classList.remove('hovered')
}

