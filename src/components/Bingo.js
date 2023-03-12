import BingoHeader from './styled/Bingo/BingoHeader';
import BingoTable from './styled/Bingo/BingoTable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';

const Bingo = ({ bingoId, numbers, grid, onDelete, onEdit }) => {
  return (
    <article>
      <BingoHeader>
        <button onClick={() => onEdit({ bingoId, numbers, grid })}>
          <FontAwesomeIcon icon={faPen} />
        </button>
        <button onClick={() => onDelete(bingoId)}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </BingoHeader>
      <BingoTable id={bingoId}>
        <caption>N° {bingoId}</caption>
        <thead>
          <tr>
            {numbers.map((number, index) => (
              <th key={`${bingoId}-${index}`}>
                {number.toString().padStart(2, '0')}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {grid.map((row, rowId) => (
            <tr key={rowId}>
              {row.map((cell, cellId) => (
                <td key={cellId}>{cell ? 'X' : '\u00A0'}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </BingoTable>
    </article>
  );
};

export default Bingo;
