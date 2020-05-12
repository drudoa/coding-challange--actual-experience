import React from "react"
import { Map, Marker, Popup, TileLayer } from "react-leaflet"

export default () => {
  const ref = React.useRef()
  const [center, setCenter] = React.useState([
    55.10351605801967,
    -5.185546875000001,
  ])

  const handleClick = (e) => {
    // setCenter(e.latlng)
  }

  return (
    <Map
      center={center}
      zoom={4.5}
      style={{ width: "500px", height: "600px" }}
      onclick={handleClick}
      ref={ref}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </Map>
  )
}
