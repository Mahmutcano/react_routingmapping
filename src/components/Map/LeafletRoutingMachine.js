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
    if (!map) return
    // Undefined
    const routingControl = L.Routing.control({
      serviceUrl: 'http://my-osrm-server/route/v1',
      waypoints: [
        L.latLng(39.925533, 32.866292),
        L.latLng(addFriends.latitude, addFriends.longitude),
      ],
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
    // return routingControl.setWaypoints([
    //   L.latLng(lat, lng),
    //   L.latLng(this.props.destinationLat, this.props.destinationLng)
    // ]);
  
  }, [map, addFriends])
  return null
}

export default LeafletRoutingMachine
