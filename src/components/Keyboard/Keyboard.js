import React from 'react'

const keys = [
  [
    ...'QWERTYUIOP'
      .split('')
      .map((letter) => ({ letter, status: 'available' })),
  ],
  [...'ASDFGHJKL'.split('').map((letter) => ({ letter, status: 'available' }))],
  [...'ZXCVBNM'.split('').map((letter) => ({ letter, status: 'available' }))],
]

function Keyboard({ keysDisplay }) {
  return (
    <>
      {keys.map((row, i) => (
        <div key={`row-${i}`} className='keyboard-row'>
          {row.map((k) => {
            if (keysDisplay.correct.includes(k.letter)) {
              k.status = 'correct'
            } else if (keysDisplay.incorrect.includes(k.letter)) {
              k.status = 'incorrect'
            } else if (keysDisplay.misplaced.includes(k.letter)) {
              k.status = 'misplaced'
            }
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
