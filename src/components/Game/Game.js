import React from 'react'
import GuessList from '../GuessList'
import GuessInput from '../GuessInput'
import Keyboard from '../Keyboard'
import Banner from '../Banner'
import { getKeysDisplay } from '../../game-helpers'
import { sample } from '../../utils'
import { WORDS } from '../../data'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
  const [guessList, setGuessList] = React.useState([])
  const [status, setStatus] = React.useState('playing')
  const isGameOver =
    status === 'won' || guessList.length >= NUM_OF_GUESSES_ALLOWED
  const keysDisplay = getKeysDisplay(guessList)

  return (
    <>
      <GuessList guessList={guessList} />
      {isGameOver ? (
        <Banner status={status} answer={answer} guessList={guessList} />
      ) : (
        <>
          <GuessInput
            answer={answer}
            setGuessList={setGuessList}
            setStatus={setStatus}
          />
          <Keyboard keysDisplay={keysDisplay} />
        </>
      )}
    </>
  )
}

export default Game
