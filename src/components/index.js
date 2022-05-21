import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { TokenProvider } from './../hooks/TokenContext.js';
import Home from './../pages/Home';

function App() {
  return (
    <TokenProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </TokenProvider>
  );
}

export default App;
