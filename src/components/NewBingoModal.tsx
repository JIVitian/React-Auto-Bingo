import {
  useEffect,
  useState,
  MouseEvent,
  FormEvent,
  FC,
  useCallback,
} from 'react';
import { Bingo, BingoNumber } from '../types/Bingo';
import { createEmptyGrid, createEmptyRow } from '../utils/grid-utils';
import BallInput from './BallInput';

interface Props {
  handleSubmit: (bingo: Bingo) => void;
  bingo: Bingo;
  onCloseCallback: () => void;
}

const NewBingoModal: FC<Props> = ({ handleSubmit, bingo, onCloseCallback }) => {
  const [numbers, setNumbers] = useState(createEmptyRow<BingoNumber>(10, ''));
  const [bingoId, setBingoId] = useState(0);

  const saveColumnNumber = useCallback((value: BingoNumber, index: number) => {
    setNumbers(list => (list as any).with(index, +value));
  }, []);

  const saveBingoId = useCallback((v: number) => setBingoId(v), []);

  const createBingo = (e: FormEvent<HTMLFormElement>) => {
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
      bingoId,
      numbers: numbers.map(Number).sort((a, b) => a - b),
      grid: bingo.grid || createEmptyGrid(),
    });

    onCloseCallback();
  };

  const handleClose = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onCloseCallback();
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
          callback={saveBingoId}
          initialValue={bingoId || ''}
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
