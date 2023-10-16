import React from 'react'
import GuessList from '../GuessList'
import GuessInput from '../GuessInput'
import Keyboard from '../Keyboard'
import RestartButton from '../RestartButton'
import Banner from '../Banner'
import { sample } from '../../utils'
import { getGameStatus, getKeysDisplay } from '../../game-helpers'
import { WORDS } from '../../data'

const keys = [
  [
    ...'QWERTYUIOP'
      .split('')
      .map((letter) => ({ letter, status: 'available' })),
  ],
  [...'ASDFGHJKL'.split('').map((letter) => ({ letter, status: 'available' }))],
  [...'ZXCVBNM'.split('').map((letter) => ({ letter, status: 'available' }))],
]

function Game() {
  const [answer, setAnswer] = React.useState(() => sample(WORDS))
  const [guessList, setGuessList] = React.useState([])
  const keysDisplay = getKeysDisplay(keys, guessList)
  const gameStatus = getGameStatus(answer, guessList)
  const isGameOver = gameStatus !== 'playing'

  const restartGame = () => {
    setAnswer(sample(WORDS))
    setGuessList([])
    keys.forEach((row, i) => {
      keys[i] = row.map((key) => ({ ...key, status: 'available' }))
    })
  }
  console.info({ answer })

  return (
    <>
      <GuessList guessList={guessList} />
      {isGameOver ? (
        <>
          <RestartButton restartGame={restartGame} />
          <Banner status={gameStatus} answer={answer} guessList={guessList} />
        </>
      ) : (
        <>
          <GuessInput answer={answer} setGuessList={setGuessList} />
          <Keyboard keysDisplay={keysDisplay} />
        </>
      )}
    </>
  )
}

export default Game
