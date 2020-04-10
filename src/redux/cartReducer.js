const initialState = {
  cart: [],
}

const ADD_TO_CART = 'ADD_TO_CART'

export function addToCart(product) {
  return {
    type: ADD_TO_CART,
    payload: product,
  }
}

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, cart: [...state.cart, action.payload] }
    default:
      return state
  }
}
