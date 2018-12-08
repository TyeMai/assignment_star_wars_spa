require ('es6-promise').polyfill; //why polyfill?
require ('isomorphic-fetch');

const express = require ('express');
const app = express()
//const util = require("util")
const baseUrl = 'https://swapi.co/api'


app.set('port', (process.env.PORT) || 5000)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}


function checkStatus(response) {
  if (!response.ok) {
    const error = new Error(response.statesText)
    error.response = response
    throw error
  }
  return response
}


function parseJSON(response) {
  return response.json() //this is from fetch api
}


let title = 'becoming'

app.get('/api/films', (req, res, next) => {
  console.log("Requesting Star Wards data...")
  const searchTerm = req.query.q
  fetch(`${baseUrl}/films`) //?${baseUrl}&q=${searchTerm}
  .then(checkStatus)
  .then(parseJSON)

  .then((json,err) => {
    //console.log(json)
      let cleanedUpData = []
      for (let film of json.results){
        cleanedUpData.push({
          title: film.title,
          director: film.director,
          episode_id: film.episode_id,
          release_date: film.release_date,
        })
      }
    res.json(cleanedUpData)
  })
  .catch((error) => {
    next(error)
  })
})

app.get('/api/people', (req, res, next) => {
  //console.log("Requesting Star Wards data...")
  const searchTerm = req.query.q
  fetch(`${baseUrl}/people`) //?${baseUrl}&q=${searchTerm}
  .then(checkStatus)
  .then(parseJSON)
  .then((json,err) => {
  //  console.log(json)
      let cleanedUpData = []
      for (let person of json.results){
        cleanedUpData.push({
          title: film.title,
          director: film.director,
          episode_id: film.episode_id,
          release_date: film.release_date,
        })
      }
    res.json(json.results)
  })
  .catch((error) => {
    next(error)
  })
})

app.get('/api/planets', (req, res, next) => {
  console.log("Requesting Star Wards data...")
  const searchTerm = req.query.q
  fetch(`${baseUrl}/planets`) //?${baseUrl}&q=${searchTerm}
  .then(checkStatus)
  .then(parseJSON)

  .then((json,err) => {
      let cleanedUpData = []
      for (let planet of json.results){
        cleanedUpData.push({
          name: planet.name,
          diameter: planet.diameter,
          climate: planet.climate,
          terrain: planet.terrain,
          population: planet.population,
          residents: planet.residents,
        })
      }
    res.json(cleanedUpData)
  })
  .catch((error) => {
    next(error)
  })
})





function errorHandler(err,req, res, next) {
  console.error(`Error" ${err.stack}`)
  res.status(err.response ? err.response.status : 500)
  res.json({error: err.message})
}

app.use(errorHandler)


app.listen(app.get('port'), () => {
  console.log(`find the server at ${app.get('port')}`)
})
