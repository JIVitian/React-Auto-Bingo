import BallInput from './BallInput';
import RoundCounter from './RoundCounter';
import RandomBingoButtom from './RandomBingoButtom';
import { StyledButton } from './styled/Global';
import * as S from './styled/Navbar';
import { FC, memo, useContext } from 'react';
import { Bingo } from '../types/Bingo';
import { RoundContext } from './AutoBingo';

interface Props {
  toggleModal: () => void;
  handleBallChange: (val: string, round: number) => void;
  addNewBingo: (newBingo: Bingo) => void;
}

const Navbar: FC<Props> = ({ toggleModal, handleBallChange, addNewBingo }) => {
  const { round } = useContext(RoundContext);

  return (
    <S.Navbar>
      <S.NavbarTitle>AutoBingo</S.NavbarTitle>
      <S.NavbarInputs>
        <BallInput
          callback={val => handleBallChange(val, round)}
          placeholder="Jugada"
        />
        <RoundCounter />
      </S.NavbarInputs>
      <S.NavbarBtnContainer>
        <StyledButton onClick={toggleModal}>Nuevo Bingo</StyledButton>
        <RandomBingoButtom newBingoCallback={addNewBingo} />
      </S.NavbarBtnContainer>
    </S.Navbar>
  );
};

export default memo(Navbar);
