import React, { useEffect } from "react"
import PostcodeSearch from "../components/PostcodeSearch"
import CrimeMap from "../components/CrimeMap"
import CrimeChart from "../components/CrimeBarChart"
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
    <div
      style={{
        // display: "flex",
        maxWidth: 960,
        margin: "0 auto",
        paddingTop: 28,
      }}
    >
      <PostcodeSearch />
      <CrimeMap
        data={data}
        center={postcode ? [postcode.latitude, postcode.longitude] : undefined}
        zoom={postcode ? 14 : undefined}
      />
      <CrimeChart data={data} identity="category" />
      {/* <div style={{ flex: 1 }}>
      </div> */}
    </div>
  )
}

export default Main
