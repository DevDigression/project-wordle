import React from 'react'

function GuessList({ guessList }) {
  return (
    <div className='guess-results'>
      {guessList.map((guess) => (
        <p key={guess} className='guess'>
          {guess}
        </p>
      ))}
    </div>
  )
}

export default GuessList
