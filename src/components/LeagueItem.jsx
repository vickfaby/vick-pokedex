/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext } from 'react'
import '../styles/LeagueItem.scss'
import { MyContext } from './MyProvider'

function LeagueItem({region, id}) {
  const {  requestPokemon } = useContext(MyContext);

  return (
    <div className='LeagueItem' onClick={()=>{requestPokemon(id)}}>
        <p>{region}</p>
    </div>
  )
}

export default LeagueItem