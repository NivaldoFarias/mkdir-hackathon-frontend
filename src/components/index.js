import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { TokenProvider } from './../hooks/TokenContext.js';
import { DirectoryProvider } from './../hooks/DirectoryContext.js';
import Home from './../pages/Home';

function App() {
  return (
    <TokenProvider>
      <DirectoryProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </BrowserRouter>
      </DirectoryProvider>
    </TokenProvider>
  );
}

export default App;
