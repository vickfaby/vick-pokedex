import React from 'react';
import '../styles/PokemonContainer.scss';
import PokemonItem from './PokemonItem';

function PokemonContainer() {
  return (
    <div className="PokemonContainer">
      <h1>Kanto</h1>
      <div className="pokemons">
        <PokemonItem/>
        <PokemonItem/>
        <PokemonItem/>
        <PokemonItem/>
        <PokemonItem/>
        <PokemonItem/>
        <PokemonItem/>
        <PokemonItem/>
        <PokemonItem/>
        <PokemonItem/>
        <PokemonItem/>
        <PokemonItem/>
        <PokemonItem/>
        <PokemonItem/>
        <PokemonItem/>
        <PokemonItem/>
        <PokemonItem/>
        <PokemonItem/>
        <PokemonItem/>
        <PokemonItem/>
        <PokemonItem/>
        <PokemonItem/>
      </div>
    </div>
  );
}

export default PokemonContainer;
