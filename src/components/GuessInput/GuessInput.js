import React from 'react'
import { checkGuess } from '../../game-helpers'

function GuessInput({ answer, setGuessList, setStatus }) {
  const [guess, setGuess] = React.useState('')

  function handleSubmit(e, guess, correctAnswer) {
    e.preventDefault()
    const validated = checkGuess(guess, correctAnswer)
    const word = validated.map((l) => l.letter).join('')
    if (word === correctAnswer) {
      setStatus('won')
    }
    setGuessList((guessList) => [...guessList, validated])
    setGuess('')
  }

  return (
    <form
      className='guess-input-wrapper'
      onSubmit={(e) => handleSubmit(e, guess, answer)}
    >
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        id='guess-input'
        type='text'
        value={guess}
        onChange={(e) => {
          setGuess(e.target.value.toUpperCase())
        }}
        pattern='[A-Za-z]{5}'
      />
    </form>
  )
}

export default GuessInput
