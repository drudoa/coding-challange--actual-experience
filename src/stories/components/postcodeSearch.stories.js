import React, { useState } from "react"
import PostcodeSearch from "../../components/PostcodeSearch"
import Provider from "../../redux/Provider"

export default {
  title: "Postcode Search",
  decorators: [
    (storyFn) => (
      <Provider>
        <div style={{ width: 200 }}>{storyFn()}</div>
      </Provider>
    ),
  ],
}

export const main = () => <PostcodeSearch />
