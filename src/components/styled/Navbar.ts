import styled from 'styled-components';
import styles from '../constants/global-styles';

const Navbar = styled.nav`
  width: 100%;
  height: 3rem;
  background-color: ${styles.backgroundColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 1rem;

  h3 {
    width: calc(100% / 3);
    color: ${styles.textColor};
    font-weight: 400;
  }

  .navbar-inputs {
    display: flex;
    flex-direction: column;
  }

  .btn-container {
    width: calc(100% / 3);
    text-align: right;

    button {
      background-color: ${styles.primaryColor};
      color: ${styles.textColor};
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      cursor: pointer;
      transition: all 0.2s ease-in-out;

      &:first-child {
        margin-right: 0.5rem;
      }

      &:hover {
        background-color: ${styles.primaryColorDark};
        transition: all 0.2s ease-in-out;
      }

      &:focus {
        outline: none;
        &:active {
          outline: none;
          &::selection {
            background: none;
          }
        }
      }
    }
  }
`;

export default Navbar;
