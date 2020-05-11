/*
  Refrences:
  - https://redux.js.org/recipes/writing-tests
*/

import configureMockStore from "redux-mock-store"
import thunk from "redux-thunk"
import fetchMock from "fetch-mock"
import * as actions from "../../redux/actions/geoLocation"
import types from "../../redux/actions/actionTypes"

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

const postcode = "sn11 0ub"
const response = {
  result: {
    postcode,
    longitude: -2.005317,
    latitude: 51.432898,
  },
}

describe("GeoLocation actions", () => {
  it("sould create action FETCH_GEOLOCATION_REQUEST", () => {
    const expectedAction = {
      type: types.FETCH_GEOLOCATION_REQUEST,
      postcode,
    }

    expect(actions.geoLocationRequest(postcode)).toEqual(expectedAction)
  })

  it("sould create action FETCH_GEOLOCATION_FAILURE", () => {
    const error = new Error("an error occurred")
    const expectedAction = {
      type: types.FETCH_GEOLOCATION_FAILURE,
      error,
    }

    expect(actions.geoLocationFailure(error)).toEqual(expectedAction)
  })

  it("sould create action FETCH_GEOLOCATION_SUCCESS", () => {
    const expectedAction = {
      type: types.FETCH_GEOLOCATION_SUCCESS,
      data: response.result,
    }

    expect(actions.goLocationSuccess(response)).toEqual(expectedAction)
  })
})

describe("GeoLocation async actions", () => {
  afterEach(() => {
    fetchMock.restore()
  })

  it("successfully fetched data", () => {
    fetchMock.getOnce("https://api.postcodes.io/postcodes/" + postcode, {
      headers: { "content-type": "application/json" },
      body: JSON.stringify(response),
    })

    const expectedActions = [
      { type: types.FETCH_GEOLOCATION_REQUEST, postcode },
      {
        type: types.FETCH_GEOLOCATION_SUCCESS,
        data: response.result,
      },
    ]
    const store = mockStore({ data: [], isFetching: false, error: undefined })

    return store.dispatch(actions.fetchGeoLocation(postcode)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
