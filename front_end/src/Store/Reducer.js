import React from 'react'

const initalState = {
 product:'',
  products: [],
  cartItems: [],
  loading: true,
  error: null
}

const Reducer = (state = initalState, action) => {

  switch (action.type) {
    case 'GET_PRODUCT_REQUEST':
      return {
        ...state,
        loading: true
      }
    case 'GET_PRODUCT_SUCCESS':
      return {
        ...state,
        loading: false,
        products: action.payload,
        error: ''
      }
    case 'GET_PRODUCT_SUCCESS2':
      return {
        ...state,
        loading: false,
        product: action.payload,
        error: ''
      }

      case 'GET_PRODUCT_CART':
        return {
          ...state,
          loading: false,
          cartItems: action.payload,
          error: ''
        }

    case 'GET_PRODUCT_FAILURE':
      return {
        loading: false,
        products: [],
        error: action.payload
      }
    default: return state
  }

}

export default Reducer
