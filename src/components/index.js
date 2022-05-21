import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { UpdateProvider } from './../hooks/UpdateContext.js';
import { CommandProvider } from './../hooks/CommandContext.js';
import { TokenProvider } from './../hooks/TokenContext.js';
import { DirectoryProvider } from './../hooks/DirectoryContext.js';
import Home from './../pages/Home';

function App() {
  return (
    <UpdateProvider>
      <CommandProvider>
        <TokenProvider>
          <DirectoryProvider>
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<Home />} />
              </Routes>
            </BrowserRouter>
          </DirectoryProvider>
        </TokenProvider>
      </CommandProvider>
    </UpdateProvider>
  );
}

export default App;
