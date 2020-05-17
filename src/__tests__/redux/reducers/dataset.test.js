import reducer from "../../../redux/reducers/dataset"
import types from "../../../redux/actions/actionTypes"

describe("dataset reducer", () => {
  it("should return init state", () => {
    expect.assertions(1)
    expect(reducer(undefined, {})).toEqual({
      data: [],
      isFetching: false,
      error: undefined,
    })
  })
})
