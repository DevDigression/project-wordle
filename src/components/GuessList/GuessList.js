import React from 'react'
import Guess from '../Guess'
import { range } from '../../utils'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

function GuessList({ guessList }) {
  return (
    <div className='guess-results'>
      {range(0, NUM_OF_GUESSES_ALLOWED).map((i) => (
        <Guess key={`${guessList[i]}${i}`} guess={guessList[i]} />
      ))}
    </div>
  )
}

export default GuessList
