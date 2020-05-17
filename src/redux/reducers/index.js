import { combineReducers } from "redux"
import dataset from "./dataset"
import geoLocation from "./geoLocation"

export default combineReducers({
  dataset,
  geoLocation,
})
