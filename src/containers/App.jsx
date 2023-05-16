import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { HashRouter, Route, Routes } from 'react-router-dom';
import GeneralContainer from './GeneralContainer';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<GeneralContainer/>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
