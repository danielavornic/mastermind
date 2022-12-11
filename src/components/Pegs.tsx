import { useGameContext } from "hooks";
import { Color, Colors } from "types";
import { Peg } from "./Peg";

const COLORS: Color[] = Object.keys(Colors).map((key) => Colors[key]);

export const Pegs = () => {
  const { pegColor, setPegColor } = useGameContext();

  return (
    <div className='bg-gray-100 p-4 border-gray-200 border rounded-md'>
      <div className='flex flex-row space-x-2'>
        {COLORS.map((color) => {
          console.log(color, pegColor);

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
