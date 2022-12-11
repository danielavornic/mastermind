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
  "": "bg-transparent",
};

interface PegProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: Color;
}

export const Peg = ({ color, className, ...props }: PegProps) => {
  const { pegColor } = useGameContext();

  return (
    <div
      className={cn(
        className,
        "w-10 h-10 rounded-full cursor-pointer border border-gray-300",
        tailwindColors[color]
      )}
      {...props}
    />
  );
};
