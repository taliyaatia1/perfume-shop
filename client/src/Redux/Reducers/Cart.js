import {
    ADD_ITEM_TO_CART,
    REMOVE_ITEM_FROM_CART,
    CART_SAVE_SHIPPING_ADDRESS
  } from "../Constants/Cart";
  
  const initialState = {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    shippingAddress: localStorage.getItem("shippingAddress")
      ? JSON.parse(localStorage.getItem("shippingAddress"))
      : {}
  };
  
  export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_ITEM_TO_CART:
        const item = action.payload;
        const existItem = state.cartItems.find((x) => x.product === item.product);
  
        if (existItem) {
          return {
            ...state,
            cartItems: state.cartItems.map((x) =>
              x.product === existItem.product ? item : x
            )
          };
        } else {
          return {
            ...state,
            cartItems: [...state.cartItems, item]
          };
        }
      case REMOVE_ITEM_FROM_CART:
        return {
          ...state,
          cartItems: state.cartItems.filter((x) => x.product !== action.payload)
        };
      case CART_SAVE_SHIPPING_ADDRESS:
        return {
          ...state,
          shippingAddress: action.payload
        };
        case 'CART_CLEAR_ITEMS':
            return {
                cartItems: []
            };
      default:
        return state;
    }
  };
  export default cartReducer;
