export enum GameMode {
  AUTO = "auto",
  MANUAL = "manual",
}

export enum Colors {
  RED = "red",
  GREEN = "green",
  BLUE = "blue",
  YELLOW = "yellow",
  ORANGE = "orange",
  PURPLE = "purple",
}

export enum ClueColors {
  WHITE = "white",
  BLACK = "black",
  TRANSPARENT = "transparent",
}

export type Color = keyof typeof Colors | Colors;

export type ClueColor = keyof typeof ClueColors;

export type Code = Color[];

export type Clue = ClueColor[];

export type Guess = {
  code: Code;
  clue: Clue;
};
