import React, { useContext, useEffect } from 'react';
import '../styles/Home.scss';
import HorizontalLine from '../components/HorizontalLine';
import LeagueItem from '../components/LeagueItem';
import PokemonContainer from '../components/PokemonContainer';
import { MyContext } from '../components/MyProvider';

function Home() {
  const { regions, generation, requestPokemon, requestRegions, pokemons, setPokemonsSearched } = useContext(MyContext);

  const filterPokemon = () => {
    const text = document.getElementById('inputSearchPokemon')
    const newPokemons = pokemons.filter((pokemon) => pokemon.name.includes(text.value));
    setPokemonsSearched(newPokemons);
    // console.log(`Estos son los pokemon filtrados`)
   // console.log( newPokemons)
  }


  useEffect(() => {
    requestRegions();
    requestPokemon(generation);
  }, []);

  return (
    <div className="Home">
      <div className="home-header">
        <p>Pokedéx</p>
        <input id='inputSearchPokemon' placeholder="Search" onChange={() => filterPokemon()} />
      </div>
      <HorizontalLine />
      <div className="home-leagues-container">
        {regions.map((region,i) => (
          <LeagueItem key={region} id={i+1} region={region} />
        ))}
      </div>
      <PokemonContainer />
    </div>
  );
}

export default Home;
