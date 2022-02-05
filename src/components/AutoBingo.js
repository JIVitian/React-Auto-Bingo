import React, { useState } from "react";
import BallInput from "./BallInput";
import RoundCounter from "./RoundCounter";

const AutoBingo = () => {
  const [round, setRound] = useState("");
  const [ball, setBall] = useState("");

  return (
    <section>
      <BallInput setBall={setBall} />
      <RoundCounter round={round} setRound={setRound} />
    </section>
  );
};

export default AutoBingo;
