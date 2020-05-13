import React from "react"
import CrimeMap from "../../components/CrimeMap"
import testData from "../testData.json"

export default { title: "Crime Map" }

export const withData = () => (
  <CrimeMap center={[51.432898, -2.005317]} data={testData} zoom={14} />
)

export const withoutData = () => <CrimeMap />

export const withClick = () => {
  const [center, setCenter] = React.useState(undefined)
  const [zoom, setZoom] = React.useState(5)
  return (
    <CrimeMap
      center={center}
      zoom={zoom}
      onClick={(val) => setCenter([val.lat, val.lng])}
      onZoom={(val) => setZoom(val)}
    />
  )
}
