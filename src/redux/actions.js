import actionTypes from "./actionTypes"
import encodeUrlParams from "../util/encodeUrlParams"

export const datasetIsLoading = (bool) => {
  return {
    type: actionTypes.IS_LOADING,
    datasetIsLoading: bool,
  }
}

export const datasetHasError = (bool) => {
  return {
    type: actionTypes.HAS_ERROR,
    datasetHasError: bool,
  }
}

export const datasetFetchSuccess = (dataset) => {
  return {
    type: actionTypes.FETCH_SUCCESS,
    dataset: dataset,
  }
}

export const datasetFetchAsync = (_params) => {
  return (dispatch) => {
    dispatch(datasetIsLoading(true))

    const endpoint = "https://data.police.uk/api/crimes-at-location"
    const params = {
      lat: 52.629729,
      lng: -1.131592,
      data: null,
    }
    const uri = endpoint + "?" + encodeUrlParams(params)

    fetch(uri)
      .then((res) => {
        if (!res.ok) {
          throw Error(res.statusText)
        }
        dispatch(datasetIsLoading(false))
        return res
      })
      .then((res) => res.json())
      .then((dataset) => dispatch(datasetFetchSuccess(dataset)))
      .catch(() => dispatch(datasetHasError(true)))
  }
}
