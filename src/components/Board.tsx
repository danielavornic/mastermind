import { useGameContext } from "hooks";
import { Row } from "./Row";

export const Board = () => {
  const { history } = useGameContext();

  return (
    <div className='flex flex-col mx-auto border border-gray-300 w-fit rounded-md bg-gray-100'>
      {Array.from({ length: 10 - history.length }).map((_, index) => (
        <Row key={index} isLast={index === 9 - history.length} />
      ))}

      {!!history?.length &&
        history?.map((row, index) => <Row key={index} colors={row.code} />)}
    </div>
  );
};
