/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import '../styles/PokemonItem.scss';
import { MyContext } from './MyProvider';

function PokemonItem({ pokemonName, pokemonId }) {
  const [url, setUrl] = useState('');
  const { setPokemonSelected, setUrlForCard } =
    useContext(MyContext);
  const navigate = useNavigate();

  const goto = (path, idPokemon, urlCard) => {
    setUrlForCard(urlCard);
    setPokemonSelected(idPokemon);
    navigate(path);
  };
  const idItemImage = `pokemonItemImage${pokemonName}`;
  const idItemText = `pokemonItemText${pokemonName}`;
  const idLoadingCircle = `loadingItemImage${pokemonName}`;
  const idLoadingBar = `loadingItemText${pokemonName}`;

  const baseURL = 'https://pokeapi.co/api/v2';

  const requirePokemonInfo = (id) =>
    axios
      .get(`${baseURL}/pokemon/${id}`)
      .then((response) => {
        const urlImage1 = response.data.sprites.other.home.front_default;
        const urlImage2 = response.data.sprites.other.dream_world.front_default;
        const urlImage3 = response.data.sprites.front_default;
        if (urlImage1 !== null) {
          setUrl(urlImage1);
        } else if (urlImage2 !== null) {
          setUrl(urlImage2);
        } else {
          setUrl(urlImage3);
        }
      })
      // .catch((error) => console.log(error));

  const show = () => {
    document.getElementById(idLoadingCircle).style.display = 'none';
    document.getElementById(idLoadingBar).style.display = 'none';
    document.getElementById(idItemImage).style.display = 'block';
    document.getElementById(idItemText).style.display = 'block';
  };
  useEffect(() => {
    if (pokemonId) {
      requirePokemonInfo(pokemonId);
    }
  }, [pokemonId]);

  return (
    <div
      className="PokemonItem"
      onClick={() => goto('/pokemoncard', pokemonId, url)}
    >
      <div className="PokemonItem-image">
        <div id={idLoadingCircle} className="LoadingSqueletonCirlce" />
        <picture>

              <img
                id={idItemImage}
                style={{ display: 'none' }}
                src={url}
                alt="pokemon"
                onLoad={show}
              />

        </picture>
      </div>
      <div id={idLoadingBar} className="LoadingSqueletonBar" />
      <p id={idItemText} style={{ display: 'none' }}>
        {pokemonName}
      </p>
    </div>
  );
}

export default PokemonItem;
