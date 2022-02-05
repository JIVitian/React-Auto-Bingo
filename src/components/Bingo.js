const Bingo = ({ idBingo, numbers, grid }) => {
  return (
    <table id={idBingo}>
      <caption>N° {idBingo}</caption>
      <thead>
        <tr>
          {numbers.map((number) => (
            <th>{number}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {grid.map((row) => (
          <tr>
            {row.map((cell) => (
              <td>{cell ? "X" : ""}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Bingo;
