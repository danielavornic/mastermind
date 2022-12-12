import { useGameContext } from "hooks";
import { Code, PegColors } from "types";
import { Peg } from "./Peg";

const COLORS: Code = Object.keys(PegColors).map((key) => PegColors[key]);

export const Pegs = () => {
  const { pegColor, setPegColor } = useGameContext();

  return (
    <div className='bg-gray-200 p-4 border-gray-400 border rounded-md'>
      <div className='flex flex-row space-x-2'>
        {COLORS.map((color) => {
          return (
            <Peg
              key={color}
              color={color}
              onClick={() => setPegColor(color)}
              className={color === pegColor ? "ring-2 ring-black" : ""}
            />
          );
        })}
      </div>
    </div>
  );
};
