import '../css/style.css'

import { startGame } from './game'
import { darkModeHandle } from './utils'

darkModeHandle()

const startGameButton = document.getElementById('startGame')
startGameButton.addEventListener('click', startGame)
