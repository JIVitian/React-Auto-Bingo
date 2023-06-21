import { useCallback, useReducer, useState } from 'react';
import Bingo from './Bingo';
import NewBingoModal from './NewBingoModal';
import Grid from './styled/Grid';
import Main from './styled/Main';
import { Bingo as BingoModel, BingoNumber } from '../types/Bingo';
import Navbar from './Navbar';
import { bingoReducer } from '../reducers/bingo/bingoReducer';
import { BingoActionTypes } from '../reducers/bingo/actions/bingo-actions-types';
import { initalBingos } from '../reducers/bingo/initialBingo';
import { RoundContext } from '../context/roundContext';
import { BingoReducerContext } from '../context/bingoReducerContext';

const AutoBingo = () => {
  const [round, setRound] = useState(1);
  const [bingoToUpdate, setBingoToUpdate] = useState<Partial<BingoModel>>({});
  const [showModal, setShowModal] = useState(false);

  const [bingosList, dispatch] = useReducer(bingoReducer, initalBingos);

  const updateBingo = (bingo: BingoModel) => {
    dispatch({
      type: BingoActionTypes.Update,
      payload: { bingoToUpdate: bingoToUpdate as BingoModel, newBingo: bingo },
    });
    setBingoToUpdate({});
  };

  const handleNewBingo = (newBingo: BingoModel) => {
    if (bingoToUpdate?.bingoId) {
      updateBingo(newBingo);
      return;
    }

    if (bingosList.some(bingo => bingo.bingoId === newBingo.bingoId)) {
      alert('Ya existe un bingo con ese número');
      return;
    }

    dispatch({ type: BingoActionTypes.Add, payload: newBingo });
  };

  const onBingoEdit = useCallback((bingo: BingoModel) => {
    setShowModal(true);
    setBingoToUpdate(bingo);
  }, []);

  const handleBingoDelete = useCallback((bingoId: number) => {
    dispatch({
      type: BingoActionTypes.Delete,
      payload: bingoId,
    });
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
      dispatch({
        type: BingoActionTypes.Play,
        payload: { newBall, currentRound },
      });
    },
    []
  );

  return (
    <>
      <BingoReducerContext.Provider value={{ bingosList, dispatch }}>
        <RoundContext.Provider value={{ round, setRound }}>
          <Navbar
            toggleModal={toggleModal}
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
      </BingoReducerContext.Provider>
    </>
  );
};

export default AutoBingo;
