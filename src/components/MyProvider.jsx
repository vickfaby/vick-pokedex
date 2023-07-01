/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-no-constructed-context-values */

import axios from 'axios';
import React, { useEffect, useState } from 'react';

const MyContext = React.createContext();

const baseURL = 'https://pokeapi.co/api/v2';

function MyProvider({ children }) {
  const [regions, setRegion] = useState([]);
  const [generation, setGeneration] = useState(1);
  const [generationName, setGenerationName] = useState('KANTO');
  const [pokemons, setPokemons] = useState([]);
  const [pokemonSelected, setPokemonSelected] = useState(1);
  const [pokemonInfo, setPokemonInfo] = useState({});
  const [urlForCard, setUrlForCard] = useState(
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg'
  );
  const [orderedPokemon, setOrderedPokemon] = useState([]);

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
    setGenerationName(leagueDataName[0].name.toUpperCase());
  };

  const regionsCount = 9;

  const requestRegions = () => {
    const generationNames = [];
    for (let i = 1; i <= regionsCount; i += 1) {
      axios.get(`${baseURL}/generation/${i}`).then((response) => {
        const data = response.data.main_region.name;
        generationNames.push(data);
        setRegion(generationNames);
      });
    }
  };

  const requestEvolutionchain = async (url) => {
    const evoChain = {
      
    };
    await axios.get(url).then((response) => {
      if (response.data.chain.species.name) {
        evoChain[0] = {name: response.data.chain.species.name}
        if (response.data.chain.evolves_to[0]?.species.name) {
          evoChain[1] = {name: response.data.chain.evolves_to[0]?.species.name}
          if (response.data.chain.evolves_to[0].evolves_to[0]?.species.name) {
              evoChain[2] = {name: response.data.chain.evolves_to[0].evolves_to[0]?.species.name}
          } else {
            console.log(`No hay 3ra fase`);
          }
        } else {
          console.log(`No hay 2da fase`);
        }
      } else {
        console.log(`No hay 1ra fase`);
      }
    });

    return evoChain;
  };

  const requestDescription = async (pokemonId) => {
    const descriptionInfo = {
      title: '',
      description: '',
      evoChainUrl: ''
    };
    await axios
      .get(`${baseURL}/pokemon-species/${pokemonId}`)
      .then( async (response) => {
        const titleDescription = response.data.genera.filter(
          (entri) => entri.language.name === 'es'
        );
        const descrips = response.data.flavor_text_entries.filter(
          (entri) => entri.language.name === 'es'
        );
        const descriptionText = `${descrips[0].flavor_text} ${descrips[1].flavor_text}`;
        const evolutionChain = response.data.evolution_chain.url;
        const evoChainObj = await requestEvolutionchain(evolutionChain);
        descriptionInfo.title = titleDescription[0].genus;
        descriptionInfo.evoChainObj = evoChainObj;
        descriptionInfo.description = descriptionText;
      });
    return descriptionInfo;
  };

  const requestPokemonInformation = async (pokemonId) => {
    const { title, description, evoChainObj } = await requestDescription(pokemonId);

    axios.get(`${baseURL}/pokemon/${pokemonId}`).then((response) => {
      const { name, weight, types } = response.data;
      const pokemonData = {
        id: pokemonId,
        name,
        weight,
        types,
        title,
        description,
        evoChainObj
      };
      console.log(`Esta es la info traida para ${name}`);
      console.log(pokemonData);
      setPokemonInfo(pokemonData);
    });
  };

  const requestPokemon = (generationValue) => {
    axios.get(`${baseURL}/generation/${generationValue}`).then((response) => {
      const data = response.data.pokemon_species;
      const objPokemons = [];
      data.forEach((element) => {
        const obj = {
          name: element.name,
          id: element.url.slice(42, -1), // elimina los primero 42 caracteres y el ultimo
        };
        objPokemons.push(obj);
      });
      objPokemons.sort((a, b) => a.id - b.id);
      setPokemons(objPokemons);
      console.log(`La liga actual es ${generation}`);
      console.log(objPokemons);
      setGeneration(generationValue);
      postGenerationName(generationValue);
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
    orderedPokemon,
    setRegion,
    setPokemons,
    setGeneration,
    requestPokemon,
    requestRegions,
    setPokemonSelected,
    requestPokemonInformation,
    requestEvolutionchain,
    setUrlForCard,
    setOrderedPokemon,
  };

  return (
    <MyContext.Provider value={pokemonData}>{children}</MyContext.Provider>
  );
}

export { MyProvider, MyContext };
