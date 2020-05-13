import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchDataset } from "../redux/actions/dataset"

export default () => {
  const dataset = useSelector((state) => state.dataset)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchDataset())
  }, [dispatch])

  if (dataset.isFetching) {
    return <p>loading</p>
  } else if (dataset.error) {
    return <p>error</p>
  } else if (dataset.data.length > 0) {
    return (
      <ul>
        {dataset.data.map((data, index) => (
          <li key={index}>{data.category}</li>
        ))}
      </ul>
    )
  } else {
    return <p>nothing to show</p>
  }
}
