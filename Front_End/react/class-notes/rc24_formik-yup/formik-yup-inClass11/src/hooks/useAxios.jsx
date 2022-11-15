import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const BASE_URL = "https://clarusway.pythonanywhere.com/";

export const axiosPublic = axios.create({
  baseURL: BASE_URL,
});

const axiosWithToken = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});

const useAxios = () => {
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    axiosWithToken.interceptors.request.use((config) => {
      if (!config.headers["Authorization"]) {
        config.headers["Authorization"] = `Token ${token}`;
      }
      return config;
    });
  }, [token]);

  return axiosWithToken;
};
export default useAxios;
