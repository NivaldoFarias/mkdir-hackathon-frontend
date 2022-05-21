import { createContext, useState } from 'react';

const CommandContext = createContext();

export function CommandProvider({ children }) {
  const [command, setCommand] = useState('');

  return (
    <CommandContext.Provider value={{ command, setCommand }}>
      {children}
    </CommandContext.Provider>
  );
}

export default CommandContext;
