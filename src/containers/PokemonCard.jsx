/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useNavigate } from 'react-router';
import '../styles/PokemonCard.scss';
import HorizontalLine from '../components/HorizontalLine';
import pokemonIMG from '../../assets/images/R.png';
import PokemonItem from '../components/PokemonItem';

function PokemonCard() {
  const navigate = useNavigate();

  const goto = (url) => {
    navigate(url);
  };

  return (
    <div className="PokemonCard">
      <div className='pokemoncard__circlebackground'/>
      <div className="titlePokemonCard">
        <span
          onClick={() => goto('/singup')}
          className="material-symbols-outlined"
        >
          arrow_back_ios
        </span>
        <h1>squirtle</h1>
      </div>

      <HorizontalLine />
      <div className="pokemonInfo">
        <div className="pokemonDataContainer">
          <p>#0007</p>
          <div className="pokemonData-1">
            <p>TIPO:</p>
            <p>Agua</p>
          </div>
          <div className="pokemonData-2">
            <p>PESO:</p>
            <p>69Kg</p>
          </div>
        </div>
        <div className="imgContainer">
          <picture>
            <img src={pokemonIMG} alt="" />
          </picture>
        </div>

        <p>POKÉMON TORTUGUITA</p>
        <p>
          El caparazon de squietle no le siurve de proteccion unicamente, su
          forma redondeada y las hendiduras q tiene le ayudan a dewslizarse en
          el agua y le permiten nadar a gran velocidad
        </p>
        <div className='pokemoncard__evolucion'>
          <p>EVOLUCIÓN</p>
          <HorizontalLine />
          <div className="pokemoncard__evolucion--itemcontainer">
            <PokemonItem />
            <PokemonItem />
            <PokemonItem />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;
