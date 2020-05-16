import reducer from "../../../redux/reducers/geoLocation"
// import types from "../../../redux/actions/actionTypes"

describe("geo location reducer", () => {
  it("should return init state", () => {
    expect.assertions(1)
    expect(reducer(undefined, {})).toEqual({
      data: null,
      isFetching: false,
      error: undefined,
    })
  })
})
