import * as Actions from './actions'
import { combineReducers } from 'redux'


const initialFilmsState = {
  films: {},
  isFetching: true,
  error: null
}

const initialPlanetsState = {
  planets: {},
  isFetching: true,
  error: null
}

// const initialState = {
//   planets: null,
//   films: null,
//   isFetching: true,
//   page: 1,
//   error: null,
//   fetchedResource: null,
//   //loadedAssets: null
// }

const initialPages = {
  planetsPage: 1,
  filmsPage: 1,
}
//
//  export function getResources(state = initialState, action, resource) {
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
//         isFetching: false,
//         fetchedResource: "films"
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
//         isFetching: false,
//         fetchedResource: 'planets',
//       }
//     case Actions.GET_RESOURCE_REQUEST:
//       //console.log("im in get book reqest reducer")
//       return {
//         ...state,
//         isFetching: true,
//         error: null,
//         fetchedResource: action.data.resource
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
//
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

function pageControl(state = initialPages, action) {
  switch (action.type){
    case Actions.TURN_ONE_PAGE_BK_FILMS:
    return {
      ...state,
      filmsPage: state.filmsPage - 1 ,
    }
    case Actions.TURN_ONE_PAGE_FWD_FILMS:
    console.log("pf fwd got called")
    return {
      ...state,
      filmsPage: state.filmsPage + 1
    }
    default:
    return state
  }
}
//
// function search(state = initialSearch, action){
//   switch(action.type){
//     case :
//     return {
//
//     }
//     default:
//     return state
//   }
//
//
// }

export const starwarsStore = combineReducers ({
  getFilms,
  getPlanets,
  pageControl
})
//
// export default getResources
