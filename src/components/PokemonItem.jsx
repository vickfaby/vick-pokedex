/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useNavigate } from 'react-router';
import '../styles/PokemonItem.scss';
import image from '../../assets/images/R.png';

function PokemonItem() {
  const navigate = useNavigate();

  const goto = (path) => {
    navigate(path);
  };

  return (
    <div className="PokemonItem" onClick={() => goto('/pokemoncard')}>
      <div className="PokemonItem-image">
        <picture>
          <img src={image} alt="pokemon" />
        </picture>
      </div>
      <p>Pokemon</p>
    </div>
  );
}

export default PokemonItem;
