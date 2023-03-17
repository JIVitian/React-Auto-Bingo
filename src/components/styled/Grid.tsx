import styled from 'styled-components';

const Grid = styled.section`
  width: 100%;
  padding: 1rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 1rem;
  grid-auto-rows: minmax(100px, auto);
`;

export default Grid;
