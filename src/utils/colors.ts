import { PegColors } from "types";

const colors = Object.keys(PegColors).map((color) => color.toLowerCase());

export const generateCode = () => {
  const code = [];
  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * colors.length);
    code.push(colors[randomIndex]);
  }
  return code;
};
