export enum GameMode {
  AUTO = "auto",
  MANUAL = "manual",
}

export enum PegColors {
  RED = "red",
  GREEN = "green",
  BLUE = "blue",
  YELLOW = "yellow",
  ORANGE = "orange",
  PURPLE = "purple",
}

export enum ClueColors {
  EXACT = "exact",
  PARTIAL = "partial",
}

export type Color = keyof typeof PegColors | PegColors;

export type Code = Color[];

export type Clue = ClueColors[];

export type Guess = {
  code: Code;
  clue: Clue;
};
