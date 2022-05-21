import { createContext, useState } from 'react';

const UpdateContext = createContext();

export function UpdateProvider({ children }) {
  const [update, setUpdate] = useState(false);

  return (
    <UpdateContext.Provider value={{ update, setUpdate }}>
      {children}
    </UpdateContext.Provider>
  );
}

export default UpdateContext;
