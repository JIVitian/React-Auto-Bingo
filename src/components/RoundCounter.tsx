import { memo } from 'react';
import RoundContainer from './styled/Bingo/RoundContainer';
import StyledBallInput from './styled/StyledBallInput';
import { useRoundContext } from '../context/roundContext';

const RoundCounter = () => {
  const { round, setRound } = useRoundContext();

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
      <StyledBallInput
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
