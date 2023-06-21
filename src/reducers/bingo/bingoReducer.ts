import { Bingo } from '../../types/Bingo';
import { BingoAction } from './actions/bingo-actions';
import { BingoActionTypes } from './actions/bingo-actions-types';

export const bingoReducer = (
  state: Bingo[],
  { type, payload }: BingoAction
) => {
  switch (type) {
    case BingoActionTypes.Add:
      return [...state, payload];
    case BingoActionTypes.Update:
      return state.map(bingo =>
        bingo.bingoId === payload.bingoToUpdate.bingoId
          ? payload.newBingo
          : bingo
      );
    case BingoActionTypes.Delete:
      return state.filter(bingo => bingo.bingoId !== payload);
    case BingoActionTypes.Load:
      // Change the list of bingos to the list of bingos from the payload
      return payload;
    case BingoActionTypes.Play:
      const { newBall, currentRound } = payload;

      if (!newBall || !currentRound) return state;

      return state
        .map(bingo => {
          const col = bingo.numbers.indexOf(+newBall);
          if (col >= 0) bingo.grid[currentRound - 1][col] = true;
          return bingo;
        })
        .sort(
          (a, b) =>
            b.grid[currentRound - 1].filter(cell => cell).length -
            a.grid[currentRound - 1].filter(cell => cell).length
        );
    default:
      return state;
  }
};
