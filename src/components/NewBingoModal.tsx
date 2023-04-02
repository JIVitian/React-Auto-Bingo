import {
  useEffect,
  useState,
  MouseEvent,
  FormEvent,
  FC,
  useCallback,
  memo,
} from 'react';
import { Bingo, BingoNumber } from '../types/Bingo';
import { createEmptyGrid, createEmptyRow } from '../utils/grid-utils';
import BallInput from './BallInput';
import * as S from './styled/NewBingoModal';
import { StyledButton } from './styled/Global';

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
    <S.ModalBackGround onClick={handleClose}>
      <S.ModalContent onClick={e => e.stopPropagation()}>
        <S.CloseModalButton onClick={handleClose}>&times;</S.CloseModalButton>
        <form onSubmit={createBingo}>
          <h2>{bingo.bingoId ? 'Editar' : 'Nuevo'} Bingo</h2>
          <S.BingoNumberContainer>
            <BallInput
              callback={saveBingoId}
              initialValue={bingoId || ''}
              max={Number.MAX_SAFE_INTEGER}
              saveOnEnter={false}
              placeholder="N°"
              name="bingoId"
            />
          </S.BingoNumberContainer>
          <section>
            {numbers.map((v, i) => (
              <BallInput
                key={i}
                initialValue={v}
                callback={value => saveColumnNumber(value, i)}
                saveOnEnter={false}
                name={`number-${i}`}
                tabIndex={i + 1}
              />
            ))}
          </section>
          <S.ModalFooter>
            <StyledButton>Guardar</StyledButton>
          </S.ModalFooter>
        </form>
      </S.ModalContent>
    </S.ModalBackGround>
  );
};

export default memo(NewBingoModal);
