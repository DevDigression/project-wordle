import React from 'react'

function Keyboard({ keysDisplay }) {
  return (
    <>
      {keysDisplay.map((row, i) => (
        <div key={`row-${i}`} className='keyboard-row'>
          {row.map((k) => {
            return (
              <div key={k.letter} className={`keyboard-key ${k.status}`}>
                {k.letter.toUpperCase()}
              </div>
            )
          })}
        </div>
      ))}
    </>
  )
}

export default Keyboard
