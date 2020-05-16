import React, { useEffect } from "react"
import PostcodeSearch from "../components/PostcodeSearch"
import CrimeMap from "../components/CrimeMap"
import { useSelector, useDispatch } from "react-redux"
import { fetchDataset } from "../redux/actions/dataset"

const Main = () => {
  const dispatch = useDispatch()
  const { data } = useSelector((state) => state.dataset)
  const { data: postcode } = useSelector((state) => state.geoLocation)

  useEffect(() => {
    if (postcode) {
      dispatch(
        fetchDataset({ lat: postcode.latitude, lng: postcode.longitude })
      )
    }
  }, [postcode, dispatch])

  return (
    <div style={{ display: "flex" }}>
      <CrimeMap
        data={data}
        center={postcode ? [postcode.latitude, postcode.longitude] : undefined}
        zoom={postcode ? 14 : undefined}
      />
      <PostcodeSearch />
    </div>
  )
}

export default Main
