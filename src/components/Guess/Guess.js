import React from 'react'

function Guess({ guess = '' }) {
  return (
    <p class='guess'>
      <span class='cell'>{guess[0] && guess[0]}</span>
      <span class='cell'>{guess[1] && guess[1]}</span>
      <span class='cell'>{guess[2] && guess[2]}</span>
      <span class='cell'>{guess[3] && guess[3]}</span>
      <span class='cell'>{guess[4] && guess[4]}</span>
    </p>
  )
}

export default Guess
