const Bingo = ({ idBingo, numbers, grid, onDelete }) => {
  return (
    <>
      <div>
        <button
          onClick={() => onDelete(idBingo)}
        >Borrar</button>
      </div>
      <table id={idBingo}>
        <caption>N° {idBingo}</caption>
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
