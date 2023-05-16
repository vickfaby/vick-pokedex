import React from 'react';
import '../styles/GeneralContainer.css';
import TituloPokedex from '../components/TituloPokedex';
import MarcaVickFaby from '../components/MarcaVickFaby';

function GeneralContainer() {
  return (
    <div className="GeneralContainer">
      <TituloPokedex/>
      <MarcaVickFaby/>
    </div>
  );
}

export default GeneralContainer;
