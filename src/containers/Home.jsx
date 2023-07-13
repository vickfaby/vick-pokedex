/* eslint-disable no-unused-vars */
/* eslint-disable import/no-duplicates */
/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext, useEffect,} from 'react';
import { useNavigate } from 'react-router';
import '../styles/Home.scss';
import HorizontalLine from '../components/HorizontalLine';
import LeagueItem from '../components/LeagueItem';
import PokemonContainer from '../components/PokemonContainer';
import { MyContext } from '../components/MyProvider';

function Home() {
  const {
    regions,
    generation,
    requestPokemon,
    requestRegions,
    pokemons,
    setPokemonsSearched,
  } = useContext(MyContext);


  const filterPokemon = () => {
    const text = document.getElementById('inputSearchPokemon');
    const newPokemons = pokemons.filter((pokemon) =>
      pokemon.name.includes(text.value)
    );
    setPokemonsSearched(newPokemons);
  };


  const navigate = useNavigate();

  const goto = (path) => {
    navigate(path);
  };

  useEffect(() => {
    requestRegions();
    requestPokemon(generation);
  }, []);



  const leagueItems = regions.map((region, i) => (
    <LeagueItem key={region} id={i + 1} region={region} />
  ));

  return (
    <div className="Home">
      <div className="home-header">
        <p id="titleHome" onClick={() => goto('/')}>
          Pokedéx
        </p>
        <input
          id="inputSearchPokemon"
          placeholder="Search"
          onChange={() => filterPokemon()}
        />
      </div>
      <HorizontalLine />
      <div className="home-leagues-container">{leagueItems}</div>
      <PokemonContainer />
    </div>
  );
}

export default Home;
