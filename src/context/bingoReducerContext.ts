import { Dispatch, createContext, useContext } from 'react';
import { Bingo } from '../types/Bingo';
import { BingoAction } from '../reducers/bingo/actions/bingo-actions';

type BingoReducerContextType = {
  bingosList: Bingo[];
  dispatch: Dispatch<BingoAction>;
};

export const BingoReducerContext = createContext({} as BingoReducerContextType);

export const useBingoReducerContext = () => {
  const context = useContext(BingoReducerContext);
  if (context === undefined) {
    throw new Error(
      'useBingoReducerContext must be used within a BingoReducerProvider'
    );
  }
  return context;
};
