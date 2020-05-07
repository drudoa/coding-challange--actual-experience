import React from "react"
import { Provider } from "react-redux"
import configureStore from "./redux/store"
import Dataset from "./components/Dataset"

const store = configureStore()

const App = () => {
  return (
    <Provider store={store}>
      <Dataset />
    </Provider>
  )
}

export default App
