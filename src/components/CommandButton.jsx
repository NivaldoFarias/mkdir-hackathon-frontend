import { useState, useContext } from 'react';

import CommandContext from './../hooks/CommandContext';
import UpdateContext from './../hooks/UpdateContext';

function CommandButton({ commandOption }) {
  const [btnClick, setBtnClick] = useState(false);
  const { command, setCommand } = useContext(CommandContext);
  const { update, setUpdate } = useContext(UpdateContext);

  const btnStyles = `styled-btn${
    btnClick && commandOption === command ? ' clicked' : ''
  }`;

  return (
    <>
      <button className={btnStyles} onClick={selectCommand}>
        {commandOption}
      </button>
    </>
  );

  function selectCommand() {
    setBtnClick(!btnClick);
    setCommand(commandOption);
    setUpdate(!update);
  }
}

export default CommandButton;
