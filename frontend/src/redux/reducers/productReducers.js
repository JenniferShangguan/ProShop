const initState = {
  isLoading: false,
  data: [],
  error: null
};

export const productListReducer = (state = initState, action) => {
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
        error: action.error
      }
    default:
      return state;
  }
}

const initState1 = {
  isLoading: false,
  data: [],
  error: null
};

export const productDetailsReducer = (state = initState1, action) => {
  switch (action.type) {
    case 'PRODUCT_DETAILS_REQUEST':
      return {
        ...state,
        isLoading: true
      }
    case 'PRODUCT_DETAILS_SUCCESS':
      return {
        ...state,
        isLoading: false,
        data: action.data,
        error: null
      }
    case 'PRODUCT_DETAILS_FAIL':
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    default:
      return state;
  }
}
