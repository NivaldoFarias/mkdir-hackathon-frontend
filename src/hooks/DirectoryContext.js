import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const DirectoryContext = createContext();

export function DirectoryProvider({ children }) {
  const [content, setContent] = useState([]);
  const [path, setPath] = useState('');

  const URL = 'http://localhost:5000';

  useEffect(() => {
    const template = localStorage.getItem('content');

    if (!template) {
      axios
        .get(`${URL}/template`)
        .then(({ data }) => {
          data.template[0].content.push({
            type: 'folder',
            name: 'TestChildFolder',
            content: [
              {
                type: 'file',
                name: 'testChild.txt',
              },
            ],
          });
          console.log(data.template);
          localStorage.setItem('content', JSON.stringify(data.template));
          setContent(data.template);
        })
        .catch((err) => console.log(err));
    }

    if (template) setContent(JSON.parse(template));
  }, []);

  return (
    <DirectoryContext.Provider value={{ content, setContent, path, setPath }}>
      {children}
    </DirectoryContext.Provider>
  );
}

export default DirectoryContext;
