import { useContext, useState } from 'react';
import DirectoryContext from '../hooks/DirectoryContext';

function Directories() {
  const { content, setContent } = useContext(DirectoryContext);
  console.log(content);

  return '';
}

export default Directories;
