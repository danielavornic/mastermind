import cn from "classnames";
import { ClueColors } from "types";

const getColorClass = (color: ClueColors) => {
  switch (color) {
    case ClueColors.EXACT:
      return "bg-black";
    case ClueColors.PARTIAL:
      return "bg-white";
    default:
      return "";
  }
};

const ClueSquare = ({ color }: { color: ClueColors }) => {
  const colorClass = getColorClass(color);
  return <div className={cn("w-4 h-4 border border-gray-400", colorClass)} />;
};

export const Clues = ({ colors }: { colors: ClueColors[] }) => {
  const exact = colors.filter((color) => color === ClueColors.EXACT).length;
  const partial = colors.filter((color) => color === ClueColors.PARTIAL).length;
  const title = `${exact} exact match${
    exact === 1 ? "" : "es"
  }, ${partial} partial match${partial === 1 ? "" : "es"}`;

  return (
    <div className='grid grid-cols-2 gap-1 w-8 h-8' title={title}>
      {colors?.map((color, index) => (
        <ClueSquare key={index} color={color} />
      ))}
    </div>
  );
};
