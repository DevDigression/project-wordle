import React from 'react'
import { range } from '../../utils'
import { GUESS_LENGTH } from '../../constants'

function Guess({ guess = {} }) {
  return (
    <p className='guess'>
      {range(0, GUESS_LENGTH).map((i) => (
        <span
          key={`${guess[i]}${i}`}
          className={`cell ${
            guess[i] && guess[i].status ? guess[i].status : ''
          }`}
        >
          {guess[i] && guess[i].letter}
        </span>
      ))}
    </p>
  )
}

export default Guess
