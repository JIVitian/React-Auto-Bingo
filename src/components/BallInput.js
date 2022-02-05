const BallInput = ({ setBall }) => {
  const isNumber = (value) => /\d/.test(value);

  const handleChange = (event) => {
    const key = event.key;
    const value = event.target.value;

    if (key === "Enter") {
      if (value >= 1 && value <= 90) {
        setBall(value);
        // Reset the input
        event.target.value = "";
      }
    }

    if (
      !isNumber(key) ||
      value.length > 1 ||
      value + key < 1 ||
      value + key > 90
    ) {
      // the new digit is ignored
      event.preventDefault();
    }
  };

  return <input type="number" min="1" max="90" onKeyPress={handleChange} />;
};

export default BallInput;
