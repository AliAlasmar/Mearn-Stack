import axios from 'axios';

export const getProductRequest = () => {
  return {
    type: 'GET_PRODUCT_REQUEST'
  }
}

export const getProductSuccess = (products) => {
  return {
    type: 'GET_PRODUCT_SUCCESS',
    payload: products
  }
}

export const getProductSuccess2 = (products) => {
  return {
    type: 'GET_PRODUCT_SUCCESS2',
    payload: products
  }
}

export const getCartItems = (products) => {
  return {
    type: 'GET_PRODUCT_CART',
    payload: products
  }
}

export const getProductFailure = (error) => {
  return {
    type: 'GET_PRODUCT_FAILURE',
    payload: error
  }
}

export const getProduct = () => {
  return (dispatch) => {
    dispatch(getProductRequest());
    axios.get('http://localhost:3001/api1/product')
      .then(response => {
        const products = response.data;
        dispatch(getProductSuccess(products));
      })
      .catch(error => {
        const errorMsg = error.message;
        dispatch(getProductFailure(errorMsg));
      })
  }
}

export const getProductById = (id) => {
  return (dispatch) => {
    dispatch(getProductRequest());
    axios.get('http://localhost:3001/api1/product/' + id)
      .then(response => {
        const products = response.data;
        console.log('result from api' + products)
        dispatch(getProductSuccess2(products));
        // dispatch(getCartItems(products));
      })
      .catch(error => {
        const errorMsg = error.message;
        dispatch(getProductFailure(errorMsg));
      })
  }
}

export const addCartItems = (id) => {
  return (dispatch) => {
    dispatch(getProductRequest());
    axios.get('http://localhost:3001/api1/add_product/' + id)
      .then(response => {
        const products = response.data;
        console.log('result from api' + products)
        dispatch(getCartItems(products));
      })
      .catch(error => {
        const errorMsg = error.message;
        dispatch(getProductFailure(errorMsg));
      })
  }
}