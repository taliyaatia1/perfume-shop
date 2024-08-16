import {
    USER_LOGIN_REQ,
    USER_LOGIN_REQ_SUCCESS,
    USER_LOGIN_REQ_FAIL,
    USER_LOGOUT,
    USER_REGISTER_REQ,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL
} from "../Constants/User";

// USER LOGIN
export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGIN_REQ:
            return { loading: true };
        case USER_LOGIN_REQ_SUCCESS:
            return { loading: false, userInfo: action.payload };
        case USER_LOGIN_REQ_FAIL:
            return { loading: false, error: action.payload };
        case USER_LOGOUT:
            return {};
        default:
            return state;
    }
};

// USER REGISTER
export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_REGISTER_REQ:
            return { loading: true };
        case USER_REGISTER_SUCCESS:
            return { loading: false, userInfo: action.payload };
        case USER_REGISTER_FAIL:
            return { loading: false, error: action.payload };
        case USER_LOGOUT:
            return {};
        default:
            return state;
    }
};
