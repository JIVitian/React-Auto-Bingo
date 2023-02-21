import { useEffect, useState } from 'react';
import BallInput from './BallInput';
import Bingo from './Bingo';
import NewBingoModal from './NewBingoModal';
import RandomBingoButton from './RandomBingoButtom';
import RoundCounter from './RoundCounter';

const AutoBingo = () => {
  const [round, setRound] = useState(1);
  const [ball, setBall] = useState('');
  const [bingosList, setBingosList] = useState([]);

  const addNewBingo = newBingo => {
    setBingosList([...bingosList, newBingo]);
  };

  // Update the grid of every bingo when the ball value changes
  useEffect(() => {
    if (!ball) return;

    setBingosList(
      bingosList
        .map(({ bingoId, numbers, grid }) => {
          const col = numbers.indexOf(+ball);

          if (col !== -1) grid[round - 1][col] = true;

          return { bingoId, numbers, grid };
        })
        .sort(
          (a, b) =>
            b.grid[round - 1].filter(cell => cell).length -
            a.grid[round - 1].filter(cell => cell).length
        )
    );
  }, [ball]);

  return (
    <section>
      <NewBingoModal handleNewBingo={addNewBingo} />
      <BallInput
        setValue={setBall}
        min={1}
        max={90}
      />
      <RoundCounter
        round={round}
        setRound={setRound}
      />
      {bingosList.map(({ bingoId, numbers, grid }) => (
        <Bingo
          key={bingoId}
          idBingo={bingoId}
          numbers={numbers}
          grid={grid}
        />
      ))}
      <RandomBingoButton
        bingosList={bingosList}
        handleNewBingo={addNewBingo}
      />
    </section>
  );
};

export default AutoBingo;
