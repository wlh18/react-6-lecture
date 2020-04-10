const initialState = {
  user: '',
  isLoggedIn: false,
}

const LOGIN_USER = 'LOGIN_USER'

export function loginUser(username) {
  return {
    type: LOGIN_USER,
    payload: username,
  }
}

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, user: action.payload, isLoggedIn: true }
    default:
      return state
  }
}
