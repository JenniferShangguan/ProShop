import axios from 'axios';

export const addToCart = (id, qty) => {
  console.log("dispatching")
  return (dispatch, getState) => {
    axios.get(`/api/products/${id}`)
      .then(res => {
        console.log("result from cart", res.data)
        dispatch({
        type: 'CART_ADD_ITEM',
        payload: {
          product: res.data._id,
          name: res.data.name,
          image: res.data.image,
          price: res.data.price,
          countInStock: res.data.countInStock,
          qty
        }
      })})

      localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
  }

}