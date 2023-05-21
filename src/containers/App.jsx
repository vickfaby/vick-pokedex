import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { HashRouter, Route, Routes } from 'react-router-dom';
import SplashScreen from './SplashScreen';
// eslint-disable-next-line import/no-unresolved
import SingUp from './Singup';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<SplashScreen/>} />
        <Route path='/singup/' element={<SingUp/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
