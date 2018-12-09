import * as Actions from './actions'
import { combineReducers } from 'redux'


const initialFilmsState = {
  films: {},
  isFetching: true,
  page: 1,
  error: null
}

const initialPlanetsState = {
  planets: {},
  isFetching: true,
  page: 1,
  error: null
}

const initialState = {
  planets: {},
  films: {},
  isFetching: true,
  page: 1,
  error: null
}

//  function getResources(state = initialState, action, resource) {
//   //console.log(action, "im the fucntion action")
//   switch (action.type) {
//     case Actions.GET_RESOURCE_SUCCESS:
//       return {
//         ...state,
//         resource: action.data,
//         isFetching: false
//       }
//     case Actions.GET_FILMS_SUCCESS:
//       return {
//         ...state,
//         films: action.data,
//         isFetching: false
//       }
//     case Actions.GET_PEOPLE_SUCCESS:
//       return {
//         ...state,
//         people: action.data,
//         isFetching: false
//       }
//     case Actions.GET_PLANETS_SUCCESS:
//       return {
//         ...state,
//         planets: action.data,
//         isFetching: false
//       }
//     case Actions.GET_RESOURCE_REQUEST:
//       //console.log("im in get book reqest reducer")
//       return {
//         ...state,
//         isFetching: true,
//         error: null
//       }
//     case Actions.GET_RESOURCE_FAILURE:
//       return {
//         ...state,
//         isFetching: false,
//         error: action.error
//       }
//     case Actions.RESET_ISFETCHING:
//     console.log('mdae it to reset in reducer')
//       return {
//         ...state,
//         isFetching: true,
//       }
//     default:
//       return state
//   }
// }

function getFilms (state = initialFilmsState, action, resource) {
 //console.log(action, "im the fucntion action")
 switch (action.type) {
   case Actions.GET_FILMS_SUCCESS:
     return {
       ...state,
       films: action.data,
       isFetching: false
     }
   // case Actions.GET_FILMS_SUCCESS:
   //   return {
   //     ...state,
   //     films: action.data,
   //     isFetching: false
   //   }
   // case Actions.GET_PEOPLE_SUCCESS:
   //   return {
   //     ...state,
   //     people: action.data,
   //     isFetching: false
   //   }
   // case Actions.GET_PLANETS_SUCCESS:
   //   return {
   //     ...state,
   //     planets: action.data,
   //     isFetching: false
   //   }
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
   // case Actions.RESET_ISFETCHING:
   // console.log('mdae it to reset in reducer')
   //   return {
   //     ...state,
   //     isFetching: true,
   //   }
   default:
     return state
 }
}

function getPlanets (state = initialPlanetsState, action, resource) {
 //console.log(action, "im the fucntion action")
 switch (action.type) {
   case Actions.GET_PLANETS_SUCCESS:
     return {
       ...state,
       planets: action.data,
       isFetching: false
     }
   // case Actions.GET_FILMS_SUCCESS:
   //   return {
   //     ...state,
   //     films: action.data,
   //     isFetching: false
   //   }
   // case Actions.GET_PEOPLE_SUCCESS:
   //   return {
   //     ...state,
   //     people: action.data,
   //     isFetching: false
   //   }
   // case Actions.GET_PLANETS_SUCCESS:
   //   return {
   //     ...state,
   //     planets: action.data,
   //     isFetching: false
   //   }
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
   // case Actions.RESET_ISFETCHING:
   // console.log('mdae it to reset in reducer')
   //   return {
   //     ...state,
   //     isFetching: true,
   //   }
   default:
     return state
 }
}


export const starwarsStore = combineReducers ({
  getFilms,
  getPlanets
})
