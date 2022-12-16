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

// BUTTON 6 fix

let fix = document.querySelector('a:nth-of-type(6)')

fix.addEventListener('click', rotate)
fix.addEventListener('animationend', rotate)

function rotate() {
  fix.classList.toggle('rotate')
}

// BUTTON 9 user

let user = document.querySelector('a:nth-of-type(9)')

user.addEventListener('click', blowOut)
user.addEventListener('animationend', blowOut)

function blowOut() {
  user.classList.toggle('blow-out')
}