import { GameMode, GameStatus } from "types";
import { useGameContext } from "hooks";
import { generateCode } from "utils";

export const Welcome = () => {
  const { setMode, setCode, setStatus } = useGameContext();

  const handleModeChange = (mode: GameMode) => {
    setMode(mode);
    setStatus(GameStatus.IN_PROGRESS);

    if (mode === GameMode.AUTO) {
      const code = generateCode();
      setCode(code);
      console.log(code);
    }
  };

  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content text-center'>
        <div className='max-w-md'>
          <h1 className='text-5xl font-bold'>Mastermind Game</h1>
          <h2 className='mt-8 text-xl'>Select a game mode to start playing</h2>
          <div className='grid grid-cols-2 gap-4 mt-16'>
            <button
              className='btn btn-primary'
              onClick={handleModeChange.bind(null, GameMode.MANUAL)}
            >
              Manual
            </button>
            <button
              className='btn btn-primary'
              onClick={handleModeChange.bind(null, GameMode.AUTO)}
            >
              Auto
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
