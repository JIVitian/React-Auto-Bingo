const BallInput = ({ setBall }) => {
  const isNumber = value => /\d/.test(value);

  const handleKeyDown = event => {
    const key = event.key;
    const value = event.target.value;

    if (key === 'Enter' && value >= 1 && value <= 90) {
      // Reset the input
      event.target.value = '';
      setBall(value);
    }

    if (
      !isNumber(key) ||
      value.length > 1 ||
      value + key < 1 ||
      value + key > 90
    ) {
      // The new digit is ignored
      event.preventDefault();
    }
  };

  return (
    <input
      type="number"
      min="1"
      max="90"
      onKeyDown={handleKeyDown}
    />
  );
};

export default BallInput;