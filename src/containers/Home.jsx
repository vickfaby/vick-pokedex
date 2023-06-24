import React, { useContext, useEffect } from 'react';
import '../styles/Home.scss';
import HorizontalLine from '../components/HorizontalLine';
import LeagueItem from '../components/LeagueItem';
import PokemonContainer from '../components/PokemonContainer';
import { MyContext } from '../components/MyProvider';

function Home() {
  const { regions, generation, requestPokemon, requestRegions } = useContext(MyContext);

  useEffect(() => {
    requestRegions();
    requestPokemon(generation);
  }, []);

  return (
    <div className="Home">
      <div className="home-header">
        <p>Pokedéx</p>
        <input placeholder="Search" />
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
