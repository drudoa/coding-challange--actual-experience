import React from "react"
import Provider from "./redux/Provider"
import Main from "./views/Main"

const App = () => {
  return (
    <Provider>
      <Main />
    </Provider>
  )
}

export default App
