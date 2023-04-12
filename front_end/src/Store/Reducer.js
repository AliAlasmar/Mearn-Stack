import React from 'react'

const initalState = {
    products: [],
    loading: true,
    error: null
}

const Reducer = (state = initalState, action) => {
   
  switch(action.type) {
    case 'GET_PRODUCT_REQUEST':
      return {
        ...state,
        loading: true
      }
    case 'GET_PRODUCT_SUCCESS':
      return {
        loading: false,
        products: action.payload,
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
