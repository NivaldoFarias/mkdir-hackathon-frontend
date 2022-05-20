import { useContext } from 'react';
import TokenContext from '../context/TokenContext.js';

const Test = () => {
  const { token, setToken } = useContext(TokenContext);

  setToken('working');

  return (
    <>
      <h1>token is: {token}</h1>
    </>
  );
};

export default Test;
