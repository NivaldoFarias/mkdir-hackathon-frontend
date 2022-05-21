import React, { useContext, useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';

import CommandContext from './../hooks/CommandContext';
import UpdateContext from './../hooks/UpdateContext';

function CommandLine() {
  const [output, setOutput] = useState('test');
  const { command } = useContext(CommandContext);
  const { update } = useContext(UpdateContext);

  useEffect(() => {
    if (command === '') return null;
    console.log(command);
    setOutput(command);
  }, [update]);

  function buildCommandLine() {
    console.log(command);
    return (
      <>
        <span className='console-text'>user@hackathon</span>
        <span className='user-text'>:</span>
        <span className='lesser-text'>~</span>
        <span className='user-text'>$</span>
        <span>&nbsp;</span>
        <Typewriter
          options={{
            loop: true,
            cursor: '▉',
            strings: [`${output}`],
            autoStart: true,
          }}
        />
      </>
    );

    function awaitUpdate() {
      if (update) {
        return 0;
      } else {
        return 2000;
      }
    }
  }
  const commandLine = buildCommandLine();

  return (
    <>
      <div className='command-line'>{commandLine}</div>
    </>
  );
}

export default CommandLine;
