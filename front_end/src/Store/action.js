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