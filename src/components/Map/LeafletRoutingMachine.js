import React, { useEffect, useState } from 'react'
import L from 'leaflet'
import { useMap } from 'react-leaflet'
import 'leaflet-routing-machine'
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css'
import { useStateValue } from 'context/StateProvider.js'

const LeafletRoutingMachine = () => {
  const map = useMap(null)
  const [state] = useStateValue()
  const { addFriends } = state

  useEffect(() => {
    // Call the latLng function with the desired start and end points
    addFriends.map((item) => {
      return latLng(39.925533, 32.866292, item.latitude, item.longitude)
    })
  }, [addFriends])

  const latLng = (startLat, startLng, endLat, endLng) => {
    L.Routing.control({
      waypoints: [L.latLng(startLat, startLng), L.latLng(endLat, endLng)],
      lineOptions: {
        styles: [
          {
            color: '#4285f4',
            weight: 4,
            opacity: 0.9,
          },
        ],
      },
      routeWhileDragging: true,
      geocoder: L.Control.Geocoder.nominatim(),
      show: true,
      addWaypoints: false,
      draggableWaypoints: false,
      fitSelectedRoutes: false,
      showAlternatives: false,
    }).addTo(map)
  }

  return null
}

export default LeafletRoutingMachine
