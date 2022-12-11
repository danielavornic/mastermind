import cn from "classnames";

import { Color } from "types";
import { useGameContext } from "hooks";

const tailwindColors = {
  red: "bg-red-500",
  blue: "bg-blue-500",
  green: "bg-green-500",
  yellow: "bg-yellow-500",
  orange: "bg-orange-500",
  purple: "bg-purple-500",
};

export const Peg = ({ color }: { color: Color }) => {
  const { pegColor, setPegColor } = useGameContext();

  return (
    <div
      className={cn(
        "w-12 h-12 rounded-full cursor-pointer",
        tailwindColors[color],
        {
          "border-2 border-slate-700": pegColor === color,
        }
      )}
      onClick={() => setPegColor(color)}
    />
  );
};
