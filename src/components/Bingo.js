const Bingo = ({ bingoId, numbers, grid, onDelete, onEdit }) => {
  return (
    <>
      <div>
        <button onClick={() => onEdit({ bingoId, numbers, grid })}>
          Editar
        </button>
        <button onClick={() => onDelete(bingoId)}>Borrar</button>
      </div>
      <table id={bingoId}>
        <caption>N° {bingoId}</caption>
        <thead>
          <tr>
            {numbers.map((number, index) => (
              <th key={index}>{number}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {grid.map((row, rowId) => (
            <tr key={rowId}>
              {row.map((cell, cellId) => (
                <td key={cellId}>{cell ? 'X' : ''}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Bingo;
