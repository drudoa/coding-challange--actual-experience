import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { datasetFetchAsync } from "../redux/actions"

export default () => {
  const dataset = useSelector((state) => state.dataset)

  useEffect(() => {
    dispatch(datasetFetchAsync())
  }, [dispatch])

  if (isLoading) {
    return <p>loading</p>
  } else if (hasError) {
    return <p>error</p>
  } else if (dataset.length > 0) {
    return (
      <ul>
        {dataset.map((data, index) => (
          <li key={index}>{data.category}</li>
        ))}
      </ul>
    )
  } else {
    return <p>nothing to show</p>
  }
}
