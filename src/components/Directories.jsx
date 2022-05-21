import { useContext } from 'react';
import DirectoryContext from '../hooks/DirectoryContext';
import File from './File.jsx';
import Folder from './Folder.jsx';

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
          <File />
        ),
      )}
    </div>
  );
}

export default Directories;
