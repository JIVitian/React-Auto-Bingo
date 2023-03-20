import styled from 'styled-components';
import styles from '../../constants/global-styles';

const BingoTable = styled.table`
  border-collapse: collapse;
  border: 1px solid #a8a8a8;
  margin: 0 auto;
  width: 100%;
  caption-side: top;
  caption {
    font-size: 1.2rem;
    padding: 0.2rem 0;
    background-color: ${styles.backgroundColor};
    color: ${styles.textColor};
  }
  thead {
    tr {
      th {
        background: #f5f5f5;
        border: 1px solid #a8a8a8;
        text-align: center;
      }
    }
  }
  tbody {
    tr {
      td {
        border: 1px solid #a8a8a8;
        text-align: center;
      }
    }
  }
`;

export default BingoTable;
