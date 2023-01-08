import { useEffect } from 'react'
import L from 'leaflet'
import { useMap } from 'react-leaflet'
import 'leaflet-routing-machine'
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css'
import { useStateValue } from 'context/StateProvider.js'

function isEmpty(obj) {
  return Object.keys(obj).length === 0
}

const LeafletRoutingMachine = () => {
  const map = useMap()
  const [state] = useStateValue()
  const { friendsLocation } = state
  const arrayFriendLocation = Array(friendsLocation)

  useEffect(() => {
    if (!isEmpty(friendsLocation)) {
      // Call the latLng function with the desired start and end points
      arrayFriendLocation.map((item) => {
        return latLng(39.925533, 32.866292, item.latitude, item.longitude)
      })
    }
  }, [friendsLocation])

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
      routeWhileDragging: false,
      geocoder: L.Control.Geocoder.nominatim(),
      show: true,
      addWaypoints: false,
      draggableWaypoints: true,
      fitSelectedRoutes: true,
      showAlternatives: false,
    }).addTo(map)
  }

  return null
}

export default LeafletRoutingMachine
