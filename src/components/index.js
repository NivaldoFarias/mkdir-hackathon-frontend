import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { useLocalStorage } from './../hooks/useLocalStorage';
import TokenContext from './../hooks/TokenContext';

function App() {
  const [token, setToken] = useLocalStorage('token', null);

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<></>} />
        </Routes>
      </BrowserRouter>
    </TokenContext.Provider>
  );
}

export default App;
