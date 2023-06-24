/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-no-constructed-context-values */

import axios from 'axios';
import React, { useState } from 'react';
import pokemonIMG from '../../assets/images/R.png';
const MyContext = React.createContext();

const baseURL = 'https://pokeapi.co/api/v2';

function MyProvider({ children }) {
  const [regions, setRegion] = useState([]);
  const [generation, setGeneration] = useState(1);
  const [generationName, setGenerationName] = useState("KANTO");
  const [pokemons, setPokemons] = useState([]);
  const [pokemonSelected, setPokemonSelected] = useState(1);
  const [pokemonInfo, setPokemonInfo] = useState({})
  const [urlForCard, setUrlForCard] = useState('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg');

  const postGenerationName = (generationValue) => {
    const leagues = [
      {
        name: 'kanto',
        id: 1,
      },
      {
        name: 'johto',
        id: 2,
      },

      {
        name: 'hoenn',
        id: 3,
      },
      {
        name: 'sinnoh',
        id: 4,
      },
      {
        name: 'unova',
        id: 5,
      },
      {
        name: 'kalos',
        id: 6,
      },
      {
        name: 'alola',
        id: 7,
      },
      {
        name: 'galar',
        id: 8,
      },
      {
        name: 'paldea',
        id: 9,
      },
    ];

    const leagueDataName = leagues.filter(
      (league) => league.id === generationValue
    );
    setGenerationName(  leagueDataName[0].name.toUpperCase()); 
  };

  const regionsCount = 9;

  const requestRegions = () => {
    const generationNames = []
    for(let i = 1; i<= regionsCount; i+=1){

      axios.get(`${baseURL}/generation/${i}`).then((response) => {
        const data = response.data.main_region.name;
        generationNames.push(data);
        setRegion(generationNames)
      })
    }
  };

  const requestPokemon = (generationValue) => {
    //pokemon-species/152
    axios.get(`${baseURL}/generation/${generationValue}`).then((response) => {
      const data = response.data.pokemon_species;
      console.log(`La liga actual es ${generation}`);
      console.log(data);
      setPokemons(data);
      setGeneration(generationValue);
      postGenerationName(generationValue)
    });
  };

  const requestPokemonInformation = (pokemonId) => {
    axios.get(`${baseURL}/pokemon/${pokemonId}`).then((response) => {
      const { name, weight, types } = response.data;
      const pokemonData = {
        id: pokemonId,
        name,
        weight,
        types,
        characteristic:'Titulo por defecto',
        description:'Descripción por defecto'
      }
      console.log(`Esta es la info traida para ${pokemonId}`)
      console.log(pokemonData);
      setPokemonInfo(pokemonData);
    });
  };
  const pokemonData = {
    regions,
    generation,
    generationName,
    pokemons,
    pokemonSelected,
    pokemonInfo,
    urlForCard,
    setRegion,
    setPokemons,
    setGeneration,
    requestPokemon,
    requestRegions,
    setPokemonSelected,
    requestPokemonInformation,
    setUrlForCard
  };

  return (
    <MyContext.Provider value={pokemonData}>{children}</MyContext.Provider>
  );
}

export { MyProvider, MyContext };
