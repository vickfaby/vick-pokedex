/* eslint-disable react/no-unknown-property */
/* eslint-disable spaced-comment */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import '../styles/PokemonCard.scss';
import HorizontalLine from '../components/HorizontalLine';
import PokemonItem from '../components/PokemonItem';
import { MyContext } from '../components/MyProvider';

function PokemonCard() {
  const {
    pokemonSelected,
    pokemonInfo,
    requestPokemonInformation,
    urlForCard,
  } = useContext(MyContext);

  const [traducedTypes, setTraducedTypes] = useState('');

  const baseURL = 'https://pokeapi.co/api/v2';
  const navigate = useNavigate();

  const goto = (url) => {
    navigate(url);
  };

  const traduceTypes = (types) => {
    const typesTraduced = [];

    types.forEach(async (type) => {
      await axios
        .get(`${baseURL}/type/${type}`)
        .then((res) => {
          const tipo = res.data.names.filter(
            (entri) => entri.language.name === 'es'
          );
          typesTraduced.push(tipo[0].name);
          const typesToSend = typesTraduced.join(', ');
          setTraducedTypes(typesToSend);
          console.log(`Se tradujo el tipo ${typesToSend}`);
        })
        .catch((errror) => console.log(errror));
    });
  };

  useEffect(() => {
    if (pokemonSelected === 0) {
      goto('/home');
    }
    console.log(`Se lee el id ${pokemonSelected} en card`);
    requestPokemonInformation(pokemonSelected);
    window.scrollTo(0, 0);
  }, [pokemonSelected]);

  const idTitleCard = `idTitleCard${pokemonSelected}`;
  const idImageCard = `idImageCard${pokemonSelected}`;
  const idDataContainer = `idDataContainer${pokemonSelected}`;
  const idInfoTitle = `idInfoTitle${pokemonSelected}`;
  const idInfoDescription = `idInfoDescription${pokemonSelected}`;
  const idLoadingCircle = `idLoadingCircle${pokemonSelected}`;

  const show = () => {
    document.getElementById(idTitleCard).style.display = 'block';
    document.getElementById(idImageCard).style.display = 'unset';
    document.getElementById(idDataContainer).style.display = 'block';
    document.getElementById(idInfoTitle).style.display = 'block';
    document.getElementById(idInfoDescription).style.display = 'block';

    document.getElementById(idLoadingCircle).style.display = 'none';
    console.log(`Se muestra imagen con id ${idImageCard}`);
  };
  useEffect(() => {
    if (pokemonSelected === 0) {
      goto('/home');
    }
    const tipos = pokemonInfo?.types || ['', ''];
    traduceTypes(tipos);
  }, [pokemonInfo]);

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
        <SwitchTransition>
          <CSSTransition
            key={pokemonInfo.name}
            addEndListener={(node, done) =>
              node.addEventListener('transitionend', done, false)
            }
            classNames="fade"
          >
            <h1 id={idTitleCard}  >{pokemonInfo.name}</h1>
          </CSSTransition>
        </SwitchTransition>
      </div>

      <HorizontalLine />
      <div className="pokemonInfo" onLoad={show}>
        <SwitchTransition>
          <CSSTransition
            key={pokemonInfo.id}
            addEndListener={(node, done) =>
              node.addEventListener('transitionend', done, false)
            }
            classNames="fade"
          >
            <div id={idDataContainer} className="pokemonDataContainer">
              <p>#{pokemonInfo.id}</p>
              <div className="pokemonData-1">
                <p>TIPO:</p>
                <p>{traducedTypes.toUpperCase()}</p>
              </div>
              <div className="pokemonData-2">
                <p>PESO:</p>
                <p>{pokemonInfo.weight}Kg</p>
              </div>
            </div>
          </CSSTransition>
        </SwitchTransition>
        <div className="imgContainer">
          <div id={idLoadingCircle} className="LoadingSqueletonCirlce" />
          <picture>
            <SwitchTransition>
              <CSSTransition
                key={urlForCard}
                addEndListener={(node, done) =>
                  node.addEventListener('transitionend', done, false)
                }
                classNames="fade"
              >
                <img
                  id={idImageCard}
                  src={urlForCard}
                  alt="poke"
                  style={{ display: 'none' }}
                  //onLoad={show}
                />
              </CSSTransition>
            </SwitchTransition>
          </picture>
        </div>
        <SwitchTransition>
          <CSSTransition
            key={pokemonInfo.description}
            addEndListener={(node, done) =>
              node.addEventListener('transitionend', done, false)
            }
            classNames="fade"
          >
            <p id={idInfoTitle}>{pokemonInfo.title}</p>
          </CSSTransition>
        </SwitchTransition>
        <SwitchTransition>
          <CSSTransition
            key={pokemonInfo.description}
            addEndListener={(node, done) =>
              node.addEventListener('transitionend', done, false)
            }
            classNames="fade"
          >
            <p id={idInfoDescription}>{pokemonInfo?.description}</p>
          </CSSTransition>
        </SwitchTransition>
        <div className="pokemoncard__evolucion">
          <p>EVOLUCIÓN</p>
          <HorizontalLine />
          <div className="pokemoncard__evolucion--itemcontainer">
            {pokemonInfo.evoChainObj ? (
              Object.values(pokemonInfo.evoChainObj).map((element) => (
                <PokemonItem
                  key={element.name}
                  pokemonName={element.name}
                  pokemonId={element.id}
                />
              ))
            ) : (
              <PokemonItem />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;
