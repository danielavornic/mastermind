import { Color, Colors } from "types";
import { Peg } from "./Peg";

const COLORS: Color[] = Object.keys(Colors).map((key) => Colors[key]);

export const Pegs = () => {
  return (
    <div className='flex flex-row space-x-2'>
      {COLORS.map((color) => (
        <Peg key={color} color={color} />
      ))}
    </div>
  );
};
