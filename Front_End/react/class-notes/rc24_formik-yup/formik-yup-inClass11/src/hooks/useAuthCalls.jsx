import { useDispatch } from "react-redux";
import { axiosPublic } from "./useAxios";
import {
  fetchStart,
  loginSuccess,
  logoutSuccess,
  registerSuccess,
  fetchFail,
} from "../features/authSlice";

const useAuthCalls = () => {
  const dispatch = useDispatch();

  const login = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic.post("account/auth/login/", userInfo);
      console.log(data);
      dispatch(loginSuccess(data));
    } catch (err) {
      dispatch(fetchFail());
    }
  };

  const logout = async () => {
    dispatch(fetchStart());
    try {
      await axiosPublic.post("account/auth/logout/");
      dispatch(logoutSuccess());
    } catch (err) {
      dispatch(fetchFail());
    }
  };

  const register = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic.post("account/register/", userInfo);
      console.log(data);
      dispatch(registerSuccess(data));
    } catch (err) {
      dispatch(fetchFail());
    }
  };

  return {
    login,
    logout,
    register,
  };
};

export default useAuthCalls;
