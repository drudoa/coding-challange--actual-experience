import actionTypes from "../actionTypes"

export const datasetHasError = (state = false, action) => {
  switch (action.type) {
    case actionTypes.HAS_ERROR:
      return action.datasetHasError
    default:
      return state
  }
}

export const datasetIsLoading = (state = false, action) => {
  switch (action.type) {
    case actionTypes.IS_LOADING:
      return action.datasetIsLoading
    default:
      return state
  }
}

export const dataset = (state = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_SUCCESS:
      return action.dataset
    default:
      return state
  }
}
