import { createContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage.js';

const TokenContext = createContext();

export function TokenProvider({ children }) {
  const [token, setToken] = useLocalStorage('token', null);

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
}

export default TokenContext;
