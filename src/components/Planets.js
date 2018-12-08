import React from 'react';
import PlanetCard from './helpers/PlanetCard'

const PlanetsContent = ({planets}) => {
  console.log(planets)
  const PlanetCards = planets.map(planet =>
    <PlanetCard name={planet.name} diameter={planet.diameter} climate={planet.climate} terrain={planet.terrain} population={planet.population} residents={planet.residents} />)

    return(
      <div>
        {PlanetCards}
      </div>
    )
}



const Planets = ({planets, isFetching}) => {
  console.log(planets, 'im planets container')

  return(
    <div>
      {
        isFetching
        ? <h1>entersomething</h1>
        : <PlanetsContent planets={planets} />
      }
    </div>
  )

}

export default Planets
