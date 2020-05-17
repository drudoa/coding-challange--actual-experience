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
    error: error,
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
      .then((res) => res.json())
      .then((json) => {
        if (json.status === 200) {
          dispatch(goLocationSuccess(json))
        } else {
          dispatch(geoLocationFailure(json.error))
        }
      })
  }
}
