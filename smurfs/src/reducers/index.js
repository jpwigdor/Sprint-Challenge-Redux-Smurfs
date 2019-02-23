/*
  Be sure to import in all of the action types from `../actions`
*/

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

import { ADD_SMURF, GET_SMURFS, ERROR, LOADING } from "../actions"

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null,
  loading: false
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export default function rootReducer (state = initialState, action)  {
  switch (action.type) {
    case ADD_SMURF:
      return {
        ...state,
        smurfs: [...state, action.payload],
        error: ""
      }
    case GET_SMURFS:
      return {
        ...state,
        smurfs: action.payload,
        error: ""
      }
    case ERROR:
      return {
        ...state,
        error: action.payload
      }
    case LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state;
  }
}