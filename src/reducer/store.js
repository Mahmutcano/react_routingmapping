export const initialState = {
  friendsLocation: [],
  addFriends: [],
}

export const actionTypes = {
  SET_LOCATION: 'SET_LOCATION',
  SET_ADD_FRIEND: 'SET_ADD_FRIEND',
}

// REDUCER ACTİONS
function reducer(state, action) {
  switch (action.type) {
    case actionTypes.SET_LOCATION:
      return {
        ...state,
        friendsLocation: action.value,
      }
    case actionTypes.SET_ADD_FRIEND:
      return {
        ...state,
        addFriends: [...state.addFriends, action.value],
      }
    default:
      break
  }
}

export default reducer
