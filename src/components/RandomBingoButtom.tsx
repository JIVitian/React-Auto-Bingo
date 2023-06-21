import { memo } from 'react';
import { createEmptyGrid } from '../utils/grid-utils';
import { StyledButton } from './styled/Global';
import { useBingoReducerContext } from '../context/bingoReducerContext';
import { BingoActionTypes } from '../reducers/bingo/actions/bingo-actions-types';

const RandomBingoButton = () => {
  const { dispatch } = useBingoReducerContext();

  const newRandomBingo = () => {
    const existentNumbers = new Set<number>();

    while (existentNumbers.size < 10)
      existentNumbers.add(Math.round(Math.random() * 89 + 1));

    dispatch({
      type: BingoActionTypes.Add,
      payload: {
        bingoId: Math.round(Math.random() * 9999 + 1),
        numbers: Array.from(existentNumbers).sort((a, b) => a - b),
        grid: createEmptyGrid(),
      },
    });
  };

  return <StyledButton onClick={newRandomBingo}>Aleatorio</StyledButton>;
};

export default memo(RandomBingoButton);
