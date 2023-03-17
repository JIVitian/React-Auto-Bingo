import React from 'react';
import { useEffect, useState } from 'react';
import { Bingo, BingoNumber } from '../types/Bingo';
import { createEmptyGrid, createEmptyRow } from '../utils/grid-utils';
import BallInput from './BallInput';

interface Props {
  handleSubmit: (bingo: Bingo) => void;
  bingo: Bingo;
  handleClose: () => void;
}

const NewBingoModal: React.FC<Props> = ({
  handleSubmit,
  bingo,
  handleClose,
}) => {
  const [numbers, setNumbers] = useState(
    createEmptyRow<number | string>(10, '')
  );
  const [bingoId, setBingoId] = useState(0);

  const saveColumnNumber = (value: BingoNumber, index: number) => {
    const newNumbers = [...numbers];
    newNumbers[index] = value;
    setNumbers(newNumbers);
  };

  const createBingo = (e: React.FormEvent<HTMLFormElement>) => {
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
      numbers: numbers.map(Number).sort((a, b) => a - b),
      bingoId,
      grid: bingo.grid || createEmptyGrid(),
    });
    handleClose();
  };

  useEffect(() => {
    setNumbers(bingo.numbers || createEmptyRow(10, ''));
    setBingoId(bingo.bingoId || 0);
  }, [bingo]);

  return (
    <form onSubmit={createBingo}>
      <h3>Nuevo Bingo</h3>
      <div>
        <h4>N°</h4>
        <BallInput
          callback={(v: number) => setBingoId(v)}
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
