import BallInput from './BallInput';
import RoundCounter from './RoundCounter';
import RandomBingoButtom from './RandomBingoButtom';
import { StyledButton } from './styled/Global';
import * as S from './styled/Navbar';
import { FC, memo } from 'react';
import { useRoundContext } from '../context/roundContext';

interface Props {
  toggleModal: () => void;
  handleBallChange: (val: string, round: number) => void;
}

const Navbar: FC<Props> = ({ toggleModal, handleBallChange }) => {
  const { round } = useRoundContext();

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
        <RandomBingoButtom />
      </S.NavbarBtnContainer>
    </S.Navbar>
  );
};

export default memo(Navbar);
