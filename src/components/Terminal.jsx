import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import TokenContext from './../hooks/TokenContext';
import CommandLine from './CommandLine';
import CommandButton from './CommandButton';

function Terminal() {
  const [commandOptions, setCommandOptions] = useState([
    'mkdir',
    'ls',
    'cd',
    'clear',
    'pwd',
    'cat',
    'echo',
    'exit',
  ]);
  const [commandLines, setCommandLines] = useState(['user']);

  const { token } = useContext(TokenContext);
  const navigate = useNavigate();

  function buildTerminal() {
    return (
      <>
        <div className='split-bar'></div>

        <div className='command-shell'>
          {commandLines.map((commandLine, index) => {
            return (
              <CommandLine
                key={index}
                updateShell={updateShell}
                commandLine={commandLine}
              />
            );
          })}
        </div>
        <div className='buttons-container'>
          {commandOptions.map((commandOption, index) => {
            return <CommandButton key={index} commandOption={commandOption} />;
          })}
        </div>
      </>
    );

    function updateShell(type) {
      if (type === 'clear') {
        setCommandLines(['clear']);
      } else {
        setCommandLines((prevState) => [...prevState, type]);
      }
    }
  }

  const terminal = buildTerminal();

  return <div id='terminal'>{terminal}</div>;
}
export default Terminal;
