import { GameMode } from "types";
import { useGameContext } from "hooks";

export const Welcome = () => {
  const { setMode } = useGameContext();

  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content text-center'>
        <div className='max-w-md'>
          <h1 className='text-5xl font-bold'>Mastermind Game</h1>
          <h2 className='mt-8 text-xl'>Select a game mode to start playing</h2>
          <div className='grid grid-cols-2 gap-4 mt-16'>
            <button
              className='btn btn-primary'
              onClick={() => setMode(GameMode.MANUAL)}
            >
              Manual
            </button>
            <button
              className='btn btn-primary'
              onClick={() => setMode(GameMode.AUTO)}
            >
              Auto
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
