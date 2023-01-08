import React, { createContext, useContext, useEffect, useReducer } from 'react'
import { initialState } from '../reducer/store.js'

export const StateContext = createContext([initialState, () => initialState])

export const StateProvider = ({ reducer, children, initialState }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    const friends = JSON.parse(sessionStorage.getItem('friends'))
  }, [])

  useEffect(() => {
    sessionStorage.setItem('friends', JSON.stringify(state))
  }, [state])

  return (
    <StateContext.Provider value={[state, dispatch]}>
      {children}
    </StateContext.Provider>
  )
}
export const useStateValue = () => useContext(StateContext)
