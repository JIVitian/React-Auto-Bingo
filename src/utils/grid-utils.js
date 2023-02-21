export const createEmptyRow = (columns = 10, value = false) => Array.from({ length: columns }, () => value);

export const createEmptyGrid = (rows = 10, columns = 10) =>
  Array.from({ length: rows }, () => createEmptyRow(columns));