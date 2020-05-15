/*
  Refrences:
  - https://redux.js.org/recipes/writing-tests
*/

import configureMockStore from "redux-mock-store"
import thunk from "redux-thunk"
import fetchMock from "fetch-mock"
import * as actions from "../../redux/actions/dataset"
import types from "../../redux/actions/actionTypes"
import encodeUrlParams from "../../util/encodeUrlParams"

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

const params = {
  lat: 52.629729,
  lng: -1.131592,
  data: null,
}

describe("dataset actions", () => {
  it("should create action to FETCH_DATASET_REQUEST", () => {
    const expectedAction = {
      type: types.FETCH_DATASET_REQUEST,
      params,
    }

    expect(actions.datasetFetchRequest(params)).toEqual(expectedAction)
  })

  it("should create action FETCH_DATASET_FAILURE", () => {
    const error = new Error("an error occurred")

    const expectedAction = {
      type: types.FETCH_DATASET_FAILURE,
      error,
    }

    expect(actions.datasetFetchFailure(error)).toEqual(expectedAction)
  })

  it("should create action FETCH_DATASET_SUCCESS", () => {
    const data = "some data"
    const expectedAction = {
      type: types.FETCH_DATASET_SUCCESS,
      data,
    }

    expect(actions.datasetFetchSuccess(data)).toEqual(expectedAction)
  })
})

describe("dataset async actions", () => {
  afterEach(() => {
    fetchMock.restore()
  })

  it("successfully fetched dataset", () => {
    const value = { somData: "some value" }

    fetchMock.getOnce(
      "https://data.police.uk/api/all-crime?" + encodeUrlParams(params),
      {
        headers: { "content-type": "application/json" },
        body: JSON.stringify(value),
      }
    )

    const expectedActions = [
      { type: types.FETCH_DATASET_REQUEST, params },
      {
        type: types.FETCH_DATASET_SUCCESS,
        data: value,
      },
    ]
    const store = mockStore({ data: [], isFetching: false, error: undefined })

    return store.dispatch(actions.fetchDataset(params)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
