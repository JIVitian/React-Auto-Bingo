import { useEffect, useState } from 'react';
import { createEmptyGrid, createEmptyRow } from '../utils/grid-utils';
import { quickSort } from '../utils/utils';
import BallInput from './BallInput';

const NewBingoModal = ({ handleSubmit, bingo }) => {
  const [numbers, setNumbers] = useState(createEmptyRow(10, ''));
  const [bingoId, setbingoId] = useState('');

  const saveColumnNumber = (value, index) => {
    const newNumbers = [...numbers];
    newNumbers[index] = value;
    setNumbers(newNumbers);
  };

  const submitForm = e => {
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
  };

  useEffect(() => {
    setNumbers(bingo.numbers || createEmptyRow(10, ''));
    setbingoId(bingo.bingoId || '');
  }, [bingo]);

  return (
    <form onSubmit={submitForm}>
      <h3>Nuevo Bingo</h3>
      <div>
        <h4 htmlFor="bingoId">N°</h4>
        <BallInput
          value={bingoId}
          setValue={setbingoId}
          min={1}
          max={Number.MAX_SAFE_INTEGER}
          saveOnEnter={false}
          name="bingoId"
        />
      </div>
      <div>
        {numbers.map((v, i) => (
          <BallInput
            key={i}
            value={v}
            setValue={value => saveColumnNumber(value, i)}
            min={1}
            max={90}
            saveOnEnter={false}
            name={`number-${i}`}
          />
        ))}
      </div>
      <button>Crear</button>
    </form>
  );
};

export default NewBingoModal;
