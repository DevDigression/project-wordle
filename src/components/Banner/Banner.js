import React from 'react'

function Banner({ status, answer, guessList }) {
  return status === 'won' ? (
    <div className='happy banner'>
      <p>
        <strong>Congratulations!</strong> Got it in{' '}
        <strong>{`${guessList.length} guesses`}</strong>.
      </p>
    </div>
  ) : (
    <div className='sad banner'>
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  )
}

export default Banner
