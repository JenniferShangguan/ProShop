import axios from 'axios';

const productListRequest = () => {
  return {
    type: 'PRODUCT_LIST_REQUEST'
  }
}

const productListSuccess = (data) => {
  return {
    type: 'PRODUCT_LIST_SUCCESS',
    data
  }
}

const productListFail = (error) => {
  return {
    type: 'PRODUCT_LIST_FAIL',
    error
  }
}


export const listProducts = () => {
  return (dispatch, getState) => {
    dispatch(productListRequest())
    axios.get('/api/products')
      .then(res => {
        dispatch(productListSuccess(res.data))})
      .catch(err => {
        console.log("error", err.response)
        dispatch(productListFail(
        err.response && err.response.data.message
          ? err.response.data.message 
          : err.response
        ))})
  }
}

const productDetailsRequest = () => {
  return {
    type: 'PRODUCT_DETAILS_REQUEST'
  }
}

const productDetailsSuccess = (data) => {
  return {
    type: 'PRODUCT_DETAILS_SUCCESS',
    data
  }
}

const productDetailsFail = (error) => {
  return {
    type: 'PRODUCT_DETAILS_FAIL',
    error
  }
}


export const listProductDetails = (id) => {
  return (dispatch, getState) => {
    dispatch(productDetailsRequest())
    axios.get(`/api/products/${id}`)
      .then(res => {
        dispatch(productDetailsSuccess(res.data))})
      .catch(err => {
        console.log("error", err.response)
        dispatch(productDetailsFail(
        err.response && err.response.data.message
          ? err.response.data.message 
          : err.response
        ))})
  }
}
