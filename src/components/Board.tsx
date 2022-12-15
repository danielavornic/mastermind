import { useGameContext } from "hooks";
import { Row } from "components";

export const Board = () => {
  const { history, currentRow } = useGameContext();

  return (
    <div className='flex flex-col mx-auto border border-gray-400 w-fit rounded-md bg-gray-200'>
      {history.map((row, index) => (
        <Row
          key={index}
          colors={row.code}
          clueColors={row.clue}
          isActive={index === 9 - currentRow}
          isLast={index === history.length - 1}
          isFirst={index === 0}
        />
      ))}
    </div>
  );
};
