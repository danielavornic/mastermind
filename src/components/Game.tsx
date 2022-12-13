import { useGameContext } from "hooks";
import { Board, GameOverModal, Pegs } from "components";

export const Game = () => {
  const { mode } = useGameContext();

  return (
    <>
      <div className='min-h-screen bg-base-200'>
        <div className='hero-content text-center mx-auto mb-6'>
          <div className='max-w-md mt-10'>
            <h1 className='text-3xl font-bold'>Mastermind Game</h1>
            <h2 className='mt-3 text-xl'>game mode: {mode}</h2>
          </div>
        </div>

        <div className='flex flex-col items-center space-y-6'>
          <Board />
          <Pegs />
        </div>
      </div>

      <GameOverModal />
    </>
  );
};
