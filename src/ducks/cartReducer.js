const initialState = {
  cart: [],
  total: 0,
}

const ADD_TO_CART = 'ADD_TO_CART'

export function addToCart(item) {
  return {
    type: ADD_TO_CART,
    payload: item,
  }
}

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        total: state.total + action.payload.price,
        cart: [...state.cart, action.payload],
      }

    default:
      return state
  }
}
