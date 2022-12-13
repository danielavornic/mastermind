import { useGameContext } from "hooks";
import { Color, PegColors } from "types";
import { Peg } from "components";

const COLORS: PegColors[] = Object.keys(PegColors).map((key) => PegColors[key]);

interface PegsProps {
  onClick?: (color: PegColors) => void;
  activeColor?: Color;
}

export const Pegs = ({ onClick, activeColor }: PegsProps) => {
  const { pegColor } = useGameContext();

  return (
    <div className='bg-gray-200 p-4 border-gray-400 border rounded-md'>
      <div className='flex flex-row space-x-2'>
        {COLORS.map((color) => {
          return (
            <Peg
              key={color}
              color={color}
              onClick={() => onClick?.(color)}
              className={color === activeColor ? "ring-2 ring-black" : ""}
            />
          );
        })}
      </div>
    </div>
  );
};
