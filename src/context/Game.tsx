import { createContext, useEffect, useState } from "react";

import { Code, Color, PegColors, GameMode, Guess } from "types";
import { getClues } from "utils";

interface GameContext {
  mode?: GameMode;
  setMode: (mode: GameMode) => void;
  code?: Code;
  setCode: (code: Code) => void;
  pegColor?: Color;
  setPegColor?: (color: Color) => void;
  history?: Guess[];
  setHistory: (history: Guess[]) => void;
  updateHistory?: () => void;
  currentRow?: number;
  setCurrentRow?: (row: number) => void;
  updateGuess?: (index: number) => void;
}

export const GameContext = createContext<GameContext>({
  mode: undefined,
  setMode: () => {},
  code: undefined,
  setCode: () => {},
  pegColor: undefined,
  setPegColor: () => {},
  history: [],
  setHistory: () => {},
  updateHistory: () => {},
  currentRow: undefined,
  setCurrentRow: () => {},
  updateGuess: () => {},
});

const defaultColors = Array.from({ length: 4 }).map(() => undefined);

const initialHistory = Array.from({ length: 10 }).map(() => ({
  code: defaultColors,
  clue: defaultColors,
})) as Guess[];

export const GameProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<GameMode>();
  const [code, setCode] = useState<Code>();
  const [pegColor, setPegColor] = useState<Color>();
  const [history, setHistory] = useState<Guess[]>(initialHistory);
  const [currentRow, setCurrentRow] = useState<number>(0);

  const updateGuess = (index: number) => {
    setHistory((prev) => {
      return prev.map((row, i) => {
        if (i === 9 - currentRow) {
          return {
            ...row,
            code: row.code.map((color, j) => {
              if (j === index) return pegColor;

              return color;
            }),
          };
        }

        return row;
      });
    });
  };

  const updateHistory = () => {
    setHistory((prev) => {
      return prev.map((row, i) => {
        if (i === 9 - currentRow) {
          const clue = getClues(row.code, code);
          return {
            ...row,
            clue,
          };
        }

        return row;
      });
    });

    setCurrentRow((prevRow) => prevRow + 1);
    setPegColor(undefined);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    switch (e.key) {
      case "1":
        setPegColor(PegColors.RED);
        break;
      case "2":
        setPegColor(PegColors.GREEN);
        break;
      case "3":
        setPegColor(PegColors.BLUE);
        break;
      case "4":
        setPegColor(PegColors.YELLOW);
        break;
      case "5":
        setPegColor(PegColors.ORANGE);
        break;
      case "6":
        setPegColor(PegColors.PURPLE);
        break;
      default:
        break;
    }
  };

  window.addEventListener("keydown", handleKeyDown);

  useEffect(() => {
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <GameContext.Provider
      value={{
        mode,
        setMode,
        code,
        setCode,
        pegColor,
        setPegColor,
        history,
        setHistory,
        updateHistory,
        currentRow,
        setCurrentRow,
        updateGuess,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
