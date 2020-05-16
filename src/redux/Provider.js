import React from "react"
import PropTypes from "prop-types"
import { Provider as ReduxProvider } from "react-redux"
import configureStore from "./store"

const store = configureStore()

const Provider = (props) => (
  <ReduxProvider store={store}>{props.children}</ReduxProvider>
)

Provider.propTypes = {
  children: PropTypes.element,
}

export default Provider
