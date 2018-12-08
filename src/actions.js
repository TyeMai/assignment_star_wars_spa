export const GET_RESOURCE_REQUEST = "GET_RESOURCE_REQUEST";
export const GET_FILMS_SUCCESS = "GET_FILMS_SUCCESS";
export const GET_RESOURCE_FAILURE = "GET_RESOURCE_FAILURE";
export const GET_PEOPLE_SUCCESS = "GET_PEOPLE_SUCCESS";
export const GET_PLANETS_SUCCESS = "GET_PLANETS_SUCCESS";
export const GET_RESOURCE_SUCCESS = "GET_RESOURCE_SUCCESS";
export const GET_SPECIES_SUCCESS = "GET_SPECIES_SUCCESS";
export const GET_STARSHIPS_SUCCESS = "GET_STARSHIPS_SUCCESS";
export const GET_VEHICLES_SUCCESS = "GET_VEHICLES_SUCCESS";


export function getResourceSuccess(data){
  return {
    type: GET_RESOURCE_SUCCESS,
    data
  }
}

export function getFilmsSuccess(data){
  return {
    type: GET_FILMS_SUCCESS,
    data
  }
}


export function getPeopleSuccess(data){
  return {
    type: GET_PEOPLE_SUCCESS,
    data
  }
}

export function getSpeciesSuccess(data){
  return {
    type: GET_SPECIES_SUCCESS,
    data
  }
}

export function getStarshipsSuccess(data){
  return {
    type: GET_STARSHIPS_SUCCESS,
    data
  }
}

export function getPlanetsSuccess(data){
  return {
    type: GET_PLANETS_SUCCESS,
    data
  }
}

export function getVehiclesSuccess(data){
  return {
    type: GET_VEHICLES_SUCCESS,
    data
  }
}

export function resourceRequest(data){
  return {
    type: GET_RESOURCE_REQUEST,
    data
  }
}

export function getResourceFailure(error){
  return {
    type: GET_RESOURCE_FAILURE,
    error
  }
}

export function getResourceRequest(resource) {
  console.log('im in the get resoruce request section')
  console.log(resource)
  return (dispatch) => {
    dispatch(resourceRequest())
    fetch(`/api/${resource}`).then(response => {
      if(!response.ok){
        throw new Error(`${response.status}${response.statusText}`)
      }
      console.log(response, 'im response from fetch client')
      return response.json()
    })
    .then((data) => {
      if(resource === "films") {
        dispatch(getFilmsSuccess(data))
      } else if (resource === 'people'){
        dispatch(getPeopleSuccess(data))
      } else if (resource === 'planets'){
        dispatch(getPlanetsSuccess(data))
      } else if (resource === 'species'){
        dispatch(getSpeciesSuccess(data))
      } else if (resource === 'starships'){
        dispatch(getStarshipsSuccess(data))
      } else if (resource === 'vehicles'){
        dispatch(getVehiclesSuccess(data))
      } else {
        dispatch(getResourceSuccess(data))
      }

    })
    .catch(error => {
      dispatch(getResourceFailure(error))
    })
  }
}
