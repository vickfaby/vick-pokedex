import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TituloPokedex from '../components/TituloPokedex';
import MarcaVickFaby from '../components/MarcaVickFaby';
import '../styles/SplashScreen.scss'

function SplashScreen() {
  const navigate = useNavigate();

  const passSplash = () => {
    navigate('/singup');
  };

  useEffect(() => {
     setTimeout(passSplash, 3000);
  },[]);

  return (
    <div className="SplashScreen">
      <TituloPokedex />
      <MarcaVickFaby />
    </div>
  );
}

export default SplashScreen;
