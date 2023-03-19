import { ChangeEvent, KeyboardEvent, useState, FC, useEffect } from 'react';
import { BingoNumber } from '../types/Bingo';
import { MIN_COLUMN_VALUE, MAX_COLUMN_VALUE } from './constants/bingo-props';

interface Props {
  initialValue?: BingoNumber;
  callback: (value: any) => void;
  min?: number;
  max?: number;
  saveOnEnter?: boolean;
  name?: string;
}

const BallInput: FC<Props> = ({
  initialValue = '',
  callback,
  min = MIN_COLUMN_VALUE,
  max = MAX_COLUMN_VALUE,
  saveOnEnter = true,
  name,
}) => {
  const [value, setValue] = useState(initialValue);

  const isNumber = (val: string) => /\d/.test(val);

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    const key = event.key;
    const newValue = (event.target as HTMLInputElement).value;
    const concatanatedValue = newValue + key;

    if (key === 'Backspace') return;
    if (saveOnEnter && key === 'Enter') {
      callback(newValue);
      setValue('');
    }
    if (
      !isNumber(key) ||
      Number(concatanatedValue) < min ||
      Number(concatanatedValue) > max
    )
      event.preventDefault();
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!saveOnEnter) callback(event.target.value);
    setValue(event.target.value);
  };

  useEffect(() => setValue(initialValue), [initialValue]);

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
