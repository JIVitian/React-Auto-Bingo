import styled from 'styled-components';
import { Button } from '../Button';
import styles from '../constants/global-styles';

export const StyledButton = styled(Button)`
  background-color: ${props =>
    props.backgroundColor || styles.primaryColor};
  color: ${props => props.color || styles.textColor};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:first-child {
    margin-right: 0.5rem;
  }

  &:hover {
    background-color: ${props =>
      props.backgroundColorDark || styles.primaryColorDark};
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
`;
