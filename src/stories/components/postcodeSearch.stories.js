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

export const loading = () => (
  <div style={{ width: 200 }}>
    <PostcodeSearch value={"sn11 0ub"} isLoading={true} />
  </div>
)
