import React, { useState, useRef } from "react"
import PropTypes from "prop-types"
import { Map, Marker, Popup, Circle, TileLayer } from "react-leaflet"

const CrimeMap = ({ center, data }) => {
  const ref = useRef()
  const [zoom, setZoom] = useState(data ? 14 : 4.5)

  const handleClick = (e) => {
    // setCenter(e.latlng)
  }

  return (
    <Map
      center={center}
      zoom={zoom}
      style={{ width: "600px", height: "600px" }}
      onclick={handleClick}
      ref={ref}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* catchment area of data aprox 1 mile from center */}
      <Circle center={center} radius={1610} />

      {data &&
        data.length > 0 &&
        data.map((crime) => (
          <Marker
            key={crime.id}
            position={[crime.location.latitude, crime.location.longitude]}
          />
        ))}
    </Map>
  )
}

CrimeMap.defaultProps = {
  center: [55.10351605801967, -5.185546875000001],
}

CrimeMap.propTypes = {
  center: PropTypes.array,
  data: PropTypes.shape({
    location: PropTypes.shape({
      latitude: PropTypes.string.isRequired,
      longitude: PropTypes.string.isRequired,
    }).isRequired,
  }),
}

export default CrimeMap
