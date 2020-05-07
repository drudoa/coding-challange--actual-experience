import { combineReducers } from "redux"
import * as dataset from "./dataset"

export default combineReducers({
  ...dataset,
})
