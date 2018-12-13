import React from 'react';
import FilmCard from './helpers/FilmCard'

const FilmContent = ({films}) => {
  //console.log(films)
  const FilmCards = films.map(film =>
    <FilmCard title={film.title} director={film.director} release_date={film.release_date} episode_id={film.episode_id} key={film.episode_id}/>)

    return(
      <div>
        {FilmCards}
      </div>
    )
}



const Films = ({films, isFetching}) => {
  console.log(films, 'im films film container')

  return(
    <div>
      {
        isFetching
        ? <h1>entersomething</h1>
        : <FilmContent films={films} />
      }
    </div>
  )

}

export default Films
