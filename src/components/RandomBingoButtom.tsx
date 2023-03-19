import { Bingo } from '../types/Bingo';
import { createEmptyGrid } from '../utils/grid-utils';

interface Props {
  handleNewBingo: (bingo: Bingo) => void;
}

const RandomBingoButton: React.FC<Props> = ({ handleNewBingo }) => {
  const newRandomBingo = () => {
    const randomId = Math.round(Math.random() * 9999 + 1);
    const defaultGrid = createEmptyGrid();
    const existentNumbers = {} as { [key: number]: boolean };

    // Create 10 distincts random numbers
    for (let i = 0; i < 10; i++) {
      let rand = Math.round(Math.random() * 89 + 1);

      if (!existentNumbers[rand]) existentNumbers[rand] = true;
      else i--;
    }

    handleNewBingo({
      bingoId: randomId,
      numbers: Object.keys(existentNumbers).map(Number).sort((a,b) => a - b),
      grid: defaultGrid,
    });
  };

  return <button onClick={newRandomBingo}>Aleatorio</button>;
};

export default RandomBingoButton;
