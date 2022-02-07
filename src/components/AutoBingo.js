import React, { useState } from "react";
import BallInput from "./BallInput";
import Bingo from "./Bingo";
import RandomBingoButton from "./RandomBingoButtom";
import RoundCounter from "./RoundCounter";

const bingosList = [];

const AutoBingo = () => {
  const [round, setRound] = useState("");
  const [ball, setBall] = useState("");
  const idBingo = 1024;
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const grid = [
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

  bingosList.push({ bingoId: idBingo, numbers, grid });

  return (
    <section>
      <BallInput setBall={setBall} />
      <RoundCounter round={round} setRound={setRound} />
      {bingosList.map(({ bingoId, numbers, grid }) => (
        <Bingo idBingo={bingoId} numbers={numbers} grid={grid} />
      ))}
      <RandomBingoButton bingosList={bingosList} />
    </section>
  );
};

export default AutoBingo;
