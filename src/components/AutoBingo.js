import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import BallInput from './BallInput';
import Bingo from './Bingo';
import NewBingoModal from './NewBingoModal';
import RandomBingoButton from './RandomBingoButtom';
import RoundCounter from './RoundCounter';
import Grid from './styled/Grid';
import Main from './styled/Main';
import theme from './styled/Theme';

const AutoBingo = () => {
  const [round, setRound] = useState(1);
  const [ball, setBall] = useState('');
  const [bingosList, setBingosList] = useState([]);
  const [bingoToUpdate, setBingoToUpdate] = useState({});
  const [showModal, setShowModal] = useState(false);

  const addNewBingo = newBingo => {
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

  const handleEditBingo = bingo => {
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
    <ThemeProvider theme={theme}>
      <Main>
        <h1>Auto Bingo</h1>
        <button onClick={() => setShowModal(true)}>Nuevo Bingo</button>
        {showModal && (
          <NewBingoModal
            handleSubmit={addNewBingo}
            bingo={bingoToUpdate}
            onClose={() => setShowModal(false)}
          />
        )}
        <BallInput
          value={ball}
          setValue={setBall}
          min={1}
          max={90}
        />
        <RoundCounter
          round={round}
          setRound={setRound}
        />
        <RandomBingoButton
          bingosList={bingosList}
          handleNewBingo={addNewBingo}
        />
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
    </ThemeProvider>
  );
};

export default AutoBingo;
