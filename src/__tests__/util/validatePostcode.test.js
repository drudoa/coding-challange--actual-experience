import each from "jest-each"
import validatePostcode from "../../util/validatePostcode"

each([
  ["sn110ub", true],
  ["sn11oub", false],
  ["sn11 0ub", true],
  ["sn110u", false],
]).test("validates postcode of %s to be %s", (result, expected) => {
  expect(validatePostcode(result)).toBe(expected)
})
