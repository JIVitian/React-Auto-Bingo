import { FC, memo } from 'react';
import { Bingo } from '../types/Bingo';
import { createEmptyGrid } from '../utils/grid-utils';

interface Props {
  newBingoCallback: (bingo: Bingo) => void;
}

const RandomBingoButton: FC<Props> = ({ newBingoCallback }) => {
  const newRandomBingo = () => {
    const existentNumbers = new Set<number>();

    while (existentNumbers.size < 10)
      existentNumbers.add(Math.round(Math.random() * 89 + 1));

    newBingoCallback({
      bingoId: Math.round(Math.random() * 9999 + 1),
      numbers: Array.from(existentNumbers).sort((a, b) => a - b),
      grid: createEmptyGrid(),
    });
  };

  return <button onClick={newRandomBingo}>Aleatorio</button>;
};

export default memo(RandomBingoButton);
