/*
  refrences: 
  - https://blog.logrocket.com/how-to-use-react-leaflet/
  - https://leafletjs.com/
  - https://react-leaflet.js.org/
*/

import React, { useState, useRef } from "react"
import PropTypes from "prop-types"
import { Map, Marker, Popup, Circle, TileLayer } from "react-leaflet"

const CrimeMap = ({
  center,
  data,
  onClick,
  zoom,
  onZoom,
  width,
  height,
  style,
}) => {
  const ref = useRef()
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
      style={{ width, height, ...style }}
      ref={ref}
      onClick={handleClick}
      onZoom={(e) => onZoom?.(e.target._zoom)}
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
  zoom: 5,
  width: "100%",
  height: 400,
}

CrimeMap.propTypes = {
  center: PropTypes.array,
  data: PropTypes.array,
  onClick: PropTypes.func,
  zoom: PropTypes.number,
  onZoom: PropTypes.func,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  style: PropTypes.object,
}

export default CrimeMap
