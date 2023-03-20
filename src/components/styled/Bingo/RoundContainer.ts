import styled from 'styled-components';
import styles from '../../constants/global-styles';

const RoundContainer = styled.div`
  input {
    cursor: default;
    outline: none;

    &:focus, &:active{
      outline: none;
      box-shadow: none;
    }
  }

  button {
    color: ${styles.textColor};
    background-color: ${styles.secondaryColor};
    border: 1px solid ${styles.secondaryColor};
    cursor: pointer;

    &:hover {
      background-color: ${styles.secondaryColorDark};
      border: 1px solid ${styles.secondaryColorDark};
      transition: background-color 0.2s ease-in-out;
    }
  }
`;

export default RoundContainer;
