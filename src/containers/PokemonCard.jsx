/* eslint-disable spaced-comment */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
import '../styles/PokemonCard.scss';
import HorizontalLine from '../components/HorizontalLine';
import PokemonItem from '../components/PokemonItem';
import { MyContext } from '../components/MyProvider';

function PokemonCard() {
  const {
    pokemonSelected,
    pokemonInfo,
    requestPokemonInformation,
    urlForCard,
  } = useContext(MyContext);
  const navigate = useNavigate();

  const goto = (url) => {
    navigate(url);
  };

  useEffect(() => {
    requestPokemonInformation(pokemonSelected);
  }, []);

  const tipos = pokemonInfo.types?.map(({ type }) => type.name) || [];

  return (
    <div className="PokemonCard">
      <div className="pokemoncard__circlebackground" />
      <div className="titlePokemonCard">
        <span
          onClick={() => goto('/home')}
          className="material-symbols-outlined"
        >
          arrow_back_ios
        </span>
        <h1>{pokemonInfo.name}</h1>
      </div>

      <HorizontalLine />
      <div className="pokemonInfo">
        <div className="pokemonDataContainer">
          <p>#{pokemonInfo.id}</p>
          <div className="pokemonData-1">
            <p>TIPO:</p>
            <p>{tipos.join(', ').toUpperCase()}</p>
          </div>
          <div className="pokemonData-2">
            <p>PESO:</p>
            <p>{pokemonInfo.weight}Kg</p>
          </div>
        </div>
        <div className="imgContainer">
          <picture>
            <img src={urlForCard} alt="poke" />
          </picture>
        </div>

        <p>{pokemonInfo.title}</p>
        <p>{pokemonInfo.description}</p>
        <div className="pokemoncard__evolucion">
          <p>EVOLUCIÓN</p>
          <HorizontalLine />
          <div className="pokemoncard__evolucion--itemcontainer">
            {
            pokemonInfo.evoChainObj
              ? Object.values(pokemonInfo.evoChainObj).map((element) => (
                   <PokemonItem key={element.name} value={element.name} />
              ))
              : <PokemonItem  />
              }
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;
