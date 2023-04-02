import { createContext, useCallback, useState } from 'react';
import Bingo from './Bingo';
import NewBingoModal from './NewBingoModal';
import Grid from './styled/Grid';
import Main from './styled/Main';
import { Bingo as BingoModel, BingoNumber } from '../types/Bingo';
import { RoundContextType } from '../types/ContextTypes';
import Navbar from './Navbar';

export const RoundContext = createContext({} as RoundContextType);

const AutoBingo = () => {
  const [round, setRound] = useState(1);
  const [bingosList, setBingosList] = useState<BingoModel[]>([]);
  const [bingoToUpdate, setBingoToUpdate] = useState<Partial<BingoModel>>({});
  const [showModal, setShowModal] = useState(false);

  const updateBingo = (newBingo: BingoModel) => {
    setBingosList(list =>
      list.map(bingo =>
        bingo.bingoId === bingoToUpdate.bingoId ? newBingo : bingo
      )
    );

    setBingoToUpdate({});
  };

  const addNewBingo = (newBingo: BingoModel) => {
    if (bingosList.some(bingo => bingo.bingoId === newBingo.bingoId)) {
      alert('Ya existe un bingo con ese número');
      return;
    }

    setBingosList(list => [...list, newBingo]);
  };

  const handleNewBingo = (newBingo: BingoModel) => {
    if (bingoToUpdate?.bingoId) updateBingo(newBingo);
    else addNewBingo(newBingo);
  };

  const onBingoEdit = useCallback((bingo: BingoModel) => {
    setShowModal(true);
    setBingoToUpdate(bingo);
  }, []);

  const handleBingoDelete = useCallback((bingoId: BingoNumber) => {
    setBingosList(list => list.filter(b => b.bingoId !== bingoId));
  }, []);

  const toggleModal = () => {
    setShowModal(show => !show);
    setBingoToUpdate({});
  };

  const closeModal = useCallback(() => {
    setShowModal(false);
    setBingoToUpdate({});
  }, []);

  // Update the grid of every bingo when the ball value changes
  const handleBallChange = useCallback(
    (newBall: BingoNumber, currentRound: number) => {
      if (!newBall || !currentRound) return;

      setBingosList(list =>
        list
          .map(({ bingoId, numbers, grid }) => {
            const col = numbers.indexOf(+newBall);

            if (col !== -1) grid[currentRound - 1][col] = true;

            return { bingoId, numbers, grid };
          })
          .sort(
            (a, b) =>
              b.grid[currentRound - 1].filter(cell => cell).length -
              a.grid[currentRound - 1].filter(cell => cell).length
          )
      );
    },
    []
  );

  return (
    <>
      <RoundContext.Provider value={{ round, setRound }}>
        <Navbar
          toggleModal={toggleModal}
          addNewBingo={addNewBingo}
          handleBallChange={handleBallChange}
        />
      </RoundContext.Provider>
      <Main>
        {showModal && (
          <NewBingoModal
            handleSubmit={handleNewBingo}
            bingo={bingoToUpdate as BingoModel}
            onCloseCallback={closeModal}
          />
        )}
        <Grid>
          {bingosList.map(({ bingoId, numbers, grid }) => (
            <Bingo
              key={bingoId}
              bingoId={bingoId}
              numbers={numbers}
              grid={grid}
              onDelete={handleBingoDelete}
              onEdit={onBingoEdit}
            />
          ))}
        </Grid>
      </Main>
    </>
  );
};

export default AutoBingo;
