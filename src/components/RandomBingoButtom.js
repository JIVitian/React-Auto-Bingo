import { quickSort } from '../utils/utils';

const RandomBingoButton = ({ bingosList, setBingosList }) => {
  const newRandomBingo = () => {
    const randomId = Math.round(Math.random() * 9999 + 1);
    let randomNumbers = [];
    const defaultGrid = Array(10).fill(Array(10).fill(0));

    // Create 10 distincts random numbers
    for (let i = 0; i < 10; i++) {
      let rand = Math.round(Math.random() * 89 + 1);

      if (!randomNumbers.some(number => number === rand)) {
        randomNumbers.push(rand);
      } else i--;
    }

    randomNumbers = quickSort(randomNumbers);

    setBingosList([
      ...bingosList,
      {
        bingoId: randomId,
        numbers: randomNumbers,
        grid: defaultGrid,
      },
    ]);
  };

  return <button onClick={newRandomBingo}>Aleatorio</button>;
};

export default RandomBingoButton;
