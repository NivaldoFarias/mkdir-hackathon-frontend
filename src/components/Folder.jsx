/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import { FcFolder, FcOpenedFolder } from 'react-icons/fc';
import File from './File.jsx';

export default function Folder({ name, content }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className='folder_container'>
      <div className='directory_item' onClick={toggleOpen}>
        {isOpen ? <FcOpenedFolder /> : <FcFolder />}
        <h2>{name}</h2>
      </div>

      {/* Filhos da pasta atual -> Recursividade no display de Folders filhas */}
      <div className='folder_content'>
        {isOpen &&
          content.map((item, index) =>
            item.type === 'folder' ? (
              <Folder name={item.name} content={item.content} key={index} />
            ) : (
              <File name={item.name} key={index} />
            ),
          )}
      </div>
    </div>
  );
}
