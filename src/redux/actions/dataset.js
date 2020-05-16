/*
  Refrences: 
  - https://redux.js.org/advanced/async-actions
*/

import types from "./actionTypes"
import encodeUrlParams from "../../util/encodeUrlParams"

export const datasetFetchRequest = (params) => {
  return {
    type: types.FETCH_DATASET_REQUEST,
    params,
  }
}

export const datasetFetchFailure = (error) => {
  return {
    type: types.FETCH_DATASET_FAILURE,
    error,
  }
}

export const datasetFetchSuccess = (json) => {
  return {
    type: types.FETCH_DATASET_SUCCESS,
    data: json,
  }
}

export const fetchDataset = (params) => {
  return (dispatch) => {
    dispatch(datasetFetchRequest(params))

    const endpoint = "https://data.police.uk/api/crimes-street/all-crime"
    const uri = endpoint + "?" + encodeUrlParams(params)

    return fetch(uri)
      .then(
        (res) => res.json(),
        // Do not use catch, because that will also catch
        // any errors in the dispatch and resulting render,
        // causing a loop of 'Unexpected batch number' errors.
        // https://github.com/facebook/react/issues/6895
        (error) => dispatch(datasetFetchFailure(error))
      )
      .then((json) => dispatch(datasetFetchSuccess(json)))
  }
}
