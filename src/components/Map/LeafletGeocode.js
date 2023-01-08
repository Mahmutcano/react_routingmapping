import React, { useEffect } from 'react'
import L from 'leaflet'
import { useMap } from 'react-leaflet'

const LeafletGeocode = () => {
  const map = useMap()
  useEffect(() => {
    // Leaflet Control Geocoder
    L.Control.geocoder({
      defaultMarkGeocode: false,
    })
      .on('markgeocode', function (e) {
        var latlng = e.geocode.center
        // Marker and Popup Add Method
        L.marker(latlng).addTo(map).bindPopup(e.geocode.name).openPopup()
        map.fitBounds(e.geocode.bbox)
      })
      .addTo(map)
  }, [])
  return null
}

export default LeafletGeocode
