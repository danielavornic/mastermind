import { Clue, ClueColors, Code } from "types";

export const getClues = (code: Code, guess: Code): Clue => {
  const clues = [];
  const codeCopy = [...code];
  const guessCopy = [...guess];

  let exactMatches = 0;
  let partialMatches = 0;

  for (let i = 0; i < codeCopy.length; i++) {
    if (codeCopy[i] === guessCopy[i]) {
      exactMatches++;
      codeCopy[i] = null;
      guessCopy[i] = null;
    }
  }

  for (let i = 0; i < codeCopy.length; i++) {
    if (codeCopy[i] === null) {
      continue;
    }

    const guessIndex = guessCopy.indexOf(codeCopy[i]);
    if (guessIndex !== -1) {
      partialMatches++;
      codeCopy[i] = null;
      guessCopy[guessIndex] = null;
    }
  }

  for (let i = 0; i < exactMatches; i++) {
    clues.push(ClueColors.EXACT);
  }

  for (let i = 0; i < partialMatches; i++) {
    clues.push(ClueColors.PARTIAL);
  }

  while (clues.length < code.length) {
    clues.push(undefined);
  }

  const randomizedClues = clues.map((clue) => {
    const randomIndex = Math.floor(Math.random() * clues.length);
    const randomClue = clues[randomIndex];
    clues[randomIndex] = clue;
    return randomClue;
  });

  return randomizedClues;
};
