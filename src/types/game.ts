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

export enum ClueColor {
  WHITE = "white",
  BLACK = "black",
}

export type Color = keyof typeof Colors;

export type Code = Color[];

export type Clue = {
  color: ClueColor;
  count: number;
};

export type Guess = {
  code: Code;
  clue: Clue;
};
