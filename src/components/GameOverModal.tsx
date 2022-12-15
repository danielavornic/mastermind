import { useEffect, useState } from "react";
import cn from "classnames";

import { GameStatus } from "types";
import { useGameContext } from "hooks";
import { Peg } from "components";

export const GameOverModal = () => {
  const { status, code, resetHistory, setCode } = useGameContext();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    resetHistory();
    setCode(undefined);
  };

  useEffect(() => {
    setIsOpen(status === GameStatus.WON || status === GameStatus.LOST);

    return () => setIsOpen(false);
  }, [status]);

  return (
    <div
      className={cn("modal", {
        "opacity-100 pointer-events-auto visible": isOpen,
      })}
      id='game-modal'
    >
      <div className='modal-box'>
        <h3 className='font-bold text-xl pb-6'>
          {status === GameStatus.WON ? "Congratulations!" : "Game Over"}
        </h3>
        <p className='text-lg'>
          {status === GameStatus.WON
            ? "You won the game!"
            : "You lost the game!"}
        </p>
        <p className='text-lg pb-4'>The code was:</p>
        <div className='flex space-x-2 justify-center'>
          {code?.map((color, i) => (
            <Peg key={i} color={color} />
          ))}
        </div>
        <div className='modal-action'>
          <label
            htmlFor='game-modal'
            className='btn'
            onClick={() => handleClick()}
          >
            Play Again
          </label>
        </div>
      </div>
    </div>
  );
};
