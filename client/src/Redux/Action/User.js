import axios from "axios";
import { BASE_URL } from "../Constants/BASE_URL";

import {
  USER_LOGIN_REQ,
  USER_LOGIN_REQ_FAIL,
  USER_LOGIN_REQ_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_REQ,
  USER_REGISTER_FAIL,
  USER_REGISTER_SUCCESS
} from "../Constants/User";

// user login action
export const userLoginAction = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQ });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(`${BASE_URL}/api/users/login`, { email, password }, config); // Corrected password spelling
    dispatch({ type: USER_LOGIN_REQ_SUCCESS, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_REQ_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

// user logout action
export const userLogoutAction = () => async (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: USER_LOGOUT });
  document.location.href = "/login"; // Corrected document spelling
};

// register
export const userRegisterAction = (name, email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_REGISTER_REQ });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(`${BASE_URL}/api/users`, { name, email, password }, config); // Corrected dispatch spelling
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    dispatch({ type: USER_LOGIN_REQ_SUCCESS, payload: data });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};
