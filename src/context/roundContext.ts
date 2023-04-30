import { createContext, useContext } from 'react';
import { RoundContextType } from '../types/ContextTypes';

export const RoundContext = createContext({} as RoundContextType);

export const useRoundContext = () => {
  const context = useContext(RoundContext);
  if (context === undefined) {
    throw new Error('useRoundContext must be used within a RoundProvider');
  }
  return context;
};
