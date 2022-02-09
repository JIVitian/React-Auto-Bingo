import React, { useState } from "react";
import BallInput from "./BallInput";
import Bingo from "./Bingo";
import RandomBingoButton from "./RandomBingoButtom";
import RoundCounter from "./RoundCounter";

const AutoBingo = () => {
  const [round, setRound] = useState("");
  const [ball, setBall] = useState("");
  const [bingosList, setBingosList] = useState([]);

  return (
    <section>
      <BallInput setBall={setBall} />
      <RoundCounter round={round} setRound={setRound} />
      {bingosList.map(({ bingoId, numbers, grid }) => (
        <Bingo idBingo={bingoId} numbers={numbers} grid={grid} />
      ))}
      <RandomBingoButton
        bingosList={bingosList}
        setBingosList={setBingosList}
      />
    </section>
  );
};

export default AutoBingo;
