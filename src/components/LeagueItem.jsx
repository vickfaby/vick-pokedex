/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext } from 'react';
import '../styles/LeagueItem.scss';
import { MyContext } from './MyProvider';

function LeagueItem({ region, id }) {

  const { requestPokemon, regions, setLeagueSelected } = useContext(MyContext);

  const checkLeagueItem = () => {
    for (let i = 1; i <= regions.length; i += 1) {
      document.getElementById(`leagueItem-${i}`).style.background = '#1D2B35';
    }

    const leagueItem = document.getElementById(`leagueItem-${id}`);
    leagueItem.style.background = '#126979';

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
      style={(id === 1 )? {background:'#126979'} : {background: '#12222c'} }
    >
      <p>{region}</p>
    </div>
  );
}

export default LeagueItem;
