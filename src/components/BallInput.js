import { useState } from 'react';
import { MIN_COLUMN_VALUE, MAX_COLUMN_VALUE } from './constants/bingo-props';

const BallInput = ({
  initialValue = '',
  callback,
  min = MIN_COLUMN_VALUE,
  max = MAX_COLUMN_VALUE,
  saveOnEnter = true,
  name,
}) => {
  const [value, setValue] = useState(initialValue);

  const isNumber = val => /\d/.test(val);

  const handleKeyDown = event => {
    const key = event.key;
    const newValue = event.target.value;

    if (key === 'Backspace') return;
    if (saveOnEnter && key === 'Enter') {
      callback(newValue);
      setValue('');
    }
    if (!isNumber(key) || newValue + key < min || newValue + key > max)
      event.preventDefault();
  };

  const handleChange = event => {
    if (!saveOnEnter) callback(event.target.value);
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
