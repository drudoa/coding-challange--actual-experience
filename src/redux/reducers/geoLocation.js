import actionTypes from "../actions/actionTypes"

const initialState = {
  data: null,
  error: undefined,
  isFetching: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_GEOLOCATION_FAILURE:
      return {
        ...state,
        data: null,
        error: action.error,
        isFetching: false,
      }
    case actionTypes.FETCH_GEOLOCATION_REQUEST:
      return {
        ...state,
        data: null,
        error: undefined,
        postcode: action.postcode,
        isFetching: true,
      }
    case actionTypes.FETCH_GEOLOCATION_SUCCESS:
      return {
        ...state,
        data: action.data,
        isFetching: false,
      }
    default:
      return state
  }
}
