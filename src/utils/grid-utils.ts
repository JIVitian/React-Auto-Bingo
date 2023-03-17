import { Row } from '../types/Bingo';

export const createEmptyRow = <T>(columns = 10, value: T) =>
  Array.from({ length: columns }, () => value);

export const createEmptyGrid = (rows = 10, columns = 10) =>
  Array.from({ length: rows }, () => createEmptyRow<boolean>(columns, false)) as Row[];
