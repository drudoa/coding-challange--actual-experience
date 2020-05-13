/*
  refrences: 
  - https://blog.logrocket.com/how-to-use-react-leaflet/
  - https://leafletjs.com/
  - https://react-leaflet.js.org/
*/

import React, { useState, useRef } from "react"
import PropTypes from "prop-types"
import { Map, Marker, Popup, Circle, TileLayer } from "react-leaflet"

const CrimeMap = ({ center, data, onClick }) => {
  const ref = useRef()
  const [zoom, setZoom] = useState(data ? 14 : 4.5)
  const [activeMarker, setActiveMarker] = useState(null)

  const handleClick = (e) => {
    // pass geo location to onClick callback when map is clicked
    const map = ref.current.leafletElement
    const coords = map.mouseEventToLatLng(e.originalEvent)
    onClick?.(coords)
  }

  return (
    <Map
      center={center}
      zoom={zoom}
      style={{ width: "600px", height: "600px" }}
      ref={ref}
      onClick={handleClick}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* catchment area of data aprox 1 mile from center */}
      <Circle center={center} radius={1610} />
      <Circle color={"red"} center={center} radius={10} />

      {data &&
        data.length > 0 &&
        data.map((crime) => (
          <Marker
            key={crime.id}
            position={[crime.location.latitude, crime.location.longitude]}
            onclick={() => setActiveMarker(crime)}
          />
        ))}

      {activeMarker && (
        <Popup
          position={[
            activeMarker.location.latitude,
            activeMarker.location.longitude,
          ]}
          offset={[0, -36]}
          onClose={() => setActiveMarker(null)}
        >
          <div>
            <h2>{activeMarker.category}</h2>
            <p>{activeMarker.location.street.name}</p>
          </div>
        </Popup>
      )}
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
