import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const DirectoryContext = createContext();

export function DirectoryProvider({ children }) {
  const [content, setContent] = useState([]);
  const URL = 'http://localhost:5000';

  useEffect(() => {
    const template = localStorage.getItem('content');

    if (!template) {
      axios
        .get(`${URL}/template`)
        .then(({ data }) => {
          localStorage.setItem('content', JSON.stringify(data.template));
          setContent(data.template);
        })
        .catch((err) => console.log(err));
    }

    if (template) setContent(JSON.parse(template));
  }, []);

  return (
    <DirectoryContext.Provider value={{ content, setContent }}>
      {children}
    </DirectoryContext.Provider>
  );
}

export default DirectoryContext;
