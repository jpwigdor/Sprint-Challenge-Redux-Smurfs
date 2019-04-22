import axios from "axios";

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const GET_SMURFS_FTCHING = "GET_SMURFS_SUCCESS";
export const GET_SMURFS_SUCCESS = "GET_SMURFS_SUCCESS";
export const GET_SMURFS_FAILURE = "GET_SMURFS_FAILURE";

export const ADD_SMURFS_FTCHING = "ADD_SMURFS_SUCCESS";
export const ADD_SMURFS_SUCCESS = "ADD_SMURFS_SUCCESS";
export const ADD_SMURFS_FAILURE = "ADD_SMURFS_FAILURE";

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

//GET
export const getSmurf = () => dispatch => {
  dispatch({ type: GET_SMURFS_FTCHING });
  axios
    .get("http://localhost:3333/smurfs")
    .then(response => {
      console.log("got it");
      dispatch({ type: GET_SMURFS_SUCCESS, payload: response.data });
    })
    .catch(error => dispatch({ type: GET_SMURFS_FAILURE, payload: error }));
};
//POST
export const addSmurf = smurf => dispatch => {
  dispatch({ type: ADD_SMURFS_FTCHING });
  axios
    .post("http://localhost:3333/smurfs", smurf)
    .then(response => {
      console.log("post it");
      dispatch({ type: ADD_SMURFS_SUCCESS, payload: response.data });
    })
    .catch(error => dispatch({ type: ADD_SMURFS_FAILURE, payload: error }));
};
