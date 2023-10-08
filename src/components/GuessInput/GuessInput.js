import React from 'react'

function GuessInput() {
  const [guess, setGuess] = React.useState('')

  function handleSubmit(e) {
    e.preventDefault()
    console.log({ guess })
    setGuess('')
  }

  return (
    <form className='guess-input-wrapper' onSubmit={handleSubmit}>
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
