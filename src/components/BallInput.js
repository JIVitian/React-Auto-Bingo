const BallInput = ({
  value,
  setValue,
  min = 1,
  max = 90,
  saveOnEnter = true,
  name
}) => {
  const isNumber = value => /\d/.test(value);

  const handleKeyDown = event => {
    const key = event.key;
    const newValue = event.target.value;

    if (key === 'Backspace') return;

    if (key === 'Enter' && saveOnEnter) {
      setValue(newValue);
      
      // Reset the input
      event.target.value = '';
    }

    if (
      !isNumber(key) ||
      newValue + key < min ||
      newValue + key > max
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
      value={value}
      min={min}
      max={max}
      onKeyDown={handleKeyDown}
      onChange={handleChange}
      name={name}
    />
  );
};

export default BallInput;
