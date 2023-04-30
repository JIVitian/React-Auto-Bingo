import { Bingo } from '../../types/Bingo';
import { createEmptyGrid } from '../../utils/grid-utils';

export const initalBingos: Bingo[] = [
  {
    bingoId: 1,
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    grid: createEmptyGrid(),
  },
];
