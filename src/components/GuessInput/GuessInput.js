import React from 'react'

function GuessInput({ setGuessList }) {
  const [guess, setGuess] = React.useState('')

  function handleSubmit(e, guess) {
    e.preventDefault()
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
