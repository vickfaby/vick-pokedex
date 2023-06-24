/* eslint-disable spaced-comment */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext, useEffect} from 'react';
import { useNavigate } from 'react-router';
import '../styles/PokemonCard.scss';
import HorizontalLine from '../components/HorizontalLine';
import PokemonItem from '../components/PokemonItem';
import { MyContext } from '../components/MyProvider';

function PokemonCard() {
  const { pokemonSelected, pokemonInfo, requestPokemonInformation, urlForCard } =
    useContext(MyContext);
  const navigate = useNavigate();
  const tipos = [];
  console.log(`Este es el url q llega `)
  console.log(urlForCard)
  const goto = (url) => {
    navigate(url);
  };

  useEffect(() => {
    requestPokemonInformation(pokemonSelected);
  }, []);
  
  const typesDeep = JSON.parse(JSON.stringify({ ...[pokemonInfo.types][0] }));
  console.log(`typesDeep tiene ${Object.keys(typesDeep).length} posiciones `);
  console.log(typesDeep); //trae el objeto con las posiciones de tipos de pokemon

  //console.log({...types_deep[0]}.slot) //slot esta una posicion arriba de los types, en en for se entra a ahcer las copias de los objetos con el operador de propagacion (...)

  for (let i = 0; i <= Object.keys(typesDeep).length - 1; i += 1) {
    const pokemonType = { ...{ ...{ ...typesDeep[i] } }.type }.name;
    tipos.push(pokemonType);
    console.log(tipos);
  }

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
            <p>{
              tipos.join(", ").toUpperCase()
             }</p>
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

        <p>POKÉMON TORTUGUITA</p>
        <p>
          El caparazon de squietle no le siurve de proteccion unicamente, su
          forma redondeada y las hendiduras q tiene le ayudan a dewslizarse en
          el agua y le permiten nadar a gran velocidad
        </p>
        <div className="pokemoncard__evolucion">
          <p>EVOLUCIÓN</p>
          <HorizontalLine />
          <div className="pokemoncard__evolucion--itemcontainer">
            <PokemonItem />
            <PokemonItem />
            <PokemonItem />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;
