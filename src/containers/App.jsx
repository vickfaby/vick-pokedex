/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { HashRouter, Route, Routes } from 'react-router-dom';
import SplashScreen from './SplashScreen';
import Login from './Login';
import PrivacyPolicy from './PrivacyPolicy';
import LoadingScreen from './LoadingScreen';
import Home from './Home';
import PokemonCard from './PokemonCard';
import { MyProvider } from '../components/MyProvider';
import '../styles/pruebaTransition.scss';
import SingingUp from './SingingUp';

function App() {
  return (
    <MyProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/login/" element={<Login />} />
          <Route path="/singup/" element={<SingingUp/>} />
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
