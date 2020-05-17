import types from "../actions/actionTypes"

const initialState = {
  data: [],
  isFetching: false,
  error: undefined,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_DATASET_FAILURE:
      return {
        ...state,
        error: action.error,
        isFetching: false,
      }
    case types.FETCH_DATASET_REQUEST:
      return {
        ...state,
        isLoading: action.payload,
        isFetching: true,
      }
    case types.FETCH_DATASET_SUCCESS:
      return {
        ...state,
        data: action.data,
        isFetching: false,
      }
    default:
      return state
  }
}
