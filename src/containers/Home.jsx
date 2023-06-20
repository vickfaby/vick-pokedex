import React from 'react'
import '../styles/Home.scss'
import HorizontalLine from '../components/HorizontalLine'
import LeagueItem from '../components/LeagueItem'
import PokemonContainer from '../components/PokemonContainer'

function Home() {
  return (
    <div className='Home'>
        <div className="home-header">
        <p>Pokedéx</p>
        <input placeholder='Search'/>
        </div>

        <HorizontalLine/>
        <div className="home-leagues-container">
            <LeagueItem/>
            <LeagueItem/>
            <LeagueItem/>
            <LeagueItem/>
            <LeagueItem/>
            <LeagueItem/>
            <LeagueItem/>
            <LeagueItem/>
            <LeagueItem/>
        </div>
        <PokemonContainer/>
        
    </div>
  )
}

export default Home