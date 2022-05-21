import { useContext } from 'react';
import DirectoryContext from '../hooks/DirectoryContext';

export function Ls() {
  const { content, path } = useContext(DirectoryContext);

  if (!path) {
    return content.map((item) => item.name);
  } else {
    let currentDepth = content;
    const levels = path.split('/');
    levels.forEach((level) => {
      const next = currentDepth.find((item) => item.name === level);
      if (!next) return [];
      currentDepth = next.content;
    });
    console.log(currentDepth);
    return currentDepth.map((item) => item.name);
  }
}

export function Cd(target) {
  const { content, path, setPath } = useContext(DirectoryContext);

  if (!path) {
    const next = content.find((item) => item.name === target);
    if (!next) return;
    setPath(next.name);
  } else {
    let currentDepth = { name: '', content };
    const levels = path.split('/');
    levels.forEach((level) => {
      const next = currentDepth.content.find((item) => item.name === level);
      if (!next) return;
      currentDepth = { name: next.name, content: next.content };
    });

    setPath(`${path}/${currentDepth.name}`);
  }
}
