import { useEffect, useState } from "react";
import cn from "classnames";

import { Code, GameMode, GameStatus, PegColors } from "types";
import { useGameContext } from "hooks";
import { Peg, Pegs } from "components";

const initialCode = Array.from({ length: 4 }).map(() => undefined);

export const SelectCodeModal = () => {
  const { mode, status, code, setCode } = useGameContext();

  const [isOpen, setIsOpen] = useState(false);
  const [localCode, setLocalCode] = useState<Code>(initialCode);
  const [color, setColor] = useState<PegColors>(undefined);

  useEffect(() => {
    setIsOpen(
      status === GameStatus.IN_PROGRESS && mode === GameMode.MANUAL && !code
    );

    if (code) console.log(code);

    return () => setIsOpen(false);
  }, [status, code]);

  const handlePegClick = (index: number) => {
    const newCode = [...localCode];
    newCode[index] = color;
    setLocalCode(newCode);
  };

  return (
    <div
      className={cn("modal", {
        "opacity-100 pointer-events-auto visible": isOpen,
      })}
      id='game-modal'
    >
      <div className='modal-box'>
        <h3 className='font-bold text-xl pb-6'>Codemaker: Select the code</h3>

        <div className='flex space-x-2 justify-center pb-8'>
          {localCode.map((color, i) => (
            <Peg key={i} color={color} onClick={() => handlePegClick(i)} />
          ))}
        </div>

        <div className='justify-center flex'>
          <Pegs onClick={setColor} activeColor={color} />
        </div>

        <div className='modal-action'>
          <label
            htmlFor='game-modal'
            className='btn'
            onClick={() => setCode(localCode)}
          >
            Set Code
          </label>
        </div>
      </div>
    </div>
  );
};
