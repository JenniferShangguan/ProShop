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
  console.log("dispatching to action")
  return (dispatch, getState) => {
    dispatch(productListRequest())
    axios.get('/api/products')
      .then(res => {
        console.log("3")
        dispatch(productListSuccess(res.data))})
      .catch(err => dispatch(productListFail(
        err.response && err.response.data.messages 
          ? err.response.data.messages 
          : err.message
        )))
  }
}

// export const listProducts = () => async (dispatch) => {
//   try {
//     dispatch(productListRequest)

//     const { data } = await axios.get('/api/products');
//     dispatch(productListSuccess(data))
//   } catch (error) {
//     dispatch(productListFail(
//       error.response && error.response.data.messages 
//         ? error.response.data.messages 
//         : error.message
//     ))
//   }
// }

