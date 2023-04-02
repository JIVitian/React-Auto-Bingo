import styled from 'styled-components';
import styles from '../constants/global-styles';

export const Navbar = styled.nav`
  width: 100%;
  height: 3rem;
  background-color: ${styles.backgroundColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 1rem;
`;

export const NavbarTitle = styled.h3`
  width: calc(100% / 3);
  color: ${styles.textColor};
  font-weight: 400;
`;

export const NavbarInputs = styled.section`
  display: flex;
  flex-direction: column;
`;

export const NavbarBtnContainer = styled.section`
  width: calc(100% / 3);
  text-align: right;
`;
