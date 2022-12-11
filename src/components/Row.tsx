import { useGameContext } from "hooks";
import { Color, Colors } from "types";
import { Clues } from "./Clues";
import { Peg } from "./Peg";
import cn from "classnames";

const CheckButton = () => {
  const { setGuess, guess } = useGameContext();

  return (
    <button className='btn btn-sm' onClick={() => setGuess(guess)}>
      Check
    </button>
  );
};

interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
  colors?: Color[];
  isLast?: boolean;
}

export const Row = ({ colors, isLast }: RowProps) => {
  const codeColors = colors || Array.from({ length: 4 }).map(() => undefined);

  return (
    <div
      className={cn(
        "flex flex-row space-x-6 py-2 px-4 items-center justify-cente",
        { "border-b border-gray-300": !isLast }
      )}
    >
      <div className='flex flex-row space-x-2 pr-6 border-r border-gray-300'>
        {codeColors.map((color, index) => (
          <Peg key={index} color={color} />
        ))}
      </div>
      <CheckButton />
      <Clues />
    </div>
  );
};
