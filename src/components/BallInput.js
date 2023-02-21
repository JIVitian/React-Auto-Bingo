const BallInput = ({
  setValue,
  min = 1,
  max = 90,
  saveOnEnter = true,
}) => {
  const isNumber = value => /\d/.test(value);

  const handleKeyDown = event => {
    const key = event.key;
    const value = event.target.value;

    if (key === 'Backspace') return;

    if (key === 'Enter' && saveOnEnter) {
      // Reset the input
      event.target.value = '';
      setValue(value);
    }

    if (
      !isNumber(key) ||
      value.length > max.toString().length ||
      value + key < min ||
      value + key > max
    ) {
      // The new digit is ignored
      event.preventDefault();
    }
  };

  const handleChange = event => {
    if (saveOnEnter) return;

    setValue(event.target.value);
  };

  return (
    <input
      type="number"
      min={min}
      max={max}
      onKeyDown={handleKeyDown}
      onChange={event => handleChange(event)}
    />
  );
};

export default BallInput;
