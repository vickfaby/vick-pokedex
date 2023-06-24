import React, { Suspense, lazy, useContext } from 'react';
import '../styles/PokemonContainer.scss';
import { MyContext } from './MyProvider';
import LoadingSqueletonCirlce from './LoadingSqueletonCircle';

//import PokemonItem from './PokemonItem';
const PokemonItem = lazy(() => import('./PokemonItem'));

function PokemonContainer() {
  const { pokemons, generationName } = useContext(MyContext);
  console.log(generationName);

  return (
    <div className="PokemonContainer">
      <h1>{generationName}</h1>
      <div className="pokemons">
        {pokemons.map((pokemon, i) => (
          <Suspense fallback={<LoadingSqueletonCirlce />}>
            <PokemonItem key={pokemon.name} value={pokemon.name} />
          </Suspense>
        ))}
      </div>
    </div>
  );
}

export default PokemonContainer;
