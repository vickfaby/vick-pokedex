/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext } from 'react';
import '../styles/LeagueItem.scss';
import { MyContext } from './MyProvider';

function LeagueItem({ region, id }) {
  const { requestPokemon, regions, setLeagueSelected } = useContext(MyContext);

  const checkLeagueItem = () => {
    for (let i = 1; i <= regions.length; i += 1) {
      const item = document.getElementById(`leagueItem-${i}`);
      item.style.background = 'var(--color-background-cards)';
      item.style.border = '2px solid #126979';
      item.style.boxShadow = 'none';
      item.style.animation = 'none';
    }

    const leagueItem = document.getElementById(`leagueItem-${id}`);

    // leagueItem.style.background = '#126979';
    leagueItem.style.boxShadow = '0px 0px 5px var(--color-font-blue)';
    leagueItem.style.border = '4px solid var(--color-font-blue)';
    leagueItem.style.animation =
      'leagueItem-breath 0.5s linear infinite alternate';
  };

  return (
    <div
      className="LeagueItem"
      id={`leagueItem-${id}`}
      onClick={() => {
        requestPokemon(id);
        setLeagueSelected(`leagueItem-${id}`);
        checkLeagueItem();
      }}
      style={
        id === 1
          ? {
              border: '4px solid var(--color-font-blue)',
              boxShadow: '0px 0px 5px var(--color-font-blue)',
              animation:'leagueItem-breath 0.5s linear infinite alternate'
            }
          : { background: 'var(--color-background-cards)', boxShadow: 'none', animation: 'none' }
      }
    >
      <p>{region}</p>
    </div>
  );
}

export default LeagueItem;
