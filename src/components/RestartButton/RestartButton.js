import React from 'react'

function RestartButton({ restartGame }) {
  return (
    <div className='restart'>
      <button onClick={restartGame}>New Game</button>
    </div>
  )
}

export default RestartButton
