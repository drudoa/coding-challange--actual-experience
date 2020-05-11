import encodeUrlParams from "../../util/encodeUrlParams"

it("should return encoded url params", () => {
  expect.assertions(1)

  const params = {
    id: 1,
    date: "11_05_2020",
    query: "some data",
  }

  const expected = "id=1&date=11_05_2020&query=some%20data"

  expect(encodeUrlParams(params)).toEqual(expected)
})
