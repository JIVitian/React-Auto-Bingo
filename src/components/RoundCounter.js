const RoundCounter = ({ round, setRound }) => {
  const decreaseRound = () => {
    if (round > 1) {
      setRound(round - 1);
    }
  };

  const increaseRound = () => {
    if (round < 10) {
      setRound(+round + 1);
    }
  };

  return (
    <div className="round-container">
      <button className="ronda-btn" onClick={decreaseRound}>
        -
      </button>
      <input
        type="number"
        min="1"
        max="10"
        placeholder="Ronda"
        value={round}
        readOnly
      />
      <button className="ronda-btn" onClick={increaseRound}>
        +
      </button>
    </div>
  );
};

export default RoundCounter;
