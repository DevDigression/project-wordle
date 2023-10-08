import React from 'react'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

function GuessInput({ guessList, setGuessList }) {
  const [guess, setGuess] = React.useState('')

  function handleSubmit(e, guess) {
    e.preventDefault()

    if (guessList.length >= NUM_OF_GUESSES_ALLOWED) {
      console.log('Maximum number of guesses reached.')
      return
    }

    setGuessList((guessList) => [...guessList, guess])
    console.log({ guess })
    setGuess('')
  }

  return (
    <form
      className='guess-input-wrapper'
      onSubmit={(e) => handleSubmit(e, guess)}
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
