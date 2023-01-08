import SideList from 'components/Friends/SideList.js'
import Map from 'components/Map/Map.js'
import 'leaflet-control-geocoder/dist/Control.Geocoder.css'
import 'leaflet-control-geocoder/dist/Control.Geocoder.js'
import { useState } from 'react'
import "./App.scss"
function App() {
  const [open, setOpen] = useState(true)

  return (

        <div className="flex flex-col">
          <div>
            <Map />
          </div>
          <div>
            <SideList open={open} setOpen={setOpen} />
          </div>
          <span className="absolute right-0 mt-[520px] z-[1000] text-md">
            <button
              type="button"
              className="inline-flex items-center text-xl rounded-md border border-transparent bg-indigo-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={() => setOpen(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
              Arkadaş Listesini Aç
            </button>
          </span>
        </div>
  )
}

export default App
