let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}

// BUTTON 1 frontend

let frontend = document.querySelector('a:nth-of-type(1)')

frontend.addEventListener('click', jumpRight)
frontend.addEventListener('animationend', jumpRight)

function jumpRight() {
  frontend.classList.toggle('jump-right')
}

// BUTTON 4 development

let development = document.querySelector('a:nth-of-type(4)')

development.addEventListener('click', blink)
development.addEventListener('animationend', blink)

function blink() {
  development.classList.toggle('blink')
}

// BUTTON 5 sprint 5

let sprintVijf = document.querySelector('a:nth-of-type(5)')

sprintVijf.addEventListener('click', reveal)
sprintVijf.addEventListener('animationend', reveal)

function reveal() {
  development.classList.toggle('reveal')
}