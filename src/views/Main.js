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
        maxWidth: 960,
        margin: "0 auto",
        paddingTop: 28,
      }}
    >
      <PostcodeSearch style={{ minHeight: 200 }} />
      <CrimeMap
        data={data}
        center={postcode ? [postcode.latitude, postcode.longitude] : undefined}
        zoom={postcode ? 14 : undefined}
        style={{ marginBottom: 16, height: 450 }}
      />
      {data.length > 0 && (
        <>
          <h2 style={{ textAlign: "center", textDecoration: "underline" }}>
            Crimes by Category
          </h2>
          <CrimeChart data={data} identity="category" />
        </>
      )}
    </div>
  )
}

export default Main
