import { createEmptyGrid } from '../utils/grid-utils';
import { quickSort } from '../utils/utils';

const RandomBingoButton = ({ handleNewBingo }) => {
  const newRandomBingo = () => {
    const randomId = Math.round(Math.random() * 9999 + 1);
    const defaultGrid = createEmptyGrid();
    const existentNumbers = {};

    // Create 10 distincts random numbers
    for (let i = 0; i < 10; i++) {
      let rand = Math.round(Math.random() * 89 + 1);

      if (!existentNumbers[rand]) existentNumbers[rand] = true;
      else i--;
    }

    handleNewBingo({
      bingoId: randomId,
      numbers: quickSort(Object.keys(existentNumbers).map(Number)),
      grid: defaultGrid,
    });
  };

  return <button onClick={newRandomBingo}>Aleatorio</button>;
};

export default RandomBingoButton;
