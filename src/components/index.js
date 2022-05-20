import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { TokenProvider } from '../context/TokenContext.js';
import Test from '../components/Test.jsx';

function App() {
  return (
    <TokenProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Test />} />
        </Routes>
      </BrowserRouter>
    </TokenProvider>
  );
}

export default App;
