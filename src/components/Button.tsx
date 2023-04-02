import { FC, ReactNode, MouseEvent } from 'react';

interface Props {
  className?: string;
  color?: string;
  backgroundColor?: string;
  backgroundColorDark?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
}

export const Button: FC<Props> = ({ className, children, onClick }) => (
  <button
    className={className}
    onClick={onClick}
  >
    {children}
  </button>
);
