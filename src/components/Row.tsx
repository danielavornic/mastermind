import { useState } from "react";
import cn from "classnames";

import { ClueColors, Code, Color } from "types";
import { useGameContext } from "hooks";
import { CheckButton, Peg, Clues } from "components";

interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
  colors?: Code;
  clueColors?: ClueColors[];
  isLast?: boolean;
  isFirst?: boolean;
  isActive?: boolean;
}

export const Row = ({
  colors,
  clueColors,
  isFirst,
  isLast,
  isActive,
}: RowProps) => {
  const { pegColor, updateGuess } = useGameContext();

  const isNotDisabled = isActive && !colors?.includes(undefined);

  return (
    <div
      className={cn(
        "flex flex-row space-x-6 py-2 px-4 items-center justify-center",
        {
          "border-b border-gray-400": !isLast,
          "rounded-b-md": isLast,
          "rounded-t-md": isFirst,
          "bg-gray-50": isActive,
        }
      )}
    >
      <div
        className={cn("flex flex-row space-x-2 pr-6 border-r border-gray-400", {
          "pointer-events-none": !isActive,
        })}
      >
        {colors.map((color, index) => {
          const [col, setCol] = useState<Color>(color);
          return (
            <Peg
              key={index}
              color={col}
              onClick={() => {
                setCol(pegColor);
                updateGuess(index);
              }}
            />
          );
        })}
      </div>

      <CheckButton isDisabled={!isNotDisabled} />
      <Clues colors={clueColors} />
    </div>
  );
};
