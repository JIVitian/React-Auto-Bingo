import { Dispatch, SetStateAction } from 'react';
import { Bingo } from './Bingo';

export interface RoundContextType {
  round: number;
  setRound: Dispatch<SetStateAction<number>>;
}

export interface BingoListContextType {
  bingoList: Bingo[];
  setBingoList: Dispatch<SetStateAction<Bingo[]>>;
}
