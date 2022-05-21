import { useState } from 'react';
import { FcFolder } from 'react-icons/fc';

export default function Folder({ name, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <FcFolder />
      <h2>{name}</h2>
    </div>
  );
}