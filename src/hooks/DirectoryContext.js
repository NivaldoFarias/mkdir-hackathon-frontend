import { createContext, useState } from 'react';

const DirectoryContext = createContext();

export function DirectoryProvider({ children }) {
  const [content, setContent] = useState([
    {
      type: 'folder',
      name: 'Public',
      content: [],
    },
    {
      type: 'folder',
      name: 'Documents',
      content: [],
    },
    {
      type: 'folder',
      name: 'Downloads',
      content: [],
    },
    {
      type: 'folder',
      name: 'Pictures',
      content: [],
    },
    {
      type: 'folder',
      name: 'Videos',
      content: [],
    },
  ]);

  return (
    <DirectoryContext.Provider value={{ content, setContent }}>
      {children}
    </DirectoryContext.Provider>
  );
}

export default DirectoryContext;
