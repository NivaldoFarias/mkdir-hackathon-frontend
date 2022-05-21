import { useContext, useEffect } from 'react';
import DirectoryContext from '../hooks/DirectoryContext';
import File from './File.jsx';
import Folder from './Folder.jsx';
import { Ls, Cd } from '../utils/commands.js';

function Directories() {
  const { content, path, setContent } = useContext(DirectoryContext);

  return (
    <div id='directories'>
      {content.map((item, index) =>
        item.type === 'folder' ? (
          <Folder
            name={item.name}
            content={item.content}
            key={item.name + index}
          />
        ) : (
          <File />
        ),
      )}
    </div>
  );
}

export default Directories;
