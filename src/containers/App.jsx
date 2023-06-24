import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { HashRouter, Route, Routes } from 'react-router-dom';
import SplashScreen from './SplashScreen';
// eslint-disable-next-line import/no-unresolved
import SingUp from './Singup';
import Login from './Login';
import PrivacyPolicy from './PrivacyPolicy';
import LoadingScreen from './LoadingScreen';
import Home from './Home';
import PokemonCard from './PokemonCard';
import {MyProvider} from '../components/MyProvider'

function App() {
  return (
    <MyProvider>

      <HashRouter>
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/singup/" element={<SingUp />} />
          <Route path="/login/" element={<Login />} />
          <Route path="/privacypolicy/" element={<PrivacyPolicy />} />
          <Route path="/loadingscreen/" element={<LoadingScreen />} />
          <Route path="/home/" element={<Home />} />
          <Route path="/pokemoncard/" element={<PokemonCard />} />
        </Routes>
      </HashRouter>
    </MyProvider>
  );
}

export default App;
