import { userRequest } from "../requestMethods";
import { loginStart, loginSuccess, loginFailure } from "./user/fetchUserApi";
export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await userRequest.post("/auth/login", user);
        dispatch(loginSuccess(res.data));
    }
    catch (err) {
        dispatch(loginFailure())
    }
}