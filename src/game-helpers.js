/**
 * Thanks to Github user dylano for supplying a more-accurate
 * solving algorithm!
 */

import { NUM_OF_GUESSES_ALLOWED } from './constants'

export function checkGuess(guess, answer) {
  // This constant is a placeholder that indicates we've successfully
  // dealt with this character (it's correct, or misplaced).
  const SOLVED_CHAR = '✓'
  if (!guess) {
    return null
  }

  const guessChars = guess.toUpperCase().split('')
  const answerChars = answer.split('')

  const result = []

  // Step 1: Look for correct letters.
  for (let i = 0; i < guessChars.length; i++) {
    if (guessChars[i] === answerChars[i]) {
      result[i] = {
        letter: guessChars[i],
        status: 'correct',
      }
      answerChars[i] = SOLVED_CHAR
      guessChars[i] = SOLVED_CHAR
    }
  }

  // Step 2: look for misplaced letters. If it's not misplaced,
  // it must be incorrect.
  for (let i = 0; i < guessChars.length; i++) {
    if (guessChars[i] === SOLVED_CHAR) {
      continue
    }

    let status = 'incorrect'
    const misplacedIndex = answerChars.findIndex(
      (char) => char === guessChars[i]
    )
    if (misplacedIndex >= 0) {
      status = 'misplaced'
      answerChars[misplacedIndex] = SOLVED_CHAR
    }

    result[i] = {
      letter: guessChars[i],
      status,
    }
  }

  return result
}

export function getGameStatus(answer, guessList) {
  const lastGuess = guessList[guessList.length - 1]

  if (!lastGuess) {
    return 'playing'
  }

  const lastGuessString = lastGuess
    .map((item) => item.letter)
    .join('')
    .toUpperCase()
  if (lastGuessString === answer) {
    return 'won'
  }

  if (guessList.length >= NUM_OF_GUESSES_ALLOWED) {
    return 'lost'
  }

  return 'playing'
}

export const getKeysDisplay = (keys, guessList) => {
  if (guessList.length === 0) {
    return keys
  }

  const currentGuess = guessList[guessList.length - 1]

  for (const letter of currentGuess) {
    const currentLetter = keys
      .flat()
      .find((key) => key.letter === letter.letter)
    if (currentLetter.status !== 'correct') {
      currentLetter.status = letter.status
    }
  }

  return keys
}
