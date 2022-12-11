import cn from "classnames";

import { ClueColor } from "types";
import { useGameContext } from "hooks";

const ClueSquare = ({ color }: { color: ClueColor }) => {
  const colorClass = color === "BLACK" ? "bg-black" : "bg-btransparent";

  return <div className={cn("w-4 h-4 border border-gray-300", colorClass)} />;
};

export const Clues = () => {
  const { clue } = useGameContext();

  return (
    <div className='grid grid-cols-2 gap-1 w-8 h-8'>
      {clue?.map((color, index) => (
        <ClueSquare key={index} color={color} />
      ))}
    </div>
  );
};
