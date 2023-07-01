/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import '../styles/PokemonItem.scss';
import { MyContext } from './MyProvider';

function PokemonItem({ value }) {
  const [url, setUrl] = useState('');
  const { setPokemonSelected, setUrlForCard } = useContext(MyContext);
  const [pokemonId, setPokemonId] = useState('');
  const navigate = useNavigate();

  const goto = (path, idPokemon, urlCard) => {
    setUrlForCard(urlCard);
    setPokemonSelected(idPokemon);
    navigate(path);
  };
  const idItemImage = `pokemonItemImage${value}`;
  const idItemText = `pokemonItemText${value}`;
  const idLoadingCircle = `loadingItemImage${value}`;
  const idLoadingBar = `loadingItemText${value}`;

  const baseURL = 'https://pokeapi.co/api/v2';

  const requirePokemonInfo = (name) =>
    axios
      .get(`${baseURL}/pokemon/${name}`)
      .then((response) => {
        const idPokemon = response.data.id;
        const urlImage = response.data.sprites.other.dream_world.front_default;
        setPokemonId(idPokemon);
        setUrl(urlImage);
        return urlImage;
      })
      .catch((error) => console.log(error));

  const show = () => {
    document.getElementById(idLoadingCircle).style.display = 'none';
    document.getElementById(idLoadingBar).style.display = 'none';
    document.getElementById(idItemImage).style.display = 'block';
    document.getElementById(idItemText).style.display = 'block';
  };
  useEffect(() => {
    if (value) {
      requirePokemonInfo(value);
    }
  }, [value]);

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
        {value}
      </p>
    </div>
  );
}

export default PokemonItem;
