import React from 'react';
import PersonCard from './helpers/PersonCard'

const PeopleContent = ({people}) => {
  console.log(people)
  const PeopleCards = people.map(person =>
    <PersonCard name={person.name} />)

    return(
      <div>
        {PeopleCards}
      </div>
    )
}



const People = ({people, isFetching}) => {
  console.log(people, 'im films film container')

  return(
    <div>
      {
        isFetching
        ? <h1>entersomething</h1>
        : <PeopleContent people={people} />
      }
    </div>
  )

}

export default People
