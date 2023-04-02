import styled from 'styled-components';

export const ModalBackGround = styled.section`
  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
  display: grid;
  place-content: center;
`;

export const ModalContent = styled.article`
background-color: #fefefe;
  padding: 20px;
  border: 1px solid #888;
  max-width: 700px;
`;

export const CloseModalButton = styled.span`
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;

  &:hover,
  &:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;

export const ModalFooter = styled.footer`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
`;

export const BingoNumberContainer = styled.div`
  display: grid;
`;
