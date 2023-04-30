import { Bingo, BingoNumber } from '../../../types/Bingo';
import { Action } from './action';
import { BingoActionTypes } from './bingo-actions-types';

interface BingoUpdatePayload {
  bingoToUpdate: Bingo;
  newBingo: Bingo;
}

interface BingoPlayPayload {
  newBall: BingoNumber;
  currentRound: number;
}

type AddAction = Action<BingoActionTypes.Add, Bingo>;
type UpdateAction = Action<BingoActionTypes.Update, BingoUpdatePayload>;
type DeleteAction = Action<BingoActionTypes.Delete, Bingo>;
type LoadAction = Action<BingoActionTypes.Load, Bingo[]>;
type PlayAction = Action<BingoActionTypes.Play, BingoPlayPayload>;

export type BingoAction =
  | AddAction
  | UpdateAction
  | DeleteAction
  | LoadAction
  | PlayAction;
