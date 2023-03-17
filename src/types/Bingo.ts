export type BingoNumber = number | string;

export type Row = boolean[];

export type Grid = Row[];

export type Bingo = {
    bingoId: number;
    numbers: BingoNumber[];
    grid: Grid;
};
