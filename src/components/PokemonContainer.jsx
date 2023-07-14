import React, { Suspense, lazy, useContext } from 'react';
import '../styles/PokemonContainer.scss';
import { MyContext } from './MyProvider';
import LoadingSqueletonCirlce from './LoadingSqueletonCircle';

const PokemonItem = lazy(() => import('./PokemonItem'));

function PokemonContainer() {
  const { pokemonsSearched, generationName } = useContext(MyContext);
  return (
    <div className="PokemonContainer">
      <h1>{generationName}</h1>
      <div className="pokemons">
        {pokemonsSearched?.map((pokemon) => (
          <Suspense key={pokemon.name} fallback={<LoadingSqueletonCirlce />}>
            <PokemonItem pokemonName={pokemon.name} pokemonId={pokemon.id} />
          </Suspense>
        ))}
      </div>
    </div>
  );
}

export default PokemonContainer;
