import { createContext, useState } from "react";
import { Clue, Code, Color, GameMode, Guess } from "types";

interface GameContext {
  mode?: GameMode;
  setMode: (mode: GameMode) => void;
  code?: Code;
  setCode: (code: Code) => void;
  pegColor?: string;
  setPegColor?: (color: Color) => void;
  guess?: Code;
  setGuess: (guess: Code) => void;
  clue?: Clue;
  setClue: (clue: Clue) => void;
  history?: Guess[];
  setHistory: (history: Guess[]) => void;
}

export const GameContext = createContext<GameContext>({
  mode: undefined,
  setMode: () => {},
  code: undefined,
  setCode: () => {},
  pegColor: undefined,
  setPegColor: () => {},
  guess: undefined,
  setGuess: () => {},
  clue: undefined,
  setClue: () => {},
  history: [],
  setHistory: () => {},
});

export const GameProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<GameMode>();
  const [code, setCode] = useState<Code>();
  const [pegColor, setPegColor] = useState<Color>();
  const [guess, setGuess] = useState<Code>();
  const [clue, setClue] = useState<Clue>();
  const [history, setHistory] = useState<Guess[]>([]);

  return (
    <GameContext.Provider
      value={{
        mode,
        setMode,
        code,
        setCode,
        pegColor,
        setPegColor,
        guess,
        setGuess,
        history,
        setHistory,
        clue,
        setClue,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
