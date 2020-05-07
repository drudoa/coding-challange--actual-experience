import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { datasetFetchAsync } from "../redux/actions"

export default (props) => {
  const dataset = useSelector((state) => state.dataset)
  const isLoading = useSelector((state) => state.datasetIsLoading)
  const hasError = useSelector((state) => state.datasetHasError)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(datasetFetchAsync())
  }, [])

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
