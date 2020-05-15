import React, { useState } from "react"
import PostcodeSearch from "../../components/PostcodeSearch"

export default { title: "Postcode Search" }

export const main = () => {
  const [value, setValue] = useState("")

  return (
    <div style={{ width: 200 }}>
      <PostcodeSearch value={value} onChange={(value) => setValue(value)} />
    </div>
  )
}
