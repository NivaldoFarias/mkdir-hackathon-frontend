import { useContext, useState } from 'react';
import Folder from './Folder.jsx';
import DirectoryContext from '../hooks/DirectoryContext';

function Directories() {
  const { content, setContent } = useContext(DirectoryContext);

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
          'sda'
        ),
      )}
    </div>
  );
}

export default Directories;
