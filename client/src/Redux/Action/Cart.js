import axios from "axios";
import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  CART_SAVE_SHIPPING_ADDRESS,
  CART_CLEAR_ITEMS
} from "../Constants/Cart";
import { BASE_URL } from "../Constants/BASE_URL";

export const addToCartAction = (id, qty) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/api/products/${id}`);
    dispatch({
      type: ADD_ITEM_TO_CART,
      payload: {
        product: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        qty
      }
    });

    const cartItems = getState().cartReducer.cartItems;
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  } catch (error) {
    console.error("Error adding to cart:", error);
  }
};

export const clearCartAction = () => (dispatch) => {
  dispatch({ type: 'CART_CLEAR_ITEMS' });
};

export const removeFromCartAction = (id) => (dispatch, getState) => {
  dispatch({
    type: REMOVE_ITEM_FROM_CART,
    payload: id
  });

  const cartItems = getState().cartReducer.cartItems;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const saveShippingAddressAction = (data) => (dispatch) => {
  dispatch({
    type: CART_SAVE_SHIPPING_ADDRESS,
    payload: data
  });



  localStorage.setItem("shippingAddress", JSON.stringify(data));
};
