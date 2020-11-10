const initState = {
  isLoading: false,
  data: [],
  error: null
};

export const productListReducer = (state = initState, action) => {
  console.log("1")
  console.log("action", action)
  switch (action.type) {
    case 'PRODUCT_LIST_REQUEST':
      return {
        ...state,
        isLoading: true
      }
    case 'PRODUCT_LIST_SUCCESS':
      return {
        ...state,
        isLoading: false,
        data: action.data,
        error: null
      }
    case 'PRODUCT_LIST_FAIL':
      return {
        ...state,
        isLoading: false,
        error: action.data
      }
    default:
      return state;
  }
}
