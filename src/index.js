import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App'
import 'leaflet/dist/leaflet.css'
import { StateProvider } from 'context/StateProvider.js'
import reducer, { initialState } from 'reducer/store.js'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <BrowserRouter>
      <StateProvider initialState={initialState} reducer={reducer}>
        <App />
      </StateProvider>
    </BrowserRouter>
  </>
)
