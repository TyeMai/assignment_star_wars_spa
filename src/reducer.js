import * as Actions from './actions'

const initialState = {
  films: {},
  people: {},
  planets: {},
  isFetching: true,
  error: null
}

export function getResources(state = initialState, action, resource) {
  //console.log(action, "im the fucntion action")
  switch (action.type) {
    case Actions.GET_RESOURCE_SUCCESS:
      return {
        ...state,
        resource: action.data,
        isFetching: false
      }
    case Actions.GET_FILMS_SUCCESS:
      return {
        ...state,
        films: action.data,
        isFetching: false
      }
    case Actions.GET_PEOPLE_SUCCESS:
      return {
        ...state,
        people: action.data,
        isFetching: false
      }
    case Actions.GET_PLANETS_SUCCESS:
      return {
        ...state,
        planets: action.data,
        isFetching: false
      }
    case Actions.GET_RESOURCE_REQUEST:
      //console.log("im in get book reqest reducer")
      return {
        ...state,
        isFetching: true,
        error: null
      }
    case Actions.GET_RESOURCE_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
    default:
      return state
  }
}
