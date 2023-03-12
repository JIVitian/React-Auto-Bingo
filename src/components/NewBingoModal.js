import { useEffect, useState } from 'react';
import { createEmptyGrid, createEmptyRow } from '../utils/grid-utils';
import { quickSort } from '../utils/utils';
import BallInput from './BallInput';

const NewBingoModal = ({ handleSubmit, bingo, handleClose }) => {
  const [numbers, setNumbers] = useState(createEmptyRow(10, ''));
  const [bingoId, setBingoId] = useState('');

  const saveColumnNumber = (value, index) => {
    const newNumbers = [...numbers];
    newNumbers[index] = value;
    setNumbers(newNumbers);
  };

  const createBingo = e => {
    e.preventDefault();
    if (!bingoId || numbers.some(x => !x)) {
      alert('Complete todos los campos');
      return;
    }

    if (new Set(numbers).size !== numbers.length) {
      alert('Los números deben ser distintos');
      return;
    }

    handleSubmit({
      numbers: quickSort(numbers.map(Number)),
      bingoId,
      grid: bingo.grid || createEmptyGrid(),
    });
    handleClose();
  };

  useEffect(() => {
    setNumbers(bingo.numbers || createEmptyRow(10, ''));
    setBingoId(bingo.bingoId || '');
  }, [bingo]);

  return (
      <form onSubmit={createBingo}>
        <h3>Nuevo Bingo</h3>
        <div>
          <h4 htmlFor="bingoId">N°</h4>
          <BallInput
            initialValue={bingoId}
            callback={setBingoId}
            max={Number.MAX_SAFE_INTEGER}
            saveOnEnter={false}
            name="bingoId"
          />
        </div>
        <div>
          {numbers.map((v, i) => (
            <BallInput
              key={i}
              initialValue={v}
              callback={value => saveColumnNumber(value, i)}
              saveOnEnter={false}
              name={`number-${i}`}
            />
          ))}
        </div>
        <button>Crear</button>
        <button onClick={handleClose}>Cancelar</button>
      </form>
  );
};

export default NewBingoModal;
