let random = Math.floor(Math.random() * 100 + 1)

var buttonRestart
var countHunches = 1
var help = document.querySelector('#help')
var attempts = document.querySelector('#attempts')
var result = document.querySelector('#result')
var numberEntered = document.querySelector('#numberEntered')
var checked = document.querySelector('#checked')

checked.addEventListener('click', check)

function check() {
   let amountAttempts = Number(numberEntered.value)
   attempts.textContent = attempts.textContent + amountAttempts + ', '

   if (countHunches == 10) {
      result.textContent = '[ GAME OVER ] chances acabaram'
      result.style.backgroundColor = 'red'
      gameEnd()
   } else {
      if (numberEntered.value == random) {
         result.textContent = `[ ${random} ] Parabéns, você achou o número!`
         result.style.backgroundColor = '#30b67c'
         gameEnd()
      } else if (numberEntered.value > random) {
         help.textContent = 'Dica: O número que você digitou é MAIOR'
         result.textContent = 'Errado'
         result.style.color = 'white'
         result.style.backgroundColor = 'red'
      } else if (numberEntered.value < random) {
         help.textContent = 'Dica: O número que você digitou é MENOR'
         result.textContent = 'Errado'
         result.style.color = 'white'
         result.style.backgroundColor = 'red'
      }
      countHunches++
      numberEntered.value = ''
      numberEntered.focus()
   }
}

function gameEnd() {
   numberEntered.value = ''
   numberEntered.disabled = true
   checked.disabled = true
   help.textContent = ''
   result.style.color = 'white'
   buttonRestart = document.createElement('button')
   buttonRestart.textContent = 'Novo Jogo'
   document.body.appendChild(buttonRestart)
   buttonRestart.addEventListener('click', restartGame)
}

function restartGame() {
   countHunches = 1
   help.textContent = 'Dica: '
   attempts.textContent = 'Tentativas: '
   result.textContent = ''
   checked.disabled = false
   numberEntered.disabled = false
   buttonRestart.parentNode.removeChild(buttonRestart)
   numberEntered.focus()
   random = Math.floor(Math.random() * 100 + 1)
}