/*
  Refrences: 
  - https://redux.js.org/advanced/async-actions
*/
import types from "./actionTypes"

export const geoLocationRequest = (postcode) => {
  return {
    type: types.FETCH_GEOLOCATION_REQUEST,
    postcode,
  }
}

export const geoLocationFailure = (error) => {
  return {
    type: types.FETCH_GEOLOCATION_FAILURE,
    error,
  }
}

export const goLocationSuccess = (json) => {
  return {
    type: types.FETCH_GEOLOCATION_SUCCESS,
    data: json.result,
  }
}

export const fetchGeoLocation = (postcode) => {
  return (dispatch) => {
    dispatch(geoLocationRequest(postcode))

    return fetch(`https://api.postcodes.io/postcodes/${encodeURI(postcode)}`)
      .then(
        (res) => res.json(),
        // Do not use catch, because that will also catch
        // any errors in the dispatch and resulting render,
        // causing a loop of 'Unexpected batch number' errors.
        // https://github.com/facebook/react/issues/6895
        (error) => dispatch(geoLocationFailure(error))
      )
      .then((json) => dispatch(goLocationSuccess(json)))
  }
}
