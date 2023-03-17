import { useEffect, useState } from 'react';
import BallInput from './BallInput';
import Bingo from './Bingo';
import NewBingoModal from './NewBingoModal';
import RandomBingoButton from './RandomBingoButtom';
import RoundCounter from './RoundCounter';
import Grid from './styled/Grid';
import Main from './styled/Main';
import { Bingo as BingoModel } from '../types/Bingo';

const AutoBingo = () => {
  const [round, setRound] = useState(1);
  const [ball, setBall] = useState<number>();
  const [bingosList, setBingosList] = useState<BingoModel[]>([]);
  const [bingoToUpdate, setBingoToUpdate] = useState<Partial<BingoModel>>({});
  const [showModal, setShowModal] = useState(false);

  const addNewBingo = (newBingo: BingoModel) => {
    if (bingoToUpdate?.bingoId) {
      setBingosList(
        bingosList.map(bingo =>
          bingo.bingoId === bingoToUpdate.bingoId ? newBingo : bingo
        )
      );

      setBingoToUpdate({});

      return;
    }

    if (bingosList.some(bingo => bingo.bingoId === newBingo.bingoId)) {
      alert('Ya existe un bingo con ese número');
      return;
    }

    setBingosList([...bingosList, newBingo]);
  };

  const handleEditBingo = (bingo: BingoModel) => {
    setBingoToUpdate(bingo);
    setShowModal(true);
  };

  // Update the grid of every bingo when the ball value changes
  useEffect(() => {
    if (!ball) return;

    setBingosList(
      bingosList
        .map(({ bingoId, numbers, grid }) => {
          const col = numbers.indexOf(+ball);

          if (col !== -1) grid[round - 1][col] = true;

          return { bingoId, numbers, grid };
        })
        .sort(
          (a, b) =>
            b.grid[round - 1].filter(cell => cell).length -
            a.grid[round - 1].filter(cell => cell).length
        )
    );
  }, [ball]);

  return (
    <Main>
      <h1>Auto Bingo</h1>
      <button onClick={() => setShowModal(true)}>Nuevo Bingo</button>
      {showModal && (
        <NewBingoModal
          handleSubmit={addNewBingo}
          bingo={bingoToUpdate as BingoModel}
          handleClose={() => setShowModal(false)}
        />
      )}
      <BallInput callback={setBall} />
      <RoundCounter
        round={round}
        setRound={setRound}
      />
      <RandomBingoButton handleNewBingo={addNewBingo} />
      <Grid>
        {bingosList.map(({ bingoId, numbers, grid }) => (
          <Bingo
            key={bingoId}
            bingoId={bingoId}
            numbers={numbers}
            grid={grid}
            onDelete={() =>
              setBingosList(bingosList.filter(b => b.bingoId !== bingoId))
            }
            onEdit={handleEditBingo}
          />
        ))}
      </Grid>
    </Main>
  );
};

export default AutoBingo;
