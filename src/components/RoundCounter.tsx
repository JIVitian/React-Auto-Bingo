import { FC, memo } from 'react';
import RoundContainer from './styled/Bingo/RoundContainer';

interface Props {
  round: number;
  setRound: (round: number) => void;
}

const RoundCounter: FC<Props> = ({ round, setRound }) => {
  const decreaseRound = () => {
    if (round > 1) setRound(round - 1);
  };

  const increaseRound = () => {
    if (round < 10) setRound(+round + 1);
  };

  return (
    <RoundContainer>
      <button
        className="ronda-btn"
        onClick={decreaseRound}
      >
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
      <button
        className="ronda-btn"
        onClick={increaseRound}
      >
        +
      </button>
    </RoundContainer>
  );
};

export default memo(RoundCounter);
