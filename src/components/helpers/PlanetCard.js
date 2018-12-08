import React from 'react';

const FilmCard = (props) => {
  const {name, diameter, climate, terrain, population, residents} = props

  return (
    <div>
      <p>name: {name}</p>
      <p>diameter: {diameter}</p>
      <p>climate: {climate}</p>
      <p>terrain: {terrain}</p>
      <p>population: {population}</p>
      <p>residents: {residents}</p>
    </div>
  )
}

export default FilmCard
