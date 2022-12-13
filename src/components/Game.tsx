import { useGameContext } from "hooks";
import { Board, GameOverModal, Pegs, SelectCodeModal } from "components";

export const Game = () => {
  const { mode, setPegColor, pegColor, resetHistory } = useGameContext();

  return (
    <>
      <div className='min-h-screen bg-base-200'>
        <div className='hero-content text-center mx-auto mb-6'>
          <div className='max-w-md mt-10'>
            <h1 className='text-3xl font-bold'>Mastermind Game</h1>
            <div className='flex mt-3 items-baseline'>
              <h2 className='text-xl'>game mode: {mode}</h2>
              <button
                className='btn btn-link h-auto min-h-0'
                onClick={() => resetHistory()}
              >
                Change
              </button>
            </div>
          </div>
        </div>

        <div className='flex flex-col items-center space-y-6'>
          <Board />
          <Pegs onClick={setPegColor} activeColor={pegColor} />
        </div>
      </div>

      <GameOverModal />
      <SelectCodeModal />
    </>
  );
};
