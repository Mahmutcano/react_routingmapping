import React from 'react'
import {
  MapContainer,
  TileLayer,
} from 'react-leaflet'
import './Map.scss'
import LeafletRoutingMachine from './LeafletRoutingMachine.js'
import L from 'leaflet'
import MarkerIcon from '../../assets/images/marker.png'

const position = [39.925533, 32.866287]

const Map = () => {
  return (
    <div className="mapContainer">
      <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* <LeafletGeocode /> */}
        <LeafletRoutingMachine />
      </MapContainer>
    </div>
  )
}

// Leaflet Default Marker Icon
let DefaultIcon = L.icon({
  iconUrl: MarkerIcon,
  iconSize: [25, 35],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
})
L.Marker.prototype.options.icon = DefaultIcon
export default Map
