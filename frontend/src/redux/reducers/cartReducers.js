const cartItemsFromStorage = localStorage.getItem('cartItem') ? 
  JSON.parse(localStorage.getItem('cartItem')): [];
const initialState = {cartItems: cartItemsFromStorage};

export const cartReducer = (state = initialState, action ) => {
  switch(action.type) {
    case 'CART_ADD_ITEIM': 
      const item = action.payload;
      const existItem = state.cartItems.find(x => x.product === item.product);
      
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map(x => x.product === existItem.product ?
            item : x)
        }
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item]
        }
      }
    default: 
      return state;
  }
}