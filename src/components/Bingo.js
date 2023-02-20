const Bingo = ({ idBingo, numbers, grid }) => {
  return (
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
  );
};

export default Bingo;
