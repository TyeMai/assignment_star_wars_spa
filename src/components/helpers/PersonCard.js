import React from 'react';

const FilmCard = (props) => {
  const {title, director, episode_id, release_date} = props

  return (
    <div>
      <p>title: {title} </p>
      <p>director: {director}</p>
      <p>episode: {episode_id}</p>
      <p>release_date: {release_date}</p>
    </div>
  )
}

export default FilmCard
